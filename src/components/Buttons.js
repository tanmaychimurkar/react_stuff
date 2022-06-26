import React from 'react';
import {PropTypes} from "prop-types";

const onclick = () =>{
    console.log('Click!')
}

const Buttons = ({color, text}) => (
    <button onClick={onclick} style={{background:color }} className={'btn'}>{text}</button>
);

Buttons.defaultProps = {
    color: 'steelBlue'
}

Buttons.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}
export default Buttons;