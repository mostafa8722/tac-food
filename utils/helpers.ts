
export const GetStorage = (name:string)=>{
    return localStorage?localStorage.getItem(name) :"";
}

export const SetStorage = (name:string,value:string)=>{
    return localStorage.setItem(name,value) ;
}