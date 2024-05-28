import '../styles/Categories.css'

import categoryList from '../datas/categoryList'

function Categories ({setActiveCategory, categories, activeCategory}) {
    return <div className='categories'>
                <select
                    value={activeCategory}
                    onChange={(e)=>setActiveCategory(e.target.value)}
                    className='categories-select'>
                        <option value="">---</option>
                        {categoryList.map(category=>(
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                </select>
                <button onClick={()=>setActiveCategory('')}>Réinitialiser</button>
            </div>
}

export default Categories