$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/login.feature");
formatter.feature({
  "line": 2,
  "name": "Validate HRDemos Login functionality",
  "description": "",
  "id": "validate-hrdemos-login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@EndToEnd"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "a user is on the HRDemos Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.a_user_is_on_the_HRDemos_Login_page()"
});
formatter.result({
  "duration": 232362800,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:134)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat util.BrowserFactory.init(BrowserFactory.java:11)\r\n\tat steps.LoginSteps.a_user_is_on_the_HRDemos_Login_page(LoginSteps.java:19)\r\n\tat ✽.Given a user is on the HRDemos Login page(./src/test/java/features/login.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 9,
  "name": "User with valid credentials should be able to log in",
  "description": "",
  "id": "validate-hrdemos-login-functionality;user-with-valid-credentials-should-be-able-to-log-in",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "a user enters a valid username",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "a user enters a valid password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "clicks the sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "he should be able to view the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.a_user_enters_a_valid_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.a_user_enters_a_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.clicks_the_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.he_should_be_able_to_view_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "a user is on the HRDemos Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.a_user_is_on_the_HRDemos_Login_page()"
});
formatter.result({
  "duration": 17333200,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:134)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat util.BrowserFactory.init(BrowserFactory.java:11)\r\n\tat steps.LoginSteps.a_user_is_on_the_HRDemos_Login_page(LoginSteps.java:19)\r\n\tat ✽.Given a user is on the HRDemos Login page(./src/test/java/features/login.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 17,
  "name": "A user with invalid credentials shouldn\u0027t be able to login",
  "description": "",
  "id": "validate-hrdemos-login-functionality;a-user-with-invalid-credentials-shouldn\u0027t-be-able-to-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "a user enters an invalid username",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "a user enters an invalid password",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "clicks the sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "he should see an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.a_user_enters_an_invalid_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.a_user_enters_an_invalid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.clicks_the_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.he_should_see_an_error_message()"
});
formatter.result({
  "status": "skipped"
});
});