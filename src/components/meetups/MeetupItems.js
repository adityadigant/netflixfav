import Card from "../ui/Card";
import classes from "./MeetupItems.module.css";

function MeetupItem(props) {
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>To Favourite</button>
        </div>
        {console.log(props.alldata.image)}
      </li>
    </Card>
  );
}

export default MeetupItem;
