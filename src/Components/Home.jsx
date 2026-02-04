import pattern from '../assets/pattern.png'
import location from '../assets/location.png'
import clock from '../assets/clock.png'
import phone from '../assets/phone.png'
import { MapPin } from "lucide-react"
import { Phone } from "lucide-react"
import { Clock12 } from "lucide-react"
import { motion } from "motion/react"

export function Home() {
    return (
        <div>
            <div className='home-fparent'>
                <div className='home-wrapper'>
                    <div className="home-h1">Trusted UltraSound <br /> & Diagnostic Center <br /> in Nawada <br /></div>
                    <div className='home-h2'>Accurate Reports • Modern Machines • Affordable Charges</div>
                </div>
                <div className='home-img'><img src={pattern} alt="pattern" /></div>

            </div>

            <div className='home-p2'>
                <a href="tel:+919204865574">
                    <div className='home-call'>Call Now</div>
                </a>
                <a href="http://wa.me/919204865574?text=Hello%20I%20would%20like%20to%20book%20an%20appointment%20at%20your%20center" target='_blank'>
                    <div className='home-what'>WhatsApp Appointment</div>
                </a>
            </div>
            <div className='home-gf'>
                <motion.div whileTap={{ scale: 0.95 }} className='home-parent'>
                    <div className='home-c1'><img src={location} alt="location" /></div>
                    <div className='home-c2'>Near Arbind Press, Nawada</div>
                </motion.div>
                <motion.div whileTap={{ scale: 0.95 }} className='home-parent'>
                    <div className='home-c1'><img src={clock} alt="clock" /></div>
                    <div className='home-c2'>Mon - Sun | 8 AM — 6 PM</div>
                </motion.div>
                <motion.div whileTap={{ scale: 0.95 }} className='home-parent'>
                    <div className='home-c1'><img src={phone} alt="phone" /></div>
                    <div className='home-c2'>Call +91 75410 92929</div>
                </motion.div>
            </div>
            <div className='home-facilities'>
                Facilities Available
            </div>
            <div className='home-parent3'>
                <div className='home-child3'>3D / 4D Ultrasound</div>
                <div className='home-child3'>Color Doppler</div>
            </div>
            <div className='home-line' />
            <div className='home-parent3'>
                <div className='home-child3'>Whole Abdomen</div>
                <div className='home-child3'>Fatal Well Being</div>
            </div>
            <div className='home-line' />
            <div className='home-parent3'>
                <div className='home-child3'>USG's Intervention</div>
                <div className='home-child3'>Small Parts</div>
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.2462025640307!2d85.54778979999999!3d24.8895823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2ffd82239861f%3A0x3973b25c4631d37e!2sModern%20Ultrasound%20and%20ECHO%20Center%2C%20Nawada!5e0!3m2!1sen!2sin!4v1770087369585!5m2!1sen!2sin" className='map'   loading="lazy" referrerPolicy="no-referrer-when-downgrade">Hi</iframe>
            </div>
            <div className='home-footer'>
                <span className='home-lasth'>Modern Ultrasound Center</span>
                <div className='home-footer-p1'>
                    <MapPin className="h-xl text-amber-50 mt-0.5" />
                    <div className='home-footer-c1'>Near Arbind Press, Nawada, Bihar 805110</div>
                </div>
                <div className='home-footer-p1'>
                    <Phone className="h-xl text-amber-50 mt-0.5" />
                    <div className='home-footer-c1'>754192929, 9709934267</div>
                </div>
                <div className='home-footer-p1'>
                    <Clock12 className="h-xl text-amber-50 mt-0.5" />
                    <div className='home-footer-c1'>Mon-Sun: 8 AM - 6 PM</div>
                </div>
            </div>
        </div>
    )
}

