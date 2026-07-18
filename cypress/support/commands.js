// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginToTrello',() => { 
    cy.visit("/login")
    cy.wait(3000)
   return cy.fixture("trelloUser").then((data) => {
    cy.findByTestId("username").type(data.email)
    cy.findByTestId("login-submit-idf-testid").click()
    cy.wait(3000)
    cy.findByTestId("password").type(data.password)
    cy.findByTestId("login-submit-idf-testid").click()
    cy.wait(6000)

})
 })

 Cypress.Commands.add('findByTestId',(testId) => { 
     cy.get(`[data-testid=${testId}]`)
 })


import dataUtils from "../support/dataUtils.cy";

const dataUtil = new dataUtils();

Cypress.Commands.add("createTrelloTestBoard", (boardName, cardName) => {
  let boardUrl;
  console.log("CREATED CARD: ", cardName);
  let boardId;
  let cardId;
  let listId;

  return cy.loginToTrello().then(() => {
    return dataUtil.createBoard(boardName);
  }).then((response) => {
    boardUrl = response.body.url;
    boardId = response.body.id;

    return dataUtil.getListsOnBoard(boardId);
  }).then((listResponse) => {
    listId = listResponse.body[0].id;

    return dataUtil.createCard(cardName, listId);
  }).then((cardResponse) => {
    cardId = cardResponse.body.id;

    return {
      boardUrl,
      boardId,
      cardId,
      listId
    };
  });
});