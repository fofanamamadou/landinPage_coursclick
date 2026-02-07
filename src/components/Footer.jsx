"use client";

import React from 'react';
import { MailOutlined, PhoneOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import { Form, Input, Button, ConfigProvider, theme, message as antdMessage } from 'antd';
import emailjs from '@emailjs/browser';

const { TextArea } = Input;

const Footer = () => {
    const onFinish = (values) => {
        // IMPORTANT: Remplacez ces valeurs par vos propres clés EmailJS
        // et assurez-vous de les stocker dans des variables d'environnement.
        const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_FORM_ID;
        const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        const templateParams = {
            from_name: values.name,
            from_email: values.email,
            message: values.message,
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                antdMessage.success('Merci ! Votre message a été envoyé avec succès.');
            }, (err) => {
                console.log('FAILED...', err);
                antdMessage.error("Une erreur s'est produite. Veuillez réessayer plus tard.");
            });
    };

    return (
        <footer id="footer" style={{
            background: '#0F172A',
            color: 'white',
            padding: '80px 24px 40px',
            borderTop: '1px solid #1E293B'
        }}>
            <div className="section" style={{
                padding: 0,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '80px',
                marginBottom: '60px',
                alignItems: 'start'
            }}>
                <div style={{ maxWidth: '400px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                        <span style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.5px' }}>CoursClick</span>
                    </div>
                    <p style={{ color: '#94A3B8', lineHeight: '1.8', fontSize: '1rem', marginBottom: '32px' }}>
                        Digitalisez le suivi de l’assiduité et simplifiez la gestion pédagogique de votre établissement.
                    </p>
                </div>

                <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px', color: '#CBD5E1' }}>Contact</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#94A3B8', marginBottom: '16px', fontSize: '0.95rem' }}>
                        <MailOutlined style={{ color: '#3B82F6' }} />
                        <span>madoufof94@gmail.com</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#94A3B8', marginBottom: '16px', fontSize: '0.95rem' }}>
                        <PhoneOutlined style={{ color: '#3B82F6' }} />
                        <span>+223 93 52 89 94</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#94A3B8', fontSize: '0.95rem' }}>
                        <SafetyCertificateOutlined style={{ color: '#10B981' }} />
                        <span>Données Hébergées en Cloud</span>
                    </div>
                </div>

                <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px', color: '#CBD5E1' }}>Laissez-nous un message</h4>
                    <ConfigProvider theme={{
                        algorithm: theme.darkAlgorithm,
                        token: {
                            colorPrimary: '#3B82F6',
                        },
                    }}>
                        <Form name="contact-footer" onFinish={onFinish} layout="vertical">
                            <Form.Item name="name" label="Nom" rules={[{ required: true, message: 'Veuillez entrer votre nom !' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Veuillez entrer un email valide !' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="message" label="Message" rules={[{ required: true, message: 'Veuillez entrer votre message !' }]}>
                                <TextArea rows={3} />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                                    Envoyer
                                </Button>
                            </Form.Item>
                        </Form>
                    </ConfigProvider>
                </div>
            </div>

            <div style={{
                borderTop: '1px solid #1E293B',
                paddingTop: '32px',
                textAlign: 'center',
                color: '#64748B',
                fontSize: '0.875rem'
            }}>
                © {new Date().getFullYear()} CoursClick. Solution de Confiance pour l'Enseignement Supérieur.
            </div>
        </footer>
    );
};

export default Footer;
