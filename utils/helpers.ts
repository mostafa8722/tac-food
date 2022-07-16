
export const GetStorage = (name:string)=>{
    if(typeof window !== 'undefined')
    return localStorage?localStorage.getItem(name) :"";
    else
    return  "";
}

export const SetStorage = (name:string,value:any)=>{
    return localStorage.setItem(name,value) ;
}