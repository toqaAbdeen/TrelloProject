class CardActions {

    


 addLabel(labelName) {

    // Open Labels
    cy.get(".Qa0qCr_1_yQKR9.ybVBgfOiuWZJtD.mUpWqmjL4CZBvn")
        .eq(1)
        .click();


    // Click Create a new label
    cy.contains("button", "Create a new label")
        .should("be.visible")
        .click();


    // Type label name
    cy.get("#edit-label-title-input")
        .should("be.visible")
        .type(labelName);


    // Choose random color
    cy.get('button[data-testid^="color-tile"]')
        .should("have.length.greaterThan", 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(
                0,
                $buttons.length - 1
            );

            cy.wrap($buttons)
                .eq(randomIndex)
                .click();

        });

        cy.wait(3000); // Wait for 1 second to ensure the color selection is registered

    // Save label
//    cy.contains("button", "Create a new label").click();
cy.get(".ybVBgfOiuWZJtD.orotyyeYQx_tso").eq(1).click();

}



    addDescription(description){

        cy.get(".nch-icon.hChYpzFshATQo8.GzZMAuibTh5l1i").click();
        cy.get('[data-testid="description-button"]').type(description);

    }



    addDueDate(){

        cy.get(".Qa0qCr_1_yQKR9.ybVBgfOiuWZJtD.mUpWqmjL4CZBvn").eq(1).click();
        cy.get('button[aria-current="date"]').click();
        cy.get('[data-testid="recurrence-select-select--control"]').click();
        cy.get('[role="option"]').eq(2).click();
        cy.get('[data-testid="save-date-button"]').click();

    }



    openCardMenu(){

        cy.contains("button","Menu").click();

    }



    

}


export default CardActions;