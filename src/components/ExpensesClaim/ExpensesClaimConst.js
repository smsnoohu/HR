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

export const REQ_LIST = [
    {
        id: 'req_1',
        desc: 'Business Travel'
    },
    {
        id: 'req_2',
        desc: 'Training'
    },
    {
        id: 'req_3',
        desc: 'Product Launch'
    },
    {
        id: 'req_4',
        desc: 'Official Travel'
    },
    {
        id: 'req_5',
        desc: 'Software Upgrade'
    }
];

export const EMP_LIST = [
    {
        id: 'u123456',
        desc: 'Self'
    },
    {
        id: 'U123098',
        desc: 'Syed Mohamed'
    },
    {
        id: 'U221245',
        desc: 'Arif'
    },
    {
        id: 'U987654',
        desc: 'Shaik Abdul'
    },
    {
        id: 'U567453',
        desc: 'Aboobacker Siddeq'
    }
];

export const EXP_LIST = [
    {
        id: 'exp_1',
        desc: 'Hotel'
    },
    {
        id: 'exp_2',
        desc: 'Food'
    },
    {
        id: 'exp_3',
        desc: 'Cab'
    },
    {
        id: 'exp_4',
        desc: 'Local Transportation'
    },
    {
        id: 'exp_5',
        desc: 'Miscellaneous'
    }
];

export const CURRENCY_LIST = [
    {
        id: 'inr',
        desc: 'Indian Rupee'
    },
    {
        id: 'use',
        desc: 'US Dollor'
    },
    {
        id: 'SGD',
        desc: 'Sigapore Dollor'
    },
    {
        id: 'OMR',
        desc: 'Omen Riyal'
    },
    {
        id: 'sar',
        desc: 'Saudi Riyal'
    }
];

export const SELECTED_EMP_INFO = {
    selectedEmp: '',
    requestType: ''
};

export const REQ_DETAIL = {
    reqEmpName: 'Syed Mohamed',
    reqEmpID: 'U123456',
    reqEmpContact: '9876543210',
    reqJobTitle: 'Product Manager',
    reqDept: 'Information Technology',
    reqTravelStartDate: '',
    reqTravelEndDate: '',
    reqTtotalDays: '',
    reqTravelPurpose: '',
    reqTravelCity: '',
    reqTravelCountry: '',
    reqTotalAmount: '',
    reqIsAdvace: '',
    reqAdvace: ''
}

export const EXPENSES_DETAILS = {
    perDiemExp: [
        // {
        //     id: 'PD_1',
        //     expType: '',
        //     dateIncurred: '',
        //     currencyType: '',
        //     fcAmount: '',
        //     exchangeRate: '',
        //     totalAmount: '',
        //     isAttachment: false
        // },
        // {
        //     id: 'PD_2',
        //     expType: '',
        //     dateIncurred: '',
        //     currencyType: '',
        //     fcAmount: '',
        //     exchangeRate: '',
        //     totalAmount: '',
        //     isAttachment: false
        // }
    ],
   otherExp: [
        // {
        //     id: 'OT_1',
        //     expType: '',
        //     dateIncurred: '',
        //     currencyType: '',
        //     fcAmount: '',
        //     exchangeRate: '',
        //     totalAmount: '',
        //     isAttachment: false
        // },
        // {
        //     id: 'OT_2',
        //     expType: '',
        //     dateIncurred: '',
        //     currencyType: '',
        //     fcAmount: '',
        //     exchangeRate: '',
        //     totalAmount: '',
        //     isAttachment: false
        // }
    ]
};

export const EXPENSES_APPROVAL = [
    {
        id: 'EA_1',
        approveStage: 'DM',
        approverContext: 'Review by',
        approverPosition: 'Department Manager',
        approverName: '',
        approverSign: '',
        approvedDate: '',
        approverCmt: ''
    },
    {
        id: 'EA_2',
        approveStage: 'DD',
        approverContext: 'Verified by',
        approverPosition: 'Division Director',
        approverName: '',
        approverSign: '',
        approvedDate: '',
        approverCmt: ''
    },
    {
        id: 'EA_3',
        approveStage: 'DCO',
        approverContext: 'Approved by',
        approverPosition: 'Division Chief Officer',
        approverName: '',
        approverSign: '',
        approvedDate: '',
        approverCmt: ''
    },
    {
        id: 'EA_4',
        approveStage: 'CEO',
        approverContext: 'Approved by',
        approverPosition: 'Cheif Executive Officer',
        approverName: '',
        approverSign: '',
        approvedDate: '',
        approverCmt: ''
    }
];