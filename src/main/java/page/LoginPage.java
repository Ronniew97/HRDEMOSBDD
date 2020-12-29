package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;



public class LoginPage {

	WebDriver driver;
	
	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}
	
	@FindBy(how = How.XPATH, using = "//input[@id='txtUsername']") WebElement USERNAME_FIELD;
	@FindBy(how = How.XPATH, using = "//input[@id='txtPassword']") WebElement PASSWORD_FIELD;
	@FindBy(how = How.XPATH, using = "//input[@name='Submit']") WebElement LOGIN_BUTTON;
	@FindBy(how = How.XPATH, using = "//div[contains(text(), 'Invalid Credentials')]") WebElement TOAST_MESSAGE;
	@FindBy(how = How.XPATH, using = "//li[contains(text(), 'Dashboard')]") WebElement DASHBOARD_HEADER;
	
	public void enterUserName(String userName) {
		USERNAME_FIELD.clear();
		USERNAME_FIELD.sendKeys(userName);
	}
	
	public void enterPassword(String password) {
		PASSWORD_FIELD.clear();
		PASSWORD_FIELD.sendKeys(password);
	}
	
	public void clickLoginButton() {
		LOGIN_BUTTON.click();
	}
	
	public void validateErrorMessage() throws Exception {
		if(TOAST_MESSAGE.isDisplayed()){
		} else {
			throw new Exception("toast message not displayed");
		}
	}
	
	public void validateDashBoardPage() throws Exception {
		if(DASHBOARD_HEADER.isDisplayed()){
		} else {
			throw new Exception("dashboard page not displayed");
		}
	}
	
}
