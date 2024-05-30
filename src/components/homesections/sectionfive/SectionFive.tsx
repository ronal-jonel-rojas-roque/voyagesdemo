import React, { useEffect, useRef } from 'react'
import './sectionfive.css'
import img1 from "../../../assets/images/users/user1.jpg"
import img2 from "../../../assets/images/users/user2.jpg"
export default function SectionFive() {
    const containerRefs = useRef(null);
    const izq = useRef(null);
    const der = useRef(null);

    useEffect(() => {

        const observeElement = (elementRef: React.RefObject<HTMLElement> | null) => {
            if (elementRef && elementRef.current) {
                const options = {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.1
                };

                const observer = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('fade-entrate');
                            observer.unobserve(entry.target);
                        }
                    });
                }, options);

                observer.observe(elementRef.current);
            }
        };
        observeElement(containerRefs);
        observeElement(izq);
        observeElement(der);
        return () => {
            const observer = new IntersectionObserver(() => { });
            observer.disconnect();
        };
    }, []);
    return (
        <div className='section-5' ref={containerRefs}>
            <div className="content-section-5">
                <div className="columniz" ref={izq}>
                    <div className="title-izq">
                        <h2>Sobre Nosotros</h2>
                    </div>
                    <div className="text-izq">
                        <span>
                            En VIAJES EN YUME, hemos creado las experiencias de
                            viaje perfectas combinando nuestra pasión por Japón
                            con más de una década de experiencia. Nuestras guías
                            de viaje experimentadas tienen una comprensión
                            profunda de la cultura, la historia y las gemas
                            más ocultas de Japón. Nos aseguramos de que no
                            solo visite Japón, sino que realmente experimente
                            su espíritu.
                        </span>
                    </div>
                </div>
                <div className="columrig" ref={der}>
                    <div className="cover-rigth">
                        <div className="img-data">
                            <img src={img1} alt="imguser" className='imguser' />
                            <span>
                                Ronal Rojas
                            </span>
                        </div>
                        <div className="img-data">
                            <img src={img2} alt="imguser" className='imguser' />
                            <span>
                                Without Fear
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
