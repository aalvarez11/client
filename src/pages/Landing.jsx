import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='jobify' className='logo' />
      </nav>
      <div className='container-page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Gentrify adaptogen air plant jianbing marfa. Ennui dreamcatcher
            mumblecore tumblr gentrify, echo park church-key sus edison bulb
            woke gastropub semiotics. Bruh messenger bag cardigan tousled lyft
            umami taxidermy occupy cold-pressed. Hashtag bruh semiotics sriracha
            pabst. Cloud bread cupping lyft pabst, kitsch biodiesel tofu edison
            bulb portland roof party gentrify williamsburg.
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn'>
            Login / Demo user
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img'></img>
      </div>
    </Wrapper>
  );
};

export default Landing;
