
import { Button, Modal } from 'react-bootstrap';

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



const ReactModal = (props) => {


    console.log(props)
    console.log(props.product)
    const { title, image, price, description } = props?.product || {};
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        AOS.init();
      }, []);

    return (
    <>
        <Button variant="primary" onClick={handleShow}>Details</Button>

        <Modal show={show} onHide={handleClose} data-aos="zoom-in-up">
            <Modal.Header closeButton data-aos="flip-left">
            <img className="w-50 px-2" src={image} alt="" />
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body> 
                <p>Description: {description}</p>
                <p>Price: { price }</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleClose}>Save Changes</Button>
            </Modal.Footer>
        </Modal>
    </>
    );
};


export default ReactModal;