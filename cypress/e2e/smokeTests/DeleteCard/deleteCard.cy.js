import { Given, When, Then, log } from "@badeball/cypress-cucumber-preprocessor";
import dataUtils from "../../../support/dataUtils.cy";
import DeleteCardUI from "../../../pageObjects/deleteCardUI/Actions.cy";
import DeleteCardUIAssertions from "../../../pageObjects/deleteCardUI/Assertions.cy";
import sharedActions from "../../../pageObjects/shared/Actions.cy";

const deleteCardAssertion = new DeleteCardUIAssertions();
const deleteCard = new DeleteCardUI();
const SharedActions = new sharedActions();

const boardName= "cypress_"+Date.now()
const dataUtil=new dataUtils()
const cardName="card_"+Date.now()


let boardUrl;
let boardId;
let cardId;
let listId;

before(() => {

  cy.createTrelloTestBoard(boardName, cardName).then((data) => {
    boardUrl = data.boardUrl;
    boardId = data.boardId;
    cardId = data.cardId;
    listId = data.listId;

    cy.wrap(cardId).as("cardId");
  });
});
Given("user is on the Trello board page", () => {
  SharedActions.openBoard(boardUrl);
  cy.url().should('eq', boardUrl);
    cy.wait(3000);

  cy.screenshot("board-before-delete", {
    capture: "fullPage"
  });
});

When("user clicks on the card to open it", () => {
  SharedActions.openCardDetails();
  cy.log("EXPECTED CARD: " + cardName);
  cy.get('[data-testid="card-back-title-input"]', { timeout: 10000 }).should('exist').should('be.visible');
  cy.get('[data-testid="card-back-title-input"]').invoke('val').should('eq', cardName);

});

  When("click menu option for the card", () => {
  SharedActions.clickOnMenuOption();
});

When("click archive option for the card", () => {
  deleteCard.clickOnArchiveOption();
});

When("user clicks the delete option for the card", () => {
  deleteCard.clickOnDeleteOption();
  deleteCard.clickOnConfirmDeleteButton();
});

Then("the card should be deleted successfully", () => {
  deleteCardAssertion.assertCardDeletedByName(cardName);
    cy.wait(2000);

  cy.screenshot("board-after-delete", {
    capture: "fullPage"
  });
});

after(() => {
  dataUtil.deleteBoard(boardId);
});