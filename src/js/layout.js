import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Characters } from "./views/characters";
import { Planets } from "./views/planets";
import { Species } from "./views/species";
import { Vehicles } from "./views/vehicles";
import { LearnMoreCard } from "./component/learnMoreCard";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="main-container">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<div className="content-container">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/characters" element={<Characters />} />
							<Route path="/planets" element={<Planets />} />
							<Route path="/species" element={<Species />} />
							<Route path="/vehicles" element={<Vehicles />} />
							<Route path="/info/:type/:uid" element={<LearnMoreCard />} />
							<Route path="*" element={<h1>Not found!</h1>} />
						</Routes>
					</div>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
