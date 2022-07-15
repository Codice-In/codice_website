import { useState } from "react";
import MyButton from "../MyButton";

// https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg

const TeamCard = ({ imageUrl, name, jobTitle }) => {
    return (
        <div className='min-w-[264px] max-w-[264px] h-80 p-5 flex flex-col justify-center items-center bg-slate-800 rounded-xl shadow-[#111] shadow-lg'>
            <img className='w-14 h-14 rounded-full m-3' src={imageUrl} alt='Profile image' />
            <p className='font-normal text-2xl m-5 text-center'>{name}</p>
            <p className='font-thin text-[#999] text-center'>{jobTitle}</p>
        </div>
    );
}

const Team = () => {
    const [displayTeam, setDisplayTeam] = useState(false);
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center gradient-bg-services">
            <div className="py-20 px-2 flex flex-col justify-center items-center">
                <h1 className="mb-6 md:text-4xl text-2xl font-normal lg:w-2/3 text-center">
                    Technology developed by a team of the world's top blockchain engineers
                </h1>
                
                <p className="mb-6 md:text-xl text-lg">
                    We are seeking new team members. If you feel you can help us achieve our goals.
                </p>

                <a href="mailto:miguel@kine.network" className="text-[#B062FF] hover:underline">
                    Join the team
                </a>
            </div>

            <div className="p-2 flex flex-col items-center justify-center">
                <img
                    className="h-64 md:w-64 w-full"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                    alt="Chief Information Office"
                />

                <div className="my-4 flex flex-col items-center justify-center">
                    <p className="text-lg">Miguel Marques</p>
                    <p className="text-sm my-4">Chief Information Office</p>
                </div>
            </div>
            
            {!displayTeam && <MyButton name="Learn More About The Team" onClick={() => setDisplayTeam(true)} />}
            {displayTeam && (
                <div className="sm:w-[90vh] w-full p-5 flex md:flex-nowrap flex-wrap items-center md:justify-start justify-center overflow-x-scroll duration-500 ease-in gap-10 origin-bottom">
                    <TeamCard
                        imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                        name="Miguel Marques"
                        jobTitle="Chief Information Office"
                    />
                    <TeamCard
                        imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                        name="Nikolay"
                        jobTitle="Chief Information Officer"
                    />
                    <TeamCard
                        imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                        name="Carlos"
                        jobTitle="Chief Human Resources Officer"
                    />
                    <TeamCard
                        imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                        name="André Avelino"
                        jobTitle="CTO Chief Technology Officer"
                    />
                    <TeamCard
                        imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                        name="Alexandre Silva"
                        jobTitle="Software developer"
                    />
                    <TeamCard
                        imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                        name="André Santos"
                        jobTitle="Software developer"
                    />
                    <TeamCard
                        imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                        name="Eliude Carvalho"
                        jobTitle="Software developer"
                    />
                    <TeamCard
                        imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                        name="Leandro Jareño Damião"
                        jobTitle="Software developer"
                    />
                </div>
            )}
        </div>
    )
}

export default Team;
