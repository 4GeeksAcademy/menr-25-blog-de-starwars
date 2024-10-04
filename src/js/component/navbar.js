import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "./dropdown";

export const Navbar = () => {
	return (
		<>
			<div className="p-1 p-lg-2 mb-5">
				<div className="overflow-x-hidden rounded-top-4 pt-2 pt-lg-4">
					<header>
						<div className="w-lg-75 mx-2 mx-lg-auto position-relative z-2 px-lg-3 py-1 ">

							<nav className="navbar navbar-expand-lg navbar-dark p-0 border-bottom" id="navbar">

								<div className="container px-sm-0">

									<Link className="navbar-brand d-inline-block w-lg-64" to="/">
										<img id="local-nav-logo-desktop" src="https://i.pinimg.com/originals/ee/ec/fb/eeecfb4866cb83c610f0f29400f541ad.png" alt="Star Wars Logo"/>
									</Link>
									


									<div className="collapse navbar-collapse" id="navbarCollapse">
										<ul className="navbar-nav gap-2 mx-lg-auto">
											<li className="nav-item">
												<Link className="nav-link rounded-pill navbarLetters" to="/characters">People</Link>
											</li>
											<li className="nav-item">
												<Link className="nav-link rounded-pill navbarLetters" to="/planets">Planets</Link>
											</li>
											<li className="nav-item">
												<Link className="nav-link rounded-pill navbarLetters" to="/species">Species</Link>
											</li>
											<li className="nav-item">
												<Link className="nav-link rounded-pill navbarLetters" to="/vehicles">Vehicles</Link>
											</li>
										</ul>

										<div className="navbar-nav align-items-lg-center justify-content-end gap-2 ms-lg-4 w-lg-64">
											<Dropdown/>
										</div>
									</div>
								</div>
							</nav>
						</div>
					</header>
				</div>
			</div>
		</>
	);
};
