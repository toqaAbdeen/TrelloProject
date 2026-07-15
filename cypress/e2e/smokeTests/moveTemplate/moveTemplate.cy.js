import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import sharedActions from "../../../pageObjects/shared/Actions.cy";
import moveTempAction from "../../../pageObjects/moveTemplate/Action.cy";
import moveTempAssertions from "../../../pageObjects/moveTemplate/Assertions.cy";
import dataUtils from "../../../support/dataUtils.cy";



const SharedActions = new sharedActions();
const MoveAction = new moveTempAction();
const dataUtil=new dataUtils()

const MoveAssertions = new moveTempAssertions();


const boardName = "cypress_" + Date.now();
const cardTemplateName = "cardTemplate_" + Date.now();


let boardUrl;
let boardId;
let cardId;
let listId;
let destinationList;


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


When("user click Move option and select a list to move the card template", () => {

    SharedActions.openCardDetails();
    SharedActions.clickOnMenuOption();

    cy.contains('span', 'Make template').click();

    MoveAction.clickOnMoveOption();
  MoveAction.chooseMoveToList()
    .then((listName) => {

        destinationList = listName;
        cy.log("Selected List: " + destinationList);

    });

});



When("user click Move button", () => {

    MoveAction.clickOnMoveButton();

});


Then("the card template should be moved successfully", () => {

    MoveAssertions.verifyMoveTempLabel(destinationList);

});

after(()=>{
   
    dataUtil.deleteBoard(boardId)

})