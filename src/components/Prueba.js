/* import * as React from "react";
// import "./style.css";

const Prueba = () => {
  const [meter, setMeter] = React.useState(false);
  const [password, setPassword] = React.useState("");

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-/,;.=@()]).{8,}$/g;
  const atLeastOneUppercase = /[A-Z]/g; // capital letters from A to Z
  const atLeastOneLowercase = /[a-z]/g; // small letters from a to z
  const atLeastOneNumeric = /[0-9]/g; // numbers from 0 to 9
  const atLeastOneSpecialChar = /[#?!@$%^&*-/,;.=@()]/g; // any of the special characters within the square brackets
  const eightCharsOrMore = /.{8,}/g; // eight characters or more

  const passwordTracker = {
    uppercase: password.match(atLeastOneUppercase),
    lowercase: password.match(atLeastOneLowercase),
    number: password.match(atLeastOneNumeric),
    specialChar: password.match(atLeastOneSpecialChar),
    eightCharsOrGreater: password.match(eightCharsOrMore),
  };

  const passwordStrength = Object.values(passwordTracker).filter(
    value => value
  ).length;

  return (
    <div>
      <h1>Password Strength Meter</h1>
      <p>Focus/Click on the password field to see the meter</p>
      <form>
        <input
          onFocus={() => setMeter(true)}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Enter password...pwetty please"
          value={password}
          name="password"
        />
        {meter && (
          <div>
            <div className="password-strength-meter"></div>
            <div>
              {passwordStrength < 8 && "Debe contener "}
              {!passwordTracker.uppercase && "Mayúsculas, "}
              {!passwordTracker.lowercase && "Minúsculas, "}
              {!passwordTracker.specialChar && "Caracteres Especiales, "}
              {!passwordTracker.number && "Numeros, "}
              {!passwordTracker.eightCharsOrGreater && "Ocho Caracteres o más"}
            </div>
          </div>
        )}
      </form>
      <style jsx>
        {`
          input {
            padding: 0.5rem;
            border-radius: 0.5rem;
            border: 1px solid grey;
            max-width: 50%;
            width: 100%;
          }
          .password-strength-meter {
            height: 0.3rem;
            background-color: lightgrey;
            border-radius: 3px;
            margin: 0.5rem 0;
          }

          .password-strength-meter::before {
            content: "";
            background-color: ${[
              "red",
              "orange",
              "#03a2cc",
              "#03a2cc",
              "#0ce052",
            ][passwordStrength - 1] || ""};
            height: 100%;
            width: ${(passwordStrength / 5) * 100}%;
            display: block;
            border-radius: 3px;
            transition: width 0.2s;
          }
        `}
      </style>
    </div>
  );
};

export default Prueba; */
/* import { useState } from "react";
const Prueba = () => {
  // Initialize a boolean state
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  return (
    <div>
      <input type={passwordShown ? "text" : "password"} />
      <button onClick={togglePassword}>Show Password</button>
    </div>
  );
};

export default Prueba; */
/* import React, { useState } from "react";
const Prueba = () => {
  
  const [password, setPasswordValue] = React.useState("password");
  const [passwordInput, setPasswordInput] = React.useState("");
  
  const onPasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };
  const toggle = () => {
    if (password === "password") {
      setPasswordValue("text");
      return;
    }
    setPasswordValue("password");
  };
  return (
    <div>
      <div className="input-group">
        <input
          type={password}
          onChange={onPasswordChange}
          value={passwordInput}
          placeholder="Enter password"
          name="password"
          className="form-control"
        />
        <button className="btn btn-primary" onClick={toggle}>
          {password === "password" ? (
            <svg
              width="20"
              height="17"
              fill="currentColor"
              className="bi bi-eye-slash-fill"
              viewBox="0 0 16 16"
            >
              <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
              <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
            </svg>
          ) : (
            <svg
              width="20"
              height="17"
              fill="currentColor"
              className="bi bi-eye-fill"
              viewBox="0 0 16 16"
            >
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );

};

export default Prueba; */

/* const Prueba = () => {


  return (
    <div></div>
  );
};
export default Prueba; */

/* /////////////////////de create emoresa
<div class="col-md">
            <div class="col-sm-5">
              <div class="form-floating">
                <select
                  class="form-select"
                  // disabled
                  value={formState.tipo_empresas_id}
                  onChange={e =>
                    setFormState({
                      ...formState,
                      tipo_empresas_id: parseInt(e.target.value),
                    })
                  }
                >
                  {data4 && (
                    <>
                      {data4.MostrarTipoEmpresa.map(MostrarTipoEmpresa => (
                        // <option value={MostrarTipoEmpresa.id}>
                        //   {MostrarTipoEmpresa.tipo}
                        // </option>
                      ))}
                    </>
                  )}
                </select>
                <label for="Sucural" class="for-label">
                  Tipo Empresa
                </label>
              </div>
            </div>
*/

