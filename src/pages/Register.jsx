import { Form, Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo } from '../components';

const Register = () => {
  return (
    <Wrapper>
      <Form className='form'>
        <Logo />
        <h4>Register</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='form-input'
            defaultValue='Alice'
            required
          />
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
