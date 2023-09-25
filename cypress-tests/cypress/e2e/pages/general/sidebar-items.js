export const sidebarItems = {
    getFullNameSidenav: () => cy.get('h6[data-test="sidenav-user-full-name"]'),

    getUserNameSidenav: () => cy.get('h6[data-test="sidenav-username"]'),

    getUserAvatarImg: (userName) => cy.get(`div[data-test="sidenav"] img[alt="${userName}"]`),

    getUserBalanceNum: () => cy.get('h6[data-test="sidenav-user-balance"]'),

    getUserBalanceText: () => cy.get('h6[data-test="sidenav-user-balance"] + h6'),

    getMenuButton: (buttonName, link) => cy.xpath(
        `//a[contains(@data-test,'sidenav-')][@href='${link}']//span[contains(text(), '${buttonName}')]`),

    getHomeButton: () => cy.get('a[data-test="sidenav-home"]'),

    getMyAccountButton: () => cy.get('a[data-test="sidenav-user-settings"]'),

    getBankAccountsButton: () => cy.get('a[data-test="sidenav-bankaccounts"]'),

    getNotificationsButton: () => cy.get('a[data-test="sidenav-notifications"]'),

}