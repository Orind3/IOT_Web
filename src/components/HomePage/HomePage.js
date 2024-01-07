import styles from "./HomePage.module.scss";
import classNames from "classnames";

const cx = classNames.bind(styles);

function Homepage() {
    return (
        <div className={cx("homePage-container")}>
            <h1 className={cx("hoemPage-container--heading")}>
                Homepage
            </h1>
        </div>
    );
}

export default Homepage;