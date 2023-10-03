import { emailSignin, emailSignup } from "@/ApiServices";
import { usePost } from "@/Hooks";
import { showToast } from "@/Shared/utils";
import { loginReducer } from "@/Store/Auth";
import { FormikFormProps, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

interface IEmailAuthValues {
    email: string;
    password: string;
}



const useEmailAuth = (type : 'signup' | 'signin') =>{
    const isSignup = type === 'signup';
    const dispatch = useDispatch();

    //capture the values using formik and yup validators
    //send the values to the server
    const form  = useFormik({
        initialValues:{
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid Email.').required("Email is required"),
            password: Yup.string().min(8, "Password Too Short!").required("Password is required"),
        }),
        onSubmit: (values) => {
            console.log(values);
            submitPost.mutate(values);
        },
    });

    const handleInput = (text : string, field : string) => {
        form.setFieldValue(field,text);
    }

    const submitPost = usePost((values: IEmailAuthValues | any) => isSignup ? emailSignup(values) : emailSignin(values) );
     //TODO: Find the way to use the interface 

    useEffect(() => {
        if (submitPost.data) {
            let { success, message, error, access_token } = submitPost.data || {};
            if (access_token) {
                dispatch(loginReducer(submitPost.data));
            } else {
                showToast(message || error, 'error');
            }
        }
    }, [submitPost.data]);


    return {
        ...form,
        ...submitPost,
    }
}


export default useEmailAuth;