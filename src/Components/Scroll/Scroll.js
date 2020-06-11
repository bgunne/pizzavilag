import React from 'react';
const Scroll = (props) => {
    return (
        <div className="flex justify-between" style={{ overflowY: 'scroll', height: 'auto', minHeight:'75vh'}}>
            {props.children}
        </div>
    );
}
export default Scroll;