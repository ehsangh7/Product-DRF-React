import React from 'react'
import '../styles/Home.css'
import Product from './Product'
import img1 from '../images/61lnzTv2a0L._AC_SL1000_.jpg'
import img2 from '../images/81smEEgnhfL._AC_SL1500_.jpg'
import img3 from '../images/71iB-QmRWEL._AC_SL1500_.jpg'
import img4 from '../images/61-M4tS6HOL._AC_SL1000_.jpg'
import img5 from '../images/71y+UGuJl5L._SL1500_.jpg'


const products = {
    product1 : {
        id: 1,
        title: 'RUNMUS Gaming Headset Xbox One Headset with 7.1 Surround Sound, PS4 Headset with Noise Canceling Mic & LED Light, Compatible with PC, PS4, PS5, Switch, Xbox One Controller(Adapter Not Included)' ,
        price: 36.99,
        image: img1 ,
        rating: 5,
    },
    product2 : {
        id: 2,
        title: 'AmazonBasics 2 Slice, Extra-Wide Slot Toaster with 6 Shade Settings, Black' ,
        price: 22.99,
        image: img2 ,
        rating: 5,
    },
    product3 : {
        id: 3,
        title: 'AmazonBasics 12-Piece Colored Kitchen Knife Set' ,
        price: 25.99,
        image: img3 ,
        rating: 5,
    },
    product4 : {
        id: 4,
        title: 'iPhone Charger Cord 4Pack iPhone Charger Cable MFi Certified Lightning Cable Fast iPhone Charging Cord Nylon Braided iPhone Charging Cable Compatible with Phone 11 Pro max/XR max/8/7/6/6s/SE 2020,iPad' ,
        price: 12.99,
        image: img4 ,
        rating: 5,
    },
    product5 : {
        id: 5,
        title: 'DualSense Wireless Controller' ,
        price: 69.96,
        image: img5 ,
        rating: 5,
    }
}

const Home = () => {


    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg" alt=""/>
                <div className="home__row">
                    <Product 
                        id={products.product1.id}
                        title={products.product1.title} 
                        price={products.product1.price} 
                        image={products.product1.image}
                        rating={products.product1.rating}
                    />
                    <Product 
                        id={products.product2.id}
                        title={products.product2.title} 
                        price={products.product2.price} 
                        image={products.product2.image}
                        rating={products.product2.rating}/>   
                </div>
                <div className="home__row">
                    <Product 
                        id={products.product3.id}
                        title={products.product3.title} 
                        price={products.product3.price} 
                        image={products.product3.image}
                        rating={products.product3.rating}
                        />
                    <Product 
                        id={products.product4.id}
                        title={products.product4.title} 
                        price={products.product4.price} 
                        image={products.product4.image}
                        rating={products.product4.rating}
                    />
                    <Product 
                        id={products.product5.id}
                        title={products.product5.title} 
                        price={products.product5.price} 
                        image={products.product5.image}
                        rating={products.product5.rating}
                    />
                </div>
                <div className="home__row">
                    {/* <Product />   
                    <Product />       */}
                </div>
                
            </div>
        </div>
    )
}

export default Home
