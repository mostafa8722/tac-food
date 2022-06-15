import {AxiosError} from "axios";
import {NuxtAxiosInstance} from "@nuxtjs/axios";

export default function ({$axios}: { $axios: NuxtAxiosInstance }) {
  $axios.onError((error: AxiosError) => {
    if (error.response?.data.message) {
      return Promise.reject(new Error(error.response?.data.message));
    }
    return Promise.reject(new Error('خطای غیر منتظره‌ای رخ داده است'));
  })
}
