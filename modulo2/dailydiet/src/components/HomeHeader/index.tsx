import  logoImg  from '@assets/logo3x.png'
import  avatarImg from '@assets/avatar3x.png';
import { Avatar, Logo } from './styles';

export function HomeHeader() {
  return (

    <>
      <Logo source={logoImg}/>
      <Avatar source={avatarImg}/>
    </>

  );
}