import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UserList = (props) => {
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.users}>
        <ul>
          {props.users.map((user) => (
            <div key={user.id}>
              <li>
                I'm {user.name} ,{user.age} years old.
              </li>
            </div>
          ))}
        </ul>
      </Card>
    </div>
  );
};
export default UserList;
