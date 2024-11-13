import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    // Define the animation settings
    const navbarVariants = {
        hidden: {
            opacity: 0,
            y: -100, // Start above the screen
        },
        visible: {
            opacity: 1,
            y: 0, // End at the original position
            transition: {
                duration: 0.6, // Duration of the animation
                ease: "easeOut", // Easing function for smooth transition
            },
        },
    };

    return (
        <motion.div
            data-w-id="26d6574c-5e77-c36a-641a-c77e8a2c5ef5"
            data-animation="default"
            data-collapse="medium"
            data-duration={400}
            data-easing="ease-in-cubic"
            data-easing2="ease"
            role="banner"
            className="navbar w-nav"
            style={{
                transformStyle: "preserve-3d",
            }}
            variants={navbarVariants} // Add Framer Motion variants
            initial="hidden" // Start with hidden state
            animate="visible" // Animate to visible state
        >
            <div className="container w-container">
                <div
                    id="w-node-_26d6574c-5e77-c36a-641a-c77e8a2c5ef7-8a2c5ef5"
                    data-w-id="26d6574c-5e77-c36a-641a-c77e8a2c5ef7"
                    className="menu-button w-nav-button"
                    style={{ WebkitUserSelect: "text" }}
                    aria-label="menu"
                    role="button"
                    tabIndex={0}
                    aria-controls="w-nav-overlay-0"
                    aria-haspopup="menu"
                    aria-expanded="false"
                >
                    <div className="icon w-icon-nav-menu" />
                    <img
                        src="https://cdn.prod.website-files.com/65fc1876777e6eaf167fad43/666c530fcc1527326993c433_Vector.svg"
                        loading="lazy"
                        width={10}
                        alt=""
                        className="image-17"
                    />
                    <img
                        src="https://cdn.prod.website-files.com/65fc1876777e6eaf167fad43/666c540586bce6f112e46ac1_Group%201461.svg"
                        loading="lazy"
                        data-w-id="052229b7-f31a-7a1e-1813-da00c4e877b9"
                        alt=""
                        className="image-18"
                        style={{ display: "none" }}
                    />
                </div>
                <NavLink
                    to="/"
                    aria-current="page"
                    className="brand w-nav-brand w--current"
                    aria-label="home"
                >
                    <img
                        src="https://cmogujarat.gov.in/sites/default/files/ft_logo.png"
                        loading="lazy"
                        alt=""
                        className="w-[100px] h-[70px]"
                    />
                </NavLink>
                <nav
                    role="navigation"
                    id="w-node-_26d6574c-5e77-c36a-641a-c77e8a2c5efb-8a2c5ef5"
                    className="nav-menu w-nav-menu"
                >
                    <div className="nav-links">
                        <NavLink
                            to="/technology"
                            className="nav-link nav-mobile-link w-nav-link"
                            style={{ maxWidth: 940 }}
                        >
                            Technology
                        </NavLink>
                        <NavLink
                            to="/offering"
                            className="nav-link with-line-right nav-mobile-link w-nav-link"
                            style={{ maxWidth: 940 }}
                        >
                            Offering
                        </NavLink>
                        <div className="div-block-24" />
                        <NavLink
                            to="/about"
                            className="nav-link with-line-left align-left nav-mobile-link w-nav-link"
                            style={{ maxWidth: 940 }}
                        >
                            About us
                        </NavLink>
                        <NavLink
                            to="/careers"
                            className="nav-link with-line-right with-line-left align-left nav-mobile-link w-nav-link"
                            style={{ maxWidth: 940 }}
                        >
                            Careers
                        </NavLink>
                        <div className="div-block-24" />
                        <a
                            href="/news"
                            className="nav-link with-line-left align-left nav-mobile-link w-nav-link"
                            style={{ maxWidth: 940 }}
                        >
                            NEWS
                        </a>
                        <NavLink
                            to="/contact"
                            className="nav-link nav-mobile-link w-nav-link"
                            style={{ maxWidth: 940 }}
                        >
                            Contact
                        </NavLink>
                    </div>
                    <div className="nav-button align-with-dots">
                        <a
                            href="#"
                            className="cta-button button-nav hide-desktop grow w-button"
                        >
                            Discuss project
                        </a>
                    </div>
                </nav>
                <a href="/contact" className="cta-button button-nav w-button">
                    Get in touch
                </a>
            </div>
            <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0" />
        </motion.div>
    );
};

export default Navbar;
