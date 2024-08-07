import './App.css';
import { useState } from 'react';

function App() {

  const [todos , setTodos] = useState([
    

  ])

  const [item , setItem] = useState()

  function handelTodoInput() {
    
    setTodos([...todos , {
      title: item ,
      completed : false
    }])

    setItem('');

  }

  function handleCompletedTodo(index) {
    const newtodos = [...todos];
    newtodos[index].completed = !newtodos[index].completed;
    setTodos(newtodos);
    
  }

  function handleDeletedTodo(index) {
    const newtodos = [...todos];
    newtodos.splice(index , 1);
    setTodos(newtodos);
    
  }

  return (
    <div className="App">

      <div className='container'>


        <h1>TO-<span style={{color:'blueviolet'}}>DO</span> LIST APP</h1>
        

        <div className='taskInput-container'>
          <input type="text" value={item} placeholder='Enter your tasks here..' onChange={(e) => setItem(e.target.value)} />
          <button className='add-btn' onClick={() => handelTodoInput()}>Add</button>
        </div>

        <div className='todos-container'>

          {
          todos.map(({title , completed }, index) => (
            
              <div key={index} className='todo-container'>
                <li className={completed? "completed ": ""}>⭐ {title}</li>

                <div className='bts-conatainer'>
                  <button className="completed-btn" onClick={() => handleCompletedTodo(index)}>✔️</button>
                  <button className="delete-btn" onClick={() => handleDeletedTodo(index)}>❌</button>
                </div>
              </div>
            
          ))
          }

        </div>

        <p className='madeby'>@Made by: Abdulrahman Omar</p>

      </div>


    </div>
  );
}

export default App;
