import { Image, SVGButton } from "./styles";

interface SVGButtonsProps {
  text?: string;
  src: string;
  alt: string;
  onClick: () => void;
}

function SVGButtons({ src, alt, text, onClick }: SVGButtonsProps) {
  return (
    <SVGButton onClick={onClick}>
      {text}
      <Image src={src} alt={alt} />
    </SVGButton>
  );
}

export default SVGButtons;
