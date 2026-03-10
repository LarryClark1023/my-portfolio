import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import NavbarBottom from './Components/NavbarBottom';
import TogleTheme from './Components/TogleTheme';
import NavigationLg from './Components/NavigationLg';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

function App() {
	const [toggleDark, settoggleDark] = useState(true);

	const myTheme = createTheme({
		// Theme settings
		palette: {
			mode: toggleDark ? 'dark' : 'light',
			primary: { main: '#066dab' },
			// primary:{main:'#018dff'},
			text: { disabled: '#066dab' },
			// text: { disabled: '#018dff' },
		},
		components: {
			MuiPaper: {
				styleOverrides: {
					root: {
						// backgroundImage:
						// 	'linear-gradient( rgba(255, 255, 255, 0.16), rgb(1 141 255 / 43%), rgba(255, 255, 255, 0.16))',
						// backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.16), #066dab, rgba(255, 255, 255, 0.16))',
						// boxShadow: '0 4px 8px 0 rgb(1 141 255 / 42%)',
						backgroundImage: 'none',
						backgroundColor: 'rgb(21 21 21 / 75%)',
						backdropFilter: 'blur(10px)',
						boxShadow: '0 4px 8px 0 rgb(210 183 111 / 42%)',
						background: toggleDark ? 'rgb(21 21 21 / 75%)' : 'rgba(255, 255, 255, 0.08)',
					},
				},
			},
		},
	});

	return (
		<ThemeProvider theme={myTheme}>
			<CssBaseline />
			<TogleTheme toggleDark={toggleDark} settoggleDark={settoggleDark} />
			<NavigationLg />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/portfolio' element={<Portfolio />} />
			</Routes>

			<NavbarBottom />
		</ThemeProvider>
	);
}

export default App;
