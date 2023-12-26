'use client';

import './globals.css';
import '../../public/vendor/animate/animate.min.css';
import '../../public/vendor/bootstrap/css/bootstrap.rtl.min.css';
import '../../public/vendor/font-awesome/css/all.min.css';
import '../../public/css/stylesheet.css';
// import {Inter} from 'next/font/google';
import Script from 'next/script';
import Image from 'next/image';
import vote4MuizzuWhite from '../../public/images/campaign/logo_vote4muizzu_white.png';
import vote4Muizzupnc from '../../public/images/campaign/pnc-check-4-blue.png';
import dhivehingeRaajjePlain from '../../public/images/campaign/dhivehi-rajje-color-white.png';
import Link from 'next/link';
import dhivehingeRaajje from '../../public/images/campaign/dhivehi-raajje-white-bg.png';

export const runtime = 'edge'
// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Vote4Muizzu',
//   description: 'Vote4Muizzu',
// }

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" dir="rtl">
        <head>
            <title>Voteazima.com</title>
            <meta name="description"  content="Vote Azima. DhivehingeRaajje. Dhivehinge Ummeedhu" />
            {/*<Script src="/vendor/jquery/jquery.min.js" strategy="beforeInteractive"/>*/}
            {/*<Script src="/vendor/jquery.easing/jquery.easing.min.js" strategy="beforeInteractive"/>*/}
            {/*<Script src="/vendor/jquery.appear/jquery.appear.min.js" strategy="beforeInteractive"/>*/}
            {/*<Script src="/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive"/>*/}
            {/*<Script src="/vendor/wow/wow.min.js" strategy="beforeInteractive"/>*/}
            {/*<Script src="/vendor/imagesloaded/imagesloaded.pkgd.min.js" strategy="beforeInteractive"/>*/}
            {/*<Script src="/vendor/isotope/isotope.pkgd.min.js" strategy="beforeInteractive"/>*/}
            {/*<Script src="/js/theme.js" strategy="beforeInteractive"/>*/}

            {/*<meta property="og:type" content="website" />*/}
            {/*<meta property="og:title" content="Vote4Muizzu.com" />*/}
            {/*<meta property="og:description" content="Vote 4 Muizzu. DhivehingeRaajje. Dhivehinge Ummeedhu. Dr. Muizzu and Sembe 2023" />*/}
            {/*<meta property="og:url" content="https://vote4muizzu.com/" />*/}
            {/*<meta property="og:site_name" content="Vote4Muizzu.com" />*/}
            {/*<meta property="og:image" content="https://vote4muizzu.com/vote_4_mizzu.jpg" />*/}
            {/*<meta property="og:image:secure_url" content="https://vote4muizzu.com/vote_4_mizzu.jpg" />*/}
            {/*<meta property="og:image:width" content="200" />*/}
            {/*<meta property="og:image:height" content="200" />*/}
            {/*<meta name="twitter:card" content="summary_large_image" />*/}
            {/*<meta name="twitter:title" content="Vote4Muizzu.com" />*/}
            {/*<meta name="twitter:description" content="Vote 4 Muizzu. DhivehingeRaajje. Dhivehinge Ummeedhu. Dr. Muizzu and Sembe 2023" />*/}
            {/*<meta name="twitter:image" content="https://vote4muizzu.com/vote_4_mizzu.jpg" />*/}

            {/*<Script*/}
            {/*    src="https://www.googletagmanager.com/gtag/js?id=AW-11316269106"*/}
            {/*    onLoad={() => {*/}
            {/*        // @ts-ignore*/}
            {/*        window.dataLayer = window.dataLayer || [];*/}
            {/*        function gtag(){*/}
            {/*            // @ts-ignore*/}
            {/*            dataLayer.push(arguments);*/}
            {/*        }*/}
            {/*        // @ts-ignore*/}
            {/*        gtag('js', new Date());*/}
            {/*        // @ts-ignore*/}
            {/*        gtag('config', 'AW-11316269106');*/}
            {/*        // @ts-ignore*/}
            {/*        gtag('event', 'conversion', {'send_to': 'AW-11316269106/HN67CL_G1NoYELKggpQq'});*/}
            {/*    }}*/}
            {/*/>*/}

        </head>
        <body>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
            <h1>Coming Soon</h1>
            <h1>voteazima.com</h1>
        </div>
        </body>
        {/*<body className="rtl" data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="70">*/}
        {/*    /!*Preloader*!/*/}
        {/*    <div className="preloader">*/}
        {/*        <div className="lds-ellipsis">*/}
        {/*            <div></div>*/}
        {/*            <div></div>*/}
        {/*            <div></div>*/}
        {/*            <div></div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    /!*Preloader End -->*!/*/}

        {/*    /!*Document Wrapper*!/*/}
        {/*    /!*===============================*!/*/}
        {/*    <div id="main-wrapper">*/}

        {/*        /!*-- Header -->*!/*/}
        {/*        <header id="header" className="sticky-top">*/}
        {/*            /!*-- Navbar -->*!/*/}
        {/*            <nav className="primary-menu navbar navbar-expand-none navbar-overlay navbar-overlay-dark bg-transparent border-bottom-0 text-5 fw-600">*/}
        {/*                <div className="container">*/}
        {/*                    /!*-- Logo -->*!/*/}
        {/*                    <Link href={'/'} title="Vote4Muizzu">*/}
        {/*                        <Image height={50} src={dhivehingeRaajje} alt="Dhivehinge Raajje" style={{verticalAlign: 'middle'}}/>*/}
        {/*                    </Link>*/}
        {/*                    /!*-- Logo End -->*!/*/}
        {/*                    <div className="text-3 ms-auto me-2 pt-2">*/}
        {/*                        <Link href={'/'} title="Vote4Muizzu">*/}
        {/*                            <Image width={150} src={vote4MuizzuWhite} alt="Vote4Muizzu"/>*/}
        {/*                        </Link>*/}
        {/*                    </div>*/}
        {/*                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header-nav"><span></span><span></span><span></span></button>*/}

        {/*                    <div id="header-nav" className="collapse navbar-collapse">*/}
        {/*                        <div className="d-flex flex-column h-100 align-items-center justify-content-center">*/}
        {/*                            <ul className="navbar-nav">*/}
        {/*                                <li className="nav-item"><a className="nav-link smooth-scroll active" href="#home">ފުރަތަމަ ޞަފުޙާ</a></li>*/}
        {/*                                <li className="nav-item"><a className="nav-link smooth-scroll" 	href="#about">ތަޢާރަފް</a></li>*/}
        {/*                                /!*<li className="nav-item"><a className="nav-link smooth-scroll" href="#services">What I Do</a></li>*!/*/}
        {/*                                /!*<li className="nav-item"><a className="nav-link smooth-scroll" href="#resume">Resume</a></li>*!/*/}
        {/*                                <li className="nav-item"><a className="nav-link smooth-scroll" href="#manifesto">މެނިފެސްޓޯ</a></li>*/}
        {/*                                <li className="nav-item"><a className="nav-link smooth-scroll" href="#feed">ޓުވިޓާ ފީޑް</a></li>*/}
        {/*                                /!*<li className="nav-item"><a className="nav-link smooth-scroll" href="#faq">FAQ</a></li>*!/*/}
        {/*                                /!*<li className="nav-item"><a className="nav-link smooth-scroll" href="#testimonial">Client Speak</a></li>*!/*/}
        {/*                                /!*<li className="nav-item"><a className="nav-link smooth-scroll" href="#contact">Contact Me</a></li>*!/*/}
        {/*                            </ul>*/}
        {/*                            <ul className="social-icons social-icons-light social-icons-lg social-icons-light d-inline-flex mt-4">*/}
        {/*                                <li className="social-icons-twitter"><a data-bs-toggle="tooltip" href="https://www.instagram.com/teammuizzu/" target="_blank" title="" data-bs-original-title="Twitter"><i className="fab fa-twitter"></i></a></li>*/}
        {/*                                <li className="social-icons-facebook"><a data-bs-toggle="tooltip" href="https://www.facebook.com/teammuizzu" target="_blank" title="" data-bs-original-title="Facebook"><i className="fab fa-facebook"></i></a></li>*/}
        {/*                                /!*<li className="social-icons-instagram"><a data-bs-toggle="tooltip" href="http://www.instagram.com/" target="_blank" title="" data-bs-original-title="Instagram"><i className="fab fa-instagram"></i></a></li>*!/*/}
        {/*                                <li className="social-icons-ticktok"><a data-bs-toggle="tooltip" href="https://www.tiktok.com/@teammuizzu/" target="_blank" title="" data-bs-original-title="Ticktok"><i className="fab fa-tiktok"></i></a></li>*/}
        {/*                                <li className="social-icons-twitter"><a data-bs-toggle="tooltip" href="https://www.instagram.com/teammuizzu/" target="_blank" title="" data-bs-original-title="Twitter Team Muizzu"><i className="fab fa-twitter"></i></a></li>*/}
        {/*                                /!*<li className="social-icons-dribbble"><a data-bs-toggle="tooltip" href="http://www.dribbble.com/harnishdesign/" target="_blank" title="" data-bs-original-title="Dribbble"><i className="fab fa-dribbble"></i></a></li>*!/*/}
        {/*                            </ul>*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </nav>*/}
        {/*            /!*-- Navbar End -->*!/*/}
        {/*        </header>*/}
        {/*        /!*-- Header End -->*!/*/}

        {/*        {children}*/}


        {/*        /!*-- Footer*!/*/}
        {/*        /!*============================================= -->*!/*/}
        {/*        <footer id="footer" className="section footer-bg text-white">*/}
        {/*            <div className="container">*/}
        {/*                <div className="row justify-content-around align-items-center">*/}
        {/*                    <div className="col">*/}
        {/*                        <Image width={150} src={vote4MuizzuWhite} alt="Vote4Muizzu"/>*/}
        {/*                    </div>*/}
        {/*                    <div className="col">*/}
        {/*                        <Image width={150} src={vote4Muizzupnc} alt="Vote4Muizzu"/>*/}
        {/*                    </div>*/}
        {/*                    <div className="col">*/}
        {/*                        <Image width={150} src={dhivehingeRaajjePlain} alt="Vote4Muizzu"/>*/}
        {/*                    </div>*/}
        {/*                    <div className="col">*/}
        {/*                        <Image width={150} src={vote4MuizzuWhite} alt="Vote4Muizzu"/>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div className="container d-flex justify-content-center">*/}
        {/*                <ul className="social-icons social-icons-light social-icons-lg social-icons-light d-inline-flex mt-4">*/}
        {/*                    <li className="social-icons-facebook"><a data-bs-toggle="tooltip" href="https://www.facebook.com/teammuizzu" target="_blank" title="" data-bs-original-title="Facebook"><i className="fab fa-facebook"></i></a></li>*/}
        {/*                    <li className="social-icons-instagram"><a data-bs-toggle="tooltip" href="https://www.instagram.com/teammuizzu/" target="_blank" title="" data-bs-original-title="Instagram"><i className="fab fa-instagram"></i></a></li>*/}
        {/*                    <li className="social-icons-ticktok"><a data-bs-toggle="tooltip" href="https://www.tiktok.com/@teammuizzu/" target="_blank" title="" data-bs-original-title="Ticktok"><i className="fab fa-tiktok"></i></a></li>*/}
        {/*                    <li className="social-icons-twitter"><a data-bs-toggle="tooltip" href="https://twitter.com/TeamMuizzu" target="_blank" title="" data-bs-original-title="Twitter Team Muizzu"><i className="fab fa-twitter"></i></a></li>*/}
        {/*                    /!*<li className="social-icons-dribbble"><a data-bs-toggle="tooltip" href="http://www.dribbble.com/harnishdesign/" target="_blank" title="" data-bs-original-title="Dribbble"><i className="fab fa-dribbble"></i></a></li>*!/*/}
        {/*                </ul>*/}
        {/*            </div>*/}
        {/*        </footer>*/}
        {/*        /!*-- Footer end -->*!/*/}
        {/*    </div>*/}

        {/*</body>*/}

        </html>
    )
}
