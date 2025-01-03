import Image from './Image';
import { Link } from 'react-router-dom';

const FeaturedPosts = () => {
  return (
    <div className='mt-8 flex flex-col lg:flex-row gap-8'>
      {/* First */}
      <div className='w-full flex flex-col gap-4'>
        {/* image */}
        <Image src='featured1.jpeg' className="rounded-3xl object-cover" />
        {/* details */}
        <div className='flex items-center gap-4'>
          <h1 className='font-semibold lg:text- lg'>01.</h1>
          <Link className='text-blue-800 lg:text-lg'>Web Design</Link>
          <span className='text-gray-500'> 2 Days ago...</span>
        </div>
        {/* title */}
        <Link to='./test' className='text-xl lg:text-3xl font-semibold  lg:font-bold'> This is a random Text.This is a random Text.This is a random Text.</Link>
      </div>
      <div id='sidepost-holder' className='w-full flex flex-col gap-4'>

      <div id='sidepostUnit-holder' className='flex '>
        {/* Others */}
        <div id='a' className='w-full lg:w-1/2 h-1/2 flex flex-col '>
          {/* second */}
          <Image src='featured2.jpeg' className='rounded-3xl object-cover w-full h-4/5  ' />
        </div>

        {/* details and title  */}
        <div className="w-2/3 pl-3">
          {/* details */}
          <div className=" items-center gap-4 text-sm  lg:text-base mb-4">
            <h1 className='font-semibold inline-block pl-2'>02.</h1>
            <Link className='text-blue-800 pl-2'>Web Design</Link>
            <span className='text-gray-500 text-sm pl-2'> 2 Days ago..</span>
          </div>
          
          {/* title */}
          <Link to='/test' className='text-base  pl-2 sm:text-xs md:text-sm lg:text-lg xl:text-xl font-large'>
            Random Random Random Random Random Random Random
          </Link>
        </div>
        </div>
        
        {/* third */}
        <div id='sidepostUnit-holder' className='flex '>
        {/* Others */}
        <div id='a' className='w-full lg:w-1/2 h-1/2 flex flex-col '>
          {/* second */}
          <Image src='featured2.jpeg' className='rounded-3xl object-cover w-full h-4/5  ' />
        </div>

        {/* details and title  */}
        <div className="w-2/3 pl-3">
          {/* details */}
          <div className=" items-center gap-4 text-sm  lg:text-base mb-4">
            <h1 className='font-semibold inline-block pl-2'>02.</h1>
            <Link className='text-blue-800 pl-2'>Web Design</Link>
            <span className='text-gray-500 text-sm pl-2'> 2 Days ago..</span>
          </div>
          
          {/* title */}
          <Link to='/test' className='text-base  pl-2 sm:text-xs md:text-sm lg:text-lg xl:text-xl font-large'>
            Random Random Random Random Random Random Random
          </Link>
        </div>
        </div>
        
        {/* fourth */}
        <div id='sidepostUnit-holder' className='flex '>
        {/* Others */}
        <div id='a' className='w-full lg:w-1/2 h-1/2 flex flex-col '>
          {/* second */}
          <Image src='featured2.jpeg' className='rounded-3xl object-cover w-full h-4/5  ' />
        </div>

        {/* details and title  */}
        <div className="w-2/3 pl-3">
          {/* details */}
          <div className=" items-center gap-4 text-sm  lg:text-base mb-4">
            <h1 className='font-semibold inline-block pl-2'>02.</h1>
            <Link className='text-blue-800 pl-2'>Web Design</Link>
            <span className='text-gray-500 text-sm pl-2'> 2 Days ago..</span>
          </div>
          
          {/* title */}
          <Link to='/test' className='text-base  pl-2 sm:text-xs md:text-sm lg:text-lg xl:text-xl font-large'>
            Random Random Random Random Random Random Random
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPosts;