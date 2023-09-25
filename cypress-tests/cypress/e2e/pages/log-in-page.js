export const logInPage = {
    visit: () => {
        cy.visit('/signin'),
            cy.url().should('include', 'signin')
    },

    getMainLogoSite: () => cy.get('svg.makeStyles-logo-3'),

    getHeaderSignIn: () => cy.xpath('//h1[contains(text(), "Sign in")]'),

    getAlertIcon: () => cy.get('div.MuiAlert-icon'),

    getAlertMessage: () => cy.xpath('//div[contains(text(), "Username or password is invalid")]'),

    getUsernameLabel: () => cy.get('#username-label'),

    getUsernameInputField: () => cy.get('#username'),

    getUsernameHelperText: () => cy.get('#username-helper-text'),

    getPasswordLabel: () => cy.get('#password-label'),

    getPasswordInputField: () => cy.get('#password'),

    getPasswordHelperText: () => cy.get('#password-helper-text'),

    getInputUserNameAndPasswordFields: () => cy.xpath('//input[@id="username"] | //input[@id="password"]'),

    getSpanCheckBoxRememberMe: () => cy.xpath('//span[@data-test="signin-remember-me"]'),

    getInputCheckBoxRememberMe: () => cy.xpath('//span[@data-test="signin-remember-me"]//input[@type="checkbox"]'),

    getTextRememberMe: () => cy.xpath('//span[@data-test="signin-remember-me"]//following::span[text()="Remember me"]'),

    getButtonSignIn: () => cy.get('button[data-test="signin-submit"]'),

    getLinkSingUp: () => cy.xpath('//a[@data-test="signup"]'),

    getFooterLogoImage: () => cy.xpath('//p[contains(text(), "Built by")]/a/*/*'),

    getFooterLogo: () => cy.xpath('//p[contains(text(), "Built by")]'),

    getFooterLogoLink: () => cy.xpath('//p[contains(text(), "Built by")]/a'),

    getLogoutButton: () => cy.get('div[data-test="sidenav-signout"]'),





}