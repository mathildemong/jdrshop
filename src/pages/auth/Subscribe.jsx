import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from "axios";

export default function Subscribe() {

    const initialValues = {
        lastname: "",
        firstname: "",
        email: "",
        password: ""
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [isSubmit, setIsSubmit] = useState(false);
    const [formError, setFormError] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const verifyInput = formValues => {
        const errorFields = {};
        const regexName = /^([A-Za-z|\s]{3,15})?([-]{0,1})?([A-Za-z|\s]{3,15})$/;
        if (!formValues.lastname) errorFields.lastname = "Lastname is required";
        else if (!regexName.test(formValues.lastname)) errorFields.lastname = "3 - 15 characters, no special characters";

        if (!formValues.firstname) errorFields.firstname = "Firstname is required";
        else if (!regexName.test(formValues.firstname)) errorFields.firstname = "3 - 15 characters, no special characters";

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!formValues.email) errorFields.email = "Email is required";
        else if (!regexEmail.test(formValues.email)) errorFields.email = "Email is invalid";

        const regexPassword = /^(?=.*[A-Z].*[A-Z])(?=.*\d.*\d)(?!.*\s).{10,20}$/;
        if (!formValues.password) errorFields.password = "Password is required";
        else if (!regexPassword.test(formValues.password)) errorFields.password = "10 - 20 characters, 2 uppercase, 2 digits, no spaces";

        return errorFields;
    };

    const [toggle, setToggle] = useState(false);

    const showPassword = e => {
        e.preventDefault();
        setToggle(!toggle);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setFormError(verifyInput(formValues));

        try {
            await axios.post(`${process.env.REACT_APP_BASE_URL}/register`, formValues);
            setFormValues(initialValues);
            setIsSubmit(true);
        } catch (error) {
            error.response.data.error.name === "ValidationError" && setFormError({ email: "Email already exists" });
        };
    };

    useEffect(() => {
        if (isSubmit) {
            const timer = setTimeout(() => {
                setIsSubmit(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isSubmit]
    );

    return (
        <main className="main">
            {Object.keys(formError).length === 0 && isSubmit && <div className='registration'>You have been successfully registered !</div>}
            <form className="main_form">
                <h1>Register</h1>
                <div className="main_form_group">
                    <label
                        htmlFor="lastname"
                        className={formValues.lastname && 'animLabel'}>
                        Lastname
                    </label>
                    <input
                        type="lastname"
                        name="lastname"
                        id="lastname"
                        value={formValues.lastname}
                        onChange={handleChange}
                    />
                </div>
                    {formError.lastname && <p className="inputError">{formError.lastname}</p>}
                <div className="main_form_group">
                    <label
                        htmlFor="firstname"
                        className={formValues.firstname && 'animLabel'}>
                        Firstname
                    </label>
                    <input
                        type="firstname"
                        name="firstname"
                        id="firstname"
                        value={formValues.firstname}
                        onChange={handleChange}
                    />
                </div>
                    {formError.firstname && <p className="inputError">{formError.firstname}</p>}
                <div className="main_form_group">
                    <label
                        htmlFor="email"
                        className={formValues.email && 'animLabel'}>
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                </div>
                    {formError.email && <p className="inputError">{formError.email}</p>}
                <div className="main_form_group">
                    <button className="main_form_group_icon" aria-label="show / hidden password" onClick={showPassword}>
                        {toggle ? <VisibilityOffIcon sx={{ fontSize: "25px" }} /> : <VisibilityIcon sx={{ fontSize: "25px" }} />}
                    </button>
                    <label
                        htmlFor="password"
                        className={formValues.password && 'animLabel'}>
                        Password
                    </label>
                    <input
                        type={toggle ? "text" : "password"}
                        name="password"
                        id="password"
                        value={formValues.password}
                        onChange={handleChange}
                    />
                </div>
                    {formError.password && <p className="inputError">{formError.password}</p>}
                <input type="submit" value="Submit" className="btn" onClick={handleSubmit} />
                <h2>Already registered ? <Link to="/login" >Login</Link></h2>
            </form>
        </main>
    )
}