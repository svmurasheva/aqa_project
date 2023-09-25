import { logInPage } from "../pages/log-in-page"
import { users } from "../pages/test-data/users-data";
import { loginUtils } from "../utils/login";

export const logInStep = {

    visit: logInPage.visit,

    checkVisibilitySignInHeaderTextIs: () => {
        logInPage.getHeaderSignIn().should('be.visible')
    },

    checkVisibilityLogoSiteWithText: () => {
        logInPage.getMainLogoSite().should('be.visible')
    },

    signIn: (username, password, remember = false) => {
        username && logInPage.getUsernameInputField().type(username).should('have.value', username);
        password && logInPage.getPasswordInputField().type(password);

        const isValidCreds = username && password && password.length > 3;
        if (!isValidCreds) {
            logInPage.getButtonSignIn().should('be.disabled')
            return;
        }

        const expectedReqPayload = {
            type: "LOGIN",
            username: username,
            password: password,
            ...(remember && { remember: remember })
        };

        cy.intercept('POST', 'http://localhost:3001/login').as('api_login_post');

        logInPage.getButtonSignIn().should('not.be.disabled').click();

        cy.wait('@api_login_post')
            .its('request.body')
            .then(req => console.log(req))
            .then((req) => {
                const reqJSON = JSON.stringify(req);
                const expectedReqJSON = JSON.stringify(expectedReqPayload)
                console.log(reqJSON);
                expect(reqJSON).equal(expectedReqJSON);
            });
    },

    signInWithValidCreds: function (remember = false) {
        let userIndex = Math.floor(users.length * Math.random());
        cy.log(`userIndex = ${userIndex}`);
        const user = users[userIndex];
        const { username, password } = user;
        this.signIn(username, password, remember);
        return user;
    },

    verifyThatUsernameHelperTextIsAppear: () => {
        logInPage.getUsernameHelperText().should('be.visible').should('have.text', 'Username is required')
    },

    verifyThatPasswordHelperTextIsAppear: () => {
        logInPage.getPasswordHelperText()
            .should('be.visible')
            .should('have.text', 'Password must contain at least 4 characters')
    },

    checkRememberMe: () => {
        logInPage.getInputCheckBoxRememberMe().parent().should('be.visible').click();
        logInPage.getInputCheckBoxRememberMe().should('be.checked')
    },

    checkAlertMessageAndIconAreAppear: () => {
        logInPage.getAlertIcon().should('be.visible');
        logInPage.getAlertMessage().should('be.visible')
    },

    logout: () => {
        logInPage.getLogoutButton().click();
    },

    login: function () {
        this.visit();
        return this.signInWithValidCreds();
    },

    logInWithRandomCreds: function (numChars, remember = false) {
        let randomInput = loginUtils.generateRandomInputValueAllowedChars(numChars);
        this.signIn(randomInput, randomInput, remember);
    },

    validateFooterLogo: () => {
        logInPage.getFooterLogo().should('be.visible');
        logInPage.getFooterLogoImage().should('be.visible');
        logInPage.getFooterLogoLink().should('have.attr', 'href', 'https://cypress.io');

    },

    validateSignUpLink: () => {
        logInPage.getLinkSingUp()
        .should('be.visible')
        .should('have.attr', 'href', '/signup');
    },

    validateAllLogoAndLinksOnThePage: function() {
        this.checkVisibilityLogoSiteWithText();
        this.checkVisibilitySignInHeaderTextIs();
        this.validateFooterLogo();
        this.validateSignUpLink();
    }

}
