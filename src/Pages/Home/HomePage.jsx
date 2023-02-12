import React from 'react';
import imgHand from '../../assets/hand1.svg';
import imgWhatsApp from '../../assets/Subtract.svg';
import imgFLower from '../../assets/image13.svg';
import imgLine from '../../assets/Line7.svg';
import imgHoney from '../../assets/Ellipse4.svg'
import s from './HomePage.module.css';
const HomePage = () => {
    //   const callUs = () => {
    //     return (
    //  <a href='tel:+79146089174'>+79146089174</a> 
    //     )
    //   }
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
                 {/* ----------------------------------------- */}
                <img src={imgHoney} alt="image of honey" className={s.imgHoney_phone} />
                 {/*<div className={s.img_back}>
                    <img src={imgFLower} alt="a line" className={s.imgFlower} />
                    <img src={imgLine} alt="a line" className={s.imgLine} />
                </div> */}
            </section>




            
        </>

    );
};

export default HomePage;