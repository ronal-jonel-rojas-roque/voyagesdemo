import React, { useEffect, useRef } from 'react'
import './sectiontwo.css';
import { Link } from 'react-router-dom';
import temple from '../../../assets/imgicons/temple.png'
import face from '../../../assets/imgicons/japan.png'
import yin from '../../../assets/imgicons/Yin.png'

export default function SectionTwo() {
    const divMediumRef1 = useRef(null);
    const divMediumRef2 = useRef(null);
    const divMediumRef3 = useRef(null);

    useEffect(() => {
        const observeElement = (elementRef: React.RefObject<HTMLElement> | null) => {
            if (elementRef && elementRef.current) {
                const options = {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0
                };

                const observer = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('fade-in');
                            observer.unobserve(entry.target);
                        }
                    });
                }, options);

                observer.observe(elementRef.current);
            }
        };

        observeElement(divMediumRef1);
        observeElement(divMediumRef2);
        observeElement(divMediumRef3);

        // Limpiar el observador al desmontar
        return () => {
            const observer = new IntersectionObserver(() => {});
            observer.disconnect();
        };
    }, []);

    return (
        <div className='content-section-two'>
            <div className='content-section'>
                <div className="divtop">
                    <h2 className='title-section'>Viajando con Yume Voyages</h2>
                </div>
                <div className="heigthspacing"></div>

                <div className="divmedium">
                    <div className="divmediumd" ref={divMediumRef1}>
                        <div className="icono-border">
                            <img src={temple} alt="" />
                        </div>
                        <div className="spacemin"></div>
                        <div className="title-div">
                            <span>Tours únicos</span>
                        </div>
                        <div className="spacemin"></div>
                        <div className="text-div">
                            <span>
                                Dedicado a ofrecer recuerdos de por vida y momentos únicos,
                                proporcionamos solo itinerarios y actividades a medida a nuestros
                                queridos clientes, en lugar de recorridos premade.
                            </span>
                        </div>
                    </div>
                    <div className="divmediumd" ref={divMediumRef2}>
                        <div className="icono-border">
                            <img src={face} alt="" />
                        </div>
                        <div className="spacemin"></div>

                        <div className="title-div">
                            <span>Equipo entusiasta</span>
                        </div>
                        <div className="spacemin"></div>
                        <div className="text-div">
                            <span>
                                Viajar es nuestra pasión y presentarles las maravillas de Japón es
                                nuestra principal aspiración. Amamos a este país y compartir sus
                                maravillas es la razón por la que creamos Yume Voyages.
                            </span>
                        </div>
                    </div>
                    <div className="divmediumd" ref={divMediumRef3}>
                        <div className="icono-border">
                            <img src={yin} alt="" />
                        </div>
                        <div className="spacemin"></div>
                        <div className="title-div">
                            <span>libre de estrés</span>
                        </div>
                        <div className="spacemin"></div>
                        <div className="text-div">
                            <span>
                                De ahora en adelante, nos encargamos de todo. Todo lo que necesitamos
                                es saber cuándo planeas venir y qué te interesa. ¡Su viaje meticulosamente
                                elaborado y sin estrés te espera !
                            </span>
                        </div>
                    </div>
                </div>
                <div className="heigthspacing"></div>

                <div className="btnplan">
                    <Link to='#' className='Link'>
                        <span>Planifica tu viaje ahora</span>
                    </Link>
                </div>
            </div>
        </div >
    )
}
