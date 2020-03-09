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
    }],
    ticketStatus: ''
};

export const LEAVE_STATUS = {
    status: 'requester'
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

export const CITY_LIST = [
    {
        id: "MAA",
        desc: 'Chennai'
    },
    {
        id: "CMB",
        desc: 'Coimbatore'
    },
    {
        id: 'SFO',
        desc: 'San Fransisco'
    },
    {
        id: 'NYC',
        desc: 'New York City'
    }
];

export const EMPLOYEE_DETAILS = {
    employee: [{
        name: 'Mohamed Noohu',
        age: 35,
        empGender: 'Male',
        fromDate: '02/02/2020',
        toDate: '03/02/2020',
        ticketClass: 'One Way',
        fromRoute: 'SFO',
        toRoute: 'MAA',
        location: 'In KSA'
    }],

    depedent: [
        {
            id: 1,
            name: 'Shaik Nuzla',
            relation: 'Spouse',
            age: 30,
            gender: 'Female',
            fromDate: '02/02/2020',
            toDate: '03/02/2020',
            ticketClass: 'One Way',
            fromRoute: 'SFO',
            toRoute: 'MAA',
            location: 'In KSA'
        },
        {
            id: 2,
            name: 'Syed',
            relation: 'Child',
            age: 12,
            gender: 'Male',
            fromDate: '02/03/2020',
            toDate: '03/02/2020',
            ticketClass: 'One Way',
            fromRoute: 'SFO',
            toRoute: 'MAA',
            location: 'In KSA'
        }
    ]
};

export const ACTION_DETAILS = [
    {
        actionNo: 1,
        requestedBy: 'Noohu',
        actionName: 'VR',
        deptName: 'IMM',
        respBy: 'Syed',
        targetDate: '03/03/2020',
        status: ''
    }
];

export const ACTION_LIST = [
    {
        id: "VR",
        desc: 'Visa Request'
    },
    {
        id: "TKT",
        desc: 'Ticket Booking'
    },
    {
        id: 'HB',
        desc: 'Hotel Booking'
    },
    {
        id: 'TEST',
        desc: 'Test Action'
    }
];


export const DEPT_LIST = [
    {
        id: "HR",
        desc: 'Human Resource'
    },
    {
        id: "SOFT",
        desc: 'Software Department'
    },
    {
        id: 'NET',
        desc: 'Networking'
    },
    {
        id: 'IMM',
        desc: 'Immigration'
    }
];