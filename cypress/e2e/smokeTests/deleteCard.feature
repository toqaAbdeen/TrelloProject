Feature: Delete Card Using UI

    Scenario: User deletes existing Trello card using UI
        Given user is on the Trello board page
        When user clicks on the card to open it
        And click menu option for the card
        And click archive option for the card
        And user clicks the delete option for the card
        Then the card should be deleted successfully