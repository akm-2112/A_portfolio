import {AnimatePresence, motion} from 'framer-motion';
import GlassTile from "./GlassTile";
import {useState} from "react";
import emailjs from "@emailjs/browser"


export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("null");

    const handleSubmit = async (e) => {
        e.preventDefault();

        //Honeypot
        if(e.target.test.value) return;

        // Rate limit
        const lastSent = localStorage.getItem("lastMessageTime");
        if (lastSent && Date.now() - Number(lastSent) < 60_000) {
            setStatus("rate-limit");

            setTimeout(()=>{
                setStatus(null);
            },3500);
            return;
        }

        setLoading(true);

        const formData = {
            from_name: e.target.name.value,
            from_email: e.target.email.value,
            message: e.target.message.value,
        };

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            );

            localStorage.setItem("lastMessageTime", Date.now());
            setStatus("success");
            e.target.reset();
            setTimeout(() => { setStatus("null"); }, 3500);

        } catch (error) {
            console.log(error);
            setStatus("error");
            setTimeout(() => { setStatus("null"); }, 3500);
        } finally {
            setLoading(false);
        }
    };
    return (
        <GlassTile className="contact-form">
            <form onSubmit={handleSubmit}>
                <input type="text" name="test" className="honeypot absolute opacity-0 pointer-events-none" />
                <input className="contact-input" name="name" placeholder="Your name" required/>
                <input className="contact-input" name="email" type="email" placeholder="Your Email" required />
                <textarea className="contact-textarea" name="message" placeholder="Your Message" rows={6} required />
                <motion.button
                    className="contact-submit"
                    type="submit"
                    whileTap={{scale:0.9}}
                    disabled={loading}
                >
                    {loading ? "Sending..." : "Send Message"}
                </motion.button>
                <AnimatePresence>
                {status === "success" && (
                    <p className="form-success">Message sent Successfully</p>
                )}
                {status === "rate-limit" && (
                    <p className="form-error">Please wait before sending again.</p>
                )}
                {status === "error" && (
                    <p className="form-error">Something went wrong! Please try again.</p>
                )}
                </AnimatePresence>
            </form>
        </GlassTile>
    );
}
