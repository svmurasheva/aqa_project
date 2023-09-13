import { logInStep } from "../steps/log-in-steps";

describe('Log in', () => {
    it('Log in with valid data', () => {
        logInStep.visit();
        logInStep.fillSignInFormWithValidData();
        logInStep.submitSignInForm()
    })
})
