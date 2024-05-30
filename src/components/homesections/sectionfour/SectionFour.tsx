import React, { useEffect, useRef, useState } from 'react'
import './sectionfour.css'
import { GiSpotedFlower, GiVineFlower } from "react-icons/gi";
import { Link } from 'react-router-dom'
import { MdOutlineHorizontalRule } from 'react-icons/md';
import { FaPlus } from "react-icons/fa6";

interface ExpandedSections {
    [key: string]: boolean;
}
export default function SectionFour() {
    const [expandedSectionsLeft, setExpandedSectionsLeft] = useState<ExpandedSections>({
        'inspirate': true,
        'personalizar': false,
        'finalizar': false,
        'disfrutar': false
    });

    const [expandedSectionsRight, setExpandedSectionsRight] = useState<ExpandedSections>({
        'obtener': true,
        'beneficios': false,
        'como': false
    });

    const containerRef = useRef(null);
    const titleSectionRef = useRef(null);
    const mediumSectionRef = useRef(null);
    const bottomSectionRef = useRef(null);
    const btnResRef = useRef(null);

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
        observeElement(containerRef);
        observeElement(titleSectionRef);
        observeElement(mediumSectionRef);
        observeElement(bottomSectionRef);
        observeElement(btnResRef);

        return () => {
            const observer = new IntersectionObserver(() => { });
            observer.disconnect();
        };
    }, []);

    const toggleSectionLeft = (sectionName: string) => {
        setExpandedSectionsLeft((prevState) => {
            if (prevState[sectionName]) {
                return {
                    ...prevState,
                    [sectionName]: false
                };
            } else {
                return {
                    ...Object.fromEntries(Object.keys(prevState).map(key => [key, key === sectionName])),
                };
            }
        });
    };

    const toggleSectionRight = (sectionName: string) => {
        setExpandedSectionsRight((prevState) => {
            if (prevState[sectionName]) {
                return {
                    ...prevState,
                    [sectionName]: false
                };
            } else {
                return {
                    ...Object.fromEntries(Object.keys(prevState).map(key => [key, key === sectionName])),
                };
            }
        });
    };

    const getLineClassNameLeft = (sectionName: string) => {
        return expandedSectionsLeft[sectionName] ? 'line-expanded' : '';
    };

    const getLineClassNameRight = (sectionName: string) => {
        return expandedSectionsRight[sectionName] ? 'line-expanded' : '';
    };

    const getLineIconLeft = (sectionName: string) => {
        if (expandedSectionsLeft[sectionName]) {
            return (
                <div className="line1">
                    <MdOutlineHorizontalRule />
                </div>
            );
        } else {
            return (
                <div className="line2">
                    <FaPlus />
                </div>
            );
        }
    };

    const getLineIconRight = (sectionName: string) => {
        if (expandedSectionsRight[sectionName]) {
            return (
                <div className="line1">
                    <MdOutlineHorizontalRule />
                </div>
            );
        } else {
            return (
                <div className="line2">
                    <FaPlus />
                </div>
            );
        }
    };

    return (
        <div ref={containerRef}>
            <div className="container-section-4">
                <div className="div-title-section-4" ref={titleSectionRef}>
                    <h1>Inspírate con nuestras experiencias más populares</h1>
                    <div className="spacemin"></div>
                    <span>
                        Ya sea una aventura de un día o una exploración de un
                        mes de duración, ya sea que desee la vibrante energía de
                        las bulliciosas calles de Tokio, la serena belleza de los
                        templos de Kyoto, las delicias culinarias de los mercados
                        callejeros de Osaka, o las montañas nevadas de Hokkaido,
                        estamos aquí para crear un recorrido inolvidable a medida
                        que nos convertiremos en un recuerdo para toda la vida.
                    </span>
                </div>
                <div className="heigthspacing"></div>
                <div className="div-medium-section" ref={mediumSectionRef}>
                    <div className="div-colum columizquierda">
                        <div className="data-text-title">
                            <h2>
                                ¿Cómo planificar un viaje con nosotros ?
                            </h2>
                        </div>
                        <div className="spacemin"></div>
                        <div className="content-data-ins">
                            <div className={`title-inspirate ${expandedSectionsLeft['inspirate'] ? 'active' : ''}`} onClick={() => toggleSectionLeft('inspirate')}>
                                <h3>¡Primero - Inspirate!</h3>
                                <div className={`div-line ${getLineClassNameLeft('inspirate')}`}>
                                    <div className="line-icon" onClick={() => toggleSectionLeft('inspirate')}>
                                        {getLineIconLeft('inspirate')}
                                    </div>
                                </div>

                            </div>

                            {expandedSectionsLeft['inspirate'] && (
                                <div className="data-view">
                                    <span className="data-revel">
                                        Explore nuestro sitio web para encontrar ideas o hable con nuestros guías locales expertos para
                                        brindarle los consejos más recientes y relevantes.
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="spacemin"></div>

                        <div className="content-data-ins">
                            <div className={`title-inspirate ${expandedSectionsLeft['personalizar'] ? 'active' : ''}`} onClick={() => toggleSectionLeft('personalizar')}>
                                <h3>Juntos - Personalizamos su viaje!</h3>
                                <div className={`div-line ${getLineClassNameLeft('personalizar')}`}>
                                    <div className="line-icon" onClick={() => toggleSectionLeft('personalizar')}>
                                        {getLineIconLeft('personalizar')}
                                    </div>
                                </div>
                            </div>
                            {expandedSectionsLeft['personalizar'] && (
                                <div className="data-view">
                                    <span className='data-revel'>
                                        En la era de la tecnología y el anonimato, reintroducimos
                                        el toque humano en los viajes. Escuchamos y entendemos sus
                                        necesidades y preferencias de viaje para que podamos diseñar
                                        conjuntamente el itinerario perfecto.
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="spacemin"></div>
                        <div className="content-data-ins">
                            <div className={`title-inspirate ${expandedSectionsLeft['finalizar'] ? 'active' : ''}`} onClick={() => toggleSectionLeft('finalizar')}>
                                <h3>Nosotros - Finalizamos su itinerario!</h3>
                                <div className={`div-line ${getLineClassNameLeft('finalizar')}`}>
                                    <div className="line-icon" onClick={() => toggleSectionLeft('finalizar')}>
                                        {getLineIconLeft('finalizar')}
                                    </div>
                                </div>
                            </div>
                            {expandedSectionsLeft['finalizar'] && (
                                <div className="data-view">
                                    <span className='data-revel'>
                                        Nos encargamos de todo, desde reservas de hoteles y restaurantes
                                        hasta recomendaciones de guías locales expertos, todo según tus
                                        preferencias y presupuesto. Proporcionamos un completo kit de viaje
                                        con toda la información necesaria antes de su salida.
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="spacemin"></div>
                        <div className="content-data-ins">
                            <div className={`title-inspirate ${expandedSectionsLeft['disfrutar'] ? 'active' : ''}`} onClick={() => toggleSectionLeft('disfrutar')}>
                                <h3>¡Tú! - Disfruta tu itinerario!</h3>
                                <div className={`div-line ${getLineClassNameLeft('disfrutar')}`}>
                                    <div className="line-icon" onClick={() => toggleSectionLeft('disfrutar')}>
                                        {getLineIconLeft('disfrutar')}
                                    </div>
                                </div>

                            </div>
                            {expandedSectionsLeft['disfrutar'] && (
                                <div className="data-view">
                                    <span className='data-revel'>
                                        Durante el viaje, nos mantendremos en contacto para asegurarnos de
                                        que todo vaya según lo planeado. También estaremos en comunicación
                                        directa con hoteles y proveedores para supervisar cada detalle de su viaje.
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Cierre de la primera columna */}
                    <div className="div-colum columderecha">
                        <div className="data-text-title">
                            <h2>
                                Ventajas de viajar con Yume Voyages
                            </h2>
                        </div>
                        <div className="spacemin"></div>
                        <div className="content-data-ins">
                            <div className={`title-inspirate ${expandedSectionsRight['obtener'] ? 'active' : ''}`} onClick={() => toggleSectionRight('obtener')}>
                                <h3>Lo que probablemente no obendría reservando directamente</h3>
                                <div className={`div-line ${getLineClassNameRight('obtener')}`}>
                                    <div className="line-icon" onClick={() => toggleSectionRight('obtener')}>
                                        {getLineIconRight('obtener')}
                                    </div>
                                </div>

                            </div>
                            {expandedSectionsRight['obtener'] && (
                                <div className="data-view">
                                    <span className='data-revel'>
                                        Nuestra extensa red y profundo conocimiento de la cultura y el idioma
                                        japonés nos permiten ofrecer una gama excepcional de servicios y
                                        actividades que no se pueden encontrar en Internet.
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="spacemin"></div>
                        <div className="content-data-ins">
                            <div className={`title-inspirate ${expandedSectionsRight['beneficios'] ? 'active' : ''}`} onClick={() => toggleSectionRight('beneficios')}>
                                <h3>Beneficios Exclusivos</h3>
                                <div className={`div-line ${getLineClassNameRight('beneficios')}`}>
                                    <div className="line-icon" onClick={() => toggleSectionRight('beneficios')}>
                                        {getLineIconRight('beneficios')}
                                    </div>
                                </div>

                            </div>
                            {expandedSectionsRight['beneficios'] && (
                                <div className="data-view">
                                    <span className='data-revel'>
                                        Nuestra experiencia surge de la experiencia de
                                        primera mano: seleccionamos cada hotel y destino
                                        con la guía de expertos locales. Brindamos recomendaciones
                                        sobre materiales de lectura y visualización para mejorar
                                        su viaje, asegurando que cada viaje se convierta en una
                                        aventura única. Con reseñas exhaustivas de hoteles,
                                        guías de destinos y actualizaciones de viajes, estará
                                        bien preparado.
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="spacemin"></div>
                        <div className="content-data-ins">
                            <div className={`title-inspirate ${expandedSectionsRight['como'] ? 'active' : ''}`} onClick={() => toggleSectionRight('como')}>
                                <h3>¿Cómo obtenemos todos estos privilegios para ud?</h3>
                                <div className={`div-line ${getLineClassNameRight('como')}`}>
                                    <div className="line-icon" onClick={() => toggleSectionRight('como')}>
                                        {getLineIconRight('como')}
                                    </div>
                                </div>

                            </div>
                            {expandedSectionsRight['como'] && (
                                <div className="data-view">
                                    <span className='data-revel'>
                                        Llevamos muchos años participando en los eventos más importantes
                                        de la industria de viajes de lujo. Nuestras relaciones personales
                                        son miembros de redes que negocian beneficios para un grupo selecto
                                        de viajeros. Trabajar durante años con los mejores proveedores (hoteles,
                                        tours, restaurantes, etc.) nos ha permitido establecer relaciones con personas
                                        clave en los mejores lugares de Japón. Conocer a la persona adecuada en el
                                        lugar correcto marca una gran diferencia y lo hemos logrado en numerosas ciudades y prefecturas de todo Japón.
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="heigthspacing"></div>
                <div className="div-bottom" ref={bottomSectionRef}>
                    <div className="div-icon">
                        <GiVineFlower />
                    </div>
                    <div className="spacemin"></div>
                    <div className="div-text-botom">
                        <span>
                            Con YUME VOYAGES, está eligiendo un viaje adaptado a sus intereses, comodidad y seguridad. Nos enorgullecemos de
                            nuestros guías locales bien versados y del compromiso con los viajes sostenibles. Gracias a nuestra extensa red
                            y profundo conocimiento, disfrutará de experiencias que la mayoría de los viajeros nunca tienen la oportunidad de experimentar.
                        </span>
                    </div>
                </div>
                <div className="heigthspacing"></div>
                <div className="div-btn-res" ref={btnResRef}>
                    <Link to="" className='Link'>
                        <span>Planifica tu viaje ahora</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
