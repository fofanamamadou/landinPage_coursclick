import React from 'react';

export const SectionHeader = ({ title, subtitle, className = "" }) => (
    <div className={`section-header ${className}`}>
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
);

export const LandingContainer = ({ children, className = "" }) => (
    <div className={`container ${className}`}>
        {children}
    </div>
);
