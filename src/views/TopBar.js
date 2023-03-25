import { Outlet, useNavigate } from "react-router";
import { Button } from 'react-bootstrap';

export const TopBar = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="d-flex justify-content-center mb-2 mt-3">
                <Button className="rounded-0 me-2 btn-lg btn-rain border-0" onClick={() => navigate("main")}>Main</Button>
                <Button className="rounded-0 me-2 btn-lg btn-rain border-0" onClick={() => navigate("components")}>Components</Button>
                <Button className="rounded-0 me-2 btn-lg btn-rain border-0" onClick={() => navigate("assembled")}>Assembled</Button>
                <Button className="rounded-0 me-2 btn-lg btn-rain border-0" onClick={() => navigate("builder")}>Build PC</Button>
            </div> 

            <Outlet />
        </>
    );
} 