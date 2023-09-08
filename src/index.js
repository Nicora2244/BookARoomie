// dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// components
import App from './App';

// global styles
import GlobalStyle from './Styles/globalStyle';

ReactDOM.render(
	<>
		<GlobalStyle />
		<App />
	</>,
	document.getElementById('root')
);