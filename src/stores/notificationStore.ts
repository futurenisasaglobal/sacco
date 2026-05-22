import { create, StoreApi } from 'zustand';

interface Notification {
  id: number;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  duration?: number;
}

interface NotificationState {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id'>) => number;
  removeNotification: (id: number) => void;
  clearAll: () => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [],

  addNotification: (notification) => {
    const id = Date.now();
    const newNotif: Notification = { id, ...notification };
    set((state) => ({
      notifications: [...state.notifications, newNotif],
    }));

    // Auto-remove after duration (default 5s)
    const duration = notification.duration || 5000;
    setTimeout(() => {
      set((state) => ({
        notifications: state.notifications.filter((n) => n.id !== id),
      }));
    }, duration);

    return id;
  },

  removeNotification: (id) => {
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    }));
  },

  clearAll: () => set({ notifications: [] }),
}));

// Toast shortcuts
export const toast = {
  success: (message: string, duration = 5000) =>
    useNotificationStore.getState().addNotification({
      type: 'success',
      message,
      duration,
    }),
  error: (message: string, duration = 5000) =>
    useNotificationStore.getState().addNotification({
      type: 'error',
      message,
      duration,
    }),
  info: (message: string, duration = 5000) =>
    useNotificationStore.getState().addNotification({
      type: 'info',
      message,
      duration,
    }),
  warning: (message: string, duration = 5000) =>
    useNotificationStore.getState().addNotification({
      type: 'warning',
      message,
      duration,
    }),
};