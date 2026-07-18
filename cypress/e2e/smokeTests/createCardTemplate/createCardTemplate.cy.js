import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";

import CardActions from "../../../pageObjects/createCardTemplate/Actions.cy";
import CardAssertions from "../../../pageObjects/createCardTemplate/Assertions.cy";
import dataUtils from "../../../support/dataUtils.cy";
import sharedActions from "../../../pageObjects/shared/Actions.cy";


const dataUtil = new dataUtils();
const SharedActions = new sharedActions();

const cardActions = new CardActions();
const cardAssertions = new CardAssertions();


let boardUrl;
let boardId;
let cardId;
let listId;


Before(() => {

    const boardName = "cypress_" + Date.now();
    const cardName = "card_" + Date.now();


    cy.createTrelloTestBoard(boardName, cardName)
        .then((data) => {

            boardUrl = data.boardUrl;
            boardId = data.boardId;
            cardId = data.cardId;
            listId = data.listId;


            cy.log("Board URL: " + boardUrl);
            cy.log("Board ID: " + boardId);
            cy.log("Card ID: " + cardId);

        });

});



Given("user is on the Trello board page", () => {

    SharedActions.openBoard(boardUrl);

    cardAssertions.verifyBoardOpened(boardUrl);

});



When("user clicks on the card to open it", () => {

  SharedActions.openCardDetails();
});



When("user enter the card details", () => {

    cardActions.addLabel("label1");

    cardActions.addDescription(
        "This is a description for the card template"
    );

    cardActions.addDueDate();

});



When("click menu option for the card", () => {

    cardActions.openCardMenu();

});



When("click \"Make Template\" option for the card", () => {

    SharedActions.makeCardTemplate();

});



Then("the card template should be created successfully and visible in the templates list", () => {

    cardAssertions.verifyTemplateCreated();

});