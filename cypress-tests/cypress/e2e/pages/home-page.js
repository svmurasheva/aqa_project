export const homePage = {
    getDateFilterButton: () => cy.xpath('//div[@data-test="transaction-list-filter-date-range-button"]'),

    getTransactionListContainer: () => cy.xpath('//main[@data-test="main"]'),

    getCalendarContainer: () => cy.get('div[aria-label="Calendar"]'),

    getCalendarHeader: () => cy.xpath('//div[contains(text(), "Select a date")]'),

    getCalendarWeekdays: () => cy.get('ul.Cal__Weekdays__root'),

    getCalendarTodayItem: () => cy.get('div.Cal__Today__root'),

    getCalendarMonthList: () => cy.get('div.Cal__MonthList__root'),

    getCalendarDay: (date) => cy.get(`div[aria-label="Calendar"] li[data-date="${date}"]`)
}