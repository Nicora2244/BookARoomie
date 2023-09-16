//dependencies
import React from 'react';

// components
import Header from './Header';
import Cards from './components/Cards';
import { FilterProvider } from './FilterContext';

const App = () => {
	return (
			<FilterProvider>
				<Header />
				<Cards />
			</FilterProvider>
	);
};

export default App;
