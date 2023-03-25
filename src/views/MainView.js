import { Col, Container, Row } from "react-bootstrap"

export const MainView = () => {
    return (
        <>
        <Container className="vh-75 d-flex align-items-center justify-content-center ">
            <Row className="">
                <Col md={12} className="text-center text-white">
                            <div className="rounded p-3 text-white shadow mb-3">
                            <h1>PC Builder Application</h1>    
                            <h3>Created by Serhii Krasovskyi</h3>  
                            <h4>For GFL JavaBasic Courses</h4>                                   
                            </div>
                        </Col>
            </Row>
        </Container>
        </>
    )
}