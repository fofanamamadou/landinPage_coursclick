"use client";

import React from 'react';
import { MailOutlined, PhoneOutlined, LinkedinFilled, GlobalOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

const Footer = () => {
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
                marginBottom: '60px'
            }}>
                <div style={{ maxWidth: '400px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                        {/* <img src="/icon.png" alt="CoursClick" style={{ height: '36px' }} /> */}
                        <span style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.5px' }}>CoursClick</span>
                    </div>
                    <p style={{ color: '#94A3B8', lineHeight: '1.8', fontSize: '1rem', marginBottom: '32px' }}>
                        Digitalisez le suivi de l’assiduité et simplifiez la gestion pédagogique de votre établissement.
                    </p>
                    {/* <div style={{ display: 'flex', gap: '16px' }}>
                        <a href="#" style={{ color: 'white', fontSize: '1.25rem' }}><LinkedinFilled /></a>
                        <a href="#" style={{ color: 'white', fontSize: '1.25rem' }}><GlobalOutlined /></a>
                    </div> */}
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
