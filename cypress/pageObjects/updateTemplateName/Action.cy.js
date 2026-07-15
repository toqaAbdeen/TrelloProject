class updateTemplateNameAction {

    updateTemplateName(newName) {

        cy.get('textarea[data-testid="card-back-title-input"]')
            .should('be.visible')
            .click()
            .clear()
            .type(newName)
            .should('have.value', newName)
            .type('{enter}');

        return this;
    }

}

export default updateTemplateNameAction;

