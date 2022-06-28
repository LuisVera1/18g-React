import { useState, useEffect } from 'react';

//Services
import { getCharacters } from '../../services/characters';
import createCard from '../../components/card';

export default function Home() {
	const [characters, setCharacters] = useState([]);

	// REQUEST A Rick and Morty API.
	useEffect(() => {
		const getCharactersQuery = async () => {
			const data = await getCharacters();
			setCharacters(data.results);
		};
		getCharactersQuery();
	}, []);




  const cards = characters.map((character,index)=>{
    return(
			createCard(character,index)
		)
  })



	//console.log(characters, 'STATE characters');

	return (
		<div>
			<h1>Bienvenido</h1>

			<ul>{cards}</ul>
		</div>
	)
}


// 1. Componente se Monta
// 2. Estado se define como []
// 3. Se renderiza
// 4. Se ejecuta el useEffect
// 5. Se ejecuta una petición al servidor y se espera
// 6. Con la respuesta del servidor, actualizamos el estado
// 7. Se renderiza el componente, pero ahora el state, tiene el valor
// del resultado del servidor