import React from 'react';
import { FormattedMessage } from 'react-intl';
export const Loading = () =>{
	return(
		<div className="appBody" style={{ textAlign: "center" }}>
			<h1>
				<FormattedMessage
					id="app.loading" />
			</h1>
			<i className="gg-spinner-alt" style={{ margin: "auto" }}></i>
			<p>
				<FormattedMessage
					id="app.loadingInfo" />
				<a href="https://github.com/bgunne/pizzavilag"><FormattedMessage id="app.loadingLink" /></a>
			</p>
		</div>
	)
}