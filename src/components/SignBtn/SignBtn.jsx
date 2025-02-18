// import { Link } from 'react-router-dom';
import { VscSignIn } from 'react-icons/vsc';

import css from './SignBtn.module.css';

const SignBtn = () => {
  return (
    <div className={css.sign_in}>
      {/* <Link to={signIn} className={css.sign_in}> */}
      <VscSignIn />
      <span>Sing In</span>
      {/* </Link> */}
    </div>
  );
};

export default SignBtn;
