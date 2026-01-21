"use client";

import React from 'react';
import { ArrowRightOutlined, SafetyCertificateOutlined, BarChartOutlined } from '@ant-design/icons';

const Hero = () => {
    return (
        <section id="hero" className="hero-section" >
            {/* Background Image Layer */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url(/hero_illustration.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.1,
                zIndex: 0,
                pointerEvents: 'none'
            }}></div>



            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="d-flex flex-column items-center justify-center text-center animate-fade-in visible" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <p className="hero-kicker mb-sm" style={{ fontWeight: '600', letterSpacing: '0.05em' }}>
                        La gestion intelligente de l’assiduité au service de la réussite scolaire
                    </p>

                    <h1 className="hero-title mb-lg" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.2' }}>
                        Modernisez la <br className="desktop-only" />
                        <span className="text-primary">Gestion de l'Assiduité Universitaire</span>
                    </h1>

                    <p className="hero-description mb-xl" style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
                        Simplifiez le travail de vos équipes administratives et facilitez la vie de vos étudiants avec une plateforme sécurisée, simple et efficace.
                    </p>

                    <div className="d-flex justify-center gap-md flex-wrap">
                        <a href="#solution" className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }}>
                            Initier la transformation
                            <ArrowRightOutlined />
                        </a>
                        <a href="#features" className="btn btn-outline" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }}>
                            Découvrir les bénéfices
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
