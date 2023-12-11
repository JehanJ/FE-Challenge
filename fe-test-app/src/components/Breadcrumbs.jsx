import TagIcon from '../images/Rectangle.png'

const breadcrumb = ({ title }) => {
  return (
    <>
      <img src={TagIcon} alt='Rectangle icon' className='rectangleIcon' />
      &nbsp; {title}
    </>
  )
}
export default breadcrumb
