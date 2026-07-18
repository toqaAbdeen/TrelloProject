class CardAssertions {


    verifyBoardOpened(boardUrl){

        cy.url().should("eq", boardUrl);

    }



    verifyTemplateCreated(){

        cy.get('h1.LkHBYzkKIaLlkk').should("be.visible")
            .and("contain.text","This is a Template card.");

    }

}


export default CardAssertions;