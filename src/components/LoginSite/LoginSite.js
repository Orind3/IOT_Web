import styles from './LoginSite.module.scss';
import classNames from 'classnames/bind';
import LoginBG from '../../assets/LoginBG.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Login() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/');
    };

    return (
        <div className={cx("login-container")}>
            <img src={LoginBG} alt="LoginBG" className={cx("login--bgImage")} />
            <div className={cx("login--heading__title")}>
                Login
            </div>
            <div className={cx("login--heading__subtitle")}>
                Please enter your credentials to proceed
            </div>
            <div className={cx("login--account__container")}>
                <div className={cx("login--account__icon")}>
                    <FontAwesomeIcon icon={faAddressCard} />
                </div>
                <input type='text' placeholder='ID' className={cx("login--account__input")} />
            </div>
            <div className={cx("login--password__container")}>
                <div className={cx("login--password__icon")}>
                    <FontAwesomeIcon icon={faKey} />
                </div>
                <input type='password' placeholder='Password' className={cx("login--password__input")} />
            </div>

            <div className={cx("login--confirm")} onClick={handleLoginClick}>Login</div>
        </div>
    )
}

export default Login;