import MyButton from "../MyButton";

const Welcome = () => {
    return (
        <div className="w-full h-full px-4 mx-6 flex flex-col items-center justify-center">
            <h1 className="md:text-5xl text-3xl text-white text-center mb-12">Codice</h1>

            <p className="text-center md:text-2xl text-lg font-thin sm:px-12 md:px-32 px-0 mb-12">Community-driven, blockchain-based.</p>

            <MyButton name="Learn More About Codice" link='/#about-us' />
        </div>
    );
}

export default Welcome;
