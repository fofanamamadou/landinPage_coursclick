"use client";

import React, { useState } from 'react';
import { Modal, Form, Input, Button, Typography, message, Card, Row, Col, Divider } from 'antd';
import { CheckCircleFilled, RocketOutlined } from '@ant-design/icons';

import emailjs from '@emailjs/browser';

const { Title, Text, Paragraph } = Typography;

const OfferModal = ({ open, onClose }) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);

        // ⚠️ REMPLACEZ CES VALEURS PAR LES VÔTRES DEPUIS EMAILJS DASHBOARD ⚠️
        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        const templateParams = {
            establishment: values.establishment,
            nom: values.nom,
            prenom: values.prenom,
            email: values.email,
        };

        try {
            await emailjs.send(serviceID, templateID, templateParams, publicKey);
            message.success("Votre demande a été envoyée ! Nous vous contacterons très bientôt.");
            form.resetFields();
            onClose();
        } catch (error) {
            console.error('Erreur lors de l\'envoi:', error);
            message.error("Une erreur est survenue lors de l'envoi. Veuillez réessayer plus tard.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
            title={null}
            open={open}
            onCancel={onClose}
            footer={null}
            width={900}
            centered
            styles={{ body: { padding: 0 } }}
            forceRender
        >
            <Row>
                {/* Left Side: The Offer */}
                <Col xs={24} md={10} style={{
                    background: 'var(--background-gradient)',
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    borderTopLeftRadius: '8px',
                    borderBottomLeftRadius: '8px'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                        <RocketOutlined style={{ fontSize: '48px', color: 'var(--primary)' }} />
                    </div>
                    <Title level={3} style={{ color: 'var(--primary)', textAlign: 'center', marginBottom: '8px' }}>
                        Offre de Lancement
                    </Title>
                    <Title level={2} style={{ margin: '0 0 8px 0', textAlign: 'center' }}>
                        100.000 F <small style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/ an</small>
                    </Title>
                    <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginBottom: '24px' }}>
                        ou 10.000 F / mois
                    </Text>

                    <Card style={{ borderRadius: '12px', border: '1px solid var(--primary-light)', background: 'rgba(255,255,255,0.6)' }}>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
                                <CheckCircleFilled style={{ color: 'var(--secondary)', marginRight: '8px' }} />
                                <Text strong>3 Mois Gratuits pour tester </Text>
                            </li>
                            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
                                <CheckCircleFilled style={{ color: 'var(--secondary)', marginRight: '8px' }} />
                                Accès illimité à toutes les fonctionnalités
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center' }}>
                                <CheckCircleFilled style={{ color: 'var(--secondary)', marginRight: '8px' }} />
                                Support technique dédié
                            </li>
                        </ul>
                    </Card>
                </Col>

                {/* Right Side: The Form */}
                <Col xs={24} md={14} style={{ padding: '32px' }}>
                    <Title level={4} style={{ marginBottom: '24px' }}>Activez votre période d'essai</Title>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="establishment"
                            label="Nom de l'établissement"
                            rules={[{ required: true, message: 'Requis' }]}
                        >
                            <Input placeholder="Université X..." />
                        </Form.Item>

                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="nom"
                                    label="Votre Nom"
                                    rules={[{ required: true, message: 'Requis' }]}
                                >
                                    <Input placeholder="Touré" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="prenom"
                                    label="Votre Prenom"
                                    rules={[{ required: true, message: 'Requis' }]}
                                >
                                    <Input placeholder="Mamadou" />
                                </Form.Item>
                            </Col>

                        </Row>

                        <Form.Item
                            name="email"
                            label="Email Professionnel"
                            rules={[{ required: true, type: 'email', message: 'Email valide requis' }]}
                        >
                            <Input placeholder="contact@universite.com" />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" size="large" block loading={loading} style={{ background: 'var(--primary)', height: '48px', fontWeight: '600' }}>
                                Démarrer l'essai gratuit
                            </Button>
                        </Form.Item>

                        <Text type="secondary" style={{ fontSize: '12px', display: 'block', textAlign: 'center' }}>
                            Aucune carte bancaire requise.
                        </Text>
                    </Form>
                </Col>
            </Row>
        </Modal>
    );
};

export default OfferModal;
