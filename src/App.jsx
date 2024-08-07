import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [] );

  const [newItem, setNewItem] = useState(''); 

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos)); 
  }, [todos]); 

  const handleTodoInput = () => {
    if (newItem.trim()) { 
      setTodos([...todos, { title: newItem, completed: false }]);
      setNewItem('');
    } else {
      alert('Please enter a task!'); 
    }
  };

  const handleCompletedTodo = (index) => {
    const newTodos = [...todos]; 
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeletedTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>TO-<span   
 style={{ color: 'blueviolet' }}>DO</span> LIST APP</h1>

        <div className="taskInput-container">
          <input
            type="text"
            value={newItem}
            placeholder="Enter your tasks here.."
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button className="add-btn" onClick={handleTodoInput}>
            Add
          </button>
        </div>

        <div className="todos-container">
          {todos.map(({ title, completed }, index) => (
            <div key={index} className="todo-container">
              <li className={completed ? "completed" : ""}>⭐ {title}</li>
              <div className="bts-container">
                <button
                  className="completed-btn"
                  onClick={() => handleCompletedTodo(index)}
                >
                  ✔️
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeletedTodo(index)}
                >
                  ❌
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="madeby">@Made by: Abdulrahman Omar</p>
      </div>
    </div>
  );
}

export default App;