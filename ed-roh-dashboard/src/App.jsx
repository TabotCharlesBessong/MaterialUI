import { useState } from 'react'
import { Header } from './components'
import { Route , Routes} from 'react-router-dom'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./components/ui/Theme";
import {Dashboard} from './pages/index'

function App() {
  const [theme, colorMode] = useMode();

  return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="app">
					<Header />
					<Routes>
						<Route path="/" element={<Dashboard />} />
					</Routes>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App
