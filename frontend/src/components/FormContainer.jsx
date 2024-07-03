import { Container, Col, Row } from 'react-bootstrap';
import { Form } from 'react-router-dom';

const FormContainer = ({ children }) => {
    return (
        <Container>
            <Col className='justify-content-md-center mt-5'>
                <Row className='card p-5' xs={ 12 } md={ 6 }>
                    {children}
                </Row>
            </Col>
        </Container>
    )
}

export default FormContainer;