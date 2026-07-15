// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

Cypress.on('uncaught:exception', (err) => {
  const message = err.message || '';

  const ignoredPatterns = [
    'unauthorized permission requested',
    'API::Unauthorized',
    'postMessage',
    'as.atlassian.com',
    'unauthorized',
  ];

  // ignore all known Trello/Atlassian noise
  return !ignoredPatterns.some(pattern =>
    message.includes(pattern)
  );
});