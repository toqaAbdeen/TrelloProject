class DeleteCardUI {

  clickOnArchiveOption() {
    cy.get('[data-testid="card-back-archive-button"]').click();
    return this;
  }

  clickOnDeleteOption() {
    cy.get('[data-testid="card-back-delete-card-button"]').click();
    return this;
  }

  clickOnConfirmDeleteButton() {
    cy.get('[data-testid="popover-confirm-button"]').click();
    return this;
  }
 

}

export default DeleteCardUI;