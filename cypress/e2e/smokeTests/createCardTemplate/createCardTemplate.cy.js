import { Given, When, Then, log } from "@badeball/cypress-cucumber-preprocessor";
import dataUtils from "../../../support/dataUtils.cy";
import sharedActions from "../../../pageObjects/shared/Actions.cy";


const SharedActions = new sharedActions();
const dataUtil=new dataUtils()
const boardName= "cypress_"+Date.now()
const cardName="card_"+Date.now()

const cardTemplateName="cardTemplate_"+Date.now()

let boardUrl;
let boardId;
let cardId;
let listId;



before(() => {
    cy.createTrelloTestBoard(boardName, cardTemplateName).then((data) => {
        boardUrl = data.boardUrl;
        boardId = data.boardId;
        cardId = data.cardId;
        listId = data.listId;   
        cy.wrap({ boardUrl, boardId, cardId, listId }).as("testData");
    });
});

Given("user is on the Trello board page", () => {
    SharedActions.openBoard(boardUrl);
    cy.url().should('eq', boardUrl);
});

// When("user clicks on the card to open it", () => {
//     SharedActions.clickOnCard(cardId);
// });

When("user clicks on the card to open it", () => {
  SharedActions.openCardDetails();
//   cy.get('[data-testid="card-back-title-input"]', { timeout: 10000 }).should('exist').should('be.visible');
//   cy.get('[data-testid="card-back-title-input"]').invoke('val').should('eq', cardName);

});

When("user enter the card details", () => {
cy.get(".Qa0qCr_1_yQKR9.ybVBgfOiuWZJtD.mUpWqmjL4CZBvn").eq(1).click();
        cy.get(".we0Z8HnUw3En3y.ybVBgfOiuWZJtD.Y8VSmRstKSzhJH").first().click();
        cy.get("#edit-label-title-input").type("label1")
        cy.get('button[data-testid^="color-tile"]').then(($buttons) => {
            const randomIndex = Cypress._.random(0, $buttons.length - 1);
            cy.get('button[data-testid^="color-tile"]').eq(randomIndex).click();
        });
        cy.contains("button", "Create")
  .should("be.visible")
  .click();
        cy.wait(3000)
        cy.get(".nch-icon.hChYpzFshATQo8.GzZMAuibTh5l1i").click();  
        cy.wait(3000)
        cy.get('[data-testid="description-button"]').type("This is a description for the card template")
        cy.get(".Qa0qCr_1_yQKR9.ybVBgfOiuWZJtD.mUpWqmjL4CZBvn").eq(1).click();
        cy.get('button[aria-current="date"]').click();
cy.get('[data-testid="recurrence-select-select--control"]').click();

cy.get('[role="option"]').eq(2).click();
        cy.get('[data-testid="save-date-button"]').click();

});

When("click menu option for the card", () => {
  SharedActions.clickOnMenuOption();
}
);

When("click \"Make Template\" option for the card", () => {
        cy.contains('span', 'Make template').click();
});

Then("the card template should be created successfully and visible in the templates list", () => {
    cy.get('h1.LkHBYzkKIaLlkk')
      .should("be.visible")
      .and("contain.text", "This is a Template card.");
});