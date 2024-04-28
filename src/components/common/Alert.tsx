import {Alert, AlertTitle} from "@mui/material";

type AlertType = 'error' | 'success' | 'info' | 'warning'

interface NotificationMsgProps {
    message: string;
    alertType: AlertType;
    onClose: () => void;
}

const NotificationMsg = ({ message, alertType, onClose }: NotificationMsgProps ) => {
    let alertTitle = 'Info'
    switch (alertType) {
        case "error":
            alertTitle = 'Error'
            break;
        case "success":
            alertTitle = 'Success'
            break;
        case "info":
            alertTitle = 'Info'
            break;
        case "warning":
            alertTitle = 'Warning'
            break;
    }
    return (
        <Alert severity={alertType} onClose={() => onClose()}>
            <AlertTitle>{alertTitle}</AlertTitle>
            {message}
        </Alert>
    )
}

export default NotificationMsg;