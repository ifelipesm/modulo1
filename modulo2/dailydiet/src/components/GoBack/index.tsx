import { TouchableOpacityProps } from "react-native";
import { Icon, TouchableArea } from "./styles";

type Props = TouchableOpacityProps & {
  redirect: () => void;
}

export function GoBack({redirect}: Props) {
  return (
  <TouchableArea onPress={redirect}>
    <Icon/>
  </TouchableArea>
  );
}