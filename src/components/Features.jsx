"use client";

import React, { useEffect, useRef } from 'react';
import {
    ScheduleOutlined,
    SafetyCertificateOutlined,
    FileSearchOutlined,
    DashboardOutlined,
    CloudSyncOutlined,
    LineChartOutlined,
    TeamOutlined
} from '@ant-design/icons';
import { SectionHeader } from './LandingShared';

const Features = () => {
    const services = [
        { title: "Planification et gestion des emplois du temps", icon: <ScheduleOutlined /> },
        { title: "Validation et traçabilité des présences", icon: <SafetyCertificateOutlined /> },
        { title: "Gestion numérique des absences et justificatifs", icon: <FileSearchOutlined /> },
        { title: "Tableaux de bord et statistiques d’assiduité", icon: <DashboardOutlined /> },
        { title: "Données académiques centralisées", icon: <CloudSyncOutlined /> },
        { title: "Suivi individualisé des étudiants", icon: <LineChartOutlined /> },
        { title: "Portail Parents & Notifications", icon: <TeamOutlined /> }
    ];


    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const items = sectionRef.current.querySelectorAll('.animate-fade-in');
        items.forEach(item => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="features" className="section" ref={sectionRef} style={{ background: 'white' }}>
            <div className="container">
                <SectionHeader
                    title="Services & Fonctionnalités Avancées"
                    subtitle="Une suite d'outils intégrés pour répondre aux exigences technologiques de l'enseignement supérieur."
                />

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: 'var(--space-md)'
                }}>
                    {services.map((s, i) => (
                        <div key={i} className="animate-fade-in card d-flex items-center gap-lg" style={{
                            padding: 'var(--space-md) var(--space-lg)',
                            animationDelay: `${i * 0.03}s`
                        }}>
                            <div className="text-primary d-flex items-center justify-center" style={{
                                fontSize: '1.5rem',
                                background: 'var(--background)',
                                width: '56px',
                                height: '56px',
                                borderRadius: 'var(--radius-md)',
                                flexShrink: 0
                            }}>
                                {s.icon}
                            </div>
                            <h4 className="text-bold" style={{ fontSize: '1.1rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.4' }}>
                                {s.title}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
