"use client";

export const runtime = 'edge'


import Image from 'next/image';
import dhivehingeRaajjePlain from '../../../../public/images/campaign/dhivehi-rajje-color-white.png';
import vote4Muizzupnc from '../../../../public/images/campaign/pnc-check-4-blue.png';
import data from '../../data';

export default function Chapter({ params }: { params: { id: number } }) {

    let chapter = data.find(item => item.id == params.id);
    if (!chapter) {
        chapter = data[0];
    }

    return (
        <div id="content" role="main">
            {/*-- Intro*/}
            {/*============================================= -->*/}
            <section id="home" className="d-flex position-relative py-5" style={{backgroundPosition: 'center'}}>
                <Image src={chapter.image} fill={true} alt="Chapter" objectFit={'cover'}/>
                <div className="hero-mask opacity-75 bg-dark position-absolute top-0 left-0 w-100 h-100"></div>
                <div className="container my-auto py-4" style={{zIndex: 12}}>
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center wow fadeIn">
                            <h1 className="text-12 fw-300 mb-0 text-uppercase">
                                <Image height={70} src={dhivehingeRaajjePlain} alt="Dhivehinge Raajje"/>
                            </h1>
                            <Image height={60} src={vote4Muizzupnc} alt="Vote4Muizzu"/>
                        </div>
                    </div>
                    {/*-- Heading -->*/}
                    <div className="text-center mb-2 mt-4 wow text-light fadeInUp">
                        ޗެޕްޓަރު {chapter.id}
                        {/*<Image className="wow fadeInUp" width={150} src={vote4MuizzuColor} alt="Vote4Muizzu"/>*/}
                    </div>
                    {/*<p ><span className="bg-blue-gradient text-dark px-2 aammu">2023 - 2028</span></p>*/}
                    <h2 className="text-10 fw-600 text-light text-center wow fadeInUp" style={{lineHeight: '1.6em'}}>{chapter.title}</h2>
                    {/*-- Heading end-->*/}

                </div>
            </section>
            {/*-- Intro end -->*/}


            {/*<-- About*/}
            {/*============================================= -->*/}
            <section id="about" className="section">
                <div className="container">
                    <div className="mb-5 text-center">
                        <audio controls>
                            {/*<source src="horse.ogg" type="audio/ogg"/>*/}
                            <source src={chapter.audio} type="audio/mpeg"/>
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                    {/*/!*-- Heading -->*!/*/}
                    {/*<div className="text-center mb-2 wow fadeInUp">*/}
                    {/*    ޗެޕްޓަރު {chapter.id}*/}
                    {/*    /!*<Image className="wow fadeInUp" width={150} src={vote4MuizzuColor} alt="Vote4Muizzu"/>*!/*/}
                    {/*</div>*/}
                    {/*/!*<p ><span className="bg-blue-gradient text-dark px-2 aammu">2023 - 2028</span></p>*!/*/}
                    {/*<h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp" style={{lineHeight: '1.6em'}}>{chapter.title}</h2>*/}
                    {/*/!*-- Heading end-->*!/*/}

                    <div className="row">
                        <div className="col">
                            <ol>
                                {
                                    chapter.items.map((item: any, index: number) => (
                                        <li className="wow text-3 fadeInUp mb-5" key={index.toString()}>{item.content}</li>
                                    ))
                                }
                            </ol>

                        </div>
                    </div>
                </div>
            </section>
            {/*-- About end -->*/}

        </div>
    )

}
