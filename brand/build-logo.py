"""Build the site brand assets from the supplied logo artwork.

Source: brand/source/qafilat-logo.jpg (300x300, single-colour artwork on white).
The artwork is a single teal ink, so the white plate is knocked out by turning
luminance into an alpha channel, then the mark is re-tinted for each surface:

  gold  -> dark surfaces (header over the hero, footer)
  ink   -> light surfaces (paper/cream sections, documents)

Run with the bundled Python:  python3 brand/build-logo.py
"""

from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parent
SRC = ROOT / "source" / "qafilat-logo.jpg"
PUBLIC = ROOT.parent / "public" / "brand"
APP = ROOT.parent / "src" / "app"

GOLD = (216, 173, 100)   # --gold
INK = (13, 59, 69)       # logo ink / --forest family
DEEP = (8, 36, 31)       # --forest-deep
PAPER = (247, 245, 239)  # --paper

# The camel illustration ends here; below it sits the "Qafelah / alghidha" lockup.
MARK_BOTTOM = 218


def alpha_from_luminance(img: Image.Image) -> np.ndarray:
    rgb = np.asarray(img.convert("RGB"), dtype=np.float32)
    lum = rgb[..., 0] * 0.299 + rgb[..., 1] * 0.587 + rgb[..., 2] * 0.114
    ink_level = float(np.percentile(lum[lum < 128], 20))
    a = np.clip((255.0 - lum) / (255.0 - ink_level), 0.0, 1.0)
    a[a < 0.07] = 0.0                              # drop JPEG haze on the white plate
    a = np.clip((a - 0.07) / 0.93, 0.0, 1.0)
    return a ** 0.85                                # slightly firmer edges


def tint(alpha: np.ndarray, colour: tuple[int, int, int], pad: int = 2) -> Image.Image:
    h, w = alpha.shape
    rgba = np.zeros((h, w, 4), dtype=np.uint8)
    rgba[..., 0], rgba[..., 1], rgba[..., 2] = colour
    rgba[..., 3] = np.round(alpha * 255).astype(np.uint8)
    img = Image.fromarray(rgba, "RGBA")
    img = img.crop(img.getbbox())
    canvas = Image.new("RGBA", (img.width + 2 * pad, img.height + 2 * pad), (0, 0, 0, 0))
    canvas.paste(img, (pad, pad))
    return canvas


def app_icon(logo: Image.Image, size: int, pad_frac: float = 0.11, radius_frac: float = 0.22) -> Image.Image:
    base = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    ImageDraw.Draw(base).rounded_rectangle(
        [0, 0, size - 1, size - 1], radius=int(size * radius_frac), fill=DEEP + (255,)
    )
    inner = int(size * (1 - 2 * pad_frac))
    art = logo.copy()
    art.thumbnail((inner, inner), Image.LANCZOS)
    base.alpha_composite(art, ((size - art.width) // 2, (size - art.height) // 2))
    return base


def social_card(logo: Image.Image) -> Image.Image:
    w, h = 1200, 630
    card = Image.new("RGB", (w, h), DEEP)
    art = logo.copy()
    art.thumbnail((int(h * 0.74), int(h * 0.74)), Image.LANCZOS)
    card.paste(art, ((w - art.width) // 2, (h - art.height) // 2), art)
    return card


def main() -> None:
    alpha = alpha_from_luminance(Image.open(SRC))
    PUBLIC.mkdir(parents=True, exist_ok=True)

    full_gold = tint(alpha, GOLD)
    full_ink = tint(alpha, INK)
    full_gold.save(PUBLIC / "qafilat-logo-gold.png", optimize=True)
    full_ink.save(PUBLIC / "qafilat-logo-ink.png", optimize=True)

    for name, colour in (("qafilat-mark-gold.png", GOLD), ("qafilat-mark-ink.png", INK)):
        art = tint(alpha[:MARK_BOTTOM], colour)
        art.save(PUBLIC / name, optimize=True)

    app_icon(full_gold, 256).save(APP / "icon.png", optimize=True)
    app_icon(full_gold, 180, pad_frac=0.10).save(APP / "apple-icon.png", optimize=True)
    social_card(full_gold).save(APP / "opengraph-image.png", optimize=True)

    print("logo", full_gold.size, "| mark", (full_gold.width, MARK_BOTTOM))


if __name__ == "__main__":
    main()
