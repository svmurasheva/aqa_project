export const logInPage = {
    
    visit: () => cy.visit('http://localhost:3000/signin'),

    getMainLogoSite: ()=> cy.get('svg.makeStyles-logo-3'),

    getHeaderSignIn: ()=> cy.xpath('//h1[@class="MuiTypography-root MuiTypography-h5"]'),

    getUsernameInputField: () => cy.get('#username'),

    getUsernameHelperText: ()=> cy.get('#username-helper-text'),

    getPasswordInputField: () => cy.get('#password'),

    getPasswordHelperText: () => cy.get('#password-helper-text'),

    getCheckboxRememberMe: () => cy.xpath('//input[@class="PrivateSwitchBase-input-14"]'),

    getTextRememberMe: () => cy.xpath('//span[@class="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1"]'),

    getButtonSignIn: () => cy.get('button[data-test="signin-submit"]'),

    getLinkSingUp: () => cy.xpath('//a[@data-test="signup"]'),

    getFooterLogoText: () => cy.xpath(`//p[@class="MuiTypography-root MuiTypography-body2 
                                       MuiTypography-colorTextSecondary MuiTypography-alignCenter"]`),
    
    getFooterLogoImage: () => cy.get('//p[contains(text(), "Built by")]/a/*/*')
    
}