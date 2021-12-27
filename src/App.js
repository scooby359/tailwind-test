import './App.css';
import UserImage from './dog.jpg';

const App = () => {
  return (
    <div className=''>
      <h1 className='text-2xl font-bold mb-4 text-purple-600'>Test Tailwind!</h1>
      <div className='flex'>

        {/* Test component */}
        <div className='flex content-center bg-white py-4 px-4 shadow-lg'>
          <img className='block mx-auto h-24 rounded-full' src={UserImage} alt="user"/>
          <div className='px-4'>
            <p className='text-lg text-black font-semibold'>Chris Walton</p>
            <p className='text-gray-500 font-medium'>Software Developer</p>
            <button className=' mt-4 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent'>Message Me</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
