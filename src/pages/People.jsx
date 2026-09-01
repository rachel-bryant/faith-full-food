import '../styles.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.jsx';
import Person from '../components/Person.jsx';
function People() {
    return (
        <>
        <Navbar />
        {/* CO-FOUNDING TEAM SECTION */}
        <h1 id="co-founders" className="people-section-header">Co-Founding Team</h1>
        {/* leadership */}
        <h2 className="people-section-subheader">Leadership</h2>
        <div className="people-section">
            <Person photo="../public/images/headshots/Carolyn.png" name="Carolyn Tarr" description="Carolyn Tarr is the founder of F Cafe and brings a background in education, community development, and collaborative design to FaithFull Food. Her work has included designing and launching university programs for students at the margins around the globe, from refugee camps to urban centers. Through her work, Carolyn has developed a passion for community development through co-creation and collaboration. F Cafe is a tangible expression of the world she is for, creating space for complexity at the intersection of social and environmental justice."/>
            <Person photo="../public/images/headshots/Gabbi.jpeg" name="Gabbi Ohaya" description="Gabrielle “Gabbi” Ohaya is a co-founder of FaithFull Food and serves as the Director of Business Development. She brings more than 10 years of experience as an entrepreneur, along with experience in education, nonprofit organizations, business development, fine dining, West African restaurants, and catering. Gabbi is passionate about food and social justice and is committed to nourishing bodies and communities. Through FaithFull Food, she works on community partnerships, food entrepreneurial opportunities, and event management systems." />
            <Person photo="../public/images/headshots/Lauren.jpg" name="Lauren Cowden" description="Lauren Cowden is a co-founder of FaithFull Food and currently serves as the Youth Director at University Park United Methodist Church. Her work is shaped by her experiences as an educator, youth advocate, and person of faith. Lauren has experience in special education, literacy support, youth ministry, early childhood care, coaching, and community-based work. Through FaithFull Food, she brings her commitment to building relationships, creating inclusive spaces, and walking alongside people to recognize their power and purpose." />
        </div>
        {/* team */}
        <h2 className="people-section-subheader top-margin-text">Team</h2>
        <div className="people-section">
            <Person photo="../public/images/headshots/Gianna.jpg" name="Gianna Urban" description="Gianna Urban is a marketing and communications team member at FaithFull Food and works as Carolyn Tarr’s assistant. She is currently an incoming senior at the University of Denver. Through her work with FaithFull Food, Gianna supports Carolyn and helps with marketing and communications for the organization. Her role includes contributing to the communication and presentation of FaithFull Food’s work and helping support the organization’s ongoing projects." />
            <Person photo="../public/images/headshots/Ben.jpg" name="Benjamin Schachterle" description="Benjamin Schachterle is FaithFull Food’s Storyteller in Residence. He recently graduated from Colorado State University with a degree in Journalism and Media Communication. Through his work with FaithFull Food, Benjamin films and edits video stories about the organization’s events and programming. He also produces and edits the Collective Narrative Project podcast, helping capture and share the stories connected to FaithFull Food." />
            <Person photo="../public/images/headshots/" name="Embra Daylie" description="Embra Daylie has been a member of University Park United Methodist Church for 24 years and was involved in the beginnings of FaithFull Food. Her work with Agape and her collaboration with Carolyn Tarr helped lead to the development of a growing program. That work eventually became part of the foundation for this new community and FaithFull Food. Embra’s involvement reflects her long-standing connection to the community and her role in the work that helped begin the organization." />
        </div>

        {/* FELLOWS */}
        <h1 id="fellows" className="people-section-header top-margin-text">Fellows</h1>
        <div className="people-section">
            <Person photo="../public/images/headshots/" name="" description="" />
            <Person photo="../public/images/headshots/" name="" description="" />
            <Person photo="../public/images/headshots/" name="" description="" />
        </div>

        {/* FOODES */}
        <h1 id="food-entrepreneurs" className="people-section-header top-margin-text">FoodEs</h1>
        <div className="people-section">
            <Person photo="../public/images/headshots/" name="" description="" />
        </div>

        {/* PARTNERS */}
        <h1 id="partners" className="people-section-header top-margin-text">Partners</h1>
        <div className="people-section">
            <Person photo="../public/images/headshots/" name="" description="" />
        </div>

        {/* BOARD */}
        <h1 id="board" className="people-section-header top-margin-text">Board</h1>
        <div className="people-section">
            <Person photo="../public/images/headshots/" name="" description="" />
        </div>

        <Footer />
        </>
    )
}

export default People;