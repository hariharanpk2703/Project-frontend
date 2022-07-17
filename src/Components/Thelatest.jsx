import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


const Thelatest = () => {
    const[data,setData]=useState([])
    
    useEffect(()=>{
        const url = "https://blog-backendjs.herokuapp.com/api/Home";
        fetch(url).then(res => res.json())
            .then(res => setData(res))
    },[])

  return (
    <>
            <div className='latestheading'><h1>The-Latest</h1>
                <div className='border-bottoms'></div></div>
            <div className='latest-cont'>

                {   // eslint-disable-next-line
                    data.map((res) => {
                        if (res.id === 6) {
                            return (
                                <div key={res} className="latest-fitness" >

                                    <div>
                                        <Link to={`/Fitness/${res.id}`}><img src={res.image} style={{ height: "200px", width: "300px" }} alt="From The Article" /></Link></div>
                                    <div><h2>Fitness</h2></div>
                                    <div>
                                        {/* icle.CategoryName}`} className={styles.AllSections_Title}>{  article.Title  }</NavLink>to={`/article/${article.Title}/${art */}
                                        <div >{res.note}</div>
                                    </div>
                                    {/* <div>
                                        <span ><h4>{article.date}</h4></span>
                                        <span > / { article.PublishedDate  }</span>
                                    </div> */}
                                </div>
                            )
                        }
                    }
                    )
                }

                {  // eslint-disable-next-line
                    data.map((res) => {
                        if (res.id === 21) {
                            return (
                                <div key={res} className='latest-fitness'>
                                    <div>
                                        <Link to={`/Tourism/${res.id}`}><img src={res.image} style={{ height: "200px", width: "300px" }} alt="From The Article" /></Link></div>
                                    <div><h2>Bollywood</h2></div>
                                    <div>
                                        {/* icle.CategoryName}`} className={styles.AllSections_Title}>{  article.Title  }</NavLink>to={`/article/${article.Title}/${art */}
                                        <div >{res.note}</div>
                                    </div>
                                    {/* <div>
                                        <span ><h4>{moviedetails.date}</h4></span>
                                        
                                    </div> */}
                                </div>
                            )
                        }
                    }

                    )
                }

                {  // eslint-disable-next-line
                    data.map((res) => {
                        if (res.id === 11) {
                            return (
                                <div key={res} className='latest-fitness'>
                                    <div>
                                        <Link to={`/Food/${res.id}`}><img src={res.image} style={{ height: "200px", width: "300px" }} alt="From The Article" /></Link></div>
                                    <div><h2>Food</h2></div>
                                    <div>
                                        {/* icle.CategoryName}`} className={styles.AllSections_Title}>{  article.Title  }</NavLink>to={`/article/${article.Title}/${art */}
                                        <div >{res.info}</div>
                                    </div>
                                    {/* <div>
                                        <span ><h4>{fooddetails.date}</h4></span>
                                        
                                    </div> */}
                                </div>
                            )
                        }
                    }

                    )
                }



            </div>
        </>
  )
}

export default Thelatest