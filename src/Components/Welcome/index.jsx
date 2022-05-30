import MyButton from "../MyButton";

const Welcome = () => {
    return (
        <div className="w-full h-full px-4 mx-6 flex flex-col items-center justify-center">
            <h1 className="md:text-5xl text-3xl text-white text-center mb-12">Blockchain Infrastructure for the Decentralised Web</h1>

            <p className="text-center md:text-2xl text-lg font-thin sm:px-12 md:px-32 px-0 mb-12">From the Substrate blockchain framework to Polkadot, the sharded protocol enabling blockchains to operate seamlessly together at scale, Parity builds the foundation of Web 3.0.</p>

            <MyButton name="Learn More About Codice" />
        </div>
    );
}

export default Welcome;
