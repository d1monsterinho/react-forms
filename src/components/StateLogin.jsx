import {useState} from "react";
import Input from "./Input.jsx";
import {hasMinLength, isEmail} from "../util/validation.js";

export default function Login() {
    const [enteredForm, setEnteredForm] = useState({
        email: '',
        password: '',
    });

    const [isEdited, setIsEdited] = useState({
        email: false,
        password: false,
    });

    const isNotValidEmail = isEdited.email && isEmail(enteredForm.email);
    const isNotValidPassword = isEdited.password && hasMinLength(enteredForm.password, 6);

    function onFormChange(inputIdentifier, event) {
        setEnteredForm(prev => ({
            ...prev,
            [inputIdentifier]: event.target.value
        }));

        setIsEdited(prev => ({
            ...prev,
            [inputIdentifier]: false,
        }));
    }

    function onInputBlur(inputIdentifier) {
        setIsEdited({
            ...isEdited,
            [inputIdentifier]: true,
        });
    }

    function onLogin(event) {
        event.preventDefault();
        console.log(enteredForm.email, enteredForm.password);
    }

    return (
        <form onSubmit={onLogin}>
            <h2>Login</h2>

            <div className="control-row">
                <Input
                    label="Email"
                    id="email"
                    error={isNotValidEmail && 'Please, enter valid email'}
                    type="email"
                    name="email"
                    onBlur={() => onInputBlur('email')}
                    onChange={(event) => onFormChange('email', event)}
                    value={enteredForm.email}
                />

                <Input
                    label="Password"
                    id="password"
                    error={isNotValidPassword && 'Password must contain at least 6 characters'}
                    type="password"
                    name="password"
                    onBlur={() => onInputBlur('password')}
                    onChange={(event) => onFormChange('password', event)}
                    value={enteredForm.password}
                />
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
