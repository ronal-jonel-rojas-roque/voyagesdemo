import React, { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa6';
import logo from '../../assets/images/users/log.png'
import '../../styles/btnchat.css'
import { IoIosClose } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";

export default function BtnChat() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isNotificationVisible, setIsNotificationVisible] = useState(true);
    const [showMessage, setShowMessage] = useState(false);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
        if (!isChatOpen) {
            setIsNotificationVisible(false);
            setShowMessage(false);
            simulateTyping();
        } else {
            setTimeout(() => {setIsNotificationVisible(false);
                setShowMessage(false);
                simulateTyping();
                setIsNotificationVisible(true);
            }, 20000);
        }
    };

    useEffect(() => {
        if (isChatOpen) {
            setIsNotificationVisible(false);
            setShowMessage(false);
            simulateTyping();
        }
    }, [isChatOpen]);

    const simulateTyping = () => {
        setTimeout(() => {
            setShowMessage(true);
        }, 2000);
    };
    return (
        <div>
            <div className="whatsapp-button" onClick={toggleChat}>
                <FaWhatsapp size={32} />
                {isNotificationVisible && <div className="notification-circle">1</div>}
            </div>

            {isChatOpen && (
                <div className="whatsapp-modal">
                    <div className="whatsapp-modal-content">
                        <div className="whatsapp-header">
                            <div className="profile-img-container">
                                <img src={logo} alt="Profile" className="profile-img" />
                                <div className="online-notification"></div>
                            </div>
                            <div className="profile-info">
                                <h3>Ronal Rojas</h3>
                                <span>{showMessage ? 'En línea' : 'Escribiendo...'}</span>
                            </div>
                            <div className="close-modal-button" onClick={toggleChat}>
                                <IoIosClose size={20} />
                            </div>
                        </div>
                        <div className="whatsapp-body">
                            <div className="whatsapp-message">
                                {showMessage ? (
                                    <>
                                        <span>Hola </span><br />
                                        <span>¿cómo puedo ayudarte?</span>
                                    </>
                                ) : (
                                    <span className="whatsapp-typing-animation">
                                        <TbPointFilled className='icon1-point' />
                                        <TbPointFilled className='icon2-point' />
                                        <TbPointFilled className='icon3-point' />
                                    </span>
                                )}
                            </div>
                        </div>
                        <a href="https://wa.me/51989505663" target="_blank" rel="noopener noreferrer" className="whatsapp-start-chat">
                            <FaWhatsapp />
                            Iniciar chat
                        </a>


                    </div>
                </div>
            )}
        </div>
    );
}