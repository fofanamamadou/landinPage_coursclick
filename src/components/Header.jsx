"use client";

import React, { useState, useEffect } from 'react';
import { RocketOutlined } from '@ant-design/icons';
import OfferModal from './OfferModal';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [offerOpen, setOfferOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container header-container">
                    <a href="#hero" className="logo d-flex items-center gap-md">
                        <img src="/icon.png" alt="CoursClick Logo" style={{ height: '50px' }} />
                    </a>

                    <nav className="desktop-only">
                        <ul className="nav-links">
                            <li><a href="#hero">Accueil</a></li>
                            <li><a href="#solution">Solution</a></li>
                            <li><a href="#features">Services</a></li>
                            <li><a href="#target">Utilisateur</a></li>
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <button
                            className="btn btn-primary"
                            onClick={() => setOfferOpen(true)}
                            style={{ cursor: 'pointer' }}
                        >
                            <RocketOutlined />
                            <span>Démarrer l'essai</span>
                        </button>
                    </div>
                </div>
            </header>

            <OfferModal open={offerOpen} onClose={() => setOfferOpen(false)} />
        </>
    );
};

export default Header;
