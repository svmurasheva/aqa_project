export const headerItems = {

    getMainHeader: () => cy.get('header'),

    getHamburgerMenuButton: () => cy.get('button[data-test="sidenav-toggle"]'),

    getLogoHeading: () => cy.get('h1[data-test="app-name-logo"]'),

    getNewTransactionButton: () => cy.get('a[data-test="nav-top-new-transaction"]'),

    getNotificationsButton: () => cy.get('a[data-test="nav-top-notifications-link"]'),
}