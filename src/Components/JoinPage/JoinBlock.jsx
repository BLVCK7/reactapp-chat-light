import s from "./JoinBlock.module.css";
import React from "react";
import socket from "../../socket";
import axios from "axios";
import reducer from "../../reducer";

const JoinBlock = ({onLogin}) => {

    const [roomId, setRoomId] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [isLoading, setLoading] = React.useState(false);

    const onEnter = async () => {
        if (!roomId || !userName) {
            return alert('Неверные данные');
        }
        const obj = {
            roomId,
            userName
        }
        setLoading(true)
        await axios.post('/rooms', obj)
        onLogin(obj)
    }

    return <div className={s.container}>
        <div className={s.form}>
            <input type="text"
                   placeholder="Room ID"
                   value={roomId}
                   onChange={(e) => setRoomId(e.target.value)}
            />
            <input type="text"
                   placeholder="Ваше имя"
                   value={userName}
                   onChange={(e) => setUserName(e.target.value)}
            />
            <button disabled={isLoading} onClick={onEnter}>
                {isLoading ? 'ВХОД...' : 'ВОЙТИ'}
            </button>
        </div>
    </div>
}

export default JoinBlock;