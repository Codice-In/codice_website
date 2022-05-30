import MyButton from "../MyButton";

const Team = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center gradient-bg-services">
            <div className="py-20 px-2 flex flex-col justify-center items-center">
                <h1 className="mb-6 md:text-4xl text-2xl font-normal lg:w-2/3 text-center">
                    Technology developed by a team of the world's top blockchain engineers
                </h1>
                
                <p className="mb-6 md:text-xl text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <a href="/" className="text-[#B062FF]">
                    Join the team
                </a>
            </div>

            <div className="p-2 flex flex-col items-center justify-center">
                <img
                    className="h-64 md:w-64 w-full"
                    src="https://upload.wikimedia.org/wikipedia/commons/1/16/Abraham_Lincoln_In_Color.png"
                    alt="CEO & Founder"
                />

                <div className="my-4 flex flex-col items-center justify-center">
                    <p className="text-lg">Miguel Marques</p>
                    <p className="text-sm my-4">CEO & Founder</p>
                </div>
            </div>
            
            <MyButton name="Learn More About The Team" />
        </div>
    )
}

export default Team;
