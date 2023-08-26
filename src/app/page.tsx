'use client';

export const runtime = 'edge'

import Image from 'next/image';
import dhivehingeRaajjePlain from '../../public/images/campaign/dhivehi-rajje-color-white.png';
import vote4MuizzuColor from '../../public/images/campaign/logo_vote4muizzu-color.png';
import vote4Muizzupnc from '../../public/images/campaign/pnc-check-4-blue.png';
import muizzuAndSembe from '../../public/images/campaign/muizzu-and-sembe.jpg';
import vote4Muizzu from '../../public/images/campaign/DrMuizzuSembe.webp';
import Link from 'next/link';
import data from './data';
import {useEffect, useLayoutEffect} from 'react';

export default function Home() {

    useEffect(() => {
        const s = document.createElement("script");
        s.setAttribute("src", "https://platform.twitter.com/widgets.js");
        s.setAttribute("async", "true");
        document.head.appendChild(s);
    }, []);

    useEffect(() => {
        // @ts-ignore
        $(".portfolio-filter").each(function() {
            // @ts-ignore
            var e = $(this);
            e.imagesLoaded(function () {
                // @ts-ignore
                if ($("html").attr("dir") == 'rtl') {
                    var rtlVal = false
                }else{
                    var rtlVal = true;
                }
                var $grid = e.isotope({
                    layoutMode: "masonry",
                    originLeft: rtlVal
                });
                // @ts-ignore
                $(".portfolio-menu").find("a").on("click", function() {
                    // @ts-ignore
                    var filterValue = $(this).attr("data-filter");
                    // @ts-ignore
                    return $(".portfolio-menu").find("a").removeClass("active"), $(this).addClass("active"),
                        $grid.isotope({
                            filter: filterValue
                        }), !1
                });
            });
        });
    }, []);

    useLayoutEffect(() => {
        const s = document.createElement("script");
        s.setAttribute("src", "/vendor/typed/typed.min.js");
        s.setAttribute("async", "true");
        document.head.appendChild(s);
        s.onload = () => {
            // @ts-ignore
            $(".typed").each(function() {
                // @ts-ignore
                var typed = new Typed('.typed', {
                    stringsElement: '.typed-strings',
                    loop: true,
                    typeSpeed: 100,
                    backSpeed: 50,
                    backDelay: 1500,
                });
            });
        }
    }, [])

    return (
        <div id="content" role="main">
            {/*-- Intro*/}
            {/*============================================= -->*/}
            <section id="home" className="backdrop d-flex fullscreen position-relative py-5">
                <div className="container my-auto py-4">
                    <div className="row">
                        <div className="col-lg-7 text-center text-lg-start align-self-center order-1 order-lg-0 wow fadeIn">
                            <h1 className="text-12 fw-300 mb-0 text-uppercase">
                                <Image height={70} src={dhivehingeRaajjePlain} alt="Dhivehinge Raajje"/>
                            </h1>
                            <div className="typed-strings">
                                {
                                    data.map(item => (<p key={item.title}>{item.title}</p>))
                                }
                            </div>
                            <div style={{minHeight: '315px'}}>
                                <h2 className="text-21 fw-600 text-uppercase text-light-blue mb-0 ms-n1" style={{lineHeight: 1.5}}><span className="typed"></span></h2>
                            </div>
                            {/*<p className="text-5">based in Los Angeles, USA.</p>*/}
                            <Image height={60} src={vote4Muizzupnc} alt="Vote4Muizzu"/>
                            <br/>
                            <a href="/manifesto.pdf" download target="_blank" className="btn btn-dark mt-3">ޑައުންލޯޑް މެނިފެސްޓޯ</a>
                            <a href="#manifesto" className="btn btn-link text-light smooth-scroll mt-3">މެނިފެސްޓޯ ކިޔާލުމަށް<span className="text-4 ms-2"><i className="far fa-arrow-alt-circle-down"></i></span></a>
                        </div>
                        <div className="col-lg-5 text-center align-self-center mb-4 mb-lg-0 order-0 order-lg-1">
                            <div className="bg-light rounded-pill d-inline-block p-1 shadow-lg wow zoomIn">
                                {/*<img className="img-fluid rounded-pill d-block" src="images/web-developer.jpg" title="I'm Callum" alt=""/>*/}
                                <Image className="img-fluid rounded-pill d-block"  src={muizzuAndSembe} alt="Vote4Muizzu"/>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#about" className="scroll-down-arrow text-light smooth-scroll"><span className="animated"><i className="fas fa-arrow-down"></i></span></a>
            </section>
            {/*-- Intro end -->*/}

            {/*<-- About*/}
            {/*============================================= -->*/}
            <section id="about" className="section">
                <div className="container">
                    {/*-- Heading -->*/}
                    <div className="text-center mb-2 wow fadeInUp">
                        <Image className="wow fadeInUp" width={150} src={vote4MuizzuColor} alt="Vote4Muizzu"/>
                    </div>
                    {/*<p ><span className="bg-blue-gradient text-dark px-2 aammu">2023 - 2028</span></p>*/}
                    <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">ދިވެހީންގެ އުންމީދު</h2>
                    {/*-- Heading end-->*/}

                    <div className="row">
                        <div className="col-lg-8 text-center text-lg-start wow fadeInUp">
                            <h2 className="text-8 fw-400 mb-3">ޑރ. މުޙައްމަދު މުޢިއްޒު / އަލްއުސްތާޛު ޙުސައިން މުޙައްމަދު ލަޠީފް</h2>
                            <p className="text-3">ޑރ މުޢިއްޒު އަކީ މާލެ ސިޓީގެ ފުރަތަމަ އިންތިޚާބީ މޭޔަރެވެ. އެމަނިކުފާނު އިންތިޚާބު ކާމިޔާބު ކުރެއްވީ ވޯޓުލީ މީހުންގެ %63 ތާޢީދާއެކުއެވެ.</p>
                            <p className="text-3">800 މިލިއަން ޑޮލަރުގެ އަގުހުރި، ޢިމާރާތްކުރުމާއި، ގެދޮރުވެރިކަމުގެ 200 ޕްރޮޖެކްޓް ހިންގައި، މެނޭޖްމެންޓް ދާއިރާގައި 10 އަހަރު ދުވަހުގެ ތަޖްރިބާ ހާސިލްކޮށްގެން ހުރި ޕީއެމްޕީ، ޕްރިންސް2 ސެޓިފައިޑް ޕްރޮޖެޓް މެނޭޖަރެކެވެ. ޑރ މުޢިއްޒު ޚާއްސަވެފައިވަނީ ސިވިލްއިންޖިނިއަރިންގ ގެ ދާއިރާއިންނެވެ. ދުރުވިސްނޭ ލީޑަރެކެވެ.</p>
                            <p className="text-3">ހުސެއިން މުޙައްމަދު (ސެންބެ) އަކީ ރައްޔިތުންގެ މަޖްލީހުގައި ފަރެސް މާތޮޑާ ދާއިރާ ތަމްސީލު ކުރައްވަމުން ގެންދަވާ މެމްބަރެވެ. މިއީ ސެންބެ މި ދާއިރާ ތަމްސީލު ކުރައްވާ ދެވަނަދައުރުވެ. ރައްޔިތުންގެ މަޖްލީހުގެ މެމްބަރެއްގެ ގޮތުގައި މަސައްކަތް ކުރައްވަން ފެއްޓެވީ 2014ވަނަ އަހަރުއެވެ.</p>
                            <Link className="link-info text-primary" href="/introduction">އިތުރަށް ވިދާޅުވުމަށް</Link>
                        </div>
                        <div className="col-lg-4 mt-4 mt-lg-0 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="featured-box style-4">
                                <div className="featured-box-icon text-25 fw-500 bg-primary-gradient rounded-circle text-light-blue"><span className="wow heartBeat" data-wow-delay="1.3s">4</span></div>
                                <h3 className="text-7 wow rubberBand" data-wow-delay="2s">Vote <span className="fw-700"> Muizzu</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*-- About end -->*/}

            {/*-- Portfolio*/}
            {/*============================================= -->*/}
            <section id="manifesto" className="section bg-light-1">
                <div className="container">
                    {/*-- Heading -->*/}
                    <div className="text-center mb-2 wow fadeInUp">
                        <Image className="wow fadeInUp" width={150} src={vote4MuizzuColor} alt="Vote4Muizzu"/>
                    </div>
                    {/*<p className="aammu text-center mb-2 wow fadeInUp"><span className="text-dark px-2 bg-blue-gradient">ދިވެހީންގެ އުންމީދު</span></p>*/}
                    <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">މެނިފެސްޓޯ</h2>
                    {/*-- Heading end-->*/}

                    {/*-- Filter Menu -->*/}
                    <ul className="portfolio-menu nav nav-tabs fw-600  border-bottom-0 mb-4 wow fadeInUp">
                        <li className="nav-item"> <a data-filter="*" className="nav-link rounded-0 active">މެނިފެސްޓޯ</a></li>
                        {
                            data.map(item => <li key={item.title} className="nav-item"> <a data-filter={`.${item.class}`} className="nav-link rounded-0">{item.title}</a></li>)
                        }

                    </ul>
                    {/*-- Filter Menu end -->*/}
                    <div className="portfolio wow fadeInUp">
                        <div className="row g-4 mt-3 portfolio-filter">
                            {
                                data.map(item => (
                                    <div key={item.title} className={`col-sm-6 col-lg-4 ${item.class}`}>
                                        <Link href={`chapter/${item.id}`} className="portfolio-box">
                                            <div className="portfolio-img">
                                                <Image className="img-fluid d-block"
                                                       sizes="100vw"
                                                       style={{
                                                           width: '100%',
                                                           height: 'auto',
                                                       }}
                                                       src={vote4Muizzu} alt="vote4Muizzu"/>
                                                <div className="portfolio-overlay">
                                                    <div className="portfolio-overlay-details">
                                                        <h5 className="text-white text-5">{item.title}</h5>
                                                        <span className="text-light"> ޗެޕްޓަރު - {item.id}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </section>
            {/*-- Portfolio end -->*/}

            {/*-- Feed */}
            <section id="feed" className="section">
                <div className="container">
                    <div className="row wow fadeInUp">
                        <div className="col-md-7">
                            <div className="px-3 mb-5">
                                <div style={{maxHeight: '500px', overflow: 'auto'}}>
                                    <a className="twitter-timeline" href="https://twitter.com/MMuizzu?ref_src=twsrc%5Etfw">Tweets by MMuizzu</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="px-3">
                                <div style={{maxHeight: '500px', overflow: 'auto'}}>
                                    <a className="twitter-timeline" href="https://twitter.com/TeamMuizzu?ref_src=twsrc%5Etfw">Tweets by TeamMuizzu</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*-- Feed end */}

        </div>
    )
}
