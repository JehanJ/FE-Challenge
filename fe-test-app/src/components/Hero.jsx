import heroImage from '../images/confidence.jpeg'

const Hero = () => {
  return (
    <>
      <section className='container is-fluid hero is-info'>
        <img src={heroImage} alt='hero-image' />
        <div className='hero-body'>
          <p className='title is-size-1-desktop is-size-3-touch'>Live with Confidence</p>
          <p className='subtitle py-4'>José Mourinho brings confidence to pan-African Sanlam campaign.</p>
          <button className='button is-primary is-rounded'>View Project</button>
        </div>
      </section>
    </>
  )
}
export default Hero
