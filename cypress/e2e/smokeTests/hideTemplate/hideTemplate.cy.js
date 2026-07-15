import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import sharedActions from "../../../pageObjects/shared/Actions.cy";
import hideTempAction from "../../../pageObjects/hideTemplate/Actions.cy";
import hideTempAssertion from "../../../pageObjects/hideTemplate/Assertion.cy";
import dataUtils from "../../../support/dataUtils.cy";



const SharedActions = new sharedActions();
const HideAction = new hideTempAction();
const HideAssertions = new hideTempAssertion();
const dataUtil=new dataUtils()

const boardName = "cypress_" + Date.now();
const cardTemplateName = "cardTemplate_" + Date.now();


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


When("user click Hide option and select a list to hide the card template", () => {

    SharedActions.openCardDetails();
    SharedActions.clickOnMenuOption();

SharedActions.makeCardTemplate();

});


When("user click Hide button", () => {

    // Archive action does not need a second click
    // Keep this step empty or remove it from feature if possible
    HideAction.clickOnHideOption();

});


Then("the card template should be hidden successfully", () => {

    HideAssertions.assertCardTemplateHidden();

});

after(()=>{
   
    dataUtil.deleteBoard(boardId)

})