class moveTempAction {

    clickOnMoveOption(){
        cy.get('[data-testid="card-back-move-card-button"]').click()
    }

chooseMoveToList() {

    cy.get('[data-testid="move-card-popover-select-list-destination-select--control"]')
      .click();

    return cy.get('[role="option"]').then(($options) => {

        const randomIndex = Math.floor(Math.random() * $options.length);
        const selectedList = $options.eq(randomIndex).text().trim();

        cy.wrap($options.eq(randomIndex)).click();

        return cy.wrap(selectedList);

    });
}

  clickOnMoveButton() {
    cy.get('[data-testid="move-card-popover-move-button"]').click();
  
}}
export default moveTempAction;
