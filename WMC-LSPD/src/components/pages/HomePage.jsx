import { useEffect } from "react"
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function HomePage(){
    const navigate = useNavigate();
    const authenticated = async () => {
        try {
            const response = await fetch('http://localhost:8000/checkAuthentication', {
                method: 'POST',
                credentials:'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                
            });
            if (response.status === 200) {
                const data = await response.json();
                console.log(data);
                console.log('Authenticated');
            } else if (response.status === 307) {
                navigate('/login')
            }
        } catch (error) {
            console.error('Failed to fetch', error);
        }
    }

    useEffect(() => {
        authenticated().catch(console.error);
    }, []);
    return (
        <div className="text-3xl h-screen w-screen text-center">
            Home Page
        </div>
    )
}