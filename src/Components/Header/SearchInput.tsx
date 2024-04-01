function SearchInput() {
    return (
      <div className="hidden md:flex w-80 items-center bg-neutral-100 border-[1px] border-neutral-500 p-1 rounded-md gap-x-2">
        <input className="bg-transparent w-full text-md pl-2 outline-none border-none" 
        type="text" name="" id="" 
        placeholder="Buscar productos..." maxLength={30}/>
        
        <i className='bx bx-search text-2xl text-neutral-900 font-semibold cursor-pointer'></i>
      </div>
    );
}

export default SearchInput


