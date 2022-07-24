import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Landing, NotFound } from "./pages"

export default function App() {
  	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <Landing/> }/>
				<Route path="*" element={ <NotFound/> }/>
			</Routes>
		</BrowserRouter>
  	)
}
