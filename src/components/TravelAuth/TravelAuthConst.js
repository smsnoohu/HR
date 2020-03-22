export const ROLES = 'employee';

export const ASSIGNMENT_TYPE = [
    {
        id: 'business',
        desc: 'Business'
    },
    {
        id: 'training',
        desc: 'Training'
    },
    {
        id: 'confrence',
        desc: 'Confrence'
    },
    {
        id: 'seminar',
        desc: 'Seminar'
    }
];

export const CITY_LIST = [
    {
        id: 'SFO',
        desc: 'San Fransisco'
    },
    {
        id: 'MAA',
        desc: 'Chennai'
    },
    {
        id: 'NYC',
        desc: 'New York City'
    },
    {
        id: 'NJ',
        desc: 'New Jercy'
    }
];

export const COUNTRY_LIST = [
    {
        id: 'IND',
        desc: 'India'
    },
    {
        id: 'USA',
        desc: 'United States of America'
    },
    {
        id: 'SG',
        desc: 'Singpore'
    },
    {
        id: 'SA',
        desc: 'Saudi Arabia'
    }
];

export const ASSIGNMENT_DETAILS = {
    assignmentType:'',
    assignmentAttachment: '',
    assignmentDays: '',
    assignmentStartDate: '',
    assignmentEndDate: '',
    resumeDate: '',
    destinationCity: '',
    destinationCountry: '',
    assignmentPurpose: ''
}

export const TRAVEL_SEC_1 = {
    empRequirement: [
        {
            id:'TSO_1',
            labelText: 'Ticket',
            isRequired: '',
            isAttachment: true,
            attachment: ''
        },
        {
            id:'TSO_2',
            labelText: 'Hotel',
            isRequired: '',
            isAttachment: true,
            attachment: ''
        },
        {
            id:'TSO_3',
            labelText: 'Transport (To/From) Airport',
            isRequired: '',
            isAttachment: false,
            attachment: ''
        },
        {
            id:'TSO_4',
            labelText: 'Exit Entry (Single Only)',
            isRequired: '',
            isAttachment: true,
            attachment: ''
        },
        {
            id:'TSO_5',
            labelText: 'Visiting Country Visa',
            isRequired: '',
            isAttachment: true,
            attachment: ''
        },
        {
            id:'TSO_6',
            labelText: 'Advance Payment',
            isRequired: '',
            isAttachment: true,
            attachment: ''
        }
    ],
    empComment: ''
}


export const TRAVEL_SEC_2 = {
    totalCost: '',
    ticketClass: '',
    ticketClassOptions: ["First", "Business", "Economy"],
    serviceClassification: [
        {
            id: 'TST_1',
            labelText: 'Hotel',
            share: '50%',
            isRequired: ''
        },
        {
            id: 'TST_2',
            labelText: 'Food',
            share: '',
            isRequired: ''
        },
        {
            id: 'TST_3',
            labelText: 'Taxi to/from AMJ',
            share: '10%',
            isRequired: ''
        },
        {
            id: 'TST_4',
            labelText: 'Others',
            share: '15%',
            isRequired: ''
        }
    ],
    adminComment: ''
}

export const TRAVEL_APPROVAL = [
    {
        id: 'TA_1',
        approveStage: 'DM',
        approverContext: 'Review by',
        approverPosition: 'Department Manager',
        approverName: '',
        approverSign: '',
        approvedDate: '',
        approverCmt: ''
    },
    {
        id: 'TA_2',
        approveStage: 'DD',
        approverContext: 'Verified by',
        approverPosition: 'Division Director',
        approverName: '',
        approverSign: '',
        approvedDate: '',
        approverCmt: ''
    },
    {
        id: 'TA_3',
        approveStage: 'DCO',
        approverContext: 'Approved by',
        approverPosition: 'Division Chief Officer',
        approverName: '',
        approverSign: '',
        approvedDate: '',
        approverCmt: ''
    },
    {
        id: 'TA_4',
        approveStage: 'CEO',
        approverContext: 'Approved by',
        approverPosition: 'Cheif Executive Officer',
        approverName: '',
        approverSign: '',
        approvedDate: '',
        approverCmt: ''
    }
]

export const PERDIEM_INFO = {
    perDiemDetails: [
        {
            id:'perdiem_1',
            label: 'Daily Per Diem Amount',
            value: ''
        },
        {
            id:'perdiem_2',
            label: 'Official Assignment Total Days',
            value: ''
        },
        {
            id:'perdiem_3',
            label: 'Per Diem Deduction Amount',
            value: ''
        }
    ],
    perDiemTotal: '',
    perDiemPreparedBy: '',
    perDiemSubmitDate: ''
}