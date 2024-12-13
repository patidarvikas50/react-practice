import React, { useState } from "react";

const TodoList = () => {

    const dummyData = [
        { title: "Todo Item 1", id: "0" },
        { title: "Todo Item 2", id: "1" },
        { title: "Todo Item 3", id: "2" },
        { title: "Todo Item 4", id: "3" },
        { title: "Todo Item 5", id: "4" },
    ]

    const [todoItems, setTodoItems] = useState(dummyData);
    const [title, setTitle] = useState("")



  

    const handleDelete = (index) => {
        // console.log(index,"delete ")

        const newTodoItems = todoItems.filter((item, itemIndex) =>

            itemIndex !== index);

        setTodoItems(newTodoItems);
    }

    const handleAdd = () => {
        if (title !== "") {
            const newId = Number(todoItems?.[todoItems.length - 1]?.id) +1;
            
            console.log(newId, "newid");

            const newTodoList = [...todoItems, { title: title, id: newId }];
            setTodoItems(newTodoList);
            setTitle("");
        }
    }
    return (


        <div className="list-container">
            <div className="form-container">
                <input
                placeholder="Please Enter Title"
                    className="input-field"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />

                <button
                    disabled={title === ""}
                    type="button"
                    className="add-btn"
                    onClick={handleAdd}>Add</button>
            </div>


            <ul className="todo-ul">
                {todoItems?.map((item, index) => (
                    <li key={item?.id}>
                        {" "}
                        {item.title} <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button> {" "}</li>
                ))}

            </ul>
        </div>

    )
}

export default TodoList