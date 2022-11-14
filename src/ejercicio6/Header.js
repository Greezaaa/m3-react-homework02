import { useState } from 'react';
function Header({ img, name, vip }) {
    let [status, setStatus] = useState(vip)
    function setUserStatus() {
        setStatus(!status)
    }
    function user(status) {
        if (!status) {
            return (
                <>
                    <p>
                        <img src={img} alt={name} width="50" />
                        {name}
                    </p>
                    <button onClick={setUserStatus}>Hacerse socio VIP!</button>
                </>
            )
        } else {
            return (
                <>
                    <p>
                        <img src={img} alt={name} width="50" />
                        Buenas días {name}
                    </p>
                    <button onClick={setUserStatus}>Dar de baja</button>
                </>
            )
        }
    }
    return user(status)
}
export default Header