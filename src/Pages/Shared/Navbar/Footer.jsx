
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">ASSESSMENT UI</h2>
            <p>
            ASSESSMENT UI is your go-to partner for cutting-edge technology solutions. We specialize in delivering custom software and web development services to help your business thrive in the digital age.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact & Address</h2>
            <p>contact@assessment.com</p>
            <p>Bangladesh: 123 Tech Street, Dhaka-1200</p>
            <p>BD: +(880) 1234-567890</p>
            <p>USA: Silicon Valley, California, 94043</p>
            <p>USA: +(123) 456-7890</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Company</h2>
            <ul>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Portfolio</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p>Stay updated with the latest news and offers from Tech Innovators.</p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-lg text-gray-900 flex-grow"
            />
            <button className="bg-blue-600 p-2 rounded-r-lg">Subscribe</button>
          </form>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 ASSESSMENT UI</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Support Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
          <a href="#" className="hover:underline">Back to Top</a>
        </div>
      </div>
    </footer>
  );
};


export default Footer;