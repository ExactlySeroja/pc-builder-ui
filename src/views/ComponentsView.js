import { Outlet, useNavigate } from "react-router"
import { Button } from 'react-bootstrap';

export const ComponentView = () =>{
    const navigate = useNavigate()
    return (
        <>
            <div className="d-flex justify-content-center">
            <Button className="rounded-0 me-2 btn-rain border-0" onClick={() => navigate("motherboard")}>Motherboard</Button>
            <Button className="rounded-0 me-2 btn-rain border-0" onClick={() => navigate("gpu")}>GPU</Button>
            <Button className="rounded-0 me-2 btn-rain border-0" onClick={() => navigate("cpu")}>CPU</Button>
            <Button className="rounded-0 me-2 btn-rain border-0" onClick={() => navigate("ram")}>RAM</Button>
            <Button className="rounded-0 me-2 btn-rain border-0" onClick={() => navigate("case")}>Case</Button>
            <Button className="rounded-0 me-2 btn-rain border-0" onClick={() => navigate("power-unit")}>Power Unit</Button>
            <Button className="rounded-0 me-2 btn-rain border-0" onClick={() => navigate("drive")}>Drive</Button>
            </div>
            <Outlet/>
        </>
    )
}