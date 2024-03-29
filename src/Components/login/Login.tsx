import React, { useRef, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface user {
    username: string,
    password: string
}

const Login = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [user, setUser] = useState<user>()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const video = videoRef.current;

        if (video && video.paused) {
            video.play().catch(error => {
                console.error('Error ', error);
            });
        }
        return () => {
            if (video) {
                video.pause();
            }
        };
    }, []);
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            setUser({
                username: username,
                password: password
            })
            const userLogin = {
                username: username,
                password: password
            }
            const signUp = await axios.post('http://localhost:8080/auth/login', userLogin);
            if (signUp.status === 200) {

                localStorage.setItem('accessToken', signUp.data)

                console.log("dang nhap thanh cong");
                navigate('/');
            }
        } catch (error) {
            console.log("sai thong tin ");
        }
    }

    return (
        <>
            <div className="flex items-center justify-center bg-black ">
                <div className="relative w-full">
                    <div className="bg-black">
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                        >
                            <source
                                src="https://res.cloudinary.com/dlxwm5pax/video/upload/v1705649183/wjwf0m8t0u3tgv80vdfg.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </div>
                    <div className='flex justify-center'>
                        <div className="absolute inset-4 text-white w-11/12">
                            <h1 className="text-4xl font-bold mb-2">Welcome Back</h1>
                            <p>Sign in to continue</p>
                            <br /><br />
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">
                                    User Name:
                                </label>
                                <input
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full p-2 border-none border-white rounded-md bg-transparent text-white"
                                    placeholder='Enter Email'
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium mb-1">
                                    Password:
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full p-2 border-none border-white rounded-md bg-transparent text-white "
                                    placeholder='Enter Password'
                                    required
                                />
                            </div>
                            <button onClick={handleLogin} type="submit" className="bg-red-500 text-white font-bold text-lg p-2 rounded h-14 w-full">
                                Sign In
                            </button>
                            <button type="submit" className="mt-3 bg-indigo-600 text-white font-bold text-lg p-2 rounded h-14 w-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-gray-800 text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                                </svg>
                                <p>Connect with Facebook</p>
                            </button>
                            <div className='flex justify-center h-20 items-center'>
                                Forgot your password?
                            </div >
                            <NavLink to={"/sigup"}><div className='flex justify-center h-10 text-end mt-36'>
                                Don't have an account? Sign up
                            </div></NavLink>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Login;
