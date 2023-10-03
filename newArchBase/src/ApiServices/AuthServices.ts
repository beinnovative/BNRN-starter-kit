import axiosClient from './client';
import { IEmailLoginPayload, IEmailSignupPayload } from './interfaces';

export const AuthSendOtp = async (data: any) => {
  const response: any = await axiosClient.post('/auth/phone-auth', data);
  return response.data;
};

export const confirmOtp = async (data: {phone: string; otp: string}) => {
  const response: any = await axiosClient.post('/auth/phone-auth/verification', data);
  return response.data;
};

export const emailSignup = async (data: IEmailSignupPayload) => { //TODO: Find the way to use the interface from the container Hooks
  const response: any = await axiosClient.post('/auth/signup', data);
  return response.data;
}
export const emailSignin = async (data: IEmailLoginPayload) => { //TODO: Find the way to use the interface from the container Hooks
  const response: any = await axiosClient.post('/auth/signin', data);
  return response.data;
}


export const refreshToken = async () => {
  const response: any = await axiosClient.post('/auth/refresh');
  return response.data;
};
