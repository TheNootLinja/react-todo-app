import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app-header-container">
        <h1>ToDo List</h1>
        <p className='new-task-icon' onClick={() => alert('Popup for adding task')}>+</p>
      </div>
      <ul className='todo-card-list'>
        <li className='todo-card'>
          <h2>Item #1</h2>
          <p>This is the description of item #1</p>
          <p>12/31/2023</p>
        </li>
        <li className='todo-card'>
          <h2>Item #2</h2>
          <p>This is the description of item #2</p>
          <p>12/31/2023</p>
        </li>
        <li className='todo-card'>
          <h2>Item #3</h2>
          <p>This is the description of item #3</p>
          <p>12/31/2023</p>
        </li>
        <li className='todo-card'>
          <h2>Item #4</h2>
          <p>This is the description of item #4</p>
          <p>12/31/2023</p>
        </li>
      </ul>
    </div>
  );
}

export default App;
