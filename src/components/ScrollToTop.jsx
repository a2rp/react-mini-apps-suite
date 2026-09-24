import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdKeyboardArrowUp } from "react-icons/md";

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = document.getElementById("scroll-root");
        const target = node || window;
        const readScroll = () => setVisible((node ? node.scrollTop : window.scrollY) > 320);
        target.addEventListener("scroll", readScroll, { passive: true });
        readScroll();
        target.scrollTo({ top: 0, behavior: "auto" });
        return () => target.removeEventListener("scroll", readScroll);
    }, [pathname]);

    if (!visible) return null;

    const goTop = () => {
        const node = document.getElementById("scroll-root");
        (node || window).scrollTo({ top: 0, behavior: "smooth" });
    };

    return <button className="goTopButton" type="button" onClick={goTop} aria-label="Go to top" title="Go to top"><MdKeyboardArrowUp aria-hidden="true" /></button>;
}