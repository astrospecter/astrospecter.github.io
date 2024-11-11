import React, { useState, useEffect } from "react";
import styles from './Header.module.css';

export default function Header() {
    const [backgroundPosition, setBackgroundPosition] = useState(`50% 50%, 50% 50%, 50% 50%`);

    function parallax(xpos, ypos) {
        const _w = window.innerWidth / 2;
        const _h = window.innerHeight / 2;
        const _mouseX = xpos;
        const _mouseY = ypos;
        const _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        const _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        const _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        const position = `${_depth3}, ${_depth2}, ${_depth1}`;
        setBackgroundPosition(position);
    }

    useEffect(() => {
        const handleMouseMove = (e) => parallax(e.pageX, e.pageY);
        document.addEventListener('mousemove', handleMouseMove);

        // Clean up event listener on unmount
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div 
                className={styles.parallax} 
                style={{ backgroundPosition: backgroundPosition }}
            >
            </div>
        </>
    );
}
