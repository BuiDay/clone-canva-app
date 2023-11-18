// import logo from '../assets/Canva-Logo-2013.png'
import { MdOutlinePlayCircle } from "react-icons/md";
const Header = () => {
    return (
        <div className='w-full h-[7vh] z-10 fixed' style={{background: "linear-gradient(90deg, rgba(0,212,255,1) 6%, rgba(195,22,233,1) 100%)"}}>
            <div className='w-full h-full flex items-center justify-between px-5'>
                {/* <div className=''>
                    <img src={logo} alt="" />
                </div> */}
                <div className='text-white flex items-center text-[18px] font-medium gap-7'>
                    <span>Home</span>
                    <span>File</span>
                </div>
                <div className='text-white flex items-center gap-7 text-[18px] font-medium mr-5'>
                    <div className='cursor-pointer'>Import</div>
                    <div className='cursor-pointer'>Export</div>
                    <div className='bg-gray-100/[0.3] px-2 rounded-lg h-[40px] flex items-center gap-2 cursor-pointer'>
                        <MdOutlinePlayCircle size={20}/>
                        <span>Review</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;