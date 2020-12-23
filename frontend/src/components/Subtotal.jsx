import React from 'react'
import CurrencyFormat from 'react-currency-format';
import '../styles/Subtotal.css'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';

const Subtotal = () => {

    const [{basket}, dispatch] = useStateValue()
   
    console.log(basket);
    let price = 0
    basket?.map((product) => {
        return price += product.price;
    })
    

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            {/* // part of homework */}
                            subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/> This Order Contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} // part of homework
                displayType={"text"}
                thousandsSeparator={true}
                prefix={"$"}
                />

                <button>Proccessed to checkout</button>
            
        </div>
    )
}

export default Subtotal
