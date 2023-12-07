import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AuthContext from '../../contexts/authContext';

export default function Profile({ setShowProfile }) {
    const {
        profile,
    } = useContext(AuthContext)

    const handleHideProfile = () => setShowProfile(false)

    return (
        <Modal show={true} onHide={handleHideProfile}>
            <Modal.Header closeButton>  
                <Modal.Title>{profile.username}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col>
                            <Image style={{ borderRadius: "50%", height: "100px", width: "100px", overflow: 'hidden', objectFit: 'cover' }} src={profile.imageUrl} alt={profile.username} />
                        </Col>
                        <Col>
                            <p>{profile.description}</p>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button style={{backgroundColor: '#702963', border: '0px'}} onClick={handleHideProfile}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}