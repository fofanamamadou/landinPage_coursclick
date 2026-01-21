"use client";

import React from 'react';
import { FileProtectOutlined, HistoryOutlined, SafetyOutlined } from '@ant-design/icons';
import { SectionHeader } from './LandingShared';

const Problem = () => {
    const problems = [
        {
            title: "Obsolescence du papier",
            description: "Les feuilles de présence papier sont peu fiables et difficiles à exploiter.",
            icon: <FileProtectOutlined />,
            color: "var(--primary)"
        },
        {
            title: "Lourdeur administrative",
            description: "La gestion manuelle des absences fait perdre du temps aux équipes.",
            icon: <HistoryOutlined />,
            color: "var(--primary)"
        },
        {
            title: "Fragmentation des données",
            description: "Des données dispersées rendent le suivi des étudiants complexe et lent.",
            icon: <SafetyOutlined />,
            color: "var(--primary)"
        }

    ];

    return (
        <section id="problem" className="section">
            <div className="container">
                <SectionHeader
                    title="Dépasser les Limites des Méthodes Traditionnelles"
                    subtitle="Moderniser les établissements, c’est centraliser les informations et automatiser les tâches répétitives pour gagner du temps et en efficacité."
                />

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
                    gap: 'var(--space-lg)'
                }}>
                    {problems.map((p, i) => (
                        <div key={i} className="card text-center">
                            <div className="icon-wrapper" style={{
                                background: `${p.color}08`,
                                color: p.color,
                                margin: '0 auto var(--space-md)',
                                border: '1px solid rgba(0,0,0,0.05)'
                            }}>
                                {p.icon}
                            </div>
                            <h3 className="mb-sm text-extrabold" style={{ fontSize: '1.5rem', color: 'var(--text-main)' }}>{p.title}</h3>
                            <p className="text-muted" style={{ fontSize: '1rem' }}>{p.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Problem;
