import { sidebarItems } from "../pages/general/sidebar-items"
import { homePage } from "../pages/home-page"
import moment from "moment/moment"
import 'cypress-if'


export const homeStep = {
    openHomePage: () => {
        sidebarItems.getHomeButton().click()
    },

    chooseDatePeriodInDataPicker: function (start, end) {
        this.chooseDateScrolling(start);
        this.chooseDateScrolling(end);
        const inputDateFormat = 'YYYY-MM-DD';
        const outputDateFormat = 'MMM, DD YYYY';
        const mStart = moment(start, inputDateFormat).subtract(1, 'day');
        const mEnd = moment(end, inputDateFormat);
        //eg 'Date: Sep, 27 2023 - Oct, 7 2023'
        const expectedRangeText = `Date: ${mStart.format(outputDateFormat)} - ${mEnd.format(outputDateFormat)}`;
        homePage.getDateFilterButton()
            .find('span', { scrollBehavior: "center" })
            .should('be.visible')
            .should('have.text', expectedRangeText);
    },

    chooseDateScrolling: function (date, yPercentScrollStart = 0) {
        //open calendar if closed
        homePage.getCalendarContainer()
            .if()
            .else().then(() => {
                homePage.getTransactionListContainer().scrollTo('top', { duration: 500 });
                homePage.getDateFilterButton().should('be.visible').click({ scrollBehavior: false })
            });
        //scroll untill date is found
        homePage.getCalendarMonthList().scrollTo(0, `${yPercentScrollStart}%`);
        homePage.getCalendarDay(date)
            .if().then(() => homePage.getCalendarDay(date).click({ scrollBehavior: "center" }))
            .else().then(() => {
                if (yPercentScrollStart < 100) {
                    this.chooseDateScrolling(date, yPercentScrollStart + 1);
                } else {
                    //scrolled all the way and was not found
                    throw new Error(`Fail, date ${date} is not present in calendar!`)
                }
            });
    },
}