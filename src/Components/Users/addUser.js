import { useState } from "react";
import ErrorModal from "../Error/ErrorModal";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [EnteredName, setEnteredName] = useState("");
  const [EnteredAge, setEnteredAge] = useState("");
  const [Error, setError] = useState();

  const onAddUserHandle = (e) => {
    e.preventDefault();
    if (EnteredName.trim().length === 0 || EnteredAge.trim().length === 0) {
      setError({ title: "Error input", message: "please enter name and age" });
      return;
    }
    //to convert from string to number
    if (+EnteredAge < 0) {
      setError({ title: "Error age", message: "please enter valid age" });
      return;
    }
    props.onAdd(EnteredName, EnteredAge);
    setEnteredName("");
    setEnteredAge("");
  };
  const changeName = (e) => {
    setEnteredName(e.target.value);
  };
  const changeAge = (e) => {
    setEnteredAge(e.target.value);
  };
  const onErrorHandler = () => {
    setError(undefined);
  };
  return (
    <div>
      {Error && (
        <ErrorModal
          title={Error.title}
          message={Error.message}
          onConfirm={onErrorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={onAddUserHandle}>
          <div>
            <label htmlFor="name">UserName</label>
            <input
              type="text"
              id="name"
              value={EnteredName}
              onChange={changeName}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              value={EnteredAge}
              onChange={changeAge}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
