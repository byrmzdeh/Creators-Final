import React, { useEffect, useState } from 'react'
import Full from '../../components/Full'
import Premier from '../../components/Premier'
import Thinks from '../../components/Thinks'
import Join from '../../components/Join'
import Brand from '../../components/Brand'
import Media from '../../components/Media'
import Cards from '../../components/Cards'
import CompanySlider from '../../components/Company-Slider'
import Cursor from '../../components/Cursor'
import Collab from '../../components/Collab'
import { Helmet } from 'react-helmet'
import "./style.scss"
const Home = () => {

  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2300);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Home</title>
        <link
          rel="icon"
          href=" https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png"
         
        />
      </Helmet>
      {loading ? (
        <div className="loaderCenter">
          <div className="loader">
            <img src="https://superstorefinder.net/support/wp-content/uploads/2018/01/orange_circles.gif" alt="" />
          </div>
        </div>
      ) : (<>
           <Full />
      <Premier />
      <Thinks />
      <Join />
      <Brand />
      <Media />
      <Cards />
      <Collab />
      <CompanySlider />
      <Cursor />
      
      </>)}
 
    </div>
  )
}

export default Home
