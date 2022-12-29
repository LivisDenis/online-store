const Search = () => (
  <div className='flex max-w-[420px] flex-auto items-center justify-end'>
    <input
      type='text'
      placeholder='Я ищу...'
      className='h-10 w-full rounded-bl-[10px] rounded-tl-[10px] border-[1px] border-green-500 py-[10px] pl-6'
    />
    <button className='h-10 w-10 rounded-br-[10px] rounded-tr-[10px] bg-green-500 p-[10px]'>
      <svg
        width='19'
        height='20'
        viewBox='0 0 19 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M18.8841 17.8866L13.3647 12.3293C14.4115 11.028 15.0417 9.37369 15.0417 7.57251C15.0417 3.39705 11.6678 0 7.52084 0C3.37385 0 0 3.39705 0 7.57251C0 11.748 3.37388 15.145 7.52088 15.145C9.30978 15.145 10.9528 14.5105 12.2453 13.4565L17.7647 19.0138C17.9193 19.1693 18.1698 19.1693 18.3245 19.0138L18.8841 18.4503C19.0386 18.2946 19.0386 18.0422 18.8841 17.8866ZM7.52088 13.5508C4.24674 13.5508 1.58336 10.8691 1.58336 7.57251C1.58336 4.2759 4.24674 1.59423 7.52088 1.59423C10.795 1.59423 13.4584 4.2759 13.4584 7.57251C13.4584 10.8691 10.795 13.5508 7.52088 13.5508Z'
          fill='white'
        />
      </svg>
    </button>
  </div>
);

export default Search;
