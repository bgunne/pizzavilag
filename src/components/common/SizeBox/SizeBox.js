import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Constants } from '../../../utils/Constants';
const SizeBox = ({ sizeChange }) => {
    return (
        <div className="flex items-center">
            <p>
                <FormattedMessage
                    id="sizebox.size" /> (cm):</p>
            <p className="f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0 mh2"
                style={{ background: "#c4954f" }}
                onClick={() => sizeChange(Constants.PizzaBaseSize)}>
                {Constants.PizzaBaseSize}
            </p>
            <p className="f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0 mh2"
                style={{ background: "#c4954f" }}
                onClick={() => sizeChange(Constants.PizzaMediumSize)}>
                {Constants.PizzaMediumSize}
            </p>
            <p className="f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0 mh2"
                style={{ background: "#c4954f" }}
                onClick={() => sizeChange(Constants.PizzaLargeSize)}>
                {Constants.PizzaLargeSize}
            </p>
        </div>
    )
}
export default SizeBox;