import * as Styles from './styles';

import logoImg from '@assets/logo.png';

export function Header() {
  return (
    <Styles.Container>
      <Styles.Logo source={logoImg} />
    </Styles.Container>
  );
}