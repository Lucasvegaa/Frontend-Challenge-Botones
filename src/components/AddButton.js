import { addButton } from "../api/api";

function AddButton({state}) {
  const handleClick = async () => {
    await addButton();
    state(prevState => !prevState);
  }
  return (
    <button onClick={handleClick} className="add-button">
      Add Button
    </button>
  );
}
export default AddButton;