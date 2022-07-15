const MyButton = ({ name, onClick }) => {
    return (
        <button onClick={onClick} className="px-12 py-2 bg-[#B062FF] text-lg font-semibold hover:scale-105 duration-200 origin-center rounded-sm">
            {name}
        </button>
    );
};

export default MyButton;
