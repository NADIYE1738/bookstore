import React , {useEffect ,useState }from 'react';
import "./alert.css"

const Alert = ({ message }) => {
    const [show, setShow] = useState(true)

    useEffect(() => {
        const timeId = setTimeout(() => {
            
            setShow(false)
        }, 3000)

        return () => {
            clearTimeout(timeId)
        }
    }, []);

    if (!show) {
        return null;
    }

    return (
        <div className="alert alert-success" role="alert">
            {message}
        </div>
    );
}

export default Alert;