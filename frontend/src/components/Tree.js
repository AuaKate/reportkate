import React from 'react';
import { Row, Col, Container, Progress } from 'reactstrap';
import arbol from '../Arbol.png';

const Tree = () => {
    return (
        <div>
            <Container fluid>
                <div fluid>
                    <p className="lead path">
                        <i>Reporte específico de árbol</i>
                    </p>
                </div>
                <Row fluid>
                    <Col xs="auto">
                        <h3 class="section">Árbol 10-F</h3>
                        <img
                            src={arbol}
                            style={{ width: '100%', maxWidth: '800px' }}
                        />
                    </Col>
                    <Col xs="auto">
                        <div className="text-center">
                            <h3 class="section">Descripción</h3>
                            <div>
                                Nivel de agua
                                <div className="text-center">25%</div>
                                <Progress value="25" />
                            </div>
                            <div>
                                Tamaño del fruto
                                <div className="text-center">25%</div>
                                <Progress value="25" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Tree;
