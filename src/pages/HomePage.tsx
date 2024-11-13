import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Navbar/Footer/Footer"
import { motion } from "framer-motion";
const HomePage = () => {
    const variants = {
        hidden: {
            opacity: 0,
            y: 100, // Start from below the screen
        },
        visible: {
            opacity: 1,
            y: 0, // End at original position
            transition: {
                duration: 0.8, // Animation duration
                ease: "easeOut", // Easing function for smooth animation
            },
        },
    };
    return (
        <>
            <div className="">
                <Navbar />
            </div>
            <div className="header-holder hp">
                <motion.div
                    className="floating-block broader special plus-40 show-mobile-only"
                    initial="hidden" // Starts in the 'hidden' state
                    animate="visible" // Animate to the 'visible' state
                    variants={variants} // Apply the defined animation variants
                >
                    <div className="hp-titile first hp-title">
                        <div className="dot-block" />
                        <div className="decsriptor">Sardar Patel Good Governance CM Fellowship</div>
                    </div>
                    <div className="floating-block-copy minus-ten">
                        <h1>
                            Over 90% of plastics worldwide are not recycled. This needs to change!
                        </h1>
                    </div>
                </motion.div>
            </div>
            <div className="hp-first-section">
                <div className="homepage-section-1">
                    <div className="left-minus-margin">
                        <div
                            data-w-id="a054707d-ff6c-5a63-5361-74f9b469e558"
                            style={{
                                opacity: 1,
                                transform:
                                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                transformStyle: "preserve-3d"
                            }}
                            className="floating-block broader special plus-40"
                        >
                            <div className="hp-titile first hp-title">
                                <div className="dot-block" />
                                <div className="decsriptor">Sardar Patel Good Governance CM Fellowship</div>
                            </div>
                            <div className="floating-block-copy minus-ten">
                                <h1>
                                    Over 90% of plastics worldwide are not recycled. This needs to
                                    change!
                                </h1>
                            </div>
                        </div>
                        <div className="tech-block full-width">
                            <div className="hp-titile yellow">
                                <div
                                    data-w-id="827eb850-67b3-48a2-c869-08bfa1de6bc6"
                                    style={{
                                        opacity: 1,
                                        transform:
                                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                        transformStyle: "preserve-3d"
                                    }}
                                    className="dot-block empty"
                                />
                                <div
                                    data-w-id="827eb850-67b3-48a2-c869-08bfa1de6bc7"
                                    style={{
                                        opacity: 1,
                                        transform:
                                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                        transformStyle: "preserve-3d"
                                    }}
                                    className="decsriptor"
                                >
                                    our Solution
                                </div>
                            </div>
                            <div className="hp-tech-copy">
                                <div
                                    data-w-id="4ad42184-faaa-c874-0d1f-2cf851ae482b"
                                    style={{ opacity: 0 }}
                                    className="tech-preview aligned-corners"
                                >
                                    <h1 className="heading-17">
                                        DePoly has developed a novel, clean technology to recycle PET and
                                        Polyester
                                    </h1>
                                    <a
                                        href="/technology"
                                        className="link-block-3 extra-space w-inline-block"
                                    >
                                        <h5 className="more-details-h no-spacing">Learn More</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hp-blog-preview">
                        <div
                            data-w-id="c79597c7-a223-9595-8bad-9de3818fdc7f"
                            style={{
                                opacity: 1,
                                transform:
                                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                transformStyle: "preserve-3d"
                            }}
                            className="blog-preview-header"
                        >
                            <h5 className="heading-19 no-margin">LATEST news</h5>
                            <a
                                data-w-id="ba52f25d-0ccb-0efb-7bc4-6ca7f377a457"
                                href="/news"
                                className="all-blog w-inline-block"
                            >
                                <h5 className="more-details-h show-all">SHOW ALL</h5>
                                <img
                                    src="https://cdn.prod.website-files.com/65fc1876777e6eaf167fad43/663665b52b479be9f93dea23_Vector%208%20(1).svg"
                                    loading="lazy"
                                    data-w-id="87da6ec9-0d59-49ad-26bf-ebafc971794d"
                                    alt=""
                                    className="image-7 hide-arrow"
                                />
                            </a>
                        </div>
                        <div className="blog-preview">
                            <div className="collection-list-wrapper-4 w-dyn-list">
                                <div role="list" className="w-dyn-items">
                                    <div
                                        role="listitem"
                                        className="latest-news-single w-dyn-item"
                                        style={{
                                            opacity: 1,
                                            transform:
                                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                            transformStyle: "preserve-3d"
                                        }}
                                    >
                                        <div className="blog-arrticle-preview">
                                            <div className="article-preview-info">
                                                <h4 className="heading-20">DePoly in Tokyo Japan</h4>
                                                <a
                                                    href="/article/depoly-in-tokyo-japan"
                                                    className="link-block-4 w-inline-block"
                                                >
                                                    <h5 className="more-details-h">READ&nbsp;MORE</h5>
                                                </a>
                                            </div>
                                            <div
                                                style={{ backgroundImage: "none" }}
                                                className="div-block-30 w-condition-invisible"
                                            />
                                            <div
                                                style={{
                                                    backgroundImage:
                                                        'url("https://cdn.prod.website-files.com/66042999090c040c1170987a/67287f1f2579a679373b555c_NRI%20Japan%202024.webp")'
                                                }}
                                                className="article-image"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        role="listitem"
                                        className="latest-news-single w-dyn-item"
                                        style={{
                                            opacity: 1,
                                            transform:
                                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                            transformStyle: "preserve-3d"
                                        }}
                                    >
                                        <div className="blog-arrticle-preview">
                                            <div className="article-preview-info">
                                                <h4 className="heading-20">
                                                    Odlo and DePoly partner to develop company’s first circular
                                                    base layer
                                                </h4>
                                                <a
                                                    href="/article/odlo-and-depoly-partner-to-develop-companys-first-circular-base-layer"
                                                    className="link-block-4 w-inline-block"
                                                >
                                                    <h5 className="more-details-h">READ&nbsp;MORE</h5>
                                                </a>
                                            </div>
                                            <div
                                                style={{ backgroundImage: "none" }}
                                                className="div-block-30 w-condition-invisible"
                                            />
                                            <div
                                                style={{
                                                    backgroundImage:
                                                        'url("https://cdn.prod.website-files.com/66042999090c040c1170987a/6703f4166afc4b4a85e8a8ba_Odlo%20DePoly%20Website.webp")'
                                                }}
                                                className="article-image"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        role="listitem"
                                        className="latest-news-single w-dyn-item"
                                        style={{ opacity: 0 }}
                                    >
                                        <div className="blog-arrticle-preview">
                                            <div className="article-preview-info">
                                                <h4 className="heading-20">
                                                    Finalist of 2024 Swiss Technology Award
                                                </h4>
                                                <a
                                                    href="/article/finalist-of-2024-swiss-technology-award"
                                                    className="link-block-4 w-inline-block"
                                                >
                                                    <h5 className="more-details-h">READ&nbsp;MORE</h5>
                                                </a>
                                            </div>
                                            <div
                                                style={{
                                                    backgroundImage:
                                                        'url("https://cdn.prod.website-files.com/66042999090c040c1170987a/670d019343dfaffd73b1b72c_66fe3cfa340906a1a1393f2a_STA%20Logo%20Final.jpg")'
                                                }}
                                                className="div-block-30"
                                            />
                                            <div
                                                style={{
                                                    backgroundImage:
                                                        'url("https://cdn.prod.website-files.com/66042999090c040c1170987a/66fe3cfa340906a1a1393f2a_STA%20Logo%20Final.webp")'
                                                }}
                                                className="article-image w-condition-invisible"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        role="listitem"
                                        className="latest-news-single w-dyn-item"
                                        style={{ opacity: 0 }}
                                    >
                                        <div className="blog-arrticle-preview">
                                            <div className="article-preview-info">
                                                <h4 className="heading-20">
                                                    Voices of DePoly: Employee Spotlight - Pelin Uran
                                                </h4>
                                                <a
                                                    href="/article/voices-of-depoly-employee-spotlight---pelin-uran"
                                                    className="link-block-4 w-inline-block"
                                                >
                                                    <h5 className="more-details-h">READ&nbsp;MORE</h5>
                                                </a>
                                            </div>
                                            <div
                                                style={{ backgroundImage: "none" }}
                                                className="div-block-30 w-condition-invisible"
                                            />
                                            <div
                                                style={{
                                                    backgroundImage:
                                                        'url("https://cdn.prod.website-files.com/66042999090c040c1170987a/66e96170058785f20d0f76b7_DePoly-3-1.jpg")'
                                                }}
                                                className="article-image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default HomePage