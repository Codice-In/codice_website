const MyButton = ({ name, onClick, link }) => {
    return (
        <a onClick={onClick} href={link} className="px-12 py-2 bg-[#B062FF] text-lg font-semibold hover:scale-105 duration-200 origin-center rounded-sm cursor-pointer">
            {name}
        </a>
    );
};

export default MyButton;
