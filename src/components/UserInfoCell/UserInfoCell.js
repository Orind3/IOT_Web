import classNames from "classnames"
import style from "./UserInfoCell.module.scss"

const cx = classNames.bind(style);

const UserInfoCell = function ({ name, id, avatarUrl, date }) {
    console.log(name);
    return <div className={cx("userInfoCell-container")}>
        <div className={cx("userInfoCell-id")}>{id}</div>
        <div className={cx("userInfoCell-name")}>{name}</div>
        <img src={avatarUrl} className={cx("userInfoCell-avatar")} alt={name + "-" + id + "-avatar"} />
    </div>
}

export default UserInfoCell;