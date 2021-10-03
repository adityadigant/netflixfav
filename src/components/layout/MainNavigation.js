import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css"

function MainNavigation(){

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React MeetUps</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Meet Ups</Link>
                    </li>
                    <li>
                        <Link to="/new-meetups">New Meet Ups</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favourits Meet Ups</Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}
  export default MainNavigation;