import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale ({scaleValue, careType}){
    const range =[1, 2, 3]
    const quantityLabel = {
        1 : "peu",
        2 : "modérement",
        3 : "beaucoup"
    }
    const scaleType = careType ==='light' ?  <img src={Sun} alt='sun-icon'/> 
    : <img src={Water} alt='water-icon'/>

    return <div 
            // message lorsqu'on clique sur les soleils ou gouttes
            onClick={()=> alert(`Cette plante requiert ${quantityLabel[scaleValue]} ${careType==='water'? "d'arrosage" : 'de lumière'}`)}>
                {/* gère le nombre de gouttes ou de soleils à afficher (sur la même ligne) */}
                 {range.map(number => ( 
                      scaleValue >= number && <span key={number.toString()}>{scaleType}</span>
                    ))}
            </div>
}

export default CareScale