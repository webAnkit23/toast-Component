import React, {  useEffect, useRef } from 'react'

export default function useTimeout(callback) {
  const callbackRef = useRef(callback);

  useEffect(() =>{
    callbackRef.current = callback;
  },[callback]);
  useEffect(()=>{
     const id = setTimeout(() =>{
               callbackRef.current();
     },3000);
     return () => clearTimeout(id);
  },[]);
}
