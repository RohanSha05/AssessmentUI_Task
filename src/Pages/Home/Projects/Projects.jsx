import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

const Projects = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		fetch("projects.json")
			.then((response) => response.json())
			.then((data) => setProjects(data));
	}, []);

	return (
		<div className="projects-section py-16 px-8">
			<h1 className="text-4xl font-bold text-center mb-6 text-stark">
				Our Projects
			</h1>
			<p className="text-stark text-center text-xl mb-6">
				These are the recent projects made by us
			</p>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper"
				breakpoints={{
					640: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					1024: {
						slidesPerView: 5,
						spaceBetween: 40,
					},
				}}
			>
				{projects.map((project, index) => (
					<SwiperSlide key={index}>
						<div
							className="relative w-72 h-72 overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105"
							style={{
								backgroundImage: `url(${project.image})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
						>
							<div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-500 hover:bg-opacity-10"></div>
							<div className="absolute inset-0 flex items-center justify-center text-center p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
								<div className="text-stark">
									<h1 className="mb-5 text-3xl font-bold">{project.name}</h1>
									<p className="mb-5">{project.details}</p>
									<button className="btn btn-ghost">See Details</button>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Projects;
