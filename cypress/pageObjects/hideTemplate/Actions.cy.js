class hideTempAction {

    clickOnHideOption() {

        cy.get('[data-testid="card-back-archive-button"]').click();

    }
}

export default hideTempAction;