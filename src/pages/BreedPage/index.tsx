import arrowsIcon from "../../assets/arrows.svg"
import SVGButtons from '../../components/SVGButtons'

function BreedsPage() {
  return (
    <>
    <div><SVGButtons src={arrowsIcon} alt={'Arrows to order'} onClick={function (): void {
        throw new Error('Function not implemented.')
      } } text="Price"></SVGButtons>
      
      <SVGButtons src={arrowsIcon} alt={'Arrows to order'} onClick={function (): void {
        throw new Error('Function not implemented.')
      } } text="AZ"></SVGButtons></div>
    <div></div>
    </>
  )
}

export default BreedsPage
