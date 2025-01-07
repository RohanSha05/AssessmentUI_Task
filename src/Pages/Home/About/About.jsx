import './About.css'; 

const About = () => {
  return (
		<div className="about-section py-16 px-8 text-stark">
			<h1 className="text-4xl font-bold text-center">About Us</h1>
			<p className="text-center mb-7 mt-4 text-xl">
				We are recognized as the best
			</p>
			<div className="w-full flex flex-col md:flex-row items-center bg-gradient-to-r from-[#362063] to-[#4b2a8a] rounded-md">
				<div className="md:w-1/2 p-10 text-center md:text-left md:pr-8 fade-in-left">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
						Digital solution with 7 years of experience.
					</h1>
					<p className="text-lg md:text-lg  mb-8">
						Empowering businesses through innovation and proven expertise. Our
						track record of success sets us apart, delivering tailored solutions
						to elevate your digital presence and drive sustainable growth.
					</p>
					<button className="stark-button text-stark py-2 px-6 rounded-lg ">
						MORE DETAILS
					</button>
				</div>
				<div className="md:w-1/2 mt-8 md:mt-0 fade-in-right">
					<img
						src="https://i.ibb.co/p4pPkFs/young-employees-sitting-office-table-using-laptop-team-work-brainstorming-meeting-concept.jpg"
						alt="Team working"
						className="w-full rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;