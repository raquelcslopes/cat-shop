import { useEffect, useState } from "react";
import arrowIcon from "../../assets/arrowDown.svg";
import {
  Button,
  CheckBox,
  Container,
  HiddenContainer,
  HiddenItem,
  Icon,
} from "./styles";
import SVGButtons from "../SVGButtons";
import emptyCheckboxIcon from "../../assets/emptyCheckbox.svg";
import selectedCheckboxIcon from "../../assets/selectedCheckbox.svg";

interface FilterItemProps {
  text: string;
  array: string[];
  onFilterChange?: (selected: string[]) => void;
}

function FilterItem({ text, array, onFilterChange }: FilterItemProps) {
  const [isOpen, setOpen] = useState(false);
  const [display, setDisplay] = useState(false);
  const [selectedItems, setSelectedItems] = useState<boolean[]>(() =>
    array.map(() => false)
  );

  const handleToggle = () => {
    setOpen(!isOpen);
    setDisplay(!display);
  };

  const handleCheck = (index: number) => {
    setSelectedItems((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );

    if (onFilterChange) {
      const selectedValues = array.filter((_, i) => selectedItems[i]);
      onFilterChange(selectedValues);
    }
    return selectedItems;
  };

  useEffect(() => {
    setSelectedItems(array.map(() => false));
  }, [array]);

  return (
    <Container>
      <Button onClick={handleToggle}>
        {text}
        <Icon isOpen={isOpen} src={arrowIcon} alt="Arrow down icon" />
      </Button>
      <HiddenContainer display={display}>
        {array.map((item, index) => (
          <CheckBox key={index}>
            <SVGButtons
              src={
                selectedItems[index] ? selectedCheckboxIcon : emptyCheckboxIcon
              }
              alt={
                selectedItems[index] ? "Selected checkbox" : "Empty checkbox"
              }
              onClick={() => handleCheck(index)}
            />
            <HiddenItem>{item}</HiddenItem>
          </CheckBox>
        ))}
      </HiddenContainer>
    </Container>
  );
}

export default FilterItem;
