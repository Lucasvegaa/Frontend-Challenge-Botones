import { AddClickButton } from "../api/api";

function Button({id, onUpdate}) {
  const handleClick = async () => {
    await AddClickButton(id);
    onUpdate();
  }
  return (
    <button onClick={handleClick} className="button">
      Button {id} 
    </button>
  );
}
export default Button;