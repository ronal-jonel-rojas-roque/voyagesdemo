import React from 'react'
import { FaFacebook, FaFacebookF, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { IoLogoInstagram } from 'react-icons/io'
import { SlSocialYoutube } from "react-icons/sl";
import '../../styles/footer.css'
export default function Footer() {
    return (
        <div className='container-footer'>
            <footer>
                <div className="waves-efects">
                    <div className="waves-ef" id='waves1'></div>
                    <div className="waves-ef" id='waves2'></div>
                    <div className="waves-ef" id='waves3'></div>
                    <div className="waves-ef" id='waves4'></div>
                </div>
                <div className="box">
                    {/*   <h2 className='h2'>SIGUENOS</h2> */}
                    <div className="red-social">
                        <a href="https://www.facebook.com/RonalRojasRoqueJ" className="fa fa-facebook" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com/ronalrojasroquej/" className="fa fa-instagram" target="_blank" rel="noopener noreferrer">
                            <IoLogoInstagram />
                        </a>
                        <a href="https://twitter.com/ronalrojasroqj" className="fa fa-twitter" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter />
                        </a>
                        <a href="https://www.youtube.com/@ronalrojasroquej" className="fa fa-youtube" target="_blank" rel="noopener noreferrer">
                            <SlSocialYoutube />
                        </a>

                        <a href="https://www.youtube.com/@ronalrojasroquej" className="fa fa-youtube" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>
                    <p>
                        ©2024 Ronal Rojas Roque || Todos los derechos reservados
                    </p>
                </div>

            </footer>
        </div>
    )
}
