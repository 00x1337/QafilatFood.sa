import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';
import path from 'node:path';

const routes = ['/', '/contact', '/privacy', '/services/hajj-umrah-catering', '/services/hotel-kitchen-management', '/services/packed-meals-events'];
const titles = new Set();
for (const route of routes) {
  const file = route === '/' ? 'out/index.html' : `out${route}/index.html`;
  const html = readFileSync(file, 'utf8');
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${route}: one H1`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert(title && !titles.has(title), `${route}: unique title`); titles.add(title);
  assert(html.includes('name="description"'), `${route}: description`);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  assert(canonical && new URL(canonical).href.replace(/\/$/, '') === new URL(route, 'https://qafilat-alghidha.hkim23076.chatgpt.site').href.replace(/\/$/, ''), `${route}: canonical`);
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)) JSON.parse(json);
  for (const [, href] of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
    const target = path.join('out', href);
    assert(existsSync(target) || existsSync(`${target}.html`), `${route}: missing ${href}`);
  }
  console.log(`PASS ${route}: heading, metadata, structured data, internal links and assets`);
}
const sitemap = readFileSync('out/sitemap.xml', 'utf8');
for (const route of routes) assert(sitemap.includes(`https://qafilat-alghidha.hkim23076.chatgpt.site${route}</loc>`));
assert(readFileSync('out/robots.txt', 'utf8').includes('Sitemap:'));
console.log('PASS sitemap and robots');
