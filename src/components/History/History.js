import classNames from "classnames"
import style from "./History.module.scss"
import { useState, useEffect } from "react";
import UserInfoCell from "../UserInfoCell/UserInfoCell.js"
const cx = classNames.bind(style);

const History = function () {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {

    }, [data]);

    const fetchData = () => {
        // fetch('http://thanhhust.x10.mx/Iot/get_info.php?time_s=0&&time_e=23&day=7')
        //     .then(response => response.json())
        //     .then(json => setData(json))
        //     .catch(error => console.log('Error fetching data:', error));
        // console.log(data);
        setData([
            {
                "ID": "1",
                "NAME": "Hieu",
                "DATE": "2024-01-07 16:47:32",
                "PATH": "http://thanhhust.x10.mx/Iot/Iot_image/hieu.jpg"
            },
            {
                "ID": "2",
                "NAME": "Hieu",
                "DATE": "2024-01-07 17:48:32",
                "PATH": "http://thanhhust.x10.mx/Iot/Iot_image/hieu1.jpg"
            },
            {
                "ID": "3",
                "NAME": "Dang",
                "DATE": "2024-01-07 06:07:45",
                "PATH": "http://thanhhust.x10.mx/Iot/Iot_image/dang.jpg"
            },
            {
                "ID": "4",
                "NAME": "Thuong",
                "DATE": "2024-01-07 06:07:45",
                "PATH": "http://thanhhust.x10.mx/Iot/Iot_image/thuong.jpg"
            }
        ]);
    };

    return <div className={cx("history-container")}>
        <div className={cx("history-header")}>
            History
        </div>
        <div className={cx("history-listUserLogin--container")}>
            {data && data.map((value, index) => {
                return <UserInfoCell key={value.ID} id={value.ID} name={value.NAME} avatarUrl={value.PATH} date={value.DATE} />
            })}
        </div>
    </div>
}

export default History;