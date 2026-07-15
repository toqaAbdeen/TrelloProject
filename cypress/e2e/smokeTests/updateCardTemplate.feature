Feature: Update Card Template Name

  Scenario: User update a card template name
    Given user has a card template created and is on the Trello board page
    When user change the card template name
    Then the card template name should be updated successfully and visible in the templates list