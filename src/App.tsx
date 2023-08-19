import { SyntheticEvent, useState } from 'react';

import Todo from './components/Todo';
import useStickyState from './hooks/useStickyState';

export interface TodosTypes {
  id: string;
  todo: string;
  completed: boolean;
  onToggle?: Function;
  onDeleteItem?: Function;
}

function App() {
  const [todo, setTodo] = useState<string>('');
  const [showCompleted, setShowCompleted] = useStickyState(
    false,
    'completedState'
  );
  const [todos, setTodos] = useStickyState([], 'todos');

  function handleToggleItem(id: string) {
    setTodos((todos: TodosTypes[]) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleDeleteTodo(id: string) {
    setTodos(todos.filter((todo: TodosTypes) => todo.id !== id));
  }

  function handleAddItem(e: SyntheticEvent) {
    e.preventDefault();
    if (todo === '') return;

    const newTodo = { id: crypto.randomUUID(), todo, completed: false };
    setTodos([...todos, newTodo]);
    console.log(newTodo);
    setTodo('');
  }

  let completedItems;
  if (showCompleted) {
    completedItems = todos.filter(
      (todo: { completed: boolean }) => !todo.completed
    );
  } else {
    completedItems = todos;
  }

  return (
    <main className='w-full lg:w-[500px] md:p-4 border-[2.8px] border-[#eee] rounded-lg border-solid flex gap-8 flex-col'>
      <form className='py-4 rounded-lg' onSubmit={handleAddItem}>
        <input
          type='text'
          className='px-3 text-2xl py-3 bg-[#f5f5f5] rounded-lg w-full outline-none'
          placeholder='Enter Todo'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </form>
      <div className='w-full flex justify-between text-2xl'>
        <h3 className='font-bold'>Todos</h3>
        <div>
          <input
            type='checkbox'
            id='completed-todos'
            checked={showCompleted}
            onChange={(e) => setShowCompleted(e.target.checked)}
          />{' '}
          <label htmlFor='completed-todos' className='cursor-pointer'>
            Compeleted
          </label>
        </div>
      </div>

      <ul className='flex flex-col gap-2'>
        {completedItems.map((item: TodosTypes) => (
          <Todo
            key={item.id}
            {...item}
            onToggle={handleToggleItem}
            onDeleteItem={handleDeleteTodo}
          />
        ))}
      </ul>
    </main>
  );
}

export default App;
