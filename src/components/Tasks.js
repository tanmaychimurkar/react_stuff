import React from 'react';
import {useState} from "react";
import Taskcomp from "./Taskcomp";

// const tasks = [
//         {
//             "id": 1,
//             "text": "Doctors Appointment",
//             "day": "Feb 5th at 2:30pm",
//             "reminder": true
//         },
//         {
//             "id": 2,
//             "text": "Meeting at School",
//             "day": "Feb 6th at 1:30pm",
//             "reminder": true
//         }
//     ]

const Tasks = ({onDelete}) => {
    const [tasks, setTasks] = useState([
        {
            "id": 1,
            "text": "Doctors Appointment",
            "day": "Feb 5th at 2:30pm",
            "reminder": true
        },
        {
            "id": 2,
            "text": "Meeting at School",
            "day": "Feb 6th at 1:30pm",
            "reminder": true
        }
    ])

    return (
        <div>
            {tasks.map((task) => (
                <Taskcomp key={task.id} task={task} onDelete={onDelete}></Taskcomp>))}
        </div>
    );
};

export default Tasks;
