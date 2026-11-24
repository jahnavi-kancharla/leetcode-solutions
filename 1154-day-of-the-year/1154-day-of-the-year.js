var dayOfYear = function (date) {

    function isLeapYear(y) {
        // https://scienceworld.wolfram.com/astronomy/LeapYear.html
        //  occurs every 4 yrs, not divisible by 100, except divisible by 400
        return y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0)
    }

    function getDaysBetweenMonths(fromMon, toMon, year) {
        // jan to dec - days
        let month_days = [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let days = 0;

        for (let m = fromMon; m <= toMon; m++) {
            days += month_days[m];
            if (m === 2 && isLeapYear(year)) {
                days++; // add 1 day to leap year
            }
        }
        return days;
    }

    // from & to
    let [y, m, d] = date.split("-").map((x) => +x);

    let days = 0;

    // extract days from months (except 1st & last)
    days += getDaysBetweenMonths(1, m - 1, y); // 1 to to - exclude last month
    days += d; // current month days

    return days;
};