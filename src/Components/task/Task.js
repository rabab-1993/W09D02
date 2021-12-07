import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const Task = () => {
  const [task, setTask] = useState([]);
  const state = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    allTask();
  }, []);
  console.log(state);
  const allTask = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/tasks/`, {
            id: state.signIn.user._id
        },
        {
          headers: {
            Authorization: `Bearer ${state.signIn.token}`,
          },
        }
      );
      setTask(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  const adTask = async () => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/tasks/task`,
        task,
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      setTask(result.data);
    
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder="text"
        onChange={(ev) => setTask(ev.target.value)}
      />
      <button onClick={adTask}>ADD</button>
    </div>
  );
};

export default Task;
