import { Outlet } from "react-router-dom"
import Nav from "../Components/Nav";
import bg from '../assets/bg.png'

const Root = () => {
    return (
        <div >
            <div className="bg-no-repeat bg-opacity-100 max-h-screen bg-cover pb-36 relative" >
                <img src={bg} alt="" />
                <div className=" absolute top-0">
                    <Nav></Nav>
                </div>
                <div className="absolute top-36">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Root;