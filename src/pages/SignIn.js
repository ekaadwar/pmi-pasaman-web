import React, { useEffect } from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { AuthSection } from "../components/Section";
import { AuthHeader } from "../components/Text";
import { InputAuth } from "../components/Input";
import { PrimaryButton } from "../components/Button";
import { connect } from "react-redux";
import { authSignin, authOn } from "../redux/actions/auth";
import { useNavigate } from "react-router-dom";
import Footer from "../sections/Footer";

const SignIn = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  useEffect(() => {
    props.authOn();
  }, []);

  const submit = () => {
    const data = {
      email,
      password,
      navigate,
    };
    props.authSignin(data);
  };

  return (
    <section className="flex flex-col min-h-screen">
      <AuthSection
        content={
          <Container
            content={
              <div className="flex flex-row justify-center md:justify-end h-full ">
                <div className="flex flex-col justify-center md:w-1/2 py-10 px-5 lg:px-10 space-y-5">
                  <div className="text-center">
                    <AuthHeader text="Masuk" />
                  </div>

                  <InputAuth
                    label="Username :"
                    placeholder="Masukan email Anda"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputAuth
                    label="Password :"
                    placeholder="Masukan password Anda"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div>
                    <Link to="/forgot-pass">
                      <p>Anda lupa password?</p>
                    </Link>
                  </div>

                  <Link to="/profile" className="block">
                    <PrimaryButton
                      content={<p className="text-white font-bold">Kirim</p>}
                      onClick={submit}
                    />
                  </Link>
                </div>
              </div>
            }
          />
        }
      />
      <Footer />
    </section>
  );
};

const mapDispatchToProps = {
  authSignin,
  authOn,
};

export default connect(null, mapDispatchToProps)(SignIn);
