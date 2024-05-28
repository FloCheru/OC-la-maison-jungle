import { useState } from 'react'

import '../styles/ShoppingList.css'

import plantList from '../datas/plantList'
import categories from '../datas/categoryList'
import PlantItem from './PlantItem'
import Categories from './Categories'

function ShoppingList ({cart, updateCart}){

    const [activeCategory, setActiveCategory] = useState('')

    function addToCart (name, price){
        const currentPlantSaved = cart.find(plant => name===plant.name)  
        if(currentPlantSaved){ 
            const cartFilteredCurrentPlant = cart.filter(plant=>plant.name!==name) //sort la liste des plantes sans celle qu'on veut ajouter 
            updateCart([
                ...cartFilteredCurrentPlant, 
                {name, price, amount:currentPlantSaved.amount + 1 } //on ajoute la nouvelle plante (name, price, amount)
            ])
        } else { //on ajoute la plante à cart
                updateCart([...cart, {name,price, amount : 1}])
        }      
    }

    return <div className='shopping-list'>
        <Categories 
            categories = {categories} 
            setActiveCategory={setActiveCategory}
            activeCategory={activeCategory}/>

        <ul className="plant-list">
            { plantList.map(({id, cover, name, water, light, price, category})=>
            (!activeCategory || activeCategory === category) &&
                //affichage des plantes items + bouton ajouter
                // if(category)
                <div key={id}> 
                    <PlantItem name={name} cover={cover} light={light} water={water} price={price}/>
                     <button onClick={()=>addToCart(name, price)}>Ajouter</button>  
                </div>
            )
        }
        </ul>
    </div>
}

export default ShoppingList