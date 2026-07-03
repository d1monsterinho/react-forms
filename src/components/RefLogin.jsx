import {useRef, useState} from "react";
import {isEmail} from "../util/validation.js";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const [isInvalidEmail, setIsInvalidEmail] = useState(false);

    function onLogin(event) {
        event.preventDefault();

        const email = emailRef.current.value;

        if (isEmail(email)) {
            setIsInvalidEmail(true);
            return;
        }

        setIsInvalidEmail(false);
        console.log(emailRef.current.value, passwordRef.current.value);
    }

    return (
        <form onSubmit={onLogin}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="text"
                        name="email"
                        ref={emailRef}
                    />

                    <div className="control-error">
                        {isInvalidEmail && <p>Please, enter valid email</p>}
                    </div>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        ref={passwordRef}
                    />
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
