import { NavigationContainer } from "@react-navigation/native";

import LoginRoutes from "./LoginRoutes";
import AppRoutes from "./AppRoutes";

const Routes = () => {
  const signed = false;

  return (
    <NavigationContainer>
      {signed ? <AppRoutes /> : <LoginRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
