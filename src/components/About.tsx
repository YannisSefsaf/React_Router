import { Link } from "react-router-dom"

const About = () => {
 return <>
 <div className="about__image">
     </div>
     <div className="about__section"><h1 className="about__title">Don’t squeeze in a sedan when you could relax in a van.</h1><p className="about__text">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
<br/>(Hitch costs extra 😉)</p>
<p className="about__text second__paragraph">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
<div className="CTA"><h2 className="CTA__title">Your destination is waiting.<br/>
Your van is ready.</h2>
<Link className="CTA__button" to="/vans">Explore our vans</Link>
</div>
</div>
 </>
}

export default About