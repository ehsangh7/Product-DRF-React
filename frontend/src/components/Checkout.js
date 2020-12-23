import React from 'react'
import '../styles/Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

const Checkout = () => {
    const [{basket, user}, dispatch] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
            
                <div className="checkout__title">
                    <h3>Hello {user? user.email : 'Guest'}</h3>
                    <h2 className="checkout__titleH2">
                        Shopping Basket
                    </h2>
                    {/* map through basket items */}
                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id} 
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}/>
                    ))}
                    
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
                <h2>the subTotal</h2>
            </div>
        </div>
    )
}

export default Checkout
