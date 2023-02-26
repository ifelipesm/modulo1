import theme from "@theme/index";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components";
import { Icon, TouchableArea } from "./styles";

type Props = TouchableOpacityProps & {
  redirect: () => void;
  percentage?: number;
}

export function GoBack({redirect,percentage}: Props) {
  useTheme();
  return (
  <TouchableArea onPress={redirect}>
    <Icon color={percentage? percentage > 50 ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK : theme.COLORS.GRAY_1} />
  </TouchableArea>
  );
}