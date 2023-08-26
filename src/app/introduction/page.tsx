'use client';
import Image from 'next/image';
import dhivehingeRaajjePlain from '../../../public/images/campaign/dhivehi-rajje-color-white.png';
import vote4MuizzuColor from '../../../public/images/campaign/logo_vote4muizzu-color.png';
import vote4Muizzupnc from '../../../public/images/campaign/pnc-check-4-blue.png';
import muizzu from '../../../public/images/campaign/muizzu-full.png';
import sembe from '../../../public/images/campaign/sembe-half.png';

export default function Introduction() {
    return (
        <div id="content" role="main">
            {/*-- Intro*/}
            {/*============================================= -->*/}
            <section id="home" className="backdrop d-flex position-relative py-5" style={{backgroundPosition: 'center'}}>
                <div className="container my-auto py-4">
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center wow fadeIn">
                            <h1 className="text-12 fw-300 mb-0 text-uppercase">
                                <Image height={70} src={dhivehingeRaajjePlain} alt="Dhivehinge Raajje"/>
                            </h1>
                            <Image height={60} src={vote4Muizzupnc} alt="Vote4Muizzu"/>
                        </div>
                    </div>
                </div>
            </section>
            {/*-- Intro end -->*/}

            {/*-- Resume*/}
            {/*============================================= -->*/}
            <section id="resumeMuizzu" className="section bg-light-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            {/*-- Heading -->*/}
                            <div className="text-center mb-2 wow fadeInUp">
                                <Image className="wow fadeInUp" width={150} src={vote4MuizzuColor} alt="Vote4Muizzu"/>
                            </div>
                            <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">ޑރ. މުޙައްމަދު މުޢިއްޒު</h2>
                            <p className="text-4">ޑރ މުޢިއްޒު އަކީ މާލެ ސިޓީގެ ފުރަތަމަ އިންތިޚާބީ މޭޔަރެވެ. އެމަނިކުފާނު އިންތިޚާބު ކާމިޔާބު ކުރެއްވީ ވޯޓުލީ މީހުންގެ %63 ތާޢީދާއެކުއެވެ.</p>
                            <p className="text-4">800 މިލިއަން ޑޮލަރުގެ އަގުހުރި، ޢިމާރާތްކުރުމާއި، ގެދޮރުވެރިކަމުގެ 200 ޕްރޮޖެކްޓް ހިންގައި، މެނޭޖްމެންޓް ދާއިރާގައި 10 އަހަރު ދުވަހުގެ ތަޖްރިބާ ހާސިލްކޮށްގެން ހުރި ޕީއެމްޕީ، ޕްރިންސް2 ސެޓިފައިޑް ޕްރޮޖެޓް މެނޭޖަރެކެވެ. ޑރ މުޢިއްޒު ޚާއްސަވެފައިވަނީ ސިވިލްއިންޖިނިއަރިންގ ގެ ދާއިރާއިންނެވެ. ދުރުވިސްނޭ ލީޑަރެކެވެ.</p>
                            {/*-- Heading end-->*/}

                        </div>
                        <div className="col-lg-6 d-flex justify-content-center">
                            <Image className="wow fadeInUp" width={300} src={muizzu} alt="Vote4Muizzu"/>
                        </div>
                        <div className="row g-5 mt-5">
                            {/*-- My Education -->*/}
                            <div className="col-lg-6 wow fadeInUp">
                                <h2 className="text-7 fw-600 mb-4 pb-2">ތަޢުލީމީ ވަނަވަރު</h2>
                                <div className="border-start border-2 border-primary ps-3">
                                    <h3 className="text-4">ޕީއެޗްޑީ (ޓީއޭޑީ އިންޖިނީއަރިންގ)</h3>
                                    <p className="mb-2"> ޔުނިވާސިޓީ އޮފް ލީޑްސް، އިނގިރޭސި ވިލާތް</p>
                                    <hr className="my-4"/>
                                    <h3 className="text-4">މާސްޓާރ އޮފް ސައިންސް ސީއޯޑީ އިންޖިނިއަރިންގ</h3>
                                    <p className="mb-2"> ޔޫސީއެލް، އިނގިރޭސި ވިލާތް</p>
                                    <hr className="my-4"/>
                                    <h3 className="text-4">ބެޗްލާރސް (އޮނާރސް) ސްޓްރަކްޗަރަލް އިންޖިނިއަރިންގ</h3>
                                    <p className="mb-2"> ޔޫސީއެލް، އިނގިރޭސި ވިލާތް</p>
                                    <hr className="my-4"/>
                                </div>
                            </div>
                            {/*-- My Experience -->*/}
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                                <h2 className="text-7 fw-600 mb-4 pb-2">އަދާކުރި މަގާމްތައް</h2>
                                <div className="border-start border-2 border-primary ps-3">
                                    <h3 className="text-4">މިނިސްޓަރ އޮފް ހައުސިންގ އެންޑް އެންވައިރޮމެންޓް</h3>
                                    <p className="mb-2"> ދިވެހި ސަރުކާރު (ފެބްރުއަރީ – މޭ 2012)</p>
                                    <hr className="my-4"/>
                                    <h3 className="text-4">މިނިސްޓަރ އޮފް ހައުސިންގ އެންޑް އިންފްރާސްޓްރަކްޗާ</h3>
                                    <p className="mb-2"> ދިވެހި ސަރުކާރު (މޭ2012 – ނޮވެމްބަރ 2018)</p>
                                    <hr className="my-4"/>

                                    <h3 className="text-4">ދިވެހި ރާއްޖެއިން އޭޝިއާ އިންފްރާ ސްޓްރަކްޗާ ބޭންކަށް ކަނޑައަޅާފައި ހުންނަވާ ގަވަރުނަރު ކަމުގެ މަގާމް</h3>
                                    <hr className="my-4"/>

                                    <h3 className="text-4">ބްރިޖް ކޮމިޓީގެ ޗެއާރ</h3>
                                    <p className="mb-2">ދިވެހި ސަރުކާރު</p>
                                    <hr className="my-4"/>

                                    <h3 className="text-4">ސުޕާ ސީއީއޯ ހައުސިްންގ ޑިވެލޮޕްމެންޓް ކޯޕަރޭޝަން</h3>
                                    <hr className="my-4"/>

                                    <h3 className="text-4">ރޯޑް އެޑްވައިޒަރީ ކޮމެޓީގެ ޗެއާރމަން</h3>
                                    <hr className="my-4"/>

                                    <h3 className="text-4">މޯލްޑިވްސް ލޭންޑް ވެލުއޭޝަން ކޮމިޓީގެ ޗެއާރމަން</h3>
                                    <hr className="my-4"/>

                                    <h3 className="text-4">ނޭޝަނަލް ޑިޒާސްޓާރ މެނޭޖްމަންޓް ސެންޓާރގެ ޗެއާރމަންކަން</h3>
                                    <hr className="my-4"/>

                                    <h3 className="text-4">މޯލްޑިވްސް އެއާޕޯޓްސް ކޮމްޕެނީގެ އެޑްވައިޒަރި ކޮމިޓީގެ މެމްބަރުކަން</h3>
                                    <hr className="my-4"/>

                                    <h3 className="text-4">ބޯޑް އޮފް އިންވެސްޓްމެންޓް މެމްބަރުކަން</h3>
                                    <hr className="my-4"/>

                                    <h3 className="text-4">އިންޖިނިއަރިންގ ޑިރެކްޓަރ، ވިލާޝިޕިންގ އެންޑް ޓްރޭޑިންގ ކޮމްޕެނީ</h3>
                                    <hr className="my-4"/>

                                    <h3 className="text-4">މޯލްޑިވްސް ހައުސިންގ އެންޑް އާބަން ޑިވެލޮޕްމަންޓް ބޯޑުގެ ސިވިލް އިންޖިނިއަރ</h3>
                                    <hr className="my-4"/>

                                    <h3 className="text-4">އެސޯސިއޭޓް ޑިރެކްޓަރ، ސްޓްރަކްޗަރަލް އިންޖިނިއަރ، ޑިޒައިން2000 ޕްރައިވެޓް ލިމިޓެޑް</h3>
                                    <hr className="my-4"/>

                                    <h3 className="text-4">މޯލްޑިވްސް - ޗައިނާ ކަލްޗަރަލް އެންޑް ޓްރޭޑް އޮގަނައިޒޭޝަންގެ އޮނަރަރީ ރައީސްކަން</h3>
                                    <hr className="my-4"/>

                                    <h3 className="text-4">އެމްޑީއޭގެ ޑެޕިއުޓީ ލީޑަރުކަން</h3>
                                    <hr className="my-4"/>

                                    <h3 className="text-4">އިނގިރޭސިވިލާތުގެ ދިވެހި ދަރިވަރުންގެ އެސޯސޭޝަންގެ ޗެއާރޕާރސަންކަން</h3>
                                    <hr className="my-4"/>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
            {/*-- muizzu Resume end -->*/}


            {/*-- Resume sembe*/}
            {/*============================================= -->*/}
            <section id="resumeMuizzu" className="section">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            {/*-- Heading -->*/}
                            <div className="text-center mb-2 wow fadeInUp">
                                <Image className="wow fadeInUp" width={150} src={vote4MuizzuColor} alt="Vote4Muizzu"/>
                            </div>
                            <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">އަލްއުސްތާޛު ޙުސައިން މުޙައްމަދު ލަޠީފް</h2>
                            <p className="text-4">ހުސެއިން މުޙައްމަދު (ސެންބެ) އަކީ ރައްޔިތުންގެ މަޖްލީހުގައި ފަރެސް މާތޮޑާ ދާއިރާ ތަމްސީލު ކުރައްވަމުން ގެންދަވާ މެމްބަރެވެ. މިއީ ސެންބެ މި ދާއިރާ ތަމްސީލު ކުރައްވާ ދެވަނަދައުރުވެ. ރައްޔިތުންގެ މަޖްލީހުގެ މެމްބަރެއްގެ ގޮތުގައި މަސައްކަތް ކުރައްވަން ފެއްޓެވީ 2014ވަނަ އަހަރުއެވެ.</p>
                            <p className="text-4">ސެންބެ އަކީ ދިވެހިރައްޖޭގެ ޤާނޫނު އަސާސީއާއި ޤާނޫނުތަކާއި ގަވާއިދުތައް ރަނގަޅަށް ދެނެވަޑައިގެން ހުންނެވި، ބައިނަލްއަގުވާމީ ކޮންވެންޝަންތަކަށް ލޯހޮޅުވޭ ދިވެހި، އިނގިރޭސި އަދި ޢަރަބިބަހަށް ފަރިތަ ބޭފުޅޭކެވެ.</p>
                            {/*-- Heading end-->*/}
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center">
                            <Image className="wow fadeInUp" width={300} src={sembe} alt="Vote4Muizzu"/>
                        </div>
                    </div>



                    <div className="row g-5 mt-5">
                        {/*-- My Education -->*/}
                        <div className="col-lg-6 wow fadeInUp">
                            <h2 className="text-7 fw-600 mb-4 pb-2">ތަޢުލީމީ ވަނަވަރު</h2>
                            <div className="border-start border-2 border-primary ps-3">
                                <h3 className="text-4">މާސްޓާރސް - ބިޒްނަސް އެޑްމިނިސްޓްރޭޝަން</h3>
                                <p className="mb-2"> އެންގްލިއާ ރުސްކިން ޔުނިވާސިޓީ، އިނގިރޭސި ވިލާތް</p>
                                <hr className="my-4"/>
                                <h3 className="text-4">ޑިޕްލޮމާ - ބިޒްނަސް އެޑްމިނިސްޓްރޭޝަން</h3>
                                <p className="mb-2"> އެންގްލިއާ ރުސްކިން ޔުނިވާސިޓީ، އިނގިރޭސި ވިލާތް</p>
                                <hr className="my-4"/>
                                <h3 className="text-4">ބެޗްލާސް ޑިގްރީ (ބީއޭ) - ސޯޝަލް ސާވިސް އެންޑް ކޮމިއުނިޓީ ޑިވޮލޮޕްމެންޓް</h3>
                                <p className="mb-2">އަލްއަޒްހަރު ޔުނިވާސިޓީ، މިޞްރު</p>
                                <hr className="my-4"/>
                                <h3 className="text-4">ސެކަންޑަރީ ތަޢުލީމު - މައުޙަދުއް ދިރާސާތުލް އިސްލާމިއްޔާ</h3>
                                <hr className="my-4"/>
                                <h3 className="text-4">ޕްރައިމަރީ ތަޢުލީމު - ޢަރަބިއްޔާ ސްކޫލު</h3>
                                <hr className="my-4"/>
                            </div>
                        </div>
                        {/*-- My Experience -->*/}
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                            <h2 className="text-7 fw-600 mb-4 pb-2">އަދާކުރި މަގާމްތައް</h2>
                            <div className="border-start border-2 border-primary ps-3">
                                <h3 className="text-4">ރައްޔިތުންގެ މަޖްލީހުގެ މެމބަރުކަން (ފަރެސްމާތޮޑާ ދާއިރާ)</h3>
                                <hr className="my-4"/>

                                <h3 className="text-4">ދިވެހިރާއްޖޭގެ ހިޔުމަންރައިޓްސްކޮމިޝަންގެ އެސިސްޓެންޓް އިންވެސްޓިގޭޝަން އޮފިސަރެއްގެ މަގާމް</h3>
                                <hr className="my-4"/>

                                <h3 className="text-4">މިނިސްޓްރީއޮފް ޖެންޑާ ފެމެލީ އެންޑް ހިޔުމަންރައިޓްސްގައި ސީނިއާ ސޯޝަލް ސާވިސް ވޯކަރެއްގެ މަގާމް</h3>
                                <hr className="my-4"/>

                                <h3 className="text-4">ހުޅުމާލެ ހޮސްޕިޓަލްގެ ސެކްރެޓެރީ</h3>
                                <hr className="my-4"/>

                                <h3 className="text-4">ޔޫމެޓްގެ ޓެކްނިކަލް އެސިސްޓެންޓް</h3>
                                <hr className="my-4"/>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/*-- Resume end -->*/}

        </div>
    )
}
