// dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// components
import App from './App';

// global styles
import GlobalStyle from './Styles/globalStyles';

ReactDOM.render(
	<>
		<GlobalStyle />
		<App />
	</>,
	document.getElementById('root')
);