import { escapeHtml, hasText } from './helpers.mjs';
import { renderList } from './render-list.mjs';

export const renderPublicationGroup=(title='',items=[])=>{const visible=Array.isArray(items)?items.filter((item)=>item?.surfaces?.resume!==false):[];const list=renderList(visible);return hasText(title)&&list?`<div class="publication-group"><h3>${escapeHtml(title)}</h3>${list}</div>`:'';};