import React, { useState } from "react";
import { useMutation, useQuery, gql } from "@apollo/client";
import { EMPRESAS } from "../constants";
const EMPRESA_QUERY = gql`
  query MostrarEmpresas {
    MostrarEmpresas {
      id
      razon_social
    }
  }
`;
const ROL_QUERY = gql`
  query MostrarRoles {
    MostrarRoles {
      id
      rol
    }
  }
`;
const Prueba = () => {
  const { data: data1, error } = useQuery(EMPRESA_QUERY);

  const { data: data3 } = useQuery(ROL_QUERY);

  if (error) return `Submission error! ${error.message}`;

  return (
    <div>
      <div>
        {data1 && (
          <>
            {data1.MostrarEmpresas.map(MostrarEmpresas => (
              <div class="text-white">
                <h3>
                  {MostrarEmpresas.id} {}
                  {MostrarEmpresas.razon_social}
                </h3>
              </div>
            ))}
          </>
        )}
      </div>
      <div>
        {data1 && (
          <>
            {data1.MostrarEmpresas.forEach(MostrarEmpresas => {
              <div class="text-white">
                <h3>
                  {MostrarEmpresas.id} {}
                  {MostrarEmpresas.razon_social}
                </h3>
              </div>;
            })}
          </>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default Prueba;

/* const Prueba = () => {
  return (
    <div class="container">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <span class="input-group-text" id="basic-addon2">
          @example.com
        </span>
      </div>

      <label for="basic-url" class="form-label">
        Your vanity URL
      </label>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon3">
          https://example.com/users/
        </span>
        <input
          type="text"
          class="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text">$</span>
        <input
          type="text"
          class="form-control"
          aria-label="Amount (to the nearest dollar)"
        />
        <span class="input-group-text">.00</span>
      </div>

      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
        />
        <span class="input-group-text">@</span>
        <input
          type="text"
          class="form-control"
          placeholder="Server"
          aria-label="Server"
        />
        <select class="form-select">
          <option value="1">hola</option>
          <option value="1">hola</option>
          <option value="1">hola</option>
        </select>
      </div>

      <div class="input-group">
        <span class="input-group-text">With textarea</span>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>

      <hr />
      <div class="row">
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="First name"
            aria-label="First name"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Last name"
            aria-label="Last name"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <select class="form-select">
            <option value="1">hola</option>
            <option value="1">hola</option>
            <option value="1">hola</option>
          </select>
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Last name"
            aria-label="Last name"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div class="row g-3">
        <div class="col-sm-3">
        <select class="form-select">
            <option value="1">hola</option>
            <option value="1">hola</option>
            <option value="1">hola</option>
          </select>
        </div>
        <div class="col-sm">
        <input
            type="text"
            class="form-control"
            placeholder="Last name"
            aria-label="Last name"
          />
        </div>
        <div class="col-sm">
          
        </div>
      </div>
    </div>
  );
};

export default Prueba; */
/* 
import React, { useState } from "react";
import validator from "validator";

const Prueba = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const validate = value => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Es una contraseña fuerte");
    } else {
      setErrorMessage("Ingresar almenos Caracter Especial, Numeros, Mayusculas, Minusculas ");
    }
  };

  return (
    <div
      style={{
        marginLeft: "200px",
      }}
    >
      <pre>
        <h2>Checking Password Strength in ReactJS</h2>
        <lavel>Ingresar Contraseña: </lavel>
        <input
          type="text"
          onChange={e => validate(e.target.value)}
        ></input>{" "}
        <br />
        {errorMessage === "" ? null : (
          <span
            style={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            {errorMessage}
          </span>
        )}
      </pre>
    </div>const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = evnt => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <div>
      <div className="row">
        <div className="col-sm-3">
          <div className="input-group my-4 mx-4">
            <input
              type={passwordType}
              onChange={handlePasswordChange}
              value={passwordInput}
              name="password"
              class="form-control"
              placeholder="Password"
            />
            <div className="input-group-btn">
              <button
                className="btn btn-outline-primary"
                onClick={togglePassword}
              >
                {passwordType === "password" ? (
                  <i className="bi bi-eye-slash"></i>
                ) : (
                  <i className="bi bi-eye"></i>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prueba;

/* const Prueba = () => {


  return (
    <div></div>
  );
};

export default Prueba; */
/* 
import React, { useState } from "react";
import validator from "validator";

const Prueba = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const validate = value => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Es una contraseña fuerte");
    } else {
      setErrorMessage("Ingresar almenos Caracter Especial, Numeros, Mayusculas, Minusculas ");
    }
  };

  return (
    <div
      style={{
        marginLeft: "200px",
      }}
    >
      <pre>
        <h2>Checking Password Strength in ReactJS</h2>
        <lavel>Ingresar Contraseña: </lavel>
        <input
          type="text"
          onChange={e => validate(e.target.value)}
        ></input>{" "}
        <br />
        {errorMessage === "" ? null : (
          <span
            style={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            {errorMessage}
          </span>
        )}
      </pre>
    </div>
  );
};

export default Prueba;

 */
