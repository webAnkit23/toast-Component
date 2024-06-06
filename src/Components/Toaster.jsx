import React from 'react'
import { IoIosWarning } from "react-icons/io";
import { MdError } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";
import { IoMdThumbsUp } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import './Toaster.css';
 const icons ={
    success: <IoMdThumbsUp size={35}/>,
    error:<MdError size={35}/>,
    info:<IoMdInformationCircle size={35}/>,
    warning:<IoIosWarning color='rgb(248 227 146)' size={35}/>
 }
export default function Toaster({id , messege = 'this is a success messege' , type ='error',animation ,position,deleteToast}) {
  return (
    <div className={`toast ${type} ${animation+position} ${animation}`}>
        <div>{icons[type]}  </div>
        <p>{messege}</p>
        <RxCross2 className='cross' onClick={() =>deleteToast(id)} size={25}/>
    </div>
  )
}
