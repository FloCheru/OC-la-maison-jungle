import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')
	
	function handleInput(e){
		setInputValue(e.target.value)
	}
	function handleBlur() {
		if(!inputValue.includes("@")) alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
	}
	

	return (
		<footer className='footer'>
			<div className='footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='footer-elem'>Laissez-nous votre mail :</div>
			<input type="email" 
				placeholder='Entrez votre mail'
				value={inputValue}
				onChange={handleInput}
				onBlur={handleBlur}>
			</input>
		</footer>
	)
}

export default Footer