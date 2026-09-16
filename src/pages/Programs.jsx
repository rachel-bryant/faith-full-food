import '../styles.css';
import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Project from '../components/Project.jsx';
import Person from '../components/Person.jsx';

function Programs() {
    const book_images = ["cover.png", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"];
    const [page, setPage] = useState(0);

    function flipPage() {
        setPage((page + 1) % book_images.length);
    }

    const gallery_media = ["../public/images/programs/gallery/1.jpeg", "../public/images/programs/gallery/2.jpg", "../public/images/programs/gallery/3.jpg", "../public/images/programs/gallery/4.jpg", "../public/images/programs/gallery/5.jpg", "../public/images/programs/gallery/6.jpg", "../public/images/programs/gallery/7.jpg", "../public/images/programs/gallery/8.jpg", "../public/images/programs/gallery/9.jpg", "../public/images/programs/gallery/10.jpg", "../public/images/programs/gallery/11.jpg", "../public/images/programs/gallery/12.jpg", "../public/images/programs/gallery/13.jpg", "../public/images/programs/gallery/14.jpg", "../public/images/programs/gallery/15.jpg"];
    const [media, setMedia] = useState(0);

    function next(){
        setMedia((media + 1) % gallery_media.length);
    }

    function prev(){
        setMedia((media - 1 + gallery_media.length) % gallery_media.length);
    }

    return (
        <>
        <Navbar />
        <h1 className="programs-header">Programs</h1>
        {/* collective narrative project */}
        <img id="cnp" className="programs-img" src="../public/images/programs/CNP.png" />
        <Project title="Collective Narrative Project" desc="The Collective Narrative Project is FaithFull Food’s podcast and a dynamic reminder that we all have a role to play in the story of the future of our planet. From faith to profession, from childhood to now, we meet various stakeholders with the FaithFull Food movement and get to know how faith and food connect within each of us to grow our part of the story of now. Check our our latest episode here and check out our library for other episodes!"/>
        <h1 className="programs-subheader">CNP People</h1>
        <div className="people-section">
            <Person id="jon" photo="../public/images/headshots/Jon.jpg" name="Jon Shockness" description="Jon Shockness is a creative artist known by the names Neon Wolf and Kid Astronaut. He is also the founder of GARDEN, a mobile food pantry focused on advancing food justice by delivering food directly to places where people already gather." podcast="../public/audio/jon_podcast.mp3" podcast2="../public/audio/jon_podcast_2.mp3" className="orange-person"/>
            <Person id="bethany" photo="../public/images/headshots/Bethany.png" name="Bethany Hader Crabbs" description="Bethany Hader Crabbs serves as the Director of Care and Children's Ministry at University Park United Methodist Church. Passionate about spiritual formation and caring for others, she has dedicated her ministry to helping people grow in faith and connection." podcast="../public/audio/bethany_podcast.mp3" className="orange-person"/>
            <Person photo="../public/images/headshots/Nate.png" name="Nate Preisinger" description="Nate Preisinger is a pastor at Bethany Lutheran Church and serves on the board. He also played a key role in creating the Bethany Lutheran podcast studio, helping expand opportunities for meaningful conversations." podcast="../public/audio/nate_podcast.mp3" podcast2="../public/audio/nate_podcast_2.mp3" className="orange-person"/>
            <Person photo="../public/images/headshots/Epignosis.jpg" name="Epignosis" description="Epignosis is a graduate student in the Health Informatics program at the University of Denver and originally from Ghana in West Africa. His work and studies explore the ways technology can improve healthcare systems and outcomes." podcast="../public/audio/epignosis_podcast.mp3" podcast2="../public/audio/epignosis_podcast_2.mp3" className="orange-person"/>
            <Person id="gabbi" photo="../public/images/headshots/Gabbi.JPG" name="Gabbi Ohaya" description="Gabrielle &quot;Gabbi&quot; Ohaya is a Denver native, educator, entrepreneur, and community builder whose work is rooted in food justice and neighborhood connection. After careers in education, nonprofit leadership, business development, and the food industry, she co-founded FaithFull Food, where she serves as Director of Business Development. Gabbi is passionate about creating opportunities that bring people together through food, partnership, and joyful community." podcast="../public/audio/gabbi_podcast.mp3" className="orange-person"/>
            <Person id="embra" photo="../public/images/headshots/Embra.png" name="Embra Daylie" description="Embra Daylie has been a member of University Park United Methodist Church for more than two decades and has long been committed to strengthening communities through food and service. Inspired by his work with Agape and alongside Carolyn Tarr, he helped launch a community grow program that fostered connection and shared purpose. Today, he co-leads FaithFull Food, continuing to cultivate partnerships that nourish both people and neighborhoods." podcast="../public/audio/embra_podcast.mp3" className="orange-person"/>
        </div>
        {/* DO FOOD */}
        <img id="do-food" src="../images/programs/do-food.png" className="programs-img do-food" />
        <Project title="Do Food" desc="Do Food is FaithFull Food’s campus ministry program brand. We walk alongside churches and organizations that are campus adjacent to seed and grow new ministry that grows faith and fellowship by doing food. By rebranding, we support church’s abilities to grow faith in action with, by and for young people. "/>
        {/* gallery */}
        <div id="do-food-gallery">
            <img key={media} className="gallery-media" src={gallery_media[media]} />
            <button className="gallery-btn next" onClick={next}>&gt;</button>
            <button className="gallery-btn prev" onClick={prev}>&lt;</button>
        </div>
        {/* CORNERSTONE CONVERSIONS */}
        <img id="cornerstone" src="../images/programs/book/cover.png" className="programs-img" />
        <Project title="Cornerstone Conversions" desc={
            <>Through our Food Forest work at the Newport Street Retreat, we’ve learned that transforming church corners into living cornerstones is a vibrant and dynamic way to invite the surrounding community into the food work within. If you’re interested in advisement, committee facilitation or project management of a conversion, please reach out to &nbsp;
            <a className="programs-email" href="mailto:info@FaithFull.Food">info@FaithFull.Food</a> 
            </>} />
        {/* book */}
        <div id="book-wrapper">
            <img id="rings" src="../public/images/programs/book/rings.png"></img>
            <div onClick={flipPage} id="programs-book">
                <img key={page} className="book-page" src={"../public/images/programs/book/" + book_images[page]} />
            </div>
        </div>
        {/* HYDROPONICS */}
        {/* <img id="hydroponics" src="../images/programs/" className="programs-img" /> */}
        <Project title="Hydroponics" desc="We are learning an indoor grow project at University Park UMC. The first of its kind, this project aspires to connect disparate yet proximal communities within the building to provide year-round produce for our neighbors in need. Please reach out if you are interested in learning more, or if your church would like to join our first cohort of hydroponic churches, launching in early 2027. "/>
        {/* GROWING CHURCH CULTURE */}
        {/* <img id="culture" src="../images/programs/" className="programs-img" /> */}
        <Project title="Growing Church Culture" desc="In order to bridge generational divides and divides between those within and outside of church spaces, FaithFull Food is creating a series of workshops, courses and retreats to help prepare churches to integrate and manage new projects. These courses face church committees and congregants who are hungry for vitality, yet struggle with attracting and integrating new ideas and ways of doing within their congregations. We will be launching the pilot of this work in early 2027. Please reach out if you are interested in participating. " />
        <Footer />
        </>
    )
}

export default Programs;