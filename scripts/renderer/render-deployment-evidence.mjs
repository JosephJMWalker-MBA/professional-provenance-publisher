import { asArray } from './helpers.mjs';
import { renderList } from './render-list.mjs';

export const renderDeploymentEvidence=(items=[])=>{
  const html=renderList(asArray(items));
  return html?`<section class="deployment-evidence"><h2>Deployment Evidence</h2>${html}</section>`:'';
};
