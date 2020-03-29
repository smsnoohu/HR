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