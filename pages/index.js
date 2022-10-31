import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"
export default function Home() {
  return (
    <div className="bg-neutral-900 text-white">
      <div className='flex'>
        <div className='bg-black'>
          <Sidebar />
        </div>
        <div>
          <div className='w-full'><Navbar/></div>
          <div className='p-10'>
            <div className='py-5'>
              <h1 className='text-xl font-bold'>Recently played</h1>
              <div id='Card' className='flex flex-wrap '>
                <div className='bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-xl p-4 w-52 m-3'>
                  <Image className='rounded-md hover:shadow-xl' src="https://i.scdn.co/image/ab67706f000000023676fcd91c7f3e300ccd6deb" alt='Thumbnail' height={150} width={150} />
                  <h3 className='font-bold py-3'>Hip Hop Hindi</h3>
                  <p className='text-sm text-gray-300'>Hottest Hindi music served here. Cover. Ranbir & Alia </p>
                </div>
              </div>
            </div>
            <div className='py-5'>
              <h1 className='text-xl font-bold'>Recently played</h1>
              <div id='Card' className='flex flex-wrap '>
                <div className='bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-xl p-4 w-52 m-3'>
                  <Image className='rounded-md hover:shadow-xl' src="https://i.scdn.co/image/ab67706f000000023676fcd91c7f3e300ccd6deb" alt='Thumbnail' height={150} width={150} />
                  <h3 className='font-bold py-3'>Hip Hop Hindi</h3>
                  <p className='text-sm text-gray-300'>Hottest Hindi music served here. Cover. Ranbir & Alia </p>
                </div>
                <div className='bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-xl p-4 w-52 m-3'>
                  <Image className='rounded-md hover:shadow-xl' src="https://i.scdn.co/image/ab67706f000000023676fcd91c7f3e300ccd6deb" alt='Thumbnail' height={150} width={150} />
                  <h3 className='font-bold py-3'>Hip Hop Hindi</h3>
                  <p className='text-sm text-gray-300'>Hottest Hindi music served here. Cover. Ranbir & Alia </p>
                </div>
                <div className='bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-xl p-4 w-52 m-3'>
                  <Image className='rounded-md hover:shadow-xl' src="https://i.scdn.co/image/ab67706f000000023676fcd91c7f3e300ccd6deb" alt='Thumbnail' height={150} width={150} />
                  <h3 className='font-bold py-3'>Hip Hop Hindi</h3>
                  <p className='text-sm text-gray-300'>Hottest Hindi music served here. Cover. Ranbir & Alia </p>
                </div>
                <div className='bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-xl p-4 w-52 m-3'>
                  <Image className='rounded-md hover:shadow-xl' src="https://i.scdn.co/image/ab67706f000000023676fcd91c7f3e300ccd6deb" alt='Thumbnail' height={150} width={150} />
                  <h3 className='font-bold py-3'>Hip Hop Hindi</h3>
                  <p className='text-sm text-gray-300'>Hottest Hindi music served here. Cover. Ranbir & Alia </p>
                </div>
                <div className='bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-xl p-4 w-52 m-3'>
                  <Image className='rounded-md hover:shadow-xl' src="https://i.scdn.co/image/ab67706f000000023676fcd91c7f3e300ccd6deb" alt='Thumbnail' height={150} width={150} />
                  <h3 className='font-bold py-3'>Hip Hop Hindi</h3>
                  <p className='text-sm text-gray-300'>Hottest Hindi music served here. Cover. Ranbir & Alia </p>
                </div>
                <div className='bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-xl p-4 w-52 m-3'>
                  <Image className='rounded-md hover:shadow-xl' src="https://i.scdn.co/image/ab67706f000000023676fcd91c7f3e300ccd6deb" alt='Thumbnail' height={150} width={150} />
                  <h3 className='font-bold py-3'>Hip Hop Hindi</h3>
                  <p className='text-sm text-gray-300'>Hottest Hindi music served here. Cover. Ranbir & Alia </p>
                </div>
              </div>
            </div>
            <div className='py-5'>
              <h1 className='text-xl font-bold'>Popular artists</h1>
              <div id='Card' className='flex flex-wrap '>
                <div className='bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-xl p-4 w-52 m-3'>
                  <Image className='rounded-full hover:shadow-xl' src="https://i.scdn.co/image/ab6761610000f1780261696c5df3be99da6ed3f3" alt='Thumbnail' height={150} width={150} />
                  <h3 className='font-bold py-3'>Hip Hop Hindi</h3>
                  <p className='text-sm text-gray-300'>Hottest Hindi music served here. Cover. Ranbir & Alia </p>
                </div>
                <div className='bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-xl p-4 w-52 m-3'>
                  <Image className='rounded-full hover:shadow-xl' src="https://i.scdn.co/image/ab6761610000f1780261696c5df3be99da6ed3f3" alt='Thumbnail' height={150} width={150} />
                  <h3 className='font-bold py-3'>Hip Hop Hindi</h3>
                  <p className='text-sm text-gray-300'>Hottest Hindi music served here. Cover. Ranbir & Alia </p>
                </div>
                <div className='bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-xl p-4 w-52 m-3'>
                  <Image className='rounded-full hover:shadow-xl' src="https://i.scdn.co/image/ab6761610000f1780261696c5df3be99da6ed3f3" alt='Thumbnail' height={150} width={150} />
                  <h3 className='font-bold py-3'>Hip Hop Hindi</h3>
                  <p className='text-sm text-gray-300'>Hottest Hindi music served here. Cover. Ranbir & Alia </p>
                </div>
                <div className='bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-xl p-4 w-52 m-3'>
                  <Image className='rounded-full hover:shadow-xl' src="https://i.scdn.co/image/ab6761610000f1780261696c5df3be99da6ed3f3" alt='Thumbnail' height={150} width={150} />
                  <h3 className='font-bold py-3'>Hip Hop Hindi</h3>
                  <p className='text-sm text-gray-300'>Hottest Hindi music served here. Cover. Ranbir & Alia </p>
                </div>
                <div className='bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-xl p-4 w-52 m-3'>
                  <Image className='rounded-full hover:shadow-xl' src="https://i.scdn.co/image/ab6761610000f1780261696c5df3be99da6ed3f3" alt='Thumbnail' height={150} width={150} />
                  <h3 className='font-bold py-3'>Hip Hop Hindi</h3>
                  <p className='text-sm text-gray-300'>Hottest Hindi music served here. Cover. Ranbir & Alia </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
