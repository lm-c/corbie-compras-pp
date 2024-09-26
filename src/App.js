import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = 'Corbie Compras - Politica de privacidade';
  }, []);

  return (
    <div className='container'>
      <header>
        <h1>Política de Privacidade</h1>
      </header>
      <div className='content'>
        <p>
          Esta Política de Privacidade descreve como o Corbie Compras aplicativo
          coleta, usa e protege as informações pessoais que você usuário fornece
          ao usar nosso aplicativo. Respeitamos sua privacidade e estamos
          comprometidos em proteger as informações que você compartilha conosco.
          Esta política se aplica apenas às informações que coletamos por meio
          deste aplicativo.
        </p>

        <h2>1. Informações Coletadas</h2>
        <p>
          Quando você se registra em nosso aplicativo, solicitamos que você
          forneça seu endereço de e-mail e uma senha. Essas informações são
          necessárias para criar e gerenciar sua conta em nosso aplicativo.
        </p>

        <h2>2. Uso das Informações</h2>
        <p>
          As informações que coletamos são usadas apenas para os seguintes fins:
        </p>
        <ul>
          <li>Criar e gerenciar sua conta no aplicativo.</li>
          <li>Permitir que você faça login e use os recursos do aplicativo.</li>
          <li>
            Enviar comunicações relacionadas à sua conta, como confirmações de
            registro, notificações de alterações de senha e outras atualizações
            importantes.
          </li>
          <li>Cumprir nossas obrigações legais e resolver disputas.</li>
        </ul>

        <h2>3. Compartilhamento de Informações</h2>
        <p>
          Não compartilhamos suas informações pessoais com terceiros, exceto nas
          seguintes circunstâncias:
        </p>
        <ul>
          <li>Quando necessário para cumprir uma obrigação legal.</li>
          <li>
            Para proteger nossos direitos, propriedade ou segurança, ou os
            direitos, propriedade ou segurança de outros.
          </li>
          <li>Com seu consentimento prévio.</li>
        </ul>

        <h2>4. Segurança das Informações</h2>
        <p>
          Implementamos medidas de segurança para proteger suas informações
          pessoais contra acesso não autorizado, uso indevido ou divulgação. No
          entanto, observe que nenhum método de transmissão pela Internet ou
          armazenamento eletrônico é 100% seguro e não podemos garantir
          segurança absoluta.
        </p>

        <h2>5. Exclusão de Conta e Dados Pessoais</h2>
        <p>
          Você pode excluir sua conta e todas as informações associadas a ela a
          qualquer momento dentro do aplicativo. Quando você exclui sua conta,
          todas as informações pessoais vinculadas a ela são removidas de nosso
          sistema.
        </p>

        <h2>6. Alterações nesta Política de Privacidade</h2>
        <p>
          Reservamo-nos o direito de atualizar esta Política de Privacidade de
          tempos em tempos. Recomendamos que você revise periodicamente esta
          política para estar ciente de quaisquer alterações. O uso contínuo do
          aplicativo após a publicação de alterações nesta política será
          considerado como aceitação dessas alterações.
        </p>

        <h2>7. Contato</h2>
        <p>
          Se você tiver dúvidas ou preocupações sobre esta Política de
          Privacidade, entre em contato conosco pelo e-mail{' '}
          <a href='mailto:michalakleo@gmail.com'>michalakleo@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}

export default App;
