import React, { useEffect, useState, useRef, useCallback } from 'react'
import Toaster from '../Components/Toaster';
import { TbArrowsRightLeft } from 'react-icons/tb';

export default function useToaster(position = 'top-right' , animation ='translate') {
    const [toasterList ,setToasterList] = useState([]);
    let timer = null;
   
   const deleteToast =useCallback((id) =>{
      console.log(id);
      const newlist = toasterList.filter(toast =>toast.id!==id);
      setToasterList(newlist);
   },[toasterList]);
  const triggerToaster =useCallback((triggerProps) =>{
      clearTimeout(timer)
         const newtoast = {
          id:toasterList.length,
          messege:triggerProps.message,
          type:triggerProps.type, 
         }
         setToasterList((prev) => [ ...prev , newtoast]);
         console.log(toasterList);   
  },[toasterList]);
  const Toast = toasterList.length>0?(<div className={`toasterContainer ${position} `}>
          {toasterList.map((toas,i) =>{
            return <Toaster key={i} {...toas} animation ={animation} position={position} deleteToast = {deleteToast}></Toaster>
          })}
  </div>):<></>
  return {triggerToaster,Toast};
}
