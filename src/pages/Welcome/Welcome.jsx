import css from './Welcome.module.css';

const Welcome = () => {
  return (
    <div className={css.box}>
      <h2>Welcome to our Phonebook</h2>
      <p>
        To start to use it, please, <a href="login">sign in</a> or{' '}
        <a href="registration">go to register now!</a>
      </p>
    </div>
  );
};

export default Welcome;
