Feature: Hide Card Template

  Scenario: User hides a card template from the board
    Given user has a card template created and is on the Trello board page
    When user click Hide option and select a list to hide the card template
    And user click Hide button
    Then the card template should be hidden successfully