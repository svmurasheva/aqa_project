import { logInPage } from "../pages/log-in-page"
import { users } from "../pages/test-data/users-data";

export const logInStep = {
    visit: () => {
        logInPage.visit();
        cy.url().should('include', 'signin');
    },

    fillSignInFormWithValidData: () => {
        let userIndex = Math.ceil(users.length * Math.random());
        let { username, password } =  users[userIndex];
        logInPage.getUsernameInputField().type(username).should('have.value', username);
        logInPage.getPasswordInputField().type(password);
    },
    
    submitSignInForm: () => {
        logInPage.getButtonSignIn().click();
    }
}