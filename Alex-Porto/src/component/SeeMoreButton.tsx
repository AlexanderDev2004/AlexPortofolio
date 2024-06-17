import { FaChevronRight } from "react-icons/fa";
import { useRouter } from 'next/router';
import React from 'react';

// Define the button style
const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};

const SeeMoreButton: React.FC = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/see-more'); 
    };

    return (
        <button onClick={handleClick} style={buttonStyle}>
            <FaChevronRight style={{ marginRight: '8px' }} />
            See More
        </button>
    );
};

export default SeeMoreButton;
