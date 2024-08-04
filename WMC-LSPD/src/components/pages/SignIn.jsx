import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import {useState} from "react";
import { FaUser } from "react-icons/fa";
import Slideshow from "../components/SlideShow";
import { useNavigate } from "react-router-dom";

export default function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("user")
    const navigate = useNavigate();
    const handleSubmit = async () => {
        try {
            console.log(email, password, role);
            const response = await fetch('http://localhost:8000/users/login', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password}),
                credentials:"include"
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            navigate('/station')
        } catch(err) {
            console.log(err);
        }
    }
    return (
        <div className="w-full h-screen flex flex-col justify-center bg-transparent">
            <Slideshow/>
            <div className="border-fuchsia-200 shadow-lg shadow-fuchsia-400 rounded-lg w-1/3 mx-auto p-6 px-6 flex flex-col gap-y-4 items-center bg-black text-white">
                <p className="text-3xl font-bold font-anton text-fuchsia-600">Sign In</p>
                <div className="flex items-center gap-x-2 w-full">
                    <div className="w-10 flex justify-center">
                        <IoMdMail size={30}/>
                    </div>
                    <input
                        name="email"
                        type="email"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-black font-bold w-full border-2 rounded-md px-2 py-1"
                    />
                </div>
                <div className="flex items-center gap-x-2 w-full">
                    <div className="w-10 flex justify-center">
                        <IoMdMail size={30}/>
                    </div>
                    <select
                        className="border-2 w-full rounded-md px-2 py-1 text-black font-semibold"
                        onChange={(e) => {
                            setRole(e.target.value)
                        }}
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div className="flex items-center gap-x-2 w-full">
                    <div className="w-10 flex justify-center">
                        <RiLockPasswordFill size={30}/>
                    </div>
                    <input
                        name="password"
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="text-black font-bold w-full border-2 rounded-md px-2 py-1"
                    />
                </div>
                <button
                    className="border-2 w-32 py-2 rounded-md glow-on-hover"
                    disabled={email === "" || password === ""}
                    onClick={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                >
                    Sign In
                </button>
                <div className="w-full text-end">
                    Create a New account? <span className="text-blue-500 font-bold cursor-pointer" onClick={() => {navigate('/signup')}}>Sign Up</span>
                </div>
            </div>
        </div>
    )
}