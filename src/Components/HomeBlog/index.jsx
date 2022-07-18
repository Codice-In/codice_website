import MyButton from "../MyButton";

const HomeBlogCard = ({ imglink, bloglink, date, description }) => {
    return (
        <div className="mx-4 my-8 rounded-lg shadow h-full md:w-1/3 blue-glassmorphism">
            <div className="h-2/3">
                <a href={bloglink} className="h-full">
                    <img src={imglink} alt="blog" className="rounded-t-lg object-cover" />
                </a>
            </div>
            <div className="p-4 md:py-6 h-1/3">
                <p className="font-normal text-xs md:text-sm mb-0">
                    {date ?? "May 25, 2022"}
                </p>

                <p className="md:text-lg text-sm font-normal my-1 h-14 md:overflow-hidden">
                    {`${description}`}
                </p>

                <a className="text-xs md:text-sm text-[#B062FF] no-underline hover:underline font-normal md:font-bold" href={bloglink}>Read More</a>
            </div>
        </div>
    );
};

const HomeBlog = () => {
    return (
        <div className="w-full min-h-[80vh] lg:px-28 gradient-bg-transactions" id="blog">
            <div className="w-full h-full px-10 pb-16">
                <h4 className="md:text-2xl font-medium pt-20 mt-0 mx-4 md:mb-0">From the blog</h4>

                <div className="md:flex">
                    <HomeBlogCard
                        imglink="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                        bloglink="https://www.google.com"
                        date="May 25, 2022"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />

                    <HomeBlogCard
                        imglink="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                        bloglink="https://www.google.com"
                        date="May 25, 2022"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />

                    <HomeBlogCard
                        imglink="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                        bloglink="https://www.google.com"
                        date="May 25, 2022"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                </div>
            </div>

            <div className="flex flex-col w-full min-h-[50vh] items-center justify-center">
				<h1 className="md:text-3xl text-lg mb-10">How can Codice help your project?</h1>

				<MyButton name="See our technologies" />

				<p className="mt-5">
					or check out Codice's <a href="/" className="text-[#B062FF] no-underline hover:underline">
						custom solutions
					</a>
				</p>
			</div>
        </div>
    );
}

export default HomeBlog;
