import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer  p-10 bg-slate-100 ">
                <aside>
                   <img className='w-20 mx-auto' src="https://i.ibb.co/L6hwkjF/success.png" alt="" />
                    <h2 className='text-3xl font-bold'>Contest Hub </h2>
                </aside>


                <nav>
                    <header className="footer-title font-bold">Services</header>
                    <a className="link link-hover font-bold">Branding</a>
                    <a className="link link-hover font-bold">Design</a>
                    <a className="link link-hover font-bold">Marketing</a>
                    <a className="link link-hover font-bold">Advertisement</a>
                </nav>

                <nav>
                    <header className="footer-title">Menu</header>
                    <Link to="/about" className="link link-hover font-bold">About us</Link>
                    <Link to="/contact" className="link link-hover font-bold">Contact Us</Link>
                    <Link to="/allcontest" className="link link-hover font-bold">All Contest</Link>
                
                </nav>
                <nav>
                    <header className="footer-title font-bold">Legal</header>
                    <a className="link link-hover font-bold">Terms of use</a>
                    <a className="link link-hover font-bold">Privacy policy</a>
                    <a className="link link-hover font-bold">Cookie policy</a>
                </nav>


                <nav>
                    <header className="footer-title">Social</header>
                    <div className="grid grid-flow-col gap-4">

                        <a href="https://www.facebook.com/SabbirOfficial34"><FaFacebook className='text-3xl'></FaFacebook></a>

                        <a href=""><FaYoutube className='text-3xl'></FaYoutube></a>

                        <a href=""><FaTwitter className='text-3xl'></FaTwitter></a>

                    </div>
                </nav>
            </footer>

            <div className="footer footer-center p-4 bg-slate-100 text-base-content">
                <aside>
                    <p>Copyright © 2023 - All right reserved by Contest Hub</p>
                </aside>
            </div>

        </div>
    );
};

export default Footer;