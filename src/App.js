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
	const [fromCurrency, setFromCurrency] = useState();
	const [toCurrency, setToCurrency] = useState();

	useEffect(() => {
		fetch(BASE_URL, requestOptions)
			.then((response) => response.json())
			.then((result) => {
				const currency = Object.keys(result.rates)[32];
				setCurrencyOptions([...Object.keys(result.rates)]);
				setFromCurrency(result.base);
				setToCurrency(currency);
			});
	}, []);

	return (
		<>
			<h1>Convert</h1>
			<CurrencyRow
				currencyOptions={currencyOptions}
				selectedCurrency={fromCurrency}
				onChangeCurrency={(e) => setFromCurrency(e.target.value)}
			/>
			<div className='equals'>=</div>
			<CurrencyRow
				currencyOptions={currencyOptions}
				selectedCurrency={toCurrency}
				onChangeCurrency={(e) => setToCurrency(e.target.value)}
			/>
		</>
	);
}

export default App;
