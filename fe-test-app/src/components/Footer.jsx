import Breadcrumbs from './Breadcrumbs'
import { footerInfo } from '../data'
import { footerSocials } from '../data'
import { footerNetworking } from '../data'
import { footerMedia } from '../data'

const Footer = () => {
  return (
    <>
      <footer id='contact'>
        <div class='container is-fluid'>
          <div class='pad-A'>
            <span class='tag has-text-white is-size-5-desktop is-size-6-touch'>
              <Breadcrumbs title='Contact us' />
            </span>
            <div class='columns mt-5 footer-info'>
              <div class='column is-three-quarters'>
                <h2 class='is-size-2-desktop is-size-4-touch'>
                  Have a project in mind?
                  <br />
                </h2>
                <p class='is-size-2-desktop'></p>
              </div>
              <div class='column is-one-quarter footer-info'>
                <p>22 Street Name, Suburb, 8000,</p>
                <p>Cape Town, South Africa</p>
                <p>+27 21 431 0001</p>
                <p>
                  <a href='mailto:enquirie@website.co.za'>enquirie@website.co.za</a>
                </p>
              </div>
            </div>
            <div class='columns pad-T footer-info'>
              <div class='column is-three-quarters'>
                <div class='columns is-mobile is-multiline'>
                  <div class='column is-full-mobile'>
                    {footerInfo.map(info => {
                      return (
                        <>
                          <p key={info.id}>
                            <a href={info.href}>{info.text}</a>
                          </p>
                        </>
                      )
                    })}
                  </div>
                  <div class='column is-full-mobile'>
                    {footerSocials.map(socials => {
                      return (
                        <>
                          <p key={socials.id}>
                            <a href={socials.href} target='_blank'>
                              {socials.text}
                            </a>
                          </p>
                        </>
                      )
                    })}
                  </div>
                  <div class='column is-full-mobile'>
                    {footerNetworking.map(network => {
                      return (
                        <>
                          <p key={network.id}>
                            <a href={network.href} target='_blank'>
                              {network.text}
                            </a>
                          </p>
                        </>
                      )
                    })}
                  </div>
                  <div class='column is-full-mobile'>
                    {footerMedia.map(media => {
                      return (
                        <>
                          <p key={media.id}>
                            <a href={media.href} target='_blank'>
                              {media.text}
                            </a>
                          </p>
                        </>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div class='column'>
                <p>
                  <a href='#'>Explore open jobs</a>
                </p>
                <p>©2000—2023 Company Name</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer
