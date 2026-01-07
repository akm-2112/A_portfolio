import ContactForm from "./ContactForm";
import StatusTile from "./StatusTile";
import SocialTile from "./SocialTile";
import CVTile from "./CVTile.jsx";
import {EmailTile} from "./EmailTile.jsx";


export default function ContactGrid() {
    return (
        <div className="contact-grid">
            <ContactForm/>

            <div className="contact-side">
                <StatusTile/>
                <CVTile/>
                <EmailTile/>
                <SocialTile/>
            </div>
        </div>
    );
}
