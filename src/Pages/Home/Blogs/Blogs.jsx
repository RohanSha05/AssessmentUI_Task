import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css'; 

const blogs = [
	{
		title: "Understanding React Hooks",
		name: "John Doe",
		designation: "Web Development",
		image: "https://i.ibb.co/JsWL5Zc/react-hooks.jpg",
		ownerImage: "https://i.pravatar.cc/150?img=1",
		date: "October 10, 2023",
		details:
			"React Hooks are functions that let you use state and other React features without writing a class...",
		totalShares: 120,
		totalComments: 45,
	},
	{
		title: "CSS Grid vs Flexbox",
		name: "Doe Rio",
		designation: "Web Design",
		image: "https://i.ibb.co/bvTHrZH/flexbox-vs-grid-meta-1683822175021.jpg",
		ownerImage: "https://i.pravatar.cc/150?img=2",
		date: "October 12, 2023",
		details:
			"CSS Grid and Flexbox are powerful layout systems in CSS. Understanding their differences can help you...",
		totalShares: 85,
		totalComments: 30,
	},
	{
		title: "JavaScript ES6 Features",
		name: "Joban Doe",
		designation: "Programming",
		image: "https://via.placeholder.com/600x400",
		ownerImage: "https://i.pravatar.cc/150?img=3",
		date: "October 15, 2023",
		details:
			"ES6 introduced many new features to JavaScript, including arrow functions, classes, and more...",
		totalShares: 95,
		totalComments: 40,
	},
	{
		title: "Responsive Web Design",
		name: "Riki Nobel",
		designation: "Web Design",
		image: "https://via.placeholder.com/600x400",
		ownerImage: "https://i.pravatar.cc/150?img=4",
		date: "October 18, 2023",
		details:
			"Responsive web design ensures that your website looks great on all devices, from desktops to mobile phones...",
		totalShares: 110,
		totalComments: 50,
	},
	{
		title: "Node.js for Backend Development",
		name: "Yiohan Doe",
		designation: "Backend Development",
		image: "https://via.placeholder.com/600x400",
		ownerImage: "https://i.pravatar.cc/150?img=5",
		date: "October 20, 2023",
		details:
			"Node.js is a powerful tool for building scalable backend applications. Learn how to get started...",
		totalShares: 130,
		totalComments: 60,
	},
	{
		title: "Introduction to TypeScript",
		name: "Nion Sikolas",
		designation: "Programming",
		image: "https://via.placeholder.com/600x400",
		ownerImage: "https://i.pravatar.cc/150?img=6",
		date: "October 22, 2023",
		details:
			"TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Discover its benefits...",
		totalShares: 140,
		totalComments: 70,
	},
];

const Blogs = () => {
	return (
		<div className="blogs-section py-16 px-8 ">
			<div className="text-center mb-12">
				<p className="text-stark underline text-2xl">OUR BLOG</p>
				<h1 className="text-stark text-4xl font-bold mb-6">
					Latest Blog & News
				</h1>
			</div>
			<Swiper
				slidesPerView={1}
				spaceBetween={20}
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
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
				}}
			>
				{blogs.map((blog, index) => (
					<SwiperSlide key={index}>
						<div className="blog-card bg-gradient-to-r from-[#362063] to-[#4b2a8a] text-stark p-4 shadow-lg">
							<div className="flex justify-between  items-center mb-4 ">
								<button className="elementor-button">Read More</button>
								<button className="elementor-button">Share</button>
							</div>
							<div className="flex justify-center items-center p-4">
								<div className=" items-center mt-4">
									<img
										src={blog.ownerImage}
										alt="Owner"
										style={{ width: "90px", height: "90px" }}
										className="rounded-full mr-2"
									/>
									<p className="text-stark text-center font-bold">
										{blog.name}
									</p>
								</div>
							</div>
							<p className="text-stark">{blog.date}</p>
							<div className="p-4 flex flex-col justify-between h-full">
								<div>
									<h2 className="text-lg font-bold mb-2 text-stark">
										{blog.title}
									</h2>
									<p className="text-stark mb-2">{blog.designation}</p>

									<p className="text-stark mb-4 text-start">{blog.details}</p>
								</div>
								<div className="mt-auto">
									<div className="border-t border-gray-400  pt-2 flex justify-between text-stark">
										<p>{blog.totalShares} Shares</p>
										<p>{blog.totalComments} Comments</p>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Blogs;