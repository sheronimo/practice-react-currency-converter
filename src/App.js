import './App.css';
import CurrencyRow from './components/CurrencyRow';

function App() {
	return (
		<>
			<h1>Convert</h1>
			<CurrencyRow />
			<div>=</div>
			<CurrencyRow />
		</>
	);
}

export default App;
