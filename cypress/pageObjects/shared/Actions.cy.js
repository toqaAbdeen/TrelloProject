class sharedActions{

    loginToTrelloWebsite(){
        cy.loginToTrello()
        return this
    }
    clickOnMenuOption() {
    cy.get('[data-testid="card-back-actions-button"]').click();
    return this;
  }
   openCardDetails(){
        cy.get('[data-testid="card-name"]').first().click()
        return this
    }

 openBoard(url) {
    cy.visit(url);
    return this;
  }

  makeCardTemplate() {
    cy.contains('span', 'Make template').click();
    return this;
  }

}

export default sharedActions