import { IoArrowBackSharp } from "react-icons/io5";
import { useRouter } from 'next/router';
import React from 'react';
const BackToHomeButton: React.FC = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/');
    };

    return (
        <button onClick={handleClick} style={buttonStyle}>
            <IoArrowBackSharp style={{ marginRight: '8px' }}/>
            Back to Home
        </button>
    );
};

const buttonStyle: React.CSSProperties = {
    padding: '10px 20px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};

export default BackToHomeButton;