import '../styles.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.jsx';
import Person from '../components/Person.jsx';
function People() {
    return (
        <>
        <Navbar />
        <div className="people-section">
            <Person photo="../public/images/headshots/Carolyn.png" name="Carolyn Tarr" description="Carolyn Tarr is the founder of F Cafe and brings a background in education, community development, and collaborative design to FaithFull Food. Her work has included designing and launching university programs for students at the margins around the globe, from refugee camps to urban centers. Through her work, Carolyn has developed a passion for community development through co-creation and collaboration. F Cafe is a tangible expression of the world she is for, creating space for complexity at the intersection of social and environmental justice."/>
            <Person photo="../public/images/headshots/Gabbi.jpeg" name="Gabbi Ohaya" description="Gabrielle “Gabbi” Ohaya is a co-founder of FaithFull Food and serves as the Director of Business Development. She brings more than 10 years of experience as an entrepreneur, along with experience in education, nonprofit organizations, business development, fine dining, West African restaurants, and catering. Gabbi is passionate about food and social justice and is committed to nourishing bodies and communities. Through FaithFull Food, she works on community partnerships, food entrepreneurial opportunities, and event management systems." />
            <Person photo="../public/images/headshots/Lauren.jpeg" name="Lauren Cowden" description="Lauren Cowden is a co-founder of FaithFull Food and currently serves as the Youth Director at University Park United Methodist Church. Her work is shaped by her experiences as an educator, youth advocate, and person of faith. Lauren has experience in special education, literacy support, youth ministry, early childhood care, coaching, and community-based work. Through FaithFull Food, she brings her commitment to building relationships, creating inclusive spaces, and walking alongside people to recognize their power and purpose." />
            {/* <Person photo="../public/images/headshots/" name="" description="" /> */}
        </div>
        <Footer />
        </>
    )
}

export default People;