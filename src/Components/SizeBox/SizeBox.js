import React from 'react';

const SizeBox = ({sizeChange}) =>
{
    
    return(
        <div className = "flex items-center">
            <p>Átmérő (cm):</p>
            <p className="f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0 mh2" 
                style={{background: "#c4954f"}}
                onClick={ () => sizeChange(Number(process.env.REACT_APP_BASE_SIZE))}>
                    {process.env.REACT_APP_BASE_SIZE}
                </p>
            <p className="f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0 mh2" 
                style={{background: "#c4954f"}}
                onClick={ () => sizeChange(Number(process.env.REACT_APP_MEDIUM_SIZE))}>
                    {process.env.REACT_APP_MEDIUM_SIZE}
                </p>
            <p className="f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0 mh2" 
                style={{background: "#c4954f"}}
                onClick={ () => sizeChange(Number(process.env.REACT_APP_LARGE_SIZE))}>
                    {process.env.REACT_APP_LARGE_SIZE}
                </p>
        </div>
    )
}

export default SizeBox;