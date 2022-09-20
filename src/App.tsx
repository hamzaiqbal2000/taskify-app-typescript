import React, { useState } from 'react';
import './App.css';
import { Todo } from './model';
import InputField from './components/InputField';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  function handleAdd(e: React.FormEvent){
    e.preventDefault();
  }
  return (
    <div className="App">
     <span className='heading'>Taskify</span>
     <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
}

export default App;
