import React from 'react';
import Slider from 'react-slick';

const AutopartBanner = () => {
    const carouselSettings = {
        autoplay:       true,
        autoplaySpeed:  2000,
        dots:           false,
        arrows:         false,
        infinite:       true,
        speed:          1000,
        slidesToShow:   1,
        slidesToScroll: 1,
    };

    return (
        <section className="ps-home-banner">
            <Slider {...carouselSettings}>
                <div className="item">
                    <div
                        className="ps-banner--autopart"
                        style={{
                            backgroundImage:
                                "url('/static/img/bg/blog-detail.jpg')",
                        }}>
                        <img
                            src="/static/img/slider/autopart/1.jpg"
                            alt="martfury"
                        />
                        <div className="ps-banner__content">
                            <h3>
                                Explora nuestro catálogo
                            </h3>
                            <p>Encuentra el repuesto indicado para tu vehiculo en <strong>RepuestosGo.</strong></p>
                            <p>
                                <strong>
                                    Tú solución inteligente, segura, rápida y al mejor precio. 
                                </strong>
                            </p>
                            <a className="ps-btn" href="#">
                                Comprar ahora
                            </a>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div
                        className="ps-banner--autopart"
                        style={{
                            backgroundImage: `url(/static/img/bg/blog-detail.jpg)`,
                        }}>
                        <img
                            src="/static/img/slider/autopart/2.jpg"
                            alt="martfury"
                        />
                        <div className="ps-banner__content">
                            <h4>Disponible y en catálogo</h4>
                            <h3>
                                Las mejores marcas en aceite de motores
                            </h3>
                            <p>
                                Encuentra el aceite indeal para tu vehiculo.
                            </p>
                            <a className="ps-btn" href="#">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    );
};

export default AutopartBanner;
