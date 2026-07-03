import {useState} from "react";

export default function Login() {
    const [enteredForm, setEnteredForm] = useState({
        email: '',
        password: '',
    });

    const [isEdited, setIsEdited] = useState({
        email: false,
        password: false,
    });

    let isNotValidEmail = isEdited.email && !enteredForm.email.includes('@');

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
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        onBlur={() => onInputBlur('email')}
                        onChange={(event) => onFormChange('email', event)}
                        value={enteredForm.email}
                    />
                    <div className="control-error">
                        {isNotValidEmail && <p>Please, enter valid email</p>}
                    </div>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        onChange={(event) => onFormChange('password', event)}
                        value={enteredForm.password}
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
