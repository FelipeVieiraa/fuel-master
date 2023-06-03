import { LayoutProps } from "@ui-kitten/components";
import { ScrollViewProps } from "react-native";

export type ScreenProps = ScrollViewProps & LayoutProps;

export type ScreenComponentType = React.ComponentType<
  ScrollViewProps | LayoutProps
>;
