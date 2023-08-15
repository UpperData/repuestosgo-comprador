import React from 'react';
import Link from 'next/link';

const AutopartCategories = () => {
    const autoPartCategories = [
        {
            thumbnail: '/static/img/categories/home-2/1.jpg',
            title: 'INTERIOR',
            links: ['Asientos', 'Tablero', 'Radios', 'Alfombras de piso'],
        },
        {
            thumbnail: '/static/img/categories/home-2/2.jpg',
            title: 'EXTERIOR',
            links: [
                'Rejillas personalizadas',
                'Parachoques todoterreno',
                'Kits de carrocería',
            ],
        },
        {
            thumbnail: '/static/img/categories/home-2/3.jpg',
            title: 'RUEDAS Y NEUMÁTICOS',
            links: ['Ruedas personalizadas', 'Llantas', 'Ruedas de fábrica', 'Casquillos centrales'],
        },
        {
            thumbnail: '/static/img/categories/home-2/4.jpg',
            title: 'PERFORMANCE',
            links: [
                'Sistema de escape',
                'Frenos',
                'Fichas de rendimiento',
                'Arranque y carga',
            ],
        },
        {
            thumbnail: '/static/img/categories/home-2/5.jpg',
            title: 'Partes',
            links: ['Espejos', 'parachoques', 'Paneles'],
        },
        {
            thumbnail: '/static/img/categories/home-2/6.jpg',
            title: 'Luces',
            links: ['Faros', 'Luz todoterreno', 'Luz de señal'],
        },
    ];
    return (
        <section className="ps-top-categories">
            <div className="container">
                <div className="ps-section__header">
                    <h3>Categorias más populares</h3>
                </div>
                <div className="ps-section__content"></div>
                <div className="row align-content-lg-stretch">
                    {autoPartCategories.map((category) => (
                        <div
                            className="col-md-4 col-sm-6 col-12"
                            key={category.title}>
                            <div
                                className="ps-block--category-2 ps-block--category-auto-part"
                                data-mh="categories">
                                <div className="ps-block__thumbnail">
                                    <img
                                        src={category.thumbnail}
                                        alt="martfury"
                                    />
                                </div>
                                <div className="ps-block__content">
                                    <h4>{category.title}</h4>
                                    <ul>
                                        {category.links &&
                                            category.links.map((link) => (
                                                <li key={link}>
                                                    <Link href="/shop">
                                                        <a>{link}</a>
                                                    </Link>
                                                </li>
                                            ))}
                                        <li className="more">
                                            <Link href="/shop">
                                                <a>
                                                    Ver más
                                                    <i className="icon-chevron-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AutopartCategories;
