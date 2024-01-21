import React, { useState } from "react";
import '../App.css'; 
import { Link } from "react-router-dom"; 


function Hard() {
  // items (list of todo items), newItem (current value of the new item input)
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  // handle new item to the todo list
  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, { text: newItem, completed: false }]);
      setNewItem("");
    }
  };

  // deletes an item 
  const handleDeleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  // completed items 
  const handleToggleCompleted = (index) => {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  };

 
  return (
    <div>
        <Link to="/">
            <p>Home</p>
        </Link>

        <h1>Todo List</h1>
        
        <ul>
            
          {items.map((item, index) => ( // Mapping each todo item to a list element
            <li key={index}>
              <span
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}
                onClick={() => handleToggleCompleted(index)}
              >
                {item.text}
              </span>
              <button onClick={() => handleDeleteItem(index)}>Delete</button>
            </li>
          ))}
        </ul>

        <div>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button onClick={handleAddItem}>Add</button>
        </div>
    </div>
  );
}

export default Hard;
