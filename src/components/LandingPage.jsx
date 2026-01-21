"use client";

import React from 'react';
import './Landing.css';
import Header from './Header';
import Hero from './Hero';
import Problem from './Problem';
import Solution from './Solution';
import Features from './Features';
import TargetAudience from './TargetAudience';
import FinalCTA from './FinalCTA';
import Footer from './Footer';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Header />
            <Hero />
            <Problem />
            <Solution />
            <Features />
            <TargetAudience />
            <FinalCTA />
            <Footer />
        </div>
    );
};

export default LandingPage;
