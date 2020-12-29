package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.LoginPage;
import util.BrowserFactory;

public class LoginSteps {

	WebDriver driver;
	
	
	@Given("^a user is on the HRDemos Login page$")
	public void a_user_is_on_the_HRDemos_Login_page() throws Throwable {
		driver = BrowserFactory.init();
	}

	@When("^a user enters a valid username$")
	public void a_user_enters_a_valid_username() throws Throwable {
		LoginPage login = PageFactory.initElements(driver, LoginPage.class);
		login.enterUserName("admin");
	}

	@When("^a user enters a valid password$")
	public void a_user_enters_a_valid_password() throws Throwable {
		LoginPage login = PageFactory.initElements(driver, LoginPage.class);
		login.enterPassword("admin123");
	}

	@When("^clicks the sign in button$")
	public void clicks_the_sign_in_button() throws Throwable {
		LoginPage login = PageFactory.initElements(driver, LoginPage.class);
//		login.clickLoginButton();
	}

	@Then("^he should be able to view the home page$")
	public void he_should_be_able_to_view_the_home_page() throws Throwable {
		LoginPage login = PageFactory.initElements(driver, LoginPage.class);
		login.validateDashBoardPage();
	}

	@When("^a user enters an invalid username$")
	public void a_user_enters_an_invalid_username() throws Throwable {
		LoginPage login = PageFactory.initElements(driver, LoginPage.class);
		login.enterUserName("admin");
	}

	@When("^a user enters an invalid password$")
	public void a_user_enters_an_invalid_password() throws Throwable {
		LoginPage login = PageFactory.initElements(driver, LoginPage.class);
		login.enterPassword("abc");
	}

	@Then("^he should see an error message$")
	public void he_should_see_an_error_message() throws Throwable {
		LoginPage login = PageFactory.initElements(driver, LoginPage.class);
		login.validateErrorMessage();
	}


}
