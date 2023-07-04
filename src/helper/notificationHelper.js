import { toast } from 'react-toastify';

export const showNotification = (message, type) => {
  toast(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    type,
    progress: undefined,
    theme: 'colored',
  });
};

export const showAllNotifications = (notifications, type) => {
  notifications.forEach((notification) => showNotification(notification, type));
};
