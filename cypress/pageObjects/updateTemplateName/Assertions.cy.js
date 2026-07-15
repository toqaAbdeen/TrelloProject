class updateTemplateNameAssertions {

    verifyTemplateName(expectedName) {

        cy.get('textarea[data-testid="card-back-title-input"]')
            .should('not.have.value', '')
            .and('have.value', expectedName);

        return this;
    }

}export default updateTemplateNameAssertions;