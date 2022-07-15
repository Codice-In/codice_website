import { RiTeamFill } from 'react-icons/ri';
import { CgIfDesign, CgCommunity } from 'react-icons/cg';
import { ImEarth } from 'react-icons/im';

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeBlog from "./Components/HomeBlog";
import MainInfo from "./Components/MainInfo";
import Team from "./Components/Team";
import Welcome from "./Components/Welcome";

const App = () => {
	return (
		<div className="w-full h-full flex flex-col">
			
			<section className="w-full min-h-screen flex flex-col justify-center relative items-center gradient-bg-welcome">
				<Header />
				<Welcome />
			</section>

			<section className="w-screen">
				<div className='w-full min-h-screen flex lg:justify-start lg:px-32 justify-center py-28 gradient-bg-services'>
					<MainInfo
						title="About Codice"
						subtitle="Codice is an information technology company, focused on developing open-source projects using Substrate, a framework built for the Kusama and Polkadot environments. Our team believes open-source and community-centric projects build strong links between developers and collective needs."
					/>
				</div>

				<div className='w-full min-h-screen flex lg:justify-end lg:px-32 justify-center py-28 gradient-bg-transactions'>
					<MainInfo
						title="Our Mission"
						subtitle="Our mission is to help individuals and organizations transition to a new decentralized blockchain paradigm, through technology that enables people to connect, interact and create communities in a radically new way. This can be accomplished by creating tools that synergize with social and technological communities, while promoting a fair use of the platforms. With the help of our communities, it is possible to build a fairer, freer and more sustainable society."
					/>
				</div>
			</section>

			<section className="w-screen min-h-screen gradient-bg-footer">
				<div className="flex md:flex-row flex-col gap-y-5">
					<div className="md:w-1/2 w-full md:h-screen h-auto flex items-center justify-center">
						<h1 className="text-5xl text-center">At codice we value</h1>
					</div>
					<div className="md:w-1/2 w-full md:h-screen h-[90vh] overflow-y-scroll py-5 px-12">
						<div className="w-full sm:h-1/5 h-[220px] flex flex-col blue-glassmorphism my-10 p-5">
							<div className='flex items-center gap-x-5'>
								<h1 className="lg:text-3xl md:text-xl font-bold">Responsibility</h1>
								<CgCommunity className="lg:text-3xl md:text-xl" />
							</div>
							<p className="my-5 text-[#CCC] lg:text-base md:text-sm">
								to upkeep a community with impactful, transparent, equitable, and self-regulating projects.
							</p>
						</div>
						<div className="w-full sm:h-1/5 h-[220px] flex flex-col blue-glassmorphism my-10 p-5">
							<div className='flex items-center gap-x-5'>
								<h1 className="lg:text-3xl md:text-xl font-bold">Sustainability</h1>
								<ImEarth className='lg:text-3xl md:text-xl' />
							</div>
							<p className="my-5 text-[#CCC] lg:text-base md:text-sm">
								to preserve the planet and its ecosystems.economic system sustainable itself and for the members.
							</p>
						</div>
						<div className="w-full sm:h-1/5 h-[220px] flex flex-col blue-glassmorphism my-10 p-5">
							<div className='flex items-center gap-x-5'>
								<h1 className="lg:text-3xl md:text-xl font-bold">Participation</h1>
								<RiTeamFill className="lg:text-3xl md:text-xl" />
							</div>
							<p className="my-5 text-[#CCC] lg:text-base md:text-sm">
								to enable teamwork and cooperation within a fair network.
							</p>
						</div>
						<div className="w-full sm:h-1/5 h-[220px] flex flex-col blue-glassmorphism my-10 p-5">
							<div className='flex items-center gap-x-5'>
								<h1 className="lg:text-3xl md:text-xl font-bold">Creativity</h1>
								<CgIfDesign className="lg:text-3xl md:text-xl" />
							</div>
							<p className="my-5 text-[#CCC] lg:text-base md:text-sm">
								to build amazing new projects, accessible to people of all kinds.
							</p>
						</div>
					</div>
				</div>
			</section>
			
			<Team />
			
			<HomeBlog />
			
			<Footer />
		</div>
	);
}

export default App;
