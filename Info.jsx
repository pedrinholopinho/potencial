import './info.css';
import {ImWhatsapp} from 'react-icons/im'

function Info() {
  return (
    <div className="container-info">
      <h1>Potencial, Clínica Multidisciplinar Integrada.</h1>
      <p>"A Clínica Potencial é o seu centro de excelência em saúde e aprendizado. Com uma equipe dedicada de profissionais especializados, oferecemos serviços abrangentes, incluindo psicopedagogia, reforço escolar, psicologia, psicomotricidade e fonodiologia. Estamos comprometidos em desbloquear o seu potencial e promover o seu bem-estar. Descubra um caminho para o sucesso conosco na Clínica Potencial."</p>
        <button className="btn-wpp"><ImWhatsapp className='icon'/><a className='linkwpp' target='_blank' href="https://wa.me/552183099482">Entre em contato</a></button>
    </div>
  );
}

export default Info;
