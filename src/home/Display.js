import React from 'react'

const Display = () => {
  return (
    <div className='grid grid-cols-2 items-center bg-slate-500 text-white' >
      <div>
        <dotlottie-player src="https://lottie.host/c3849cb8-3a4d-45ae-ace0-6462b01c8872/HOZcYwifm3.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
      </div>
      <div className='dis-info'>
        <h1 className='text-2xl'>Hi, I am Hari</h1>
        <p className='text-pink-400 font-semibold my-2 tracking-wider'>Developer and Freelancer</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis deleniti, numquam alias modi eos iure nobis ratione earum necessitatibus impedit eius eum tempore. Itaque ipsam quidem minus repellendus voluptatibus vel, rerum officiis? Consequuntur recusandae libero sit nobis et iure aliquid, vero odio suscipit, illo hic. Eligendi quam officia at!</p>
      </div>
    </div>
  )
}

export default Display
