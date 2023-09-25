import { generalStep } from "../steps/general-step";
import { homeStep } from "../steps/home-step";
import { logInStep } from "../steps/log-in-step";
import moment from "moment/moment";


describe('Home Page Test', () => {

    let loggedInUser;

    beforeEach(() => {
        logInStep.visit();
        loggedInUser = logInStep.login();
    });

    it('Verify header', () => {
        generalStep.verifyHeader();
    });

    it('Verify Sidebar-menu', () => {
        generalStep.verifySidebar(loggedInUser);
    });

    it('Open Home Page, verify datapicker, select date-period from curent date', () => {
        homeStep.openHomePage();
        homeStep.chooseDatePeriodInDataPicker('2023-09-24', '2023-09-30');
    });
})