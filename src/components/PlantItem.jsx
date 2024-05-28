import '../styles/PlantItem.css'

import CareScale from './CareScale'

function PlantItem({name, cover, id, light, water, price}){

return <li key={id} className='plant-item'>
            <span className='plant-item-price'>{price}€</span>
            <img className='plant-item-cover' src={cover} alt={`${name} cover`}/>
            {name}
            <div>
                <CareScale careType='water' scaleValue={water}/>
                <CareScale careType='light' scaleValue={light}/>
            </div>  
</li>
}

export default PlantItem