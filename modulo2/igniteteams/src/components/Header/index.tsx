
import logoImg from '@assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import { BackButton, BackIcon, Container, Logo } from './styles';

type Props = {
  showBackButton?: boolean;
};

export function Header({showBackButton = false}: Props) {
  const navigation = useNavigation();

  function handleHeaderGoBack(){
    navigation.navigate('groups');
  }

  return (
    <Container>
    {  
      showBackButton &&
      <BackButton onPress={handleHeaderGoBack} >
        <BackIcon />
      </BackButton>
    }
      <Logo source={logoImg} />
    </Container>
  );
}