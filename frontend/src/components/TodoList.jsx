function TodoList({ todos }) {
  return (
    <div>
      <ul>
        {
          todos.map((item) => <li>{item}</li>)
        }
      </ul>
    </div>
  )
}

export default TodoList;
