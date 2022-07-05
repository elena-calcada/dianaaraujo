import { WhatsappLogo } from 'phosphor-react';
import { Container } from './styles';

export default function Button() {
  return (
    <Container href="https://api.whatsapp.com/send?phone=+5522999931164&text=Olá Diana! Cheguei aqui por meio do seu site. Gostaria de marcar uma consulta.">
      <i>
        {' '}
        <WhatsappLogo size={24} />
        {' '}
      </i>
      Agendar consulta
    </Container>
  );
}