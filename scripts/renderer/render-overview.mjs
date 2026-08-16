import { renderMasthead } from './render-masthead.mjs';
import { renderExecutiveProfile } from './render-executive-profile.mjs';
import { renderExperience } from './render-experience.mjs';
import { renderCapabilities } from './render-capabilities.mjs';

export const renderOverview=(resume={})=>[
  renderMasthead(resume),
  renderExecutiveProfile(resume.executiveProfile),
  renderExperience(resume.experience),
  renderCapabilities(resume.capabilities)
].filter(Boolean).join('');
