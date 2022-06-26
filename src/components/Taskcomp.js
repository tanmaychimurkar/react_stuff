import React from 'react';
import {FaTimes} from "react-icons/all";

const Task = ({task, onDelete}) => {
    return (
        <div className={'task'}>
            <h3>{task.text} <FaTimes style={{color:'red', cursor:'pointer'}} onClick={onDelete}></FaTimes></h3>
            <p>{task.day}</p>
        </div>
    );
};

export default Task;
