import { Layout } from "@ui-kitten/components";
import { ScrollView } from "react-native";

import { ScreenComponentType, ScreenProps } from "./types";

const Screen = ({ children, scrollEnabled, ...rest }: ScreenProps) => {
  const Component: ScreenComponentType = scrollEnabled ? ScrollView : Layout;

  return <Component {...rest}>{children}</Component>;
};

export default Screen;
