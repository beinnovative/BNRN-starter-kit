import { AuthSendOtp, confirmOtp } from "@/ApiServices";
import { Strings } from "@/Assets/res";
import { usePost } from "@/Hooks";
import { showToast } from "@/Shared/utils";
import { loginReducer } from "@/Store/Auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const usePhoneAuth = () => {
    const dispatch = useDispatch();
    const [otpSent, setOtpSent] = useState<boolean>(false);
    const [phone, setPhone] = useState<string>('');
    const [otp, setOtp] = useState<string>('');

    const {
        data: otpResponse,
        isLoading: loadingSentOtp,
        mutate: mutateSendOtp,
    } = usePost(() => AuthSendOtp({ phone: Strings.COUNTRY_PHONE_CODE + phone }));

    const {
        data: otpVerifyResponse,
        isLoading: loadingVerifyOtp,
        mutate: mutateVerifyOtp,
    } = usePost(() =>
        confirmOtp({
            phone: Strings.COUNTRY_PHONE_CODE + phone,
            otp,
        }),
    );

    useEffect(() => {
        console.log('otpResponse', otpResponse)
        if (otpResponse) {
            let { success, message } = otpResponse;
            if (success && message) {
                setOtpSent(true);
                showToast(message, 'success');
            }
        }
    }, [otpResponse]);

    useEffect(() => {
        if (otpVerifyResponse) {
            let { success, message, error, access_token } = otpVerifyResponse || {};
            if (access_token) {
                dispatch(loginReducer(otpVerifyResponse));
            } else {
                showToast(message || error, 'error');
            }
        }
    }, [dispatch, otpVerifyResponse]);

    return{
        otp,
        setOtp,
        phone,
        setPhone,
        otpSent,
        setOtpSent,
        loadingSentOtp,
        loadingVerifyOtp,
        mutateSendOtp,
        mutateVerifyOtp,
        otpResponse,
        
    }
}


export default usePhoneAuth;