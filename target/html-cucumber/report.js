$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/featureFiles/registerUser.feature");
formatter.feature({
  "name": "To register a new user using restAssured and use the same user to login from UI",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To register a new user",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "As a user I navigate to new user register webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.registerUser.as_a_user_I_navigate_to_new_user_register_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "As a user I will register using following details",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.registerUser.as_a_user_I_will_register_using_following_details(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "login with registered credentials from UI",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "As a user I navigate to flyaway login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.registerUser.as_a_user_I_navigate_to_flyaway_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "As a user I will login username as \"Paritosh@xyz.com\" and password as \"Paritosh\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.registerUser.as_a_user_I_will_login_username_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.registerUser.validate_logged_in_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});