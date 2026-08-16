import { renderSystems } from './render-systems.mjs';
import { renderPublications } from './render-publications.mjs';
import { renderEducation } from './render-education.mjs';
import { renderTechnicalEnvironment } from './render-technical-environment.mjs';

export const renderDetails=(resume={})=>[
  renderSystems(resume.systems),
  renderPublications(resume.publications),
  renderEducation(resume.education),
  renderTechnicalEnvironment(resume.technicalEnvironment)
].filter(Boolean).join('');
