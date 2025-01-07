import React, { useEffect, useState } from 'react';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then(response => response.json())
      .then(data => setServices(data));
  }, []);

  return (
		<div className="services-section py-20 px-20 text-stark">
			<h1 className="text-4xl font-bold text-center mb-6">Our Services</h1>
			<p className="text-center mb-12 text-lg">
				Services Built Specifically For Your Business
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 text-sm">
				{services.map((service, index) => (
					<div
						key={index}
						className="bg-gradient-to-r from-[#362063] to-[#4b2a8a]  rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 relative"
					>
						<figure className="relative">
							<img
								src={service.image}
								alt={service.title}
								className="w-24 h-24 object-contain mt-4"
							/>
						</figure>
						<div className="p-6 text-start">
							<h2 className="text-2xl mb-2  my-4">{service.title}</h2>
							<p className="my-4  w-72">{service.description}</p>
						</div>
						<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
							<button className="btn btn-primary ">Learn More!</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;