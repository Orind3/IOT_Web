import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./MainLayout.module.scss";
import classNames from "classnames/bind";
import { faBars, faGamepad, faHistory, faHome, faPerson, faUser } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function MainLayout({ children }) {


    return <div className={cx("mainLayout-container")}>
        <div className={cx("mainLayout-sideBar")}>
            <div className={cx("mainLayout-dashBoard")}>
                <FontAwesomeIcon icon={faHome} className={cx("mainLayout--dashboard")} />
                <span>Dashboard</span>
            </div>

            <div className={cx("mainLayout-profile")}>
                <FontAwesomeIcon icon={faPerson} className={cx("mainLayout--profile")} />
                <span>Profile</span>
            </div>

            <div className={cx("mainLayout-controller")}>
                <FontAwesomeIcon icon={faGamepad} className={cx("mainLayout--controller")} />
                <span>Dashboard</span>
            </div>

            <div className={cx("mainLayout-setting")}>
                <FontAwesomeIcon icon={faBars} className={cx("mainLayout--setting")} />
                <span>Setting</span>
            </div>
        </div>

        <div className={cx("mainLayout-content")}>
            {children}
        </div>
    </div>
}

export default MainLayout;