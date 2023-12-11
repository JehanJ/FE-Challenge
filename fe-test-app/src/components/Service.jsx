import { services } from '../data'
import Breadcrumbs from './Breadcrumbs'

const Service = () => {
  return (
    <>
      <section id='service' className='container is-fluid'>
        <div className='pad-T pad-LR'>
          <span className='tag tag-text-is-black is-white is-size-5-desktop is-size-6-touch'>
            <Breadcrumbs title='What we do' />
          </span>
          <h1 className='is-size-1-desktop is-size-3-touch has-text-black-ter mt-5 pad-H'>We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces</h1>
          <div className='columns'>
            {services.map(service => {
              return (
                <>
                  <div className='column is-one-quarter-desktop px-5' key={service.id}>
                    <img className='pad-icon' src={service.icon} alt={service.title} />
                    <p className='col-hh is-size-4-desktop is-size-5-touch has-text-weight-bold'>{service.title}</p>
                    <p>{service.text}</p>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
export default Service
