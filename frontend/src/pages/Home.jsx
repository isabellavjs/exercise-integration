import React, { useState } from 'react';
import TodoList from '../components/TodoList';
import useArray from '../hooks/useArray';

function Home() {
  const [newInput, setNewInput] = useState('');
  const { addTodos, todos } = useArray();

  const handleInput = ({ target }) => {
    setNewInput(target.value);
  }

  const handleClick = () => {
    addTodos(newInput);
    setNewInput('');
  }

  return (
    <div>
      <h1>To-do List</h1>
      <main>
        <input
        placeholder="Cozinhar"
        type="text"
        value={newInput}
        onChange={handleInput}
        />
        <button onClick={() => handleClick()}>Adicionar</button>
        <TodoList todos={todos} />
      </main>
    </div>
  )
}

export default Home;
