import '../styles.css';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Quote from '../components/Quote.jsx';

function Plot() {
    return (
        <>
        <Navbar />
        {/* INTRO */}
        <h1 className="purpose-header">Plot</h1>
        {/* big hairy audacious goals */}
        <img className="purpose-main-img" src={`images/purpose/bahg.png`} />
        {/* text block */}
        <div className="purpose-section">
            <p>We are solving for much more than <span className="bold">hunger</span>. We are solving for <span className="bold">connection</span>. </p>
        </div>
        {/* trigen faith gap */}
        <img className="purpose-main-img" src={`images/purpose/trigen.png`} />
        {/* text block */}
        <div className="purpose-section">
            <p>Doing stuff with food is nothing revolutionary... if we leave the system alone. But a broken system has led to a divided people and an unhealthy planet. At the core of this is the choice of non-participation by Gen X, Millennials and Gen Z. Informative “truth” clashes with the mysticism of faith and has led to multiple generations that no longer show up in purpose-driven, volunteer spaces like Rotary clubs and churches. But, coming together, in real life spaces, around a common mission, is the foundation for civic society to generate a civilized humanity.</p>
        </div>
        {/* wisdom tree */}
        <div id="tree-section">
            <img className="plot-logo" src={`images/logo.png`} />
            <div className="purpose-section tree-purpose">
                <p>FaithFull Food is rooted in sacred texts grown through contemporary wisdom. We strive to continuously weave together new ideas with enduring, global proverbs to take words into action. We believe deeply that food and nourishment is a divine right to all of life upon this earth. </p>
            </div>
        </div>
        {/* QUOTES SECTION */}
        <h1 className="purpose-header">Quotes</h1>
        <Quote quote="Hope is holding a creative tension between what is and what could and should be, each day doing something to narrow the distance between the two." author="Parker Palmer" />
        <Quote quote="I later learned that there was a connection between the fig tree's root system and the underground water reservoirs. The roots burrowed deep into the ground, breaking through the rocks between the surface soil and diving into the underground water table. The water traveled up along the roots until it hit a depression or weak place in the ground and gushed out as a spring. Indeed, wherever these trees stood, there were likely to be streams. The reverence the community had for the fig tree helped preserve the stream and the tadpoles that so captivated me." author="Wangari Maathai" />
        <Quote quote="The single most common finding from a half century's research on the correlates of life satisfaction, not only in the United States but around the world, is that happiness is best predicted by the breadth and depth of one's social connections." author="Robert Putnam" />
        <Quote quote="For it is often the way we look at other people that imprisons them within their own narrowest allegiances. And it is also the way we look at them that may set them free." author="Amin Maalouf" />
        <Quote quote="Most of us do not feel heard much of the time. That’s because most people don’t know how to listen. We jump to conclusions. We think we understand when we don’t. We tee up our next point, before the other person has finished talking." author="Amanda Ripley" />
        <Quote quote="The average food item on a U.S. grocery shelf has traveled farther than most families go on their annual vacations." author="Barbara Kingsolver" />
        {/* text block */}
        <div className="purpose-section">
            <p>Our organization is rooted in the rebellious model of Christ and witness-based scriptures that help us to understand that feeding the belly is our divine right as living beings on this planet. As a secular organization, however, we are spiritually fluid and find value in myriad models of relationship building between us and the divine. We  invite others to help us see and align where one wisdom tradition connects with another. </p>
        </div>
        {/* SCRIPTURES */}
        <h1 id="scripture" className="purpose-header">Sacred Scripture</h1>
        <h2 className="scripture-header">Bible</h2>
        <Quote quote="For if you remain silent at this time, relief and deliverance will arise from another place, but you and your family will perish. And who knows but that you have come to your position for such a time as this?" author="Esther 4:14" />
        <Quote quote="And God said, ‘Behold, I have given you every plant and yielding seed which is upon the face of all the earth, and every tree with seed in its fruit; you shall have them for food. And to every beast of the earth, and to every bird of the air, and to everything that creeps on the earth, everything that has the breath of life, I have given every green plant for food.’ And it was so. And God saw everything they had made and behold it was very good. And there was evening and there was morning, a sixth day." author="Genesis 1: 29-31" />
        <Quote quote="Jesus answered, 'Very truly I tell you, you are looking for me, not because you saw the signs I performed but because you ate the loaves and had your fill.”" author="John 6: 26" />
        <Quote quote="What does it profit my brethren, if a man says he has faith but has not works? Can his faith save him? If a brother or sister is ill-clad and in lack of daily food, and one of you says to them, ‘Go in peace and be warmed and filled,’ without giving them the things needed for the body, what does it profit? So faith by itself, if it has no works, is dead." author="James 2: 14-17" />
        <h2 className="scripture-header">Quran</h2>
        <Quote quote="Who though longing for it themselves, bestowed their food on the poor and the orphan and the captive.: 'We feed you for the sake of God: we seek from you neither recompense nor thanks:'" author="Sura 76: 8-9" />
        <h2 className="scripture-header">Taittiriya Upanishad</h2>
        <Quote quote="I am food, I am food, I am food. I am the eater of food, I am the eater of food, I am the eater of food. I am the maker of the verse, I am the maker of the verse." author="Taittiriya Upanishad 6" />
        {/* CAROLYN'S WEEKLY LETTER GOES HERE */}
        {/* <h1 id="weekly-letter" className="purpose-header">Carolyn's Weekly Letter</h1>
        <div id="letter">
            <p id="letter-text">Hello! This is where Carolyn's Weekly Letter will go! I added a handwriting font so let me know if that font works of if you want something else. I wanted it to look like a piece of notebook paper so let me know if you like it!<br/><br/>Rachel Bryant</p>
        </div> */}
        <Footer />
        </>
    )
}

export default Plot;