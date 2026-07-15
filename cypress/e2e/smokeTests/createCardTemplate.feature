Feature: Create Card Template
    Scenario: User creates a card template using UI
        Given user is on the Trello board page
        When user clicks on the card to open it
        And user enter the card details
        And click menu option for the card
        And click "Make Template" option for the card
        Then the card template should be created successfully and visible in the templates list