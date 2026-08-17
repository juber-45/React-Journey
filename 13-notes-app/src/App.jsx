import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);

    setTitle('');
    setDetails('');
  };

  const noteDelete = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);  
  }

  return (
    <div className='lg:flex h-screen bg-black text-white'>

      <form
        onSubmit={(e) => {
          formHandler(e);
        }}
        className='lg:w-1/2 flex items-start flex-col gap-10 p-8'
      >

        {/* Heading Input */}
        <input
          className='px-5 py-2 w-full outline-none border-2 rounded-xs'
          type="text"
          placeholder='Enter Your Notes'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        {/* Details Input */}
        <textarea
          className='px-5 w-full font-medium h-35 outline-none py-2 border-2 rounded-xs'
          type="text"
          placeholder='Write Details'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />

        <button className='active:scale-95 py-2 px-5 outline-none w-full rounded bg-gray-300 text-black cursor-pointer font-medium'>Add Note</button>

      </form>

      <div className='lg:border-l-2 lg:w-1/2 p-10'>
        <h1 className='text-3xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>
          {task.map(function (elem, idx) {

            return <div key={idx} className="flex flex-col justify-between h-52 w-40 rounded-2xl bg-cover text-black pt-9 pb-5 px-4 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOI0reQLJbYio3nDn-3Do7tojc55WBcflQZPNwCsBcg&s=10')]">
              <div>
                <h3 className='leading-tight font-bold text-xl'>{elem.title}</h3>
                <p className='mt-2 leading-tight font-normal'>{elem.details}</p>
              </div>

              <button onClick={() => {
                noteDelete(idx)
              }} className='w-full bg-red-500 active:scale-95 text-white rounded py-1 cursor-pointer font-bold text-xs'>Delete Note</button>
            </div>
          })}
        </div>

      </div>
    </div>
  )
}

export default App