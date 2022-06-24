import { Store } from "vuex/types/index";
//
if ('serviceWorker' in navigator) {
    console.log('Service worker:', 1)
    navigator.serviceWorker.register('/custom-sw.js').then((registrations:any) => {
       // console.log('Service worker:', registrations)
      for (const worker of registrations) {
        console.log('Service worker:', worker)
      }
    });
  }else {
    console.log('Service worker is not working')
  }
  let that = this;
  window.addEventListener("beforeinstallprompt",e =>{
    console.log('fetch data2');
    e.preventDefault();
    console.log('fetch data2',this);
    //document.context.$store.dispatch('general/addInstallPromptEvent',e)
    console.log('fetch data2');
  })
  
  
