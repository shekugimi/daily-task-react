import React from 'react';
import "./Tasks.css";

const Tasks = ({ title, description, deleteTask, index }) => {
    return (
        <>
            <div className="tasks-main">
                <div className='left'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <button onClick={() => deleteTask(index)}>-</button>
            </div>
        </>
    )
}

export default Tasks;