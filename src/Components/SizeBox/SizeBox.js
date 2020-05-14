import React from 'react';

const SizeBox = ({sizeChange}) =>
{
    
    return(
        <div className = "flex items-center">
            <p>Átmérő (cm):</p>
            <p className="f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0 mh2" 
                style={{background: "#c4954f"}}
                onClick={ () => sizeChange(32)}>
                    32
                </p>
            <p className="f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0 mh2" 
                style={{background: "#c4954f"}}
                onClick={ () => sizeChange(45)}>
                    45
                </p>
            <p className="f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0 mh2" 
                style={{background: "#c4954f"}}
                onClick={ () => sizeChange(55)}>
                    55
                </p>
        </div>
    )
}

export default SizeBox;