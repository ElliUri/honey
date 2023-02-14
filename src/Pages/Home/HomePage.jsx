import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import imgHand from '../../assets/Ellipse1.png';
import imgWhatsApp from '../../assets/Subtract.svg';
import imgHoney from '../../assets/Ellipse4.svg'
import imgOurHistory from '../../assets/banner2.svg'
import s from './HomePage.module.css';
import OurHistoryPage from '../OurHistory/OurHistoryPage.jsx';

const HomePage = () => {
    return (
        <>
            <section className={s.main_block}>
                <div className={s.phone_div}>
                    <h4 className={s.h4}>Прямиком из
                        <span className={s.span_web}> пчелиных</span>
                        ульев</h4>
                    <p className={s.textP2}>Максимальная польза для <span className={s.span_web}>вашего здоровья!</span>  </p>

                    <h2 className={s.h2}>Прямиком из пчелиных ульев</h2>
                    <p className={s.textP}>Максимальная польза вашего здоровья! </p>
                    <div className={s.box_call}>
                        <a href="tel:+79146089174" className={s.href_call}>Связаться <img src={imgWhatsApp} alt="image of WhatsApp " className={s.img_call} /></a>
                    </div>

                    {/* здесь для версия для телефона */}
                    <div className={s.box_call_phone}>
                        <a href="tel:+79146089174" className={s.href_call_phone}>Связаться <img src={imgWhatsApp} alt="image of WhatsApp " className={s.img_call_phone} /></a>
                    </div>
                </div>
                <img src={imgHand} alt="" className={s.imgHand_web} />
                {/* -- */}
                <img src={imgHoney} alt="image of honey" className={s.imgHoney_phone} />
                {/*<div className={s.img_back}>
                    <img src={imgFLower} alt="a line" className={s.imgFlower} />
                    <img src={imgLine} alt="a line" className={s.imgLine} />
                </div> */}
            </section>

            {/* third block after catalog  */}
           
                <section className={s.section_our_history}>
                    <h4 className={s.text_our_history}>Наша история</h4>
                    <div className={s.div_flex}>
                        <div>
                            <img src={imgOurHistory} alt="beekeeper image" className={s.imgOurHistory} /></div>
                        <div className={s.text_block}>
                            <h3 className={s.eco_text_web}> Высококачественный <span className={s.span_web}>экологический мед в</span>  Кыргызстане. </h3>
                            <h3 className={s.eco_text}> Высококачественный экологический мед в Кыргызстане. </h3>
                            <p className={s.web_p}>Наша компания была основана в 1996 году, хозяйство было начато
                                c 16 семьями пчёл среднерусской породы...</p>
                            <p className={s.phone_p}>Наша компания была <span className={s.span_phone}> основана в 1996 году, </span>хозяйство...</p>
                             <Router>
                            <Link to="/our-history">
                                <div className={s.box_more}> <p className={s.text_more}>Подробнее</p>
                                </div>
                            </Link>
                            <Switch>
                    <Route path="/our-history" element={OurHistoryPage}><OurHistoryPage /></Route>
                </Switch>
</Router>
                        </div>
                    </div>
                </section>
                
            
        </>
    );
};


export default HomePage;