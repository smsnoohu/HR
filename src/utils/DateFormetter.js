export const DateFormetter = (date, format) => {
    const newDate = new Date(date);

    let dd = newDate.getDate();
    let mm = newDate.getMonth() + 1; //January is 0!
    let yyyy = newDate.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }
    let shortDate = format === 'dd/MM/yyyy' ? dd + '/' + mm + '/' + yyyy : 'MM/dd/yyyy' ? mm + '/' + dd + '/' + yyyy : 'yyyy/MM/dd' ? yyyy + '/' + mm + '/' + dd : 'yyyy/dd/MM' ? yyyy + '/' + dd + '/' + mm: '';
    return shortDate;
};

export const ResetDateFormat = date => {
    const newDate = new Date(date);
    return newDate;
}

export const MonthYearFormetter = date => {
    const newDate = new Date(date);

    // let dd = newDate.getDate();
    let mm = newDate.getMonth() + 1; //January is 0!
    let yyyy = newDate.getFullYear();

    // if (dd < 10) {
    //     dd = '0' + dd;
    // }

    if (mm < 10) {
        mm = '0' + mm;
    }

    let shortDate = mm + '/' + yyyy;
    return shortDate;
};


export const GetFutureDate = (date, days) => {

    // Convert 'days' to milliseconds
    const millies = 1000 * 60 * 60 * 24 * days;

    // Get the current date/time
    const todaysDate = new Date(date);

    // Get 'todaysDate' as Epoch Time, then add 'days' number of mSecs to it
    const futureMillies = todaysDate.getTime() + millies;

    // Use the Epoch time of the targeted future date to create
    //   a new Date object, and then return it.
    const targetedDate = new Date(futureMillies);
    return targetedDate;
}