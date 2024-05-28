import { useState } from 'react'
import { useEffect } from 'react'
import '../styles/Cart.css'

function Cart({cart, updateCart}){
        const [isOpen, setIsOpen]=useState(true)
        const total = cart.reduce((acc, plant) => acc + plant.amount*plant.price , 0)

        useEffect(()=> {
                document.title=`LMJ: ${total}€ d'achats`
        }, [total])

        return isOpen ? 
                <div className='cart'>
                        <button 
                        className='cart-toggle-button'
                        onClick ={()=>setIsOpen(false)}>
                                Fermer
                        </button>
                        <h2>Panier</h2>
                        {cart.map(({name, price, amount},index)=> ( //d'où sont récupérées ces ddatas ?
                               <div key={`${name}-${index}`}>
                                        {name} {price}€ x {amount}
                               </div> 
                        ))} 
                         <h3>Total : {total}€</h3>
                        <button onClick={()=>updateCart([])}>Vider le panier</button>
                </div> 
                :       
                <div className='cart-closed'>
                        <button
                        className='cart-toggle-button'
                        onClick ={()=>setIsOpen(true)}>
                                Ouvrir le panier
                        </button>
                </div>
                        
}

export default Cart