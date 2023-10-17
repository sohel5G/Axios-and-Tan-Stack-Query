import { useContext } from "react";
import { authContext } from "./AuthProvider";


const SignUp = () => {

    const { userSignUp } = useContext(authContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const pass = form.pass.value;

        userSignUp(email, pass)
            .then((successData) => {

                const createdAt = successData.user?.metadata?.creationTime;
                const users = { email, createdAt };

                fetch('https://coffee-store-auth-server-kvgqm5vyf.vercel.app/users/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(users)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })

                const user = successData.user;
                console.log(user);
                console.log(createdAt);
            })
            .catch((errorData) => {
                const error = errorData.message;
                console.log(error);
            });

        console.log(email, pass);
    }

    return (
        <div className="container max-w-sm mx-auto p-8 bg-gray-100">
            <h1 className="text-4xl"> Sign Up </h1>
            <form onSubmit={handleSignUp} className="mt-8" >
                <input name="email" type="text" placeholder="Email" />
                <br /><br />
                <input name="pass" type="text" placeholder="Password" />
                <br /><br />
                <input type="submit" value="Sign Up" className="bg-sky-400 py-1 px-4 mt-3 text-white rounded-lg cursor-pointer" />
            </form>
        </div>
    );
};

export default SignUp;