import "./Register.style.css";

function RegisterView({
  email,
  setEmail,
  password,
  setPassword,
  name,
  setName,
  phone,
  setPhone,
  registerClicked,
}) {
  return (
    <div className="Register">
      <div className="register-container">
        <form className="register-form">
          <h2>Welcome to Gong!</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            required
          />
          <input
            type="button"
            className="btn"
            value="Register"
            onClick={registerClicked}
          />
        </form>
      </div>
    </div>
  );
}
export default RegisterView;
