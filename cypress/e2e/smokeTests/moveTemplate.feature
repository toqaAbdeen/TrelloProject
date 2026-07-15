Feature: Move Card Template

  Scenario: User moves a card template to another list
    Given user has a card template created and is on the Trello board page
    When user click Move option and select a list to move the card template
    And user click Move button
    Then the card template should be moved successfully