import { asArray, escapeHtml, hasText } from './helpers.mjs';
import { renderList } from './render-list.mjs';

const renderExperienceItem=(item={})=>{
  if(!hasText(item.organization)||!hasText(item.role)) return '';
  const period=hasText(item.period)?`<span class="experience-period">${escapeHtml(item.period)}</span>`:'';
  const highlights=renderList(item.highlights);
  return `<article class="experience-item"><div class="experience-heading"><div><h3>${escapeHtml(item.organization)}</h3><p class="experience-role">${escapeHtml(item.role)}</p></div>${period}</div>${highlights}</article>`;
};

export const renderExperience=(items=[])=>{
  const html=asArray(items).map(renderExperienceItem).filter(Boolean).join('');
  return html?`<section class="experience"><h2>Professional Experience</h2>${html}</section>`:'';
};
