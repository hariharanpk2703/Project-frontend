import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
    <div className='Title'>
      <div className='sub-title1'>The</div>
      <div  className='sub-title2'>Siren</div>
    </div>
    <hr/>
    <div className='header'>
          <ul type="none">
              {/* <Link to="/Home" className='Home-css'><li>Home</li></Link> */}
              <Link to="/Headlines" className='Home-css' ><li>Headlines</li></Link>
              <Link to="/Tourism" className='Home-css' ><li>Tourism</li></Link>
              <Link to="/Fitness" className='Home-css'><li>Fitness</li></Link>
              <Link to="/Technology" className='Home-css'><li>Technology</li></Link>
              <Link to="/Food" className='Home-css'><li>Food</li></Link>
          </ul>
    </div>
    <hr/>
  </div>
  )
}

export default Navbar