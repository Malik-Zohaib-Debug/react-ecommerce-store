import React from 'react'
import BannerLogo from '../assets/banner-logo.jpg';
import BrandLogo1 from '../assets/brand-logo-1.png';
import BrandLogo2 from '../assets/brand-logo-2.png';
import BrandLogo3 from '../assets/brand-logo-3.png';
import BrandLogo4 from '../assets/brand-logo4.png';
import BrandLogo5 from '../assets/brand-logo-5.png';
import BrandLogo6 from '../assets/brand-logo-6.png';
import originalProduct from '../assets/original-products.png';
import customerSatisfaction from '../assets/customer-satisfaction.png';
import fastDelivery from '../assets/fast-delivery.png';
import newArrivals from '../assets/new-arrivals.png';
import mensFastion from '../assets/mens-fashion.jpg';
import womensFashion from '../assets/womens-fashion.jpg';
import electronics from '../assets/electronics.jpg';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className='Home'>
        <div className='Home__ad'>
            <img className='Home__banner' src={BannerLogo} alt='banner-logo'/>
            <div className='home__banner-content'>
                <p>Get Upto <strong>40% OFF</strong></p>
                <button>Get Deals</button>
            </div>
        </div>
        <div className='Home__brands'>
            <img src={BrandLogo1} alt="brand-logo" className='brands__logo'/>
            <img src={BrandLogo2} alt="brand-logo" className='brands__logo'/>
            <img src={BrandLogo3} alt="brand-logo" className='brands__logo'/>
            <img src={BrandLogo4} alt="brand-logo" className='brands__logo'/>
            <img src={BrandLogo5} alt="brand-logo" className='brands__logo'/>
            <img src={BrandLogo6} alt="brand-logo" className='brands__logo'/>
        </div>
        <div className='Home__customer-experience'>
          <div className='Home__customer-experience-header'>
            <p>We provide best<br />customer experience</p>
            <div className='Home__about-customer'>
              <span></span>
              <p>We ensure our customer have the best shopping experience</p>
            </div>
          </div>
          <div className='Home__customer-order-process'>
            <div className='Home__process'>
              <img src={originalProduct} alt='original-product'/>
              <h1>Original Products</h1>
              <p>We provide money-back guarantee if the product are not original</p>
            </div>
            <div className='Home__process'>
              <img src={customerSatisfaction} alt='customer-satisfaction'/>
              <h1>Satisfaction Guarantee</h1>
              <p>Exchange the product you've purchased if it doesn't fit on you</p>
            </div>
            <div className='Home__process'>
              <img src={newArrivals} alt='new-arrivals'/>
              <h1>New Arrival Everyday</h1>
              <p>We updates our collections almost everyday</p>
            </div>
            <div className='Home__process'>
              <img src={fastDelivery} alt='fast-delivery'/>
              <h1>Fast & Free Shipping</h1>
              <p>We offer fast and free shipping for our loyal customer</p>
            </div>
          </div>
        </div>
        <div className='Home__currated-picks'>
          <p>Currated Picks</p>
          <div className='category-fashion'>
            <div className='fashion'>
              <Link to="/mens">
                <img className='fashion-img' src={mensFastion} alt='mens-fashion'/>
              </Link>
            </div>
            <div className='fashion'>
              <Link to="/womens">
                <img className='fashion-img' src={womensFashion} alt='womens-fashion'/>
              </Link>
            </div>
            <div className='fashion'>
              <Link to="/electronics">
                <img className='fashion-img' src={electronics} alt='electronics'/>
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home;