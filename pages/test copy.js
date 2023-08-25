import { useEffect, useState } from 'react';

const ProgressBar = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;

            if (currentPosition > windowHeight * 0.5) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div style={{ height: "2000px" }}></div>
            <div className={`progress-bar ${isVisible ? 'visible' : ''}`}>
                <div className="progress" style={{ width: isVisible ? '100%' : '0%' }}></div>
            </div>
        </>
    );
};

export default ProgressBar;