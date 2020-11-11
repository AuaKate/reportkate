import React from 'react';
import {Link} from 'react-router-dom';
import { Row, Col, Container } from 'reactstrap';

const Report = () => {
    return (
        <div>
            <Container fluid>
                <div fluid>
                    <p className="lead path">
                        <i>Reporte</i>
                    </p>
                </div>
                <Row fluid>
                    <Col xs="12">
                        <h3 class="section">Mapa del terreno</h3>
                        <Map />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" className="text-centered"></Col>
                </Row>
            </Container>
        </div>
    );
};

const createGridCell = () => {
    return (
        <Link to="/tree"><div
            style={{
                border: '1px solid black',
                width: '40px',
                height: '40px',
                display: 'inline-block',
                padding: '0.1rem',
            }}
        ></div></Link>
    );
};

const createGrid = (rows, cols) => {
    var result = [];
    var c, r;
    for (r = 0; r < rows; r++) {
        for (c = 0; c < cols; c++) {
            result.push(createGridCell());
        }
        result.push(<br />);
    }
    return <div style={{ lineHeight: '0px' }}>{result}</div>;
};

const Map = () => {
    return <div>{createGrid(4, 4)}</div>;
};

export default Report;
