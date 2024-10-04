import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<>
		<div className="container">
			<footer className="d-flex flex-wrap justify-content-between align-items-center fixed-bottom">
				<p className="col-md-4 mb-0 text-body-secondary createdby">Created by: Miguel E. Navas R.</p>

				<Link className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none" to="/">
					<img id="local-nav-logo-desktop" src="https://i.pinimg.com/originals/ee/ec/fb/eeecfb4866cb83c610f0f29400f541ad.png" alt="Star Wars Logo"/>
				</Link>

				<ul className="nav col-md-4 justify-content-end">
					<li className="nav-item">
						<Link className="nav-link rounded-pill footerLetters" to="/characters">People</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link rounded-pill footerLetters" to="/planets">Planets</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link rounded-pill footerLetters" to="/species">Species</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link rounded-pill footerLetters" to="/vehicles">Vehicles</Link>
					</li>
				</ul>
			</footer>
		</div>
	</>
);
