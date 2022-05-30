import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import {BsTwitter, BsGithub} from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';

const NavbarItem = ({ title, classProp }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProp}`}>
            <a href="/">{title}</a>
        </li>
    )
}

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="w-full flex md:justify-center justify-between items-center p-4 absolute top-0 left-0 right-0">
            <div
                className="
                    md:flex-[0.5] flex-initial justify-center items-center
                "
            >
                <h1 className="logo sm:text-5xl text-3xl">
                    <strong className="text-[#B026FF]">C</strong>
                    odice
                </h1>
            </div>
            <ul
                className="
                    text-white md:flex hidden list-none flex-row
                    justify-space-between items-center
                    flex-initial
                "
            >
                {
                    [
                        'Technologies', 'Solutions', 'About', 'Jobs', 'Blog',
                        <BsTwitter />, <BsGithub />
                    ].map((item, index) => (
                        <NavbarItem title={item} key={item + index} />
                    ))
                }

                <li
                    className="
                        bg-[#B062FF] py-2 px-7 mx-4 rounded-full cursor-pointer
                        hover:bg-[#9040DD]
                    "
                >
                    Get Started
                </li>
            </ul>
            <div className="flex relative">
                {toggleMenu
                    ?
                    <AiOutlineClose
                        size={28}
                        className="text-white md:hidden cursor-pointer"
                        onClick={() => setToggleMenu(false)}
                    />
                    :
                    <FiMenu
                        size={28}
                        className="text-white md:hidden cursor-pointer"
                        onClick={() => setToggleMenu(true)}
                    />
                }
                {toggleMenu && (
                    <ul
                        className="
                            z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen
                            shadow-2xl md:hidden list-none flex flex-col
                            justify-start items-end rounded-md
                            blue-glassmorphism text-white animate-slide-in
                        "
                    >
                        <li className="text-xl w-full my-2">
                            <AiOutlineClose
                                className='cursor-pointer'
                                onClick={() => setToggleMenu(false)}
                            />
                        </li>
                        
                        {
                            [
                                'Technologies', 'Solutions', 'About', 'Jobs', 'Blog',
                                <BsTwitter />, <BsGithub />
                            ].map((item, index) => (
                                <NavbarItem
                                    title={item}
                                    key={item + index}
                                    classProp="my-2 text-lg"
                                />
                            ))
                        }
                    </ul>
                )}
            </div>
        </header>
    )
}

/*const Header = () => {
    const iconSize = 22;

    return (
        <header className="w-full h-[70px] absolute top-0 left-0 right-0">
            <div className="w-full h-full flex flex-row justify-between items-center md:px-44 px-10">
                <h1 className="logo sm:text-5xl text-3xl">
                    <strong className="text-[#B026FF]">C</strong>
                    odice
                </h1>

                <ul className="xl:w-1/2 w-2/3 lg:flex hidden flex-row justify-between items-center">
                    <li className='text-xl text-[#BBB] hover:text-[#FFF] duration-200 ease-in'>
                        <a href="/">Technologies</a>
                    </li>
                    <li className='text-xl text-[#BBB] hover:text-[#FFF] duration-200 ease-in'>
                        <a href="/">Solutions</a>
                    </li>
                    <li className='text-xl text-[#BBB] hover:text-[#FFF] duration-200 ease-in'>
                        <a href="/">About</a>
                    </li>
                    <li className='text-xl text-[#BBB] hover:text-[#FFF] duration-200 ease-in'>
                        <a href="/">Jobs</a>
                    </li>
                    <li className='text-xl text-[#BBB] hover:text-[#FFF] duration-200 ease-in'>
                        <a href="/">Blog</a>
                    </li>
                    <li className='text-xl text-[#BBB] hover:text-[#FFF] duration-200 ease-in'>
                        <a href="/"><BsTwitter /></a>
                    </li>
                    <li className='text-xl text-[#BBB] hover:text-[#FFF] duration-200 ease-in'>
                        <a href="/"><BsGithub /></a>
                    </li>
                </ul>

                <FiMenu className='lg:hidden flex' size={iconSize} />
            </div>
        </header>
    );
}*/

export default Header;
