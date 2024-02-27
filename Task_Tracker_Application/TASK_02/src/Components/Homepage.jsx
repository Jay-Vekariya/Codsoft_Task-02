import React, { useState } from "react";

const Homepage = () => {
  const [ToDoItems, setToDoItems] = useState([]);
  const [Texts, setTexts] = useState("");
  const [editID, setEditID] = useState(null);
  const [updatedText, setUpdatedText] = useState("");
  const [complete, setCompleted] = useState(true);

  const handleToDoTask = () => {
    if (Texts.trim() !== "") {
      setToDoItems([...ToDoItems, { id: Date.now(), Texts }]);
      setTexts("");
    }
  };

  const handleCheckbox = (id) => {
    setToDoItems(
      ToDoItems.map((todoItem) =>
        todoItem.id === id
          ? { ...todoItem, complete: !todoItem.complete }
          : todoItem
      )
    );
  };

  const handleDeleteTask = (id) => {
    setToDoItems(ToDoItems.filter((dleItems) => dleItems.id !== id));
  };

  const handleEditIdTask = (id) => {
    const todoItemsEdit = ToDoItems.find((edit) => edit.id === id);
    setEditID(id);
    setUpdatedText(todoItemsEdit.Texts);
  };

  const handleUpdateTask = () => {
    setToDoItems(
      ToDoItems.map((Todos) =>
        Todos.id === editID ? { ...Todos, Texts: updatedText } : Todos
      )
    );
    setEditID(null);
    setUpdatedText("");
  };

  return (
    <div className="bg-slate-800 h-screen pt-24 text-center text-white overflow-scroll">
      <div className="sm:text-[50px] lg:text-[50px] text-white font-serif sm:text-wrap lg:whitespace-nowrap p-4 text-[30px]">
        Task Tracker Application
      </div>

      {/* INPUT BOX & Button */}
      <div className="flex place-content-center gap-6 flex-col p-4 xl:flex  lg:flex  md:flex md:flex-row sm:flex sm:flex-row">
        <input
          type="text"
          value={Texts}
          onChange={(e) => setTexts(e.target.value)}
          className="border-2 border-purple-800 hover:border-blue-500 border-outline-none duration-300 rounded-lg lg:w-[350px] lg:h-12 md:h-12 md:w-[350px] sm:h-12 h-10 sm:w-[350px] bg-slate-800"
        />
        <button
          onClick={handleToDoTask}
          className="text-white text-[20px] border-0 bg-blue-600 lg:p-1.5 md:p-1.5 sm:p-1.5 p-1.5 lg:w-[120px] rounded-md"
        >
          Add Task
        </button>
      </div>

      {/* To Add, update, delete & Mark tasks as complete task here..*/}
      <div className="flex flex-col place-content-center  p-4 text-[20px]">
        <div className="lg:flex lg:place-content-center md:flex  md:place-content-center sm:flex sm:place-content-center flex  place-content-center lg:gap-8 gap-8 ">
          <div className="flex lg:gap-4 gap-4">
            {/* 1.Add a new task */}
            <div className="text-white lg:p-4 p-4">
              <ul>
                {ToDoItems.map((items) => (
                  <>
                    <li key={items.id} className={`list-none lg:flex`}>
                      {editID === items.id ? (
                        <div className="lg:flex lg:gap-x-10">
                          <input
                            type="text"
                            value={updatedText}
                            onChange={(e) => setUpdatedText(e.target.value)}
                            className="border-2 lg:text-center border-purple-800 hover:border-blue-500 border-outline-none duration-300 rounded-lg lg:w-[350px] lg:h-12 md:h-10 md:w-[300px] sm:h-10 h-10 sm:w-[200px] bg-slate-800"
                          />
                          <button
                            onClick={handleUpdateTask}
                            className="bg-green-700 text-white hover:bg-green-70 p-1.5 rounded-md line-through:none"
                          >
                            Update
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="md:flex sm:flex items-center">
                            <div className="lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:place-content-center sm:flex-row flex place-content-center">
                              <div className="lg:flex md:flex sm:flex flex ">
                                {/* 1.Mark as complete */}
                                <input
                                  type="checkbox"
                                  className=" w-5"
                                  key={items.id}
                                  onChange={() => handleCheckbox(items.id)}
                                />
                                <li
                                  className={`${
                                    items.complete ? " line-through" : ""
                                  } lg:p-4 lg:w-60 w-[110px] md:p-4 md:w-60 lg:overflow-hidden lg:text-wrap`}
                                >
                                  {items.Texts}
                                </li>
                              </div>
                            </div>
                            <div className="flex place-content-center gap-6 p-4 lg:items-center md:items-center">
                              <button
                                onClick={() => handleEditIdTask(items.id)}
                                className="bg-green-700 text-white hover:bg-green-70 p-1.5 w-[70px] rounded-md"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteTask(items.id)}
                                className="bg-red-700 text-white hover:bg-green-70 p-1.5 rounded-md"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
