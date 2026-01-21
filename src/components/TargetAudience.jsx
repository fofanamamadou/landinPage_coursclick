"use client";

import React from 'react';
import {
    SecurityScanOutlined,
    AuditOutlined,
    SolutionOutlined,
    CheckCircleFilled,
    TeamOutlined
} from '@ant-design/icons';
import { SectionHeader } from './LandingShared';

const TargetAudience = () => {
    const segments = [
        {
            role: "Pilotage Institutionnel",
            beneficiaries: "Administrateurs",
            benefits: [
                "Suivi centralisé et fiable de l’assiduité",
                "Accès rapide aux statistiques et indicateurs clés",
                "Meilleure visibilité sur le déroulement des cours"
            ],
            icon: <SecurityScanOutlined />,
            color: "var(--primary)"
        },
        {
            role: "Optimisation de l'Enseignement",
            beneficiaries: "Corps Enseignant",
            benefits: [
                "Réduction du temps consacré aux tâches administratives",
                "Meilleure visibilité sur l’assiduité des étudiants",
                "Suivi simplifié des absences et justificatifs"
            ],
            icon: <AuditOutlined />,
            color: "var(--primary)"
        },
        {
            role: "Autonomie & Simplification",
            beneficiaries: "Étudiants",
            benefits: [
                "Accès clair à l’emploi du temps et aux présences",
                "Justification des absences simple et rapide",
                "Suivi personnel de l’assiduité en temps réel"
            ],
            icon: <SolutionOutlined />,
            color: "var(--primary)"
        },
        {
            role: "Transparence & Suivi",
            beneficiaries: "Parents",
            benefits: [
                "Suivi en temps réel de l'assiduité de l'étudiant",
            ],
            icon: <TeamOutlined />,
            color: "var(--primary)" // Using secondary color to distinguish
        }
    ];

    return (
        <section id="target" className="section" style={{ background: 'var(--background)' }}>
            <div className="container">
                <SectionHeader
                    title="Bénéfices par Segment Utilisateur"
                    subtitle="Une approche sur-mesure pour engager durablement tous les acteurs de votre établissement."
                />

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
                    gap: 'var(--space-xl)'
                }}>
                    {segments.map((s, i) => (
                        <div key={i} className="card" style={{
                            padding: 'var(--space-xl) var(--space-lg)',
                            borderBottom: `4px solid ${s.color}`
                        }}>
                            <div className="mb-lg" style={{ fontSize: '2.5rem', color: s.color }}>
                                {s.icon}
                            </div>

                            <div className="text-bold mb-xs" style={{
                                color: s.color,
                                fontSize: 'var(--fs-tiny)',
                                textTransform: 'uppercase'
                            }}>
                                {s.beneficiaries}
                            </div>

                            <h3 className="text-extrabold mb-lg" style={{ fontSize: 'var(--fs-h3)', color: 'var(--text-main)' }}>
                                {s.role}
                            </h3>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {s.benefits.map((b, j) => (
                                    <li key={j} className="d-flex items-start gap-md mb-md" style={{ marginBottom: '1.25rem' }}>
                                        <CheckCircleFilled className="text-primary" style={{ fontSize: '1.1rem', marginTop: '4px', color: 'var(--secondary)' }} />
                                        <span className="text-muted" style={{ fontSize: 'var(--fs-body)', lineHeight: '1.4' }}>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TargetAudience;
