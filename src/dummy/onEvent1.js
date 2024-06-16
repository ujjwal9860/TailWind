import React from 'react';

const App = () => {
  const someMessage = () => {
    alert('hello ji');
  };

  const handleCopy = () => {
    alert('Please don\'t copy');
  };
  const clickOne = (e, a) => {
    console.log(e);
    console.log(a);
  }

  return (
    <div className='p-2'>

      <div>
        <input onKeyDown={(e) => { console.log(e.ke y); }} className='border-2 border-black' type="text" />
      </div>
      <br />

      <button onClick={(e) => clickOne(e, 22)} className='bg-red-950 text-white rounded-lg px-2 py-3' > Click </button>
      <br />
      <br />

      <button onDoubleClick={someMessage} className='bg-black text-white px-2 py-2'>Click On</button>
      <p onCopy={handleCopy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eligendi nisi quod modi quisquam! Sed nostrum cum reiciendis. Error, aliquam.</p>
    </div>
  );
};

export default App;
