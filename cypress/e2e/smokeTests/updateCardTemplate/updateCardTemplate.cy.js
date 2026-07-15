import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import dataUtils from "../../../support/dataUtils.cy";
import sharedActions from "../../../pageObjects/shared/Actions.cy";
import updateTemplateNameAction from "../../../pageObjects/updateTemplateName/Action.cy";
import updateTemplateNameAssertions from "../../../pageObjects/updateTemplateName/Assertions.cy";


const SharedActions = new sharedActions();
const UpdateAction = new updateTemplateNameAction();
const Assertions = new updateTemplateNameAssertions();
const dataUtil = new dataUtils();


const boardName = "cypress_" + Date.now();
const cardName = "card_" + Date.now();
const cardTemplateName = "cardTemplate_" + Date.now();
const updatedTemplateName = "updatedTemplate_" + Date.now();


let boardUrl;
let boardId;
let cardId;
let listId;


Given("user has a card template created and is on the Trello board page", () => {

    cy.createTrelloTestBoard(boardName, cardTemplateName)
        .then((data) => {

            boardUrl = data.boardUrl;
            boardId = data.boardId;
            cardId = data.cardId;
            listId = data.listId;

            SharedActions.openBoard(boardUrl);

        });

});

When("user change the card template name", () => {

    SharedActions.openCardDetails();
    SharedActions.clickOnMenuOption();

    cy.contains('span', 'Make template').click();

    cy.get('textarea[data-testid="card-back-title-input"]')
      .should('be.visible');

    UpdateAction.updateTemplateName(updatedTemplateName);

});

Then("the card template name should be updated successfully and visible in the templates list", () => {

    Assertions.verifyTemplateName(updatedTemplateName);

});