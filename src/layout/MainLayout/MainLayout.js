import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./MainLayout.module.scss";
import classNames from "classnames/bind";
import { faHistory, faUser } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function MainLayout({ children }) {

    const handleClickUserInfo = () => {

    }

    const handleClickHistoy = () => {
        console.log("handleClickHistory")
    }

    return <div className={cx("mainLayout-container")}>
        <div className={cx("mainLayout-navigationBar")}>
            <div className={cx("mainLayout-historyLogin")} onClick={handleClickHistoy}>
                <FontAwesomeIcon icon={faHistory} className={cx("mainLayout-historyLogin--history")} />
                History
            </div>
            <div className={cx("mainLayout-userInfo")} onClick={handleClickUserInfo}>
                <FontAwesomeIcon icon={faUser} className={cx("mainLayout-historyLogin--userInfo")} />
                User Infomation
            </div>
        </div>
        <div className={cx("mainLayout-content")}>
            {children}
        </div>
    </div>
}

export default MainLayout;