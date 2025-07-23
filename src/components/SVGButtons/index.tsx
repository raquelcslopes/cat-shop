import { Image, SVGButton } from "./styles";

interface SVGButtonsProps {
    src:string,
    alt:string,
    onClick: () => void;
}

function SVGButtons({src, alt, onClick} : SVGButtonsProps)  {
  return (
    <SVGButton onClick={onClick}>
      <Image src={src} alt={alt} />
    </SVGButton>
  )
}

export default SVGButtons
