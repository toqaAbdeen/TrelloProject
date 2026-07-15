class moveTempAssertions {

    verifyMoveTempLabel(expectedText) {
        cy.get('.rPi8Tz_VE3UkS2')
            .should('have.text', expectedText);
    }

}

export default moveTempAssertions;