import { useState } from "react";
import arrowIcon from "../../assets/arrowDown.svg";
import { Button, HiddenContainer, HiddenItem, Icon } from "./styles";

interface FilterItemProps {
  text: string;
  array: string[];
}

function FilterItem({ text, array }: FilterItemProps) {
  const [isOpen, setOpen] = useState(false);
  const [display, setDisplay] = useState(false);

  const handleToggle = () => {
    setOpen(!isOpen);
    setDisplay(!display);
  };

  return (
    <>
      <Button onClick={handleToggle}>
        {text}
        <Icon isOpen={isOpen} src={arrowIcon} alt="Arrow down icon" />
      </Button>
      <HiddenContainer display={display}>
        {array.map((item) => (
          <>
            <div>
              <input type="checkbox" />
              <HiddenItem>{item}</HiddenItem>
            </div>
          </>
        ))}
      </HiddenContainer>
    </>
  );
}

export default FilterItem;
