import {useState} from "react";
import {isEqualsToOtherValue} from "../util/validation.js";

export default function Signup() {
    const [passwords, setPasswords] = useState({
        password: '',
        'password-confirm': '',
    });

    const [isEditingPasswords, setIsEditingPasswords] = useState({
        password: true,
        'password-confirm': true,
    });

    let passwordsDoNotMatch = (!isEditingPasswords.password && !isEditingPasswords['password-confirm'])
        && !isEqualsToOtherValue(passwords.password, passwords['password-confirm']);

    function handlePasswordBlur(identifier) {
        setIsEditingPasswords(prev => ({
            ...prev,
            [identifier]: false,
        }));
    }

    function handlePasswordChange(identifier, event) {
        setPasswords(prev => ({
            ...prev,
            [identifier]: event.target.value,
        }));

        setIsEditingPasswords(prev => ({
            ...prev,
            [identifier]: true,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const acquisitionChannels = formData.getAll('acquisition');
        const data = Object.fromEntries(formData.entries());
        data.acquisitionChannels = acquisitionChannels;

        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Welcome on board!</h2>
            <p>We just need a little bit of data from you to get you started 🚀</p>

            <div className="control">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" />
            </div>

            <div className="control-row">
                <div className="control">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        onBlur={() => handlePasswordBlur('password')}
                        onChange={(event) => handlePasswordChange('password', event)}
                    />

                    <div className="control-error">
                        {passwordsDoNotMatch && <p>Passwords should match</p>}
                    </div>
                </div>

                <div className="control">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                        id="confirm-password"
                        type="password"
                        name="confirm-password"
                        onBlur={() => handlePasswordBlur('password-confirm')}
                        onChange={(event) => handlePasswordChange('password-confirm', event)}
                    />

                    {passwordsDoNotMatch && (
                        <div className="control-error">
                            <p>Passwords should match</p>
                        </div>)}

                </div>
            </div>

            <hr />

            <div className="control-row">
                <div className="control">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" name="first-name" />
                </div>

                <div className="control">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" name="last-name" />
                </div>
            </div>

            <div className="control">
                <label htmlFor="phone">What best describes your role?</label>
                <select id="role" name="role">
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="employee">Employee</option>
                    <option value="founder">Founder</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <fieldset>
                <legend>How did you find us?</legend>
                <div className="control">
                    <input
                        type="checkbox"
                        id="google"
                        name="acquisition"
                        value="google"
                    />
                    <label htmlFor="google">Google</label>
                </div>

                <div className="control">
                    <input
                        type="checkbox"
                        id="friend"
                        name="acquisition"
                        value="friend"
                    />
                    <label htmlFor="friend">Referred by friend</label>
                </div>

                <div className="control">
                    <input type="checkbox" id="other" name="acquisition" value="other" />
                    <label htmlFor="other">Other</label>
                </div>
            </fieldset>

            <div className="control">
                <label htmlFor="terms-and-conditions">
                    <input type="checkbox" id="terms-and-conditions" name="terms" />I
                    agree to the terms and conditions
                </label>
            </div>

            <p className="form-actions">
                <button type="reset" className="button button-flat">
                    Reset
                </button>
                <button type="submit" className="button">
                    Sign up
                </button>
            </p>
        </form>
    );
}