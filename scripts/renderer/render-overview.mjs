import { renderMasthead } from './render-masthead.mjs';
import { renderExecutiveProfile } from './render-executive-profile.mjs';
import { renderExperience } from './render-experience.mjs';
import { renderCapabilities } from './render-capabilities.mjs';
import { renderDeploymentEvidence } from './render-deployment-evidence.mjs';
import { renderAchievements } from './render-achievements.mjs';

export const renderOverview=(resume={})=>[
  renderMasthead(resume),
  renderExecutiveProfile(resume.executiveProfile),
  renderExperience(resume.experience),
  renderCapabilities(resume.capabilities),
  renderDeploymentEvidence(resume.deploymentEvidence),
  renderAchievements(resume.achievements)
].filter(Boolean).join('');
