class hideTempAssertion {
    assertCardTemplateHidden() {
        cy.get('[data-testid="card-back-unarchive-card-button"]').should('be.visible');

    }
}

export default hideTempAssertion;