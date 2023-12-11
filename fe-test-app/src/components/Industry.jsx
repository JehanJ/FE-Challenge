import Breadcrumbs from './Breadcrumbs'
import { brands } from '../data'

const Industry = () => {
  return (
    <>
      <section id='industries' class='container is-fluid'>
        <div class='pad-T pad-LR pad-B'>
          <span class='tag tag-text-is-black is-white is-size-5-desktop is-size-6-touch'>
            <Breadcrumbs title='You’ll be in good company' />
          </span>
          <h2 class='is-size-1-desktop is-size-3-touch mt-5 has-text-black-ter pad-H'>Trusted by leading brands</h2>
          <div class='columns level is-mobile is-multiline is-marginless'>
            {brands.map(brand => {
              const { id, image, info } = brand
              return (
                <>
                  <div class='column is-one-fifth-desktop is-one-third-touch level' key={id}>
                    <figure class='image brand-img level-item m-auto'>
                      <img src={image} alt={info} class='GC-img' />
                    </figure>
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
export default Industry
