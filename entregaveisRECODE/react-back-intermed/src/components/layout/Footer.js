import React from "react";

function Footer() {
	return (
		<div>
			
					<div className="footer p-3 mt-4 text-center bg-dark text-light">
						<p>
							<span className="text-warning font-weight-normal">
								Projeto React-Back Intermediario
							</span>
							, com o uso de <i className=" fab fa-react"/> ReactJS &amp; e
							ReduxJS com API da{" "}
							<a href="http://omdbapi.com" target="_blank" rel="noreferrer">
								OMDB
							</a>
						</p>
						<p>Inspirado por<a href="https://www.youtube.com/channel/UCTycUqFolPDJfYuPV83gz4w" target="_blank" rel="noreferrer"> este canal.</a></p>
					</div>
				</div>
	);
}

export default Footer;
