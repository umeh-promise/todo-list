import { TodosTypes } from '../App';

export default function Todo({ onToggle, id, completed, todo }: TodosTypes) {
  return (
    <li className='flex items-center gap-1 bg-slate-50 py-2 rounded-md'>
      <input
        type='checkbox'
        id={id}
        value={completed.toString()}
        checked={completed}
        onChange={() => onToggle?.(id)}
      />
      <label htmlFor={id} className='capitalize text-xl cursor-pointer'>
        {todo}
      </label>
    </li>
  );
}
