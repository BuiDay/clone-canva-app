import designIcon from '../assets/design.svg'
import elementsIcon from '../assets/Elements.svg'
const tabs = [
    {
        name: 'Design',
        icon: designIcon,
    },
    {
        name: 'Elements',
        icon: elementsIcon,
    }
];
const SideBar = () => {
    return (
        <div className='w-[3%] h-full bg-black fixed'>
            <div className='flex flex-col pt-5 justify-center items-center gap-10'>
                {
                    tabs.map((items,index)=>
                    <div className='text-white flex flex-col justify-center items-center cursor-pointer' key={index}>
                        <img src={items.icon} alt="" />
                        <span className='text-[12px]'>{items.name}</span>
                    </div>)
                }
            </div>
        </div>
    );
};

export default SideBar;