import React, { useState } from "react";
import circle from "../assets/Circle.png";
import check from "../assets/Check.png";
import cross from "../assets/Close1.png";

const Todo = () => {
    const [task, setTask] = useState("");

    const [taskList, setTaskList] = useState([]);

    const handleChange = (e) => {
        setTask(e.target.value);
        console.log(task);

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskList.includes(task)) {
            alert("Task already added")

        } else {
            setTaskList([...taskList, { text: task, completed: false }]);
            setTask("");
        }
    };


    const checkTask = (index) => {
        const updatedTask = [...taskList]
        updatedTask[index].completed = !updatedTask[index].completed
        setTaskList(updatedTask)
    }

    const removeTask = (index) => {
        const updatedTasks = taskList.filter((t, i) => i !== index);
        setTaskList(updatedTasks);
    };


    return (
        <div className="min-h-screen w-full bg-[linear-gradient(135deg,#6367FF,#C9BEFF)] flex justify-center items-start">
            <div className="bg-[#C9BEFF] rounded-xl w-full max-w-125 p-6 m-20">
                <p className="font-extrabold text-4xl text-[#6367FF]">Todo</p>

                <form onSubmit={handleSubmit} className=" mt-4 mx-auto flex justify-center">
                    <input
                        type="text"
                        placeholder="Add a task"
                        value={task}
                        className="bg-[rgba(255,255,255,0.225)] text-[#4c60e7] flex-1 rounded-xl p-4 outline-0 border-0 "
                        onChange={handleChange}
                    />
                    <button type="submit" className=" bg-[#4c60e7] text-white font-bold p-4 rounded-xl">ADD</button>
                </form>

                <div>
                    <ul>
                        {taskList.map((t, index) => {
                            return (
                                <li key={index} className="hover:cursor-pointer  bg-[rgba(255,255,255,0.225)] text-[#4c60e7] rounded-xl p-4 my-4 font-bold flex items-center justify-between">
                                    <button onClick={() => checkTask(index)} className=" hover:cursor-pointer hover:bg-[#C9BEFF] p-1 rounded-full">
                                        <img src={t.completed ? check : circle} alt="" />
                                    </button>
                                    <span className="w-[85%]"> {t.text} </span>
                                    <button onClick={()=>removeTask(index)} className=" hover:cursor-pointer hover:bg-[#C9BEFF] p-1 rounded-full"> <img src={cross} alt="" /> </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Todo;
