import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { renderDocument } from './renderer/render-document.mjs';

const fixture={
  identity:{name:'Format Test',documentLabel:'Resume'},
  executiveProfile:['Compact profile.'],
  experience:[{organization:'Example',role:'Engineer',period:'2025-Present',highlights:['Built a system.']}],
  systems:[{name:'Example System',summary:'System context.',highlights:['Python','Testing']}],
  education:[{institution:'School',credential:'Degree'}]
};

const html=renderDocument(fixture);
const printCss=await readFile(new URL('../styles/print.css',import.meta.url),'utf8');
const printLayoutCss=await readFile(new URL('../styles/print-layout.css',import.meta.url),'utf8');

assert.doesNotMatch(html,/page-one|page-two/,'resume renderer must not hard-code page buckets');
assert.equal((html.match(/class="page"/g)||[]).length,1,'resume renderer should emit one naturally paginated content container');

assert.doesNotMatch(printCss,/page-break-after\s*:\s*always/i,'resume content must not force page breaks');
assert.doesNotMatch(printCss,/height\s*:\s*11in/i,'resume content must not use fixed letter-page height');
assert.doesNotMatch(printCss,/\.page\s*\{[^}]*overflow\s*:\s*hidden/is,'resume page container must not clip overflow');

assert.doesNotMatch(printLayoutCss,/grid-template-columns\s*:\s*repeat\(2/i,'print layout must not use two-column grids');
assert.doesNotMatch(printLayoutCss,/columns\s*:\s*2/i,'print project lists must not use CSS columns');
assert.match(printCss,/@page\s*\{[^}]*margin\s*:\s*0\.(?:5|6|7|8|9)/is,'print output should preserve conventional readable margins');
assert.match(printCss,/p,\s*\nli,[\s\S]*font-size\s*:\s*10pt/i,'default body type should remain within the readable 10-12 pt range');

console.log('Resume format policy tests passed');
