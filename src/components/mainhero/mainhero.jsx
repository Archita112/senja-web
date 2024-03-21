import Leftimg from '../images/img1.png';
import Rightimg from '../images/img2.png';
import Icon1 from '../images/v1.png';
import Icon2 from '../images/v2.png';
import Icon3 from '../images/v3.png';
import './mainhero.css';

const main_function = () => {
    return (
        <div className='flex justify-between items-center'>
            <img src={Leftimg} alt='noimg' className='flex justify-center items-center'/>
            <div className='flex flex-col justify-center items-center space-y-6'>
                <div className=' justify-center flex'>
                    <h2 className='text-white text-4xl caveat-font'>Build trust with Senja</h2>
                </div>
                <div className='flex justify-center bg-none flex-col sm:text-sm'>
                    <h2 className='font-bold text-white text-7xl'>Import and Share</h2>
                    <h2 className='text-7xl font-bold text-white'>your testimonials</h2>
                    <h2 className='text-7xl font-bold text-center' style={{ color: "#FF11E7" }}>everywhere</h2>
                </div>
                <div className='flex space-x-10'>
                    <div className='flex justify-between items-center space-x-4'>
                        <img src={Icon1} alt='noimg' className=' h-8 w-6'/>
                        <p className=' text-white text-base'>Instantly import customer<br></br> reviews from 18+ platforms</p>
                    </div>
                    <div className='flex text-white space-x-4 justify-between items-center'>
                        <img src={Icon2} alt='noimg'className=' h-10'/>
                        <p className='text-white text-base'>Share them everywhere<br></br> you need with 2 clicks</p>
                    </div>
                    <div className='flex text-white space-x-4 justify-between items-center'>
                        <img src={Icon3} alt='noimg'className=' h-10'/>
                        <p className='text-white text-base'>Build trust, close sales,<br></br> grow your business</p>
                    </div>
                </div>
            </div>
            <img src={Rightimg} alt='noimg' className='flex justify-center items-center'/>
        </div>
    );
}

export default main_function;