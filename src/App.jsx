import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";

const App = () => {
	return (
		<div className="w-full h-full flex flex-col">
			
			<section className="w-full min-h-screen flex flex-col justify-center relative items-center gradient-bg-welcome">
				<Header />
				<Welcome />
			</section>
			<section className="w-full h-96 flex flex-col justify-center items-center gradient-bg-services">
				<h1>Section 0</h1>
				<p>Lorem ipsum</p>
			</section>
			<section className="w-full h-96 flex flex-col justify-center items-center gradient-bg-transactions">
				<h1>Section 0</h1>
				<p>Lorem ipsum</p>
			</section>
			<Footer />
		</div>
	);
}

export default App;
