"use client";

import React from 'react';
import { GlobalOutlined, RocketOutlined } from '@ant-design/icons';
import DemoModal from './DemoModal';
import OfferModal from './OfferModal';

const FinalCTA = () => {
    const [demoOpen, setDemoOpen] = React.useState(false);
    const [offerOpen, setOfferOpen] = React.useState(false);

    return (
        <section className="section text-center" style={{
            background: 'var(--primary)',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Subtle Texture */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.05,
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.8\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")',
                pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="text-extrabold mb-md" style={{ fontSize: 'var(--fs-h2)', color: 'white' }}>
                    Simplifiez la gestion académique et optimisez le suivi des présences.
                </h2>
                <p className="mb-xl" style={{
                    fontSize: 'var(--fs-body)',
                    opacity: 0.9,
                    maxWidth: '800px',
                    margin: '0 auto var(--space-xl)',
                    fontWeight: 'var(--fw-regular)'
                }}>
                    Modernisez votre établissement avec un suivi précis des présences et des outils adaptés pour gagner du temps et sécuriser vos données.
                </p>
                <div className="d-flex justify-center flex-wrap gap-md">
                    <button
                        className="btn"
                        onClick={() => setDemoOpen(true)}
                        style={{ background: '#FFFFFF', color: 'var(--primary)', padding: '16px 36px' }}
                    >
                        <GlobalOutlined />
                        Accéder à une démonstration
                    </button>
                    <button
                        className="btn"
                        onClick={() => setOfferOpen(true)}
                        style={{ border: '1.5px solid white', color: 'white', background: 'transparent', padding: '16px 36px' }}
                    >
                        <RocketOutlined />
                        Accéder à l'offre
                    </button>
                </div>
            </div>

            <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
            <OfferModal open={offerOpen} onClose={() => setOfferOpen(false)} />
        </section>
    );
};

export default FinalCTA;
