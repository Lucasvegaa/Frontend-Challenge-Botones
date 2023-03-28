import { deleteButton } from "../api/api";

function DeleteButton({ id, onDelete }) {
  const handleClick = async () => {
    await deleteButton(id);
    onDelete();
  };
  return (
    <button onClick={handleClick} className="button delete-button">
      X
    </button>
  );
}
export default DeleteButton;
