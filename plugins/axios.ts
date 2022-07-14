import {AxiosError} from "axios";
import {NuxtAxiosInstance} from "@nuxtjs/axios";

import Vue from 'vue'
export default function ({$axios,app}: { $axios: NuxtAxiosInstance,app:any }) {
  $axios.onError((error: AxiosError) => {
  
    let status :any  = error.response?.status;
    
    handleError(status,app);
    if (error.response) {
      return Promise.reject(new Error(error.response?.data.message));
    }
    return Promise.reject(new Error('خطای غیر منتظره‌ای رخ داده است'));
  })
}

export const defaultErrorMessages = {
 // 401: `Not Authenticated: Sorry, you have to be logged in to access this!`,
  401: `ثبت نام نکرده اید !`,
  403: `ثبت نام نکرده اید !`,
  404: `Not Found: We couldn't find what you're looking for. Please refresh and try again, or contact the support team.`,
  422: 'Validation Error',
  500: 'Server Error: Please contact the support team.',
}


const handleError= async (status:any,app:any)=>{
  
  let iterableErrorMessages = Object.entries(defaultErrorMessages);


//if(status ==401)
//return app.router.push("/");
if(status ==401 || status ==403 )
app.store.dispatch('home/authenticatedCode', {status : status})


iterableErrorMessages.map(item=>{
    if(item[0] == status )
    Vue.$toast.error(item[1])
  })
}