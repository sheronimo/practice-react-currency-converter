import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './components/CurrencyRow';

// API Key requirements
const BASE_URL = 'https://api.apilayer.com/exchangerates_data/latest';
const myHeaders = new Headers();
myHeaders.append('apikey', 'y5KyszhLEl9V7iWYk7oZTbyuqXM9ema8');

const requestOptions = {
	method: 'GET',
	redirect: 'follow',
	headers: myHeaders
};

function App() {
	const [currencyOptions, setCurrencyOptions] = useState([]);
	console.log(currencyOptions);

	useEffect(() => {
		fetch(BASE_URL, requestOptions)
			.then((response) => response.json())
			.then((result) => setCurrencyOptions([...Object.keys(result.rates)]));
	}, []);

	return (
		<>
			<h1>Convert</h1>
			<CurrencyRow currencyOptions={currencyOptions} />
			<div className='equals'>=</div>
			<CurrencyRow currencyOptions={currencyOptions} />
		</>
	);
}

export default App;
