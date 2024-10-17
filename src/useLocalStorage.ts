import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function useLocalStorage<T>(key:string,defaultValue:T):[T,Dispatch<SetStateAction<T>>]{
    const[value,setValue]=useState<T>(()=>{
        try{
            const sortedItems=window.localStorage.getItem(key);
            return sortedItems?JSON.parse(sortedItems):defaultValue;
        }
        catch(error:any){
            console.log("Error occurred!!! ",error);
            return defaultValue;
        }
    });
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value));
    },[key,value]);
    return [value,setValue];
}