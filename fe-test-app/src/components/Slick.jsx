import { useState, useEffect } from 'react'
import DOMPurify from 'dompurify'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Breadcrumbs from './Breadcrumbs'
import TagIcon from '../images/Rectangle.png'

const ogUrl = 'https://socialmediaserver.co.za/challenge'
const sanitizedUrl = DOMPurify.sanitize(ogUrl)

const Slick = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    loop: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1215,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const [slides, setSlides] = useState([])

  const fetchSlides = async () => {
    try {
      const response = await fetch(sanitizedUrl)
      const slides = await response.json()
      console.log(slides)
      setSlides(slides)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchSlides()
  }, [])

  return (
    <>
      <section id='caseStudies' className='container is-fluid'>
        <div className='pad-T pad-LR'>
          <span className='tag tag-text-is-black is-white is-size-5-desktop is-size-6-touch'>
            <Breadcrumbs title='What we do' />
          </span>
          <div className='columns mt-5'>
            <Slider {...settings}>
              {slides.map(slide => {
                const { imageUrl, description, title } = slide
                return (
                  <>
                    <div class='column' key={title}>
                      <div class='card'>
                        <div class='card-image'>
                          <figure class='image is-square'>
                            <img src={imageUrl} alt={title} />
                          </figure>
                        </div>
                        <div class='card-content'>
                          <div class='content'>
                            <img src={TagIcon} alt='rectangleIcon' />
                            <p class='is-size-3-desktop is-size-5-touch has-text-white has-text-weight-bold'>{title}</p>
                            <p class='pad-Cp has-text-white pb-1'>{description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}
export default Slick
