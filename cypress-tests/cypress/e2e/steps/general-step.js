import { sidebarItems } from "../pages/general/sidebar-items";
import { headerItems } from "../pages/general/header-items"
import { buttonData } from "../pages/test-data/account-page-data";
import { users } from "../pages/test-data/users-data";

export const generalStep = {
    verifyHeader: () => {
        Object.values(headerItems)
            .forEach(getItemFunc => getItemFunc().should('be.visible'));
    },

    verifySidebar: function (user) {
        this.verifyUserAvatarImg(user);
        this.verifySidebarUserProfileInformation(user);
        this.verifyAccountBalance(user);
        this.verifyAllSidebarButtons();
        this.toggleSideBarMenu();
    },

    verifyUserAvatarImg: user => {
        sidebarItems.getUserAvatarImg(`${user.firstName} ${user.lastName}`).should('be.visible');
    },

    verifySidebarUserProfileInformation: ({ firstName, lastName, username }) => {
        //eg 'Edgar J'
        sidebarItems.getFullNameSidenav()
            .should('be.visible')
            .should('have.text', `${firstName} ${lastName.substring(0, 1)}`);

        //eg '@Katharina_Bernier'
        sidebarItems.getUserNameSidenav()
            .should('be.visible')
            .should('have.text', `@${username}`);
    },

    verifyAccountBalance: (user) => {
        const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
        const balance = user.balance / 100.0;
        console.log("balance:")
        console.log(`balance: ${balance}`);
        sidebarItems.getUserBalanceNum().should('be.visible').should('have.text', formatter.format(balance))

        sidebarItems.getUserBalanceText().should('be.visible').should('have.text', "Account Balance")
    },

    verifyAllSidebarButtons() {
        buttonData.forEach(({ name, link }) => {
            sidebarItems.getMenuButton(name, link)
                .should('be.visible')
                .should('not.be.disabled')
                .click();
            cy.url().should('include', link);
        });
    },

    toggleSideBarMenu: () => {
        headerItems.getHamburgerMenuButton().should('exist').should('be.visible').click().click()
    },
}