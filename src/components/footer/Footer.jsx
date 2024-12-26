import { SlSocialDribbble, SlSocialVkontakte, SlSocialYoutube } from 'react-icons/sl'
import './footer.css'

const Footer = () => {
 return (
    <footer>
        <a href="#top" className="footer__logo">Anna Santer</a>
        <ul className="footer__link">
            <li><a href="#top">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer__social">
            <a href="#top"><SlSocialVkontakte /></a>
            <a href="#top"><SlSocialYoutube/></a>
            <a href="#top"><SlSocialDribbble/></a>
        </div>
        <div className="footer__copyright">
            <small>&copy; Fullstack Developer. All rights reserve</small>
        </div>
    </footer>
 )
}

export default Footer