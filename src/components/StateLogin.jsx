import {useState} from "react";

export default function Login() {
    const [enteredForm, setEnteredForm] = useState({
        email: '',
        password: '',
    });

    function onFormChange(field, event) {
        setEnteredForm(prev => ({
            ...prev,
            [field]: event.target.value
        }));
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
                        onChange={(event) => onFormChange('email', event)}
                        value={enteredForm.email}
                    />
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
