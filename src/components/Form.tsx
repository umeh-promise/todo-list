export default function Form() {
  return (
    <form className='py-4 rounded-lg'>
      <input
        type='text'
        className='px-3 text-2xl py-3 bg-[#f5f5f5] rounded-lg w-full outline-none'
        placeholder='Enter Todo'
      />
    </form>
  );
}
