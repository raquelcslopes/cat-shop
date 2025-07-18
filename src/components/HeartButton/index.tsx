import { useState } from "react";
import Heart from "react-heart";

function HeartButton() {
  const [active, setActive] = useState(false);
  return (
    <div style={{ width: "1rem", marginTop: "5px" }}>
      <Heart isActive={active} onClick={() => setActive(!active)} />
    </div>
  );
}
export default HeartButton;
