import React from 'react';
import { Col, Container, Jumbotron, Row } from 'reactstrap';

import logo from '../logo.svg';
import walogo from '../WhatsappLogo.svg';
import ChatBot from 'react-simple-chatbot';

const Help = () => {
    const steps = [
        {
            id: '0',
            message: '¡Bienvenido al sistema de ayuda!',
            trigger: '1',
        },
        {
            id: '1',
            message:
                'Por favor selecciona el tema sobre el que deseas obtener ayuda',
            trigger: '2',
        },
        {
            id: '2',
            options: [
                { value: 1, label: 'Reporte', trigger: 'report' },
                { value: 2, label: 'Certificados', trigger: 'cert' },
                { value: 3, label: 'Otro', trigger: 'other' },
                { value: 4, label: 'Ya es todo, gracias', trigger: 'finish' },
            ],
        },
        {
            id: 'report',
            message:
                'Veo que quieres obtener ayuda sobre los reportes. ' +
                'Te comento que estos presentan los resultados de los estudios ' +
                'llevados a cabo en tu terreno. ¿Qué necesitas saber sobre ellos?',
            trigger: 'report_options',
        },
        {
            id: 'report_options',
            options: [
                {
                    value: 1,
                    label: 'Cuándo fue el último',
                    trigger: 'report_last',
                },
                {
                    value: 2,
                    label: 'Cuántos reportes llevo realizados',
                    trigger: 'report_count',
                },
                {
                    value: 3,
                    label: 'Cuándo será el próximo',
                    trigger: 'report_next',
                },
            ],
        },
        {
            id: 'report_last',
            //TODO Add API Request
            message: 'Veo que tu último reporte fue el 10 de octubre de 2020',
            trigger: '1',
        },
        {
            id: 'report_count',
            //TODO Add API Request
            message: 'Llevas un total de 10 reportes, ¡Sigue así!',
            trigger: '1',
        },
        {
            id: 'report_next',
            //TODO Add API Request
            message:
                'La próxima visita será realizada el día 1 de diciembre de 2020. ' +
                'Tu reporte será entregado de manera física 3 días después, pero puedes consultar ' +
                'en vivo cómo es que este se completa a través de la plataforma.',
            trigger: '1',
        },
        {
            id: 'cert',
            //TODO Complete
            message:
                'Aquí está la ayuda de certificados, pero estoy en construcción.',
            trigger: '1',
        },
        {
            id: 'other',
            //TODO Complete
            message:
                'Para ayuda en otros temas contáctanos por WhatsApp al siguiente número 4274273749, te dejo ' +
                'un botón para hablarnos directamente a continuación, ¡Hasta luego!.',
            trigger: 'whatsapp',
        },
        {
            id: 'finish',
            message:
                '¡De nada! Recuerda que puedes contactarnos marcándonos al 4274273749' +
                ', también por WhatsApp a ese mismo número, te dejo un botón aquí para habalarnos ' +
                'por ese medio de forma directa y fácil.',
            trigger: 'whatsapp',
        },
        {
            id: 'whatsapp',
            component: <WhatsApp />,
            end: true,
        },
    ];

    return (
        <div>
            <Container fluid>
                <div fluid>
                    <p className="lead path">
                        <i>Ayuda</i>
                    </p>
                </div>
                <Row fluid>
                    <Col xs="12" className="text-center">
                        Estamos encantados de poderte atender, nos gusta tenerte
                        dentro de nuestra plataforma.
                        <br />
                        Para nosotros es muy importante tu opinión, por eso
                        queremos escucharte y saber lo que opinas.
                        <br />
                        Es por eso que tenemos a nuestro mejor asistente,
                        AuaKate, para poder ayudarte, tan solo escríbele sobre
                        aquello que deseas consultar.
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" className="text-centered">
                        <div>
                            <ChatBot
                                style={{}}
                                botAvatar={logo}
                                steps={steps}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const WhatsApp = () => {
    return (
        <div className="text-centered">
            <a href="https://wa.me/+524274273749">
                <img
                    src={walogo}
                    alt="Whatsapp logo"
                    style={{ height: '100px' }}
                />
                <br />
                <p>Pulse para hablar </p>
            </a>
        </div>
    );
};

export default Help;
