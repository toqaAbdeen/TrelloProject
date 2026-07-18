class CardActions {
 addLabel(labelName) {

    cy.get(".Qa0qCr_1_yQKR9.ybVBgfOiuWZJtD.mUpWqmjL4CZBvn").eq(1).click();

    cy.contains("button", "Create a new label").should("be.visible").click();
    cy.get("#edit-label-title-input").should("be.visible").type(labelName);
    cy.get('button[data-testid^="color-tile"]').should("have.length.greaterThan", 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(
                0,
                $buttons.length - 1
            );

            cy.wrap($buttons)
                .eq(randomIndex)
                .click();

        });

        cy.wait(3000);

        cy.get(".dJTS3FCwC6Plhw").find("button").click();
}



    addDescription(description){

        cy.get(".nch-icon.hChYpzFshATQo8.GzZMAuibTh5l1i").last().click();   
        cy.get('[data-testid="description-button"]').type(description);

    }



    addDueDate(){

        cy.get(".Qa0qCr_1_yQKR9.ybVBgfOiuWZJtD.mUpWqmjL4CZBvn").eq(1).click();
        cy.get('button[aria-current="date"]').click();
        cy.get('[data-testid="recurrence-select-select--control"]').click();
        cy.get('[role="option"]').eq(2).click();
        cy.get('[data-testid="save-date-button"]').click();

    }


}


export default CardActions;