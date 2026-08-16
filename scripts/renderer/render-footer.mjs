import { escapeHtml, hasText } from './helpers.mjs';

export const renderFooter=(value='')=>hasText(value)?`<footer class="resume-footer">${escapeHtml(value)}</footer>`:'';