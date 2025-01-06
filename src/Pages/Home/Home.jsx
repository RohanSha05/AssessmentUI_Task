import Footer from '../Shared/Navbar/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import About from './About/About';
import Banner from './Banner/Banner';
import Blogs from './Blogs/Blogs';
import Projects from './Projects/Projects';
import Services from './Services/Services';
import Stats from './Stats/Stats';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div style={{ backgroundColor: "#0f0520" }}>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Stats></Stats>
            <Projects> </Projects>
            <Testimonial></Testimonial>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;