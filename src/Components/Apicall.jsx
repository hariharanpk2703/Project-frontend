import React from 'react'
import { useEffect, useState } from 'react'

const Apicall = () => {
    const[data,setData]=useState([])
    
    useEffect(()=>{
        const url = "https://blog-backendjs.herokuapp.com/api/Headlines";
        fetch(url).then(res => res.json())
            .then(res => setData(res))
    },[])
  return (
    <>
    <div>
        {
        data.map((res) => {
            return(
        <div>
            <h1>{res.name}</h1>
            <h1>{res.title}</h1>
            <img src={res.image} alt=""/>
        </div>)
        })}
    </div>
    </>
  )
}

export default Apicall