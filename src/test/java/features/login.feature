@EndToEnd
Feature: Validate HRDemos Login functionality

Background:

Given a user is on the HRDemos Login page

@Scenario1
Scenario: User with valid credentials should be able to log in

When a user enters a valid username
And a user enters a valid password
And clicks the sign in button
Then he should be able to view the home page

@Scenario2
Scenario: A user with invalid credentials shouldn't be able to login

When a user enters an invalid username 
And a user enters an invalid password
And clicks the sign in button
Then he should see an error message

