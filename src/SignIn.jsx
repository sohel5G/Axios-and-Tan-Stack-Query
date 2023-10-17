import { useContext } from "react";
import { authContext } from "./AuthProvider";


const SignIn = () => {

    const { userSignIn } = useContext(authContext);

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const pass = form.pass.value;

        userSignIn(email, pass)
            .then((successData) => {
                const user = successData.user;
                console.log(user)
            })
            .catch((errorData) => {
                const error = errorData.message;
                console.log(error)
            });

        console.log(email, pass)
    }

    return (
        <div className="container max-w-sm mx-auto p-8 bg-gray-100">
            <h1 className="text-4xl"> Login </h1>
            <form onSubmit={handleSignIn} className="max-w-sm mx-auto mt-8">
                <input name="email" type="text" placeholder="Email" />
                <br /><br />
                <input name="pass" type="text" placeholder="Password" />
                <br /><br />
                <input type="submit" value="Login" className="bg-sky-400 py-1 px-4 mt-3 text-white rounded-lg cursor-pointer" />
            </form>
        </div>
    );
};

export default SignIn;


