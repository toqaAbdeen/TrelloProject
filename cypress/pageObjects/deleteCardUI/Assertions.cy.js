class DeleteCardUIAssertions {

  assertCardDeletedByName(cardName) {
    cy.contains(cardName, { timeout: 10000 }).should("not.exist");
  }
}

export default DeleteCardUIAssertions;