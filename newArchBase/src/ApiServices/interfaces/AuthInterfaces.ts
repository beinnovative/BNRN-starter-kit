export interface IPhoneAuthPayload {
    phone: string;
    referralCode?: string;
}

export interface IOtpVerifyPayload {
    phone: string;
    otp: string;
}


export interface IEmailSignupPayload {
    email: string;
    password: string;
    referralCode?: string;
}

export interface IEmailLoginPayload {
    email: string;
    password: string;
}