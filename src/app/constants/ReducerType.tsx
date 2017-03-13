export interface IAccount {
    content: {
        id?: string;
    };
};

export interface ILocales {
    lang: string;
    messages: Object;
};

export interface ILogout {
    sequence: string;
};

export interface ITerms {
    accept: boolean;
    acceptFailed: boolean;
}

export interface ITicker {
    last: number;
    volume24H: number;
    prevcls: number;
}

export interface ITos {
    content: string;
}

export interface IPlaceOrderResponse {
   tipSuccess: boolean;
   tipFailed: boolean;
   backSuccess: boolean;
   backFailed: boolean;
   error: boolean;
   failed: Object;
 }

 export interface ISocket {
    conversation: [
        {}
    ];
    status: boolean;
};
