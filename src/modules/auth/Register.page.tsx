export const RegisterPage = () => {
  const isLogged = localStorage.getItem('LOGGED_USER');

  if (isLogged) {
    document.location = '/';
  }

  return (
    <div>
      <h1>Register</h1>
    </div>
  );
};
