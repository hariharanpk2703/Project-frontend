import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom';

const Images = () => {
    const[data,setData]=useState([])
    
    useEffect(()=>{
        const url = "https://blog-backendjs.herokuapp.com/api/Home";
        fetch(url).then(res => res.json())
            .then(res => setData(res))
    },[])
  return (
    <>
    <div className="atricle-components" >
                <div className='article-leftcomponent' >
                    {   // eslint-disable-next-line
                        data.map((res) => {
                            if (res.id === 1) {
                            
                                return (

                                    <Link to={res.id} className='Home-css'>
                                        <div className="back-image" style={{
                                            backgroundImage: `url(${res.image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
                                            width: "800px", height: "500px"
                                        }}><div className=""><span><h4>{res.title}</h4></span>
                                            </div>

                                        </div>

                                    </Link>



                                )
                                    }
                        }
                        )
                    }
                </div>

                <div className='article-rightcomponent'>
                    <div >
                        <div>
                            {// eslint-disable-next-line
                                data.map((res) => {
                                    if (res.id === 6) {
                                        return (
                                            <Link to={res.id} className='Home-css'>
                                                <div className="back-image2" style={{
                                                    backgroundImage: `url(${res.image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
                                                    width: "300px", height: "180px"
                                                }}>

                                                    {/* <div className="">

                                                        <span>{articles.date}</span>
                                                    </div> */}
                                                </div>
                                            </Link>
                                        )
                                            }
                                }
                                )

                            }
                        </div>
                        <div>
                            {
                                // eslint-disable-next-line
                                data.map((res) => {
                                    if (res.id === 16) {
                                        return (
                                            <Link to={res.id} className='Home-css'>
                                                <div className="back-image3" style={{
                                                    backgroundImage: `url(${res.image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
                                                    width: "400px", height: "280px"
                                                }}>

                                                    {/* <div className="">

                                                        <span>{article.date}</span>
                                                    </div> */}
                                                </div>
                                            </Link>
                                        )
                                    }
                                }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Images;