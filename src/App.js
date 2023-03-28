import { useEffect, useState } from "react";
import AddButton from "./components/AddButton";
import Button from "./components/Button";
import DeleteButton from "./components/DeleteButton";
import { AddClickButton, getAllButton } from "./api/api";

function App() {  
  const [refreshButtons, setRefreshButtons] = useState(false);
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    getAllButton(setButtons);
  }, [refreshButtons]);

  const handleAddClickButton = (id) => {
    AddClickButton(id);
    setRefreshButtons(!refreshButtons);
  };

  const handleDeleteButtonClick = (id) => {
    setButtons(buttons.filter((button) => button.id !== id));
    setRefreshButtons(!refreshButtons);
  };

  return (
    <>
      <AddButton state={setRefreshButtons}></AddButton>
      {buttons.length > 0
        ? buttons.map((button) => (
            <div key={button.id} className="button-container">
              <Button
                id={button.id}
                onClick={() => handleAddClickButton(button.id)}
                onUpdate={() => setRefreshButtons(!refreshButtons)}                
              ></Button>
              <DeleteButton
                id={button.id}
                onDelete={() => handleDeleteButtonClick(button.id)}                
              ></DeleteButton>
              <div> {button.contador}</div>
            </div>
          ))
        : "No hay botones"}
    </>
  );
}
export default App;
