export const Login = () => {
    return (
        <div className="bg-white flex flex-col items-center justify-center relative">
            <div>
                <img src="/images/HeaderBg.png" alt="Green Tree" className="w-full" />
            </div>
            <div className="w-[577px] h-[687px] flex items-center flex-col space-y-4 bg-white top-[150px] absolute">
                <div className="bg-white shadow-md w-full items-center justify-center flex pb-2 pt-3">
                    <img src="/images/AmazonLogo.png" alt="Amazon Logo" className="h-[32px]" />
                </div>
                <div className="w-[386px] flex items-center flex-col space-y-4 bg-white">
                    <h1 className="text-[24px] font-bold font-primary text-primary tracking-wider">Login</h1>
                    <div>
                        <img src="/images/LoginPlaceholder.png" alt="Green Tree" className="w-full" />
                    </div>
                    <input type="text" placeholder="Email" className="border-b-2 p-2 w-full placeholder-primary font-primary focus:outline-none focus:border-b-2" />
                    <input type="password" placeholder="Password" className="border-b-2 p-2 w-full placeholder-primary font-primary focus:outline-none focus:border-b-2" />
                    <button className="bg-primary rounded-3xl w-full py-2 items-center">
                        <span className="text-white font-primary text-sm tracking-widest">Sign In</span>
                    </button>
                    <div className="flex w-full justify-between">
                        <button className="text-black text-sm font-semibold">Forgot Password</button>
                        <button className="text-red text-sm font-semibold">New User? Sign Up</button>
                    </div>
                    <h4 className="font-primary text-black font-medium">or</h4>
                    <button className="bg-[#4285F4] w-full h-[44px] items-center flex rounded-md relative">
                        <img src="/images/Google.png" alt="Facebook" className="h-[44px] w-[44px] p-[4px]" />
                        <span className="text-white absolute left-[100px] font-primary text-sm">CONTINUE WITH GOOGLE</span>
                    </button>
                    <button className="bg-[#1877F2] w-full h-[42px] items-center flex rounded-md relative">
                        <img src="/images/FaceBook.png" alt="Facebook" className="h-[42px] w-[44px] p-[2px]" />
                        <span className="text-white absolute left-[100px] font-primary text-sm">CONTINUE WITH FACEBOOK</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
