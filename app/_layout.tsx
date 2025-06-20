import * as Notifications from "expo-notifications";
import { Slot } from "expo-router";
import { useEffect } from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function Layout() {
  useEffect(() => {
    Notifications.requestPermissionsAsync();
  }, []);

  return <Slot />;
}