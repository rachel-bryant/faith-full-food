import '../styles.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.jsx';
import Person from '../components/Person.jsx';
import Video from '../components/Video.jsx';

function People() {
    return (
        <>
        <Navbar />
        {/* INTRO TO PEOPLE PAGE */}
        <div id="people-intro">
            <h1 className="people-section-header">People</h1>
            <div className="people-intro-content">
                <p>We hear a lot about belonging from many places. From the gym to church to the fancy hotel in the Maldives, we’re told, “You Belong Here!” But can belonging really happen when a few decide who should belong?</p>
                <p>At FaithFull Food we’re doing the work to co-create belonging because we know that making the claim is very different than actually making the space. People are our most valuable resource and doing it differently requires us to be comfortable with the rainbow of uniqueness we each carry. FaithFull Food is on a mission to guarantee we all have space to practice, play and come together to grow a better world. </p>
            </div>
        </div>

        {/* CO-FOUNDING TEAM SECTION */}
        <h1 id="co-founders" className="people-section-header">Co-Founding Team</h1>
        {/* leadership */}
        <h2 className="people-section-subheader">Leadership</h2>
        <div className="people-section">
            <Person className="person" photo="../public/images/headshots/Carolyn.png" title="Co-Founder & Vision Steward" name="Carolyn Tarr" description="Carolyn Tarr is the founder and vision steward of FaithFull Food. She brings a background in education, community development, storytelling and collaborative design. Her career has taken her around the globe designing and launching university programs for students at the margins, from refugee camps to urban centers and most recently through a co-created sustainable cafe in her heart-town of Watamu, Kenya. Through her work, Carolyn sees the myriad opportunities for innovation, expansion and liberation when we co-create space for all people to have a place to express themselves fully and guarantee they have the food necessary to get there. She believes that in-real-life connections are the soul of a functioning society and is our faith-filled leader moving us from idea to movement. "/>
            <Person id="gabbi" photo="../public/images/headshots/Gabbi.JPG" title="Co-Founder & Director of Business Development" name="Gabbi Ohaya" description="Gabrielle “Gabbi” Ohaya is a co-founder of FaithFull Food and serves as the Director of Business Development. She brings more than 10 years of experience as an entrepreneur, educator, nonprofit and business development consultant, with expertise in fine dining, West African restaurants, and catering. Gabbi is passionate about food and social justice and is committed to nourishing bodies and communities. Through FaithFull Food, she is pioneering community partnerships that build collective financial success for those who have been traditionally locked-out. She connects food entrepreneurs with spaces where food can grow connection while simultaneously advancing food sovereignty for all." />
            <Person id="lauren" photo="../public/images/headshots/Lauren.png" title="Co-Founder & Director of Partnerships and Programs" name="Lauren Cowden" description="Lauren Cowden is a co-founder of FaithFull Food and serves as the Director of Partnerships & Programs. She concurrently serves as the Youth Director at University Park United Methodist Church as she works to complete her Ed.D at The Morgridge School of Education at the University of Denver. Her work is shaped by her experiences as an educator, advocate, and person of faith who sees the ways in which these things must come together in young people to transform our society for tomorrow. Lauren has experience in special education, literacy support, youth ministry, early childhood care, coaching, and community-based work and is an expert relationship builder across all divides. Through FaithFull Food, she brings her commitment to bridging relationships, creating inclusive spaces, and walking alongside people to recognize their power and purpose and play their part in our movement." />
        </div>
        {/* team */}
        <h2 className="people-section-subheader top-margin-text">Team</h2>
        <div className="people-section">
            <Person id="embra" photo="../public/images/headshots/Embra.png" title="Co-Founder & Founding Hydroponics Fellow" name="Embra Daylie" description="Embra Daylie has been a member of University Park United Methodist Church for 24 years and is a Co-Founder & Founding Fellow, pioneering hydroponics in underutilized church spaces. As a man of faith, Embra recognized that he was uniquely positioned to re-create the spirit of Agape Food Pantry to connect disparate, yet proximal communities, that utilize the building at UPark UMC. He is the lead questioner and learner-doer of FaithFull Food, courageously modeling what faith-filled walking looks like. He is a model of what the building-in-public process requires, asking questions and trying things in order to find the next iteration. He hopes his hydroponics project connects people within the building around a common mission of using church space to feed those in need. Embra’s involvement reflects his long-standing connection to the community and his role in growing connection by doing food." />
            <Person photo="../public/images/headshots/Gianna.PNG" title="Communications Coordinator" name="Gianna Urban" description="Gianna Urban is a work-study student discerning her place in the field of marketing and communications as a co-founding team member FaithFull Food. She works directly with Carolyn and the storytelling team to transform how we deploy communications tools to invite and delight participants to our movement. She is currently a senior at the University of Denver and growing her toolkit as she grows her faith alongside those her work brings into the movement. Her role includes contributing to the communication and presentation of FaithFull Food’s work and helping support the organization’s ongoing projects." />
            <Person id="ben" photo="../public/images/headshots/Ben.jpg" title="Storyteller in Residence" name="Benjamin Schachterle" description="Benjamin Schachterle is FaithFull Food’s 2026 Storyteller in Residence. He recently graduated from Colorado State University with a degree in Journalism and Media Communication. Through his work with FaithFull Food, Benjamin films and edits video stories about the organization’s events and programming all told through his unique lens. He also produces and edits the Collective Narrative Project podcast, helping capture and share that we are all co-authoring the story of our planet’s future and we must all make the choice of what our unique role will be." />
        </div>

        {/* FELLOWS */}
        <h1 id="fellows" className="people-section-header top-margin-text">Fellows</h1>
        <div className="people-content">
            <p>With our Walk-Along Partner Churches, we identify and fund Fellows to kick-start connectional ministries that invite and delight young adult faith-seekers and proximal community members to engage and take part in the movement. While many of these young people grow into mission-aligned members of partnered faith spaces, some choose to grow.</p>
        </div>
        <div className="people-content">
            <h2 className="people-content-header">University Park Methodist Church TriGen Fellows</h2>
            <p>Our Fellowship work at University Park UMC is primarily focused on our work facing the University of Denver and the University Park neighborhood of Denver. We are calling this campus and campus-adjacent ministry “DuFood.” Led by our Fellows, supported by UPark UMC congregants and facilitated by FaithFull Foods programming, this work weaves together communities within the DU corridor by Du-ing food, together for a shared mission and purpose. </p>
        </div>
        <div className="people-section">
            <Person id="embra" photo="../public/images/headshots/Embra.png" title="Project: Connecting Communities by Growing Food Hydroponically" name="Embra Daylie" description="Embra's main focus is connecting currently disconnected communities within University Park to grow food, grow outreach and grow the mission of feeding people. Embra is doing this by taking what he is learning about growing hydroponically and inviting other building and neighborhood communities to join him in seeding, nourishing, stewarding and harvesting with him. Starting with vertical towers and moving into other hydroponic styles of growing, Embra hopes to be providing fresh produce for community members at no-cost, all year round. " />
            <Person id="alycea" photo="../public/images/headshots/Alycea.jpg" title="Project: Seeding Co-Creation" name="Alycea Molski" description="Alycea is currently leading Crafty ministry on the first Sunday of each month to connect intergenerationally by being creative. She sees that using our hands builds easier ways to connect and create. As a Fellow, she is eager to increase young adult fellowship and activations through both creativity and gardening. Her work bridges what we learn in God's creation with how we find the divine within ourselves and connect with each other while doing. While her primary focus is increasing young adult engagement, she wants to do this by strengthening intergenerational connections to decrease loneliness across generations. Her fellowship will work to form young adult support groups and networks to help those who need connection to find it. She serves as the seed-starter and partner to Embra’s hydroponics project as well as gardening at UPark and the Food Forest at the Newport St Retreat. She is also managing volunteers for FaithFull Food. Alycea is particularly focused on creating safe placemaking for the LGTBQ+ community and is a fierce advocate for belonging within faith communities for those who have been traumatized by religion in their pasts." />
            <Person id="owen" photo="../public/images/headshots/Owen.jpg" title="Project: Walking with the Unhoused" name="Owen Scott" description="Owen is a senior at the University of Denver, majoring in history, and growing into a societal leader through his work with ROTC and rooted in his faith in the greater good, when we all do our part. As our work-study Fellow, Owen will be kick-starting a branch of campus ministry to invite DU students to help us with micro and macro solutions to offer our unhoused neighbors. His ministry focus includes connecting DU students with SASSY and sandwich making along with various small groups already meeting within UPark UMC (men's group, Poetry, Psalms & Seinfeld, and Friday Bible Study). His fellowship forges intergenerational connections and transforms how we put our faith in action to meet the most pressing challenges of our time. " />
        </div>
        <div className="video-section">
            <Video videoSrc="../public/images/thumbnails/hydroponics.png" title="Growing connection with Hydroponics" video="https://drive.google.com/file/d/1QtXcWjUpIJMD3eKXx9lR33AjWLfmTmo1/preview" />
            <Video videoSrc="../public/images/thumbnails/crafts.png" title="Come craft with Alycea first Sunday of the month at 12:30pm!" video="https://drive.google.com/file/d/1Q1s20CQr2726fwA5N25T7dwjt5nGU2C0/preview" />
            <Video videoSrc="../public/images/thumbnails/sassy.png" title="Join us on second Sundays to put service in action!" video="https://drive.google.com/file/d/10prU3JNJX8mrPVpVmGOKUYXAgRJhx3WY/preview" />
        </div>

        {/* FOODES */}
        {/* <h1 id="food-entrepreneurs" className="people-section-header top-margin-text">FoodEs</h1>
        <div className="people-section">
            <Person photo="../public/images/headshots/" title="" name="" description="" />
        </div> */}

        {/* PARTNERS */}
        {/* <h1 id="partners" className="people-section-header top-margin-text">Partners</h1>
        <div className="people-section">
            <Person photo="../public/images/headshots/" name="" description="" />
        </div> */}

        {/* BOARD */}
        {/* <h1 id="board" className="people-section-header top-margin-text">Board</h1>
        <div className="people-section">
            <Person photo="../public/images/headshots/" title="" name="" description="" />
        </div> */}

        <Footer />
        </>
    )
}

export default People;