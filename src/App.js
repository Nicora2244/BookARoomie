//dependencies
import React from 'react';

// components
import Header from './Components/Header';
import Cards from './Components/Cards';
import { FilterProvider } from './Components/FilterContext';


const App = () => {
	return (
			<FilterProvider>
				<Header />
				<Cards />
			</FilterProvider>
	);
};

export default App;
