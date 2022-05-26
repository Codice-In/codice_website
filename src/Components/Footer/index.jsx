import {BsTwitter, BsGithub, BsLinkedin, BsTelegram} from 'react-icons/bs';

const FooterLink = ({ name, link }) => {
    return (
        <li className="text-base text-center mx-2 text-[#BBB] hover:text-[#FFF] duration-200 mt-2"><a href={link}>{name}</a></li>
    );
}

const Footer = () => {
    return (
        <footer className="flex w-full md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
            <div className="flex w-full sm:flex-row flex-col justify-between items-center my-4">
                <div className="flex flex-[0.5] justify-center items-center">
                    <h1 className="logo sm:text-5xl text-3xl">
                        <strong className="text-[#B026FF]">C</strong>
                        odice
                    </h1>
                </div>

                <ul className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
                    {
                        [
                            { name: <BsLinkedin />, link: 'https://www.linkedin.com/' },
                            { name: <BsTwitter />, link: 'https://twitter.com/' },
                            { name: <BsGithub />, link: 'https://Github.com/' },
                            { name: <BsTelegram />, link: 'https://telegram.org/' },
                            { name: 'Jobs', link: '/' },
                            { name: 'Blog', link: '/' },
                        ].map((item, index) => (
                            <FooterLink
                                name={item.name}
                                link={item.link}
                                key={item.name + index}
                            />
                        ))
                    }
                </ul>
            </div>

            <div className="flex justify-center items-center flex-col mt-5">
                <p className="text-white text-sm text-center">Come join us</p>
                <p className="text-white text-sm text-center">info@codice.com</p>
            </div>

            <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />

            <div className='sm:w-[90%] w-full flex justify-between items-center mt-3'>
                <p className="text-white text-sm text-center">@codice 2022</p>
                <p className="text-white text-sm text-center">All rigths reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
