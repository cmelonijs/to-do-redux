import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, addTodos } from "../../store/todoSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddTodoComponent = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.length === 0) return alert("Please enter a todo")
        if(text.length > 30) return alert("Todo must be less than 30 characters")
        // ADD SINGLE TODO
        // dispatch(addTodo({
        //     id: nanoid(),
        //     todo: text,
        //     completed: false
        // }));
        // ADD MULTIPLES TODO SEPARATED BY COMMAS: ALTERNATIVE MOETHOD
        // const items = text.split(",");
        // items.forEach(item => {
        //     dispatch(addTodo({
        //         id: nanoid(),
        //         todo: item,
        //         completed: false
        //     }));
        // });
        // ADD MULTIPLES TODO SEPARATED BY COMMAS
        dispatch(addTodos(text.split(",").map(item => ({id: nanoid(), todo: item, completed: false}))));
        setText("");

    }

    return (
        <div className="add-todo">
            <p>Add</p>
            <input value={text} type="text" onChange={(e) => setText(e.target.value) } />
            <button onClick={handleSubmit}>Add</button>
        </div>
    )
}

export default AddTodoComponent;
