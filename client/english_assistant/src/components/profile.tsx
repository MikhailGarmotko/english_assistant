import { useLocation } from "react-router-dom"


export const Profile:React.FC = () => {

    const location = useLocation();
    const {userId, username} = location.state; 
    debugger;
    return (
        <>
        <div>{userId}</div>
        <div>{username}</div>
        </>
        
    )
}