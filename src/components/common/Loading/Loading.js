import React from 'react';
import Loader from 'react-loader-spinner'
import { FormattedMessage } from 'react-intl';
export const Loading = () => {
	return (
		<div className="appBody" style={{ textAlign: "center" }}>
			<h2>
				<FormattedMessage
					id="app.loading" />
			</h2>
			<Loader
				type="ThreeDots"
				color="#c4954f"
				height={100}
				width={100}
			/>
			<p>
				<FormattedMessage
					id="app.loadingInfo" />
				<a href="https://github.com/bgunne/pizzavilag"><FormattedMessage id="app.loadingLink" /></a>
			</p>
		</div>
	)
}