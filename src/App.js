import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const inputRef = useRef();

  const AddClick = () => {
    const text = inputRef.current.value;
    if (text === "") {
      return;
    }
    const newItem = { text, completed: false };
    setItems([...items, newItem]);
    inputRef.current.value = "";
  };

  const handleItemDone = (index) => {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  };

  const handleDeleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <body>
      <div className="App">
        <div className="text-container mb-5">
          <h2 className="text-center fw-bolder">Todo List</h2>
          <p className="text-center">
            Add item to the todo list from the input below and submite by add
            button, press the item to check as done and press the cross x to
            delete the item.
          </p>
        </div>
        <div className="to-do-container d-flex flex-column">
          <ul>
            {items.map(({ text, completed }, index) => {
              return (
                <div className="item border border-secondary p-5 d-flex justify-content-between align-items-center mb-3">
                  <li
                    className={completed ? "text-decoration-line-through" : ""}
                    key={index}
                    onClick={() => handleItemDone(index)}
                  >
                    {text}
                  </li>
                  <span
                    onClick={() => handleDeleteItem(index)}
                    className="trash"
                  >
                    ❌
                  </span>
                </div>
              );
            })}
          </ul>
          <div className="formComponents flex items-center">
          <input
            type='text'
            ref={inputRef}
            placeholder="Enter item..."
            className="form-control"
          />
          <button
            onClick={AddClick}
            type="button"
            class="addButton btn btn-primary ms-2"
          >
            Add
          </button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
