"use client";

import React, { useState } from 'react';
import { Modal, Segmented, Typography } from 'antd';
import { BankOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const DemoModal = ({ open, onClose }) => {
    const [role, setRole] = useState('Administrateur');

    // Video placeholders - User will provide links later
    const videos = {
        Administrateur: "https://www.youtube.com/embed/placeholder_admin",
        Enseignant: "https://www.youtube.com/embed/placeholder_teacher",
        Étudiant: "https://www.youtube.com/embed/placeholder_student",
        Parent: "https://www.youtube.com/embed/placeholder_parent"
    };

    return (
        <Modal
            title="Démonstration Interactive"
            open={open}
            onCancel={onClose}
            footer={null}
            width={800}
            centered
        >
            <div className="d-flex flex-column items-center">
                <Text className="mb-md text-muted text-center">
                    Sélectionnez un rôle pour voir comment CoursClick facilite votre quotidien.
                </Text>

                <Segmented
                    options={[
                        { label: 'Administrateur', value: 'Administrateur', icon: <BankOutlined /> },
                        { label: 'Enseignant', value: 'Enseignant', icon: <TeamOutlined /> },
                        { label: 'Étudiant', value: 'Étudiant', icon: <UserOutlined /> },
                        { label: 'Parent', value: 'Parent', icon: <TeamOutlined /> },
                    ]}
                    value={role}
                    onChange={setRole}
                    size="large"
                    className="mb-lg"
                />

                <div
                    style={{
                        width: '100%',
                        aspectRatio: '16/9',
                        background: '#f0f2f5',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}
                >
                    {/* In a real scenario, this iframe would use the specific video link */}
                    <iframe
                        width="100%"
                        height="100%"
                        src={videos[role]}
                        title={`Démonstration pour ${role}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ background: '#000' }}
                    ></iframe>
                </div>

                <Text type="secondary" style={{ marginTop: '1rem', fontStyle: 'italic' }}>
                    * Vidéo de démonstration pour le profil {role}
                </Text>
            </div>
        </Modal>
    );
};

export default DemoModal;
