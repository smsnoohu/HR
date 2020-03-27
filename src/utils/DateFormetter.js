export const DateFormetter = date => {
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

    let shortDate = mm + '/' + dd + '/' + yyyy;
    return shortDate;
};

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