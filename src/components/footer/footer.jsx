import Chromeicon from '../images/chrome.png';
import Peopleface from '../images/people-faces.svg';
import Fivestars from '../images/5stars.svg';
import Lightbars from '../images/last-bar.svg';

const footer = () => {
    return(
        <div className='flex flex-col m-8 space-y-10 justify-center items-center'>
            <div className='flex items-center space-x-2 w-100 rounded-md' style={{ backgroundImage: 'linear-gradient(to bottom, #FF766F, #CB322B)' }}>
                <img src={Chromeicon} alt='noimg' className='p-2'/>
                <p className='text-white pr-3'>Add to chrome for free</p>
            </div>
            <div className='flex space-x-4 justify-center items-center'>
                <img src={Peopleface} alt='noimg'/>
                <div className='flex flex-col'>
                    <p className='text-white'>+800 Loved Senja</p>
                    <img src={Fivestars} alt='noimg'/>
                </div>
            </div>
            <img src={Lightbars} alt='noimg' className='mt-auto'/>
        </div>
    );
}

export default footer;