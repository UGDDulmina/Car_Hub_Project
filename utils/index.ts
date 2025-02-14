const nodeFetch = require('node-fetch');

const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'bf0a52d96dmsh4348f8f82a57fe6p133c5fjsn4501add649e4',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
};

try {
  const response = await nodeFetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

export async function fetchCars(){
    const headers ={
        'x-rapidapi-key': 'bf0a52d96dmsh4348f8f82a57fe6p133c5fjsn4501add649e4',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

   const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla' , {
        headers:headers,
   });

   const result = await await response.json();

   return result;
}