Feature: To register a new user using restAssured and use the same user to login from UI

  Scenario: To register a new user
    Given As a user I navigate to new user register webpage
    When As a user I will register using following details
      | Paritosh@xyz.com |
      | Paritosh         |
      | Paritosh         |
      | Paritosh         |
      | Paritosh         |
      | Paritosh         |

  Scenario: login with registered credentials from UI
    Given As a user I navigate to flyaway login page
    When As a user I will login username as "Paritosh@xyz.com" and password as "Paritosh"
    Then Validate logged in successfully
