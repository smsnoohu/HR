export const LEAVE_REQUEST = {
    startDate: '02/01/2020',
    endDate: '03/03/2020',
    reportDate: '03/04/2020',
    contactInVacation: 'Mohamed Noohu',
    mobileNoInVacation: '9942305949',
    emailInVacation: 'mohamed.noohu@gmail.com',
    leaveType: [{
        id: 1,
        desc: 'Annual Leave'
    }]
};

export const LEAVE_TYPE = [
    {
        id: 1,
        desc: 'Annual Leave'
    },
    {
        id: 2,
        desc: 'Unpaid Leave'
    },
    {
        id: 3,
        desc: 'Examination Leave'
    },
    {
        id: 4,
        desc: 'Child Birth Leave (3 Days)'
    },
    {
        id: 5,
        desc: 'Hajj Leave (5 Days)'
    },
    {
        id: 6,
        desc: 'Death Leave (5 Days)'
    },
    {
        id: 7,
        desc: 'Marriage Leave (5 Days)'
    },
    {
        id: 8,
        desc: 'Sick Leave'
    },
    {
        id: 9,
        desc: 'Others (Specify)'
    }
];

export const EMPLOYEE_DETAILS = {
    employee: [{
        name: 'Mohamed Noohu',
        age: 35,
        gender: 'Male',
        fromDate: '02/02/2020',
        toDate: '03/02/2020',
        ticketClass: 'One Way',
        fromRoute: 'CA',
        toRoute: 'MAA',
        familyLocation: 'In KSA'
    }],

    depedent: [
        {
            name: 'Shaik Nuzla',
            relationToEmployee: 'Spouse',
            age: 30,
            gender: 'Female',
            fromDate: '02/02/2020',
            toDate: '03/02/2020',
            ticketClass: 'One Way',
            fromRoute: 'CA',
            toRoute: 'MAA',
            familyLocation: 'In KSA'
        },
        {
            name: 'Syed',
            relationToEmployee: 'Child',
            age: 12,
            gender: 'Male',
            fromDate: '02/02/2020',
            toDate: '03/02/2020',
            ticketClass: 'One Way',
            fromRoute: 'CA',
            toRoute: 'MAA',
            familyLocation: 'In KSA'
        }
    ]
};