import { renderSystems } from './render-systems.mjs';
import { renderDeploymentEvidence } from './render-deployment-evidence.mjs';
import { renderPublications } from './render-publications.mjs';
import { renderEducation } from './render-education.mjs';
import { renderTechnicalEnvironment } from './render-technical-environment.mjs';

export const renderDetails=(resume={})=>[
  renderSystems(resume.systems),
  renderDeploymentEvidence(resume.deploymentEvidence),
  renderPublications(resume.publications),
  renderEducation(resume.education),
  renderTechnicalEnvironment(resume.technicalEnvironment)
].filter(Boolean).join('');
