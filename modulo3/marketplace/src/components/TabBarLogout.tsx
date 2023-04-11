import { TouchableOpacity } from "react-native";
import LogoutSvg from '@assets/logout.svg'
import { Center } from "native-base";

type Props = {
  onLogout: () => Promise<void>;
 
  iconSize: number;
}

export function TabBarLogout({onLogout,iconSize}:Props){
  return(
    <TouchableOpacity onPress={onLogout}>
      <Center>
        <LogoutSvg  width={iconSize} height={iconSize} />
      </Center>
    </TouchableOpacity>
  )
}