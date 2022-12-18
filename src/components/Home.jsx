
import React, { useState, useEffect } from 'react';
import "./Home.css";


import Tasks from "./Tasks";

const Home = () => {

    const initialArray = localStorage.getItem("tasks")
        ? JSON.parse(localStorage.getItem("tasks"))
        : [];

    const [tasks, setTasks] = useState(initialArray);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        if (title === "" || description === "") {
            alert("Please enter some tasks");
        } else

            setTasks([...tasks, { title, description }]);

    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));

    }, [tasks])

    const deleteTask = (index) => {
        const filteredArr = tasks.filter((val, i) => {
            return i !== index;
        })

        setTasks(filteredArr);
    }

    return (
        <>
            <div className='home-container'>
                <h1>Daily Goals</h1>
                <form>
                    <input type="text" placeholder="Task Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required />
                    <input type="text" placeholder='Task Description'
                        value={description} onChange={(e) => setDescription(e.target.value)} required />
                    <button type="submit" onClick={submitHandler}>Add Task</button>
                </form>
            </div>
            {tasks.map((item, idx) => (
                <Tasks
                    key={idx}
                    title={item.title}
                    description={item.description}
                    deleteTask={deleteTask}
                    index={idx} />
            ))}
        </>
    )
}
export default Home;