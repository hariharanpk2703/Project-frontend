import React from 'react'
import { useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const Fitness = () => {
  const[data,setData]=useState([])
    
    useEffect(()=>{
        const url = "https://blog-backendjs.herokuapp.com/api/Fitness";
        fetch(url).then(res => res.json())
            .then(res => setData(res))
    },[])

  return (
    <>
    <div className="tourism-cont">
            <div className='main-cont'>
                <div className='top-heading'>
                    <div><h2>Fitness</h2></div>
                    <div className='toppost-border'></div>
                </div>
                {
                    data.map((res) =>
                        <div className='design'>
                            <div >
                                <Link to={res.id}><img className="images" src={res.image} alt="" /></Link>
                            </div>
                            <div className='content-data'>
                                <div >
                                    <h2>{res.title}</h2>
                                </div>
                                <div>
                                    <p>{res.category}</p>
                                </div>
                                

                            </div>
                        </div>

                    )
                }
                {/* <div className='Horizontalline'>
                </div> */}
            </div>

            <div className='main-cont1'>
                <div className='top-heading'>
                    <div><h2>Top-Posts</h2></div>
                    <div className='toppost-border'></div>
                </div>
                {
                    data.map((res) =>
                        <div className='design1'>
                            <div >
                                <Link to={res.id}><img className="images1" src={res.image} alt="" /></Link>
                            </div>
                            <div className='content-data'>
                                <div >
                                    <h3>{res.title}</h3>
                                </div>

                                {/* <div>
                                    <h5>{res.note}</h5>
                                </div> */}
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    </>
  )
}

export default Fitness;