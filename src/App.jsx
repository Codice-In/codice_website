import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeBlog from "./Components/HomeBlog";
import Team from "./Components/Team";
import Welcome from "./Components/Welcome";

const App = () => {
	return (
		<div className="w-full h-full flex flex-col">
			
			<section className="w-full min-h-screen flex flex-col justify-center relative items-center gradient-bg-welcome">
				<Header />
				<Welcome />
			</section>
			
			<Team />
			
			<HomeBlog />
			
			<Footer />
		</div>
	);
}

export default App;
