import { logInStep } from "../steps/log-in-step";

describe('Log in', () => {
    beforeEach(() => {
        logInStep.visit();
    })
    it('Log in with valid data, log out', () => {
        logInStep.validateAllLogoAndLinksOnThePage();
        logInStep.signInWithValidCreds();
        logInStep.logout();
    })
    it('Log in with valid data, remember, log out', () => {
        logInStep.validateAllLogoAndLinksOnThePage();
        logInStep.checkRememberMe();
        logInStep.signInWithValidCreds(true);
        logInStep.logout();
    })
    it('Log in with empty username', () => {
        logInStep.validateAllLogoAndLinksOnThePage();
        logInStep.signIn('', 'se3cret');
        logInStep.verifyThatUsernameHelperTextIsAppear();
        logInStep.checkRememberMe();
    })
    it('Log in with empty password', () => {
        logInStep.validateAllLogoAndLinksOnThePage();
        logInStep.signIn('Giovanna', '');
        logInStep.checkRememberMe();
    })
    it('Log in with short username and pwd (1 char)', () => {
        logInStep.validateAllLogoAndLinksOnThePage();
        logInStep.logInWithRandomCreds(1);
        logInStep.checkRememberMe();
        logInStep.verifyThatPasswordHelperTextIsAppear();
    })
    it('Log in with short username and pwd (3 chars)', () => {
        logInStep.validateAllLogoAndLinksOnThePage();
        logInStep.logInWithRandomCreds(3);
        logInStep.checkRememberMe();
        logInStep.verifyThatPasswordHelperTextIsAppear();
    })
    it('Log in with short username and pwd (4 chars)', () => {
        logInStep.validateAllLogoAndLinksOnThePage();
        logInStep.logInWithRandomCreds(4);
        logInStep.checkAlertMessageAndIconAreAppear();
        logInStep.checkRememberMe();
    })
    it('Log in with short username and pwd (5 chars)', () => {
        logInStep.validateAllLogoAndLinksOnThePage();
        logInStep.logInWithRandomCreds(5);
        logInStep.checkAlertMessageAndIconAreAppear();
        logInStep.checkRememberMe();
    })
})