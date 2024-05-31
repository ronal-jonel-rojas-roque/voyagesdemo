import React, { useState } from 'react'
import './sectionsix.css'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const testimonials = [
  {
    text: "Mi esposo y yo viajamos a Japón con mis padres, que son mayores. La gira con Akemi fue perfecta para nosotros, ya que pudimos ir a nuestro propio ritmo y aun así ver muchas cosas. Akemi siempre estuvo pendiente de nuestras necesidades y es muy conocedora de la historia y la cultura japonesas. Pasamos un día con ella en Kyoto y nos hubiera gustado seguir la gira al día siguiente, pero ya estaba ocupada. Sin embargo, ella organizó para que otra persona nos acompañara al día siguiente. ¡La recomiendo completamente! Fue la mejor manera de conocer Kyoto. ¡Sin duda alguna!",
    author: "Larissa H"
  },
  {
    text: "Toda la experiencia superó nuestras expectativas. Los lugares que visitamos y las explicaciones fueron excepcionales. Hubo mucha atención al detalle tanto en el trato como en el recorrido. Muchas gracias por todo.",
    author: "Fátima Fernández"
  },
  {
    text: "¡Una experiencia maravillosa e inolvidable! Todo estuvo perfectamente planeado y cumplió con nuestras expectativas. ¡Lo único que nos faltó fue más tiempo para seguir disfrutando! Muchas gracias por toda la atención. Altamente recomendado, se adaptan a nuestro tiempo y necesidades en varios idiomas.",
    author: "Christine P"
  }
];

export default function SectionSix() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMore, setShowMore] = useState(testimonials.map(() => false));

  const nextSlide = () => {
    const collumn2Element = document.querySelector('.collumn2') as HTMLDivElement;
    if (collumn2Element) {
      collumn2Element.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      collumn2Element.style.transform = 'translateX(-100%)';
      collumn2Element.style.opacity = '0';
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        collumn2Element.style.transition = 'transform 0.5s ease';
        collumn2Element.style.transform = 'translateX(0%)';
        collumn2Element.style.opacity = '1';
      }, 500);
    }
  };

  const prevSlide = () => {
    const collumn2Element = document.querySelector('.collumn2') as HTMLDivElement;
    if (collumn2Element) {
      collumn2Element.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      collumn2Element.style.transform = 'translateX(-100%)';
      collumn2Element.style.opacity = '0';
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
        collumn2Element.style.transition = 'transform 0.5s ease';
        collumn2Element.style.transform = 'translateX(0%)';
        collumn2Element.style.opacity = '1';
      }, 500);
    }
  };

  const toggleShowMore = (index: number) => {
    setShowMore(prevShowMore => {
      const newShowMore = [...prevShowMore];
      newShowMore[index] = !newShowMore[index];
      return newShowMore;
    });
  };

  return (
    <div>
      <div className="section-six">
        <div className="divsectiontop">
          <h3 className="title-sectiontop">
            No tomes nuestra palabra por ello.
            Escuche a nuestros clientes satisfechos
            que han explorado Japón con nosotros.
          </h3>
        </div>
        <div className="heigthspacing"></div>

        <div className="divsectionmedium">
          <span>
            ¡Sus historias son el testimonio de nuestra promesa
            de proporcionar una experiencia de viaje inolvidable!
          </span>
        </div>
        <div className="heigthspacing"></div>

        <div className="divsectionbot">
          <div className="divcontentslider">
            <div className="colum1">
              <IoIosArrowDropleftCircle onClick={prevSlide} className='arrow-slide prev-testimonio' />
            </div>
            <div className="colum2">
              <div className={`collumn2`}>
                <span className={`testimonial-text ${showMore[currentIndex] ? 'show-all' : ''}`}>
                  {testimonials[currentIndex].text}
                </span>
                {testimonials[currentIndex].text.length > 500 && (
                  <span
                    className='show-more mobile-only'
                    onClick={() => toggleShowMore(currentIndex)}
                  >
                    {showMore[currentIndex] ? 'Ver menos' : 'Ver más'}
                  </span>
                )}
                <span className='autor-text'>
                  {testimonials[currentIndex].author}
                </span>
              </div>
            </div>
            <div className="colum3">
              <IoIosArrowDroprightCircle onClick={nextSlide} className='arrow-slide next-testimonio' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
