import Logo from '../images/hero-logo.png';

const navbar = () => {
    return(
        <div className='flex ml-10 m-4 justify-between items-center'>
            <div>
                <img src = {Logo} alt='noimg' className='w-24 md:w-auto'/>
            </div>
            <div className='flex space-x-9 h-8 md:w-96 justify-center items-center text-lg rounded-2xl ml-10' style={{ backgroundColor: 'rgba(239, 233, 255, 0.25)' , boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)'}}>
                <a href='www.google.com' className='text-purple-300 font-medium'>Products</a>
                <a href='www.google.com'className='text-white font-medium'>Pricing</a>
                <a href='www.google.com' className='text-purple-300 font-medium'>Widgets</a>
                <a href='www.google.com' className='text-purple-300 font-medium'>Login</a>
            </div>
            <div className='flex rounded-2xl h-8 w-60 md:block bg-black text-center' style={{boxShadow: '0 2px 20px rgba(255, 255, 255, 0.5)'}}>
                <a href='www.google.com' className=' text-white text-lg'>Get started for free</a>
            </div>
        </div>
    );
}

export default navbar;