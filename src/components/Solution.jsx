"use client";

import React from 'react';
import { BankOutlined, TeamOutlined, UserOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { SectionHeader } from './LandingShared';

const Solution = () => {
    const solutions = [
        {
            title: "Gouvernance Académique Intégrée",
            target: "Administrateurs",
            description: "Pilotez l’assiduité de votre établissement grâce à des données centralisées, fiables et exploitables en temps réel.",
            icon: <BankOutlined />,
            color: "var(--primary)",
            image: "/admin_persona.png"
        },
        {
            title: "Focalisation Pédagogique",
            target: "Enseignants",
            description: "Réduisez les tâches administratives et concentrez-vous pleinement sur l’enseignement et l’accompagnement des étudiants.",
            icon: <TeamOutlined />,
            color: "var(--primary)",
            image: "/teacher_persona.png"
        },
        {
            title: "Parcours & Suivi Autonome",
            target: "Étudiants",
            description: "Accédez facilement à votre planning, suivez votre assiduité et gérez vos justificatifs en toute autonomie.",
            icon: <UserOutlined />,
            color: "var(--primary)",
            image: "/student_persona.png"
        },
        {
            title: "Suivi Parental Simplifié",
            target: "Parents",
            description: "Suivez l'assiduité de votre enfant en temps réel via un lien sécurisé, pour une implication bienveillante.",
            icon: <TeamOutlined />, // Using TeamOutlined as generic for family/group if specific not available
            color: "var(--primary)",
            image: "/parent_persona.png"
        }
    ];

    return (
        <section id="solution" className="section" style={{ background: 'white' }}>
            <div className="container">
                <SectionHeader
                    title="Une Réponse aux Enjeux de chaque Acteur"
                    subtitle="CoursClick structure les échanges entre l'administration, le corps enseignant et les étudiants pour une transition numérique réussie."
                />

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 'var(--space-xl)'
                }}>
                    {solutions.map((item, i) => (
                        <div key={i} className="card d-flex flex-column items-center text-center p-lg" style={{
                            padding: 'var(--space-xl) var(--space-lg)',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid var(--border)',
                            transition: 'all 0.3s ease',
                        }}>
                            <div className="mb-md" style={{
                                width: '180px',
                                height: '180px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <img
                                    src={item.image}
                                    alt={item.target}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'contain',
                                        filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))'
                                    }}
                                />
                            </div>

                            <div className="text-bold mb-xs" style={{
                                fontSize: 'var(--fs-small)',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                color: item.color
                            }}>
                                {item.target}
                            </div>

                            <h3 className="mb-md text-extrabold" style={{ fontSize: '1.25rem', color: 'var(--text-main)' }}>
                                {item.title}
                            </h3>

                            <p className="text-muted" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solution;
