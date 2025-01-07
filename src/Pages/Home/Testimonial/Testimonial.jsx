import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

const testimonials = [
	{
		name: "John Doe",
		profession: "Software Engineer",
		rating: 5,
		review:
			"This company provided excellent service and I am very satisfied with the results.",
	},
	{
		name: "Jane Smith",
		profession: "Product Manager",
		rating: 4,
		review:
			"Great experience working with this team. Highly recommend their services.",
	},
	{
		name: "Michael Johnson",
		profession: "UX Designer",
		rating: 5,
		review:
			"Outstanding work! The team was professional and delivered high-quality results.",
	},
	{
		name: "Emily Davis",
		profession: "Graphic Designer",
		rating: 5,
		review:
			"Creative and innovative solutions. Highly recommend their services.",
	},
	{
		name: "David Brown",
		profession: "Marketing Specialist",
		rating: 4,
		review: "Professional team with great results. Will work with them again.",
	},
];

const Testimonial = () => {
	return (
		<div className="testimonial-section py-16 px-8 ">
			<div className="text-center mb-12">
				<h1 className="text-stark text-4xl font-bold underline mb-4">
					OUR TESTIMONIAL
				</h1>
				<p className="text-stark text-2xl">Our Clients Are Saying!</p>
			</div>
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
						slidesPerView: 3,
						spaceBetween: 40,
					},
				}}
			>
				{testimonials.map((testimonial, index) => (
					<SwiperSlide key={index}>
						<div className="testimonial-slide bg-gradient-to-r from-[#362063] to-[#4b2a8a]  p-8  shadow-lg text-center transition-transform duration-500 hover:scale-105">
							<div className="mb-4">
								<div className="avatar mx-auto mb-4">
									<div className="w-24 h-24 rounded-full overflow-hidden">
										<img
											src={`https://i.pravatar.cc/150?img=${index + 1}`}
											alt="Client"
										/>
									</div>
								</div>
								<h2 className="text-2xl font-bold">{testimonial.name}</h2>
								<p className="text-stark">{testimonial.profession}</p>
							</div>
							<div className="mb-4">
								{[...Array(testimonial.rating)].map((_, i) => (
									<span key={i} className="text-yellow-500">
										&#9733;
									</span>
								))}
								{[...Array(5 - testimonial.rating)].map((_, i) => (
									<span key={i} className="text-stark">
										&#9733;
									</span>
								))}
							</div>
							<p className="text-stark">{testimonial.review}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Testimonial;
