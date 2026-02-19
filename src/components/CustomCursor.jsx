import { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseenter", onMouseEnter);
            document.addEventListener("mouseleave", onMouseLeave);
            document.addEventListener("mousedown", onMouseDown);
            document.addEventListener("mouseup", onMouseUp);
        };

        const removeEventListeners = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseenter", onMouseEnter);
            document.removeEventListener("mouseleave", onMouseLeave);
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
        };

        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseDown = () => setClicked(true);
        const onMouseUp = () => setClicked(false);
        const onMouseLeave = () => setHidden(true);
        const onMouseEnter = () => setHidden(false);

        const handleLinkHoverEvents = () => {
            document.querySelectorAll("a, button, .skill-tag, .project-card, .metric-box").forEach(el => {
                el.addEventListener("mouseenter", () => setLinkHovered(true));
                el.addEventListener("mouseleave", () => setLinkHovered(false));
            });
        };

        addEventListeners();
        handleLinkHoverEvents();

        // Create an observer to track dynamically added elements
        const observer = new MutationObserver(handleLinkHoverEvents);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            removeEventListeners();
            observer.disconnect();
        };
    }, []);

    const cursorClasses = `cursor 
    ${clicked ? 'cursor--clicked' : ''} 
    ${hidden ? 'cursor--hidden' : ''} 
    ${linkHovered ? 'cursor--link-hovered' : ''}`;

    if (typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return null; // Don't show custom cursor on mobile
    }

    return (
        <>
            <div
                className={cursorClasses}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
            <div
                className={`cursor-follower ${hidden ? 'cursor--hidden' : ''} ${linkHovered ? 'cursor-follower--active' : ''}`}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
        </>
    );
};

export default CustomCursor;
