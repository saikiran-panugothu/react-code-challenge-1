import { useState } from "react";
import { MdError } from 'react-icons/md';
import { toast } from "react-toastify";

export const Login = () => {
    const [emailErrMsg, setEmailErrMsg] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordErrMsg, setPasswordErrMsg] = useState<string>('')

    function handleEmailChange(e: any) {
        setEmailErrMsg('');
        setEmail(e.target.value);
    }

    function handlePasswordChange(e: any) {
        setPasswordErrMsg('');
        setPassword(e.target.value);
    }

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    function handleLogin() {
        let isValid = true
        if (!validateEmail(email)) {
            isValid = false
            setEmailErrMsg('Please enter a valid email address.');
            toast.error('Invalid Email')
        }
        if (password.length < 8) {
            isValid = false
            setPasswordErrMsg('Password must be greater 8 characters')
            toast.error('Invalid Password')
        }

        if (isValid) {
            toast.success("Login Successfull")
            setEmail('')
            setPassword('')
        }
    }
    return (
        <div className="relative bg-white flex flex-col items-center justify-center">
            <img
                src="/images/HeaderBg.png"
                alt="Green Tree"
                className="w-full"
            />
            <div className="absolute w-[100%] max-w-[577px] h-[687px] flex flex-col items-center space-y-4 bg-white top-[50%] md">
                <div className="bg-white shadow-md w-full flex items-center justify-center pt-3 pb-2">
                    <img src="/images/AmazonLogo.png" alt="Amazon Logo" className="h-[32px]" />
                </div>
                <div className="w-full max-w-[356px] flex flex-col space-y-4 bg-white px-[15px]">
                    <h1 className="text-[24px] font-bold font-primary text-primary tracking-wider text-center">Login</h1>
                    <img src="/images/LoginPlaceholder.png" alt="Login Placeholder" className="w-full" />
                    <input
                        type="text"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Email"
                        className="border-b-2 p-2 w-full placeholder-primary font-primary focus:outline-none focus:border-primary"
                    />
                    {emailErrMsg && (
                        <div className="flex items-center" >
                            <MdError color="red" />
                            <span className="text-rose-500 ml-1 text-sm">{emailErrMsg}</span>
                        </div >
                    )}
                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        className="border-b-2 p-2 w-full placeholder-primary font-primary focus:outline-none focus:border-primary"
                        onChange={handlePasswordChange}
                    />
                    {passwordErrMsg && (
                        <div className="flex items-center" >
                            <MdError color="red" />
                            <span className="text-rose-500 ml-1 text-sm">{passwordErrMsg}</span>
                        </div >
                    )}

                    <button className="bg-primary rounded-3xl w-full py-3 flex items-center justify-center" onClick={handleLogin}>
                        <span className="text-white font-primary text-sm tracking-widest">Sign In</span>
                    </button>
                    <div className="flex w-full justify-between">
                        <button className="text-black text-sm font-semibold">Forgot Password</button>
                        <button className="text-red text-sm font-semibold">New User? Sign Up</button>
                    </div>
                    <h4 className="font-primary text-black font-medium text-center">or</h4>
                    <button className="bg-[#1877F2] w-full h-[42px] flex items-center rounded-md">
                        <img src="/images/Google.png" alt="Facebook" className="h-[42px] w-[44px] p-[2px]" />
                        <span className="text-white font-primary text-sm flex-1 text-center">
                            CONTINUE WITH GOOGLE
                        </span>
                    </button>
                    <button className="bg-[#1877F2] w-full h-[42px] flex items-center rounded-md">
                        <img src="/images/FaceBook.png" alt="Facebook" className="h-[42px] w-[44px] p-[2px]" />
                        <span className="text-white font-primary text-sm flex-1 text-center">
                            CONTINUE WITH FACEBOOK
                        </span>
                    </button>

                </div>
            </div>
        </div>
    );
};
