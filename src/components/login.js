import styles from './login.module.scss';
import { useDispatch } from 'react-redux';
import { loginAction } from '../actions/action';

const Login = () => {
    const dispatch = useDispatch();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAction(e.target['email'].value, e.target['password'].value))
    }
    return (
        <div>
            <form style={styles.form} onSubmit={handleOnSubmit}>
                <h4>Welcome</h4>
                <div className='form-group row'>
                    <input id='email' className='input' type='text' placeholder='Email' />
                </div>
                <div className='form-group row'>
                    <input id='password' className='input' type='password' placeholder='Password' />
                </div>
                <div className='form-group row'>
                    <button className='btn' type='submit'>Log In</button>
                </div>
            </form>
        </div>
    )
}

export default Login;