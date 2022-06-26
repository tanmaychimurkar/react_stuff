import React from 'react'
import {PropTypes} from "prop-types";
import Buttons from "./Buttons";

const Header = (props) => (
    <header className={'header'}>
        <h1>{props.title}</h1>
        <Buttons color={'green'} text={'Add'} ></Buttons>
    </header>
    
);

Header.defaultProps  = {
    title:'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header;