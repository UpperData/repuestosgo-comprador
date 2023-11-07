import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const AutopartCategories = () => {

    const categories = useSelector((state) => state.app.categories);

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
                    {categories.map((category, key) => (
                        <div
                            className="col-md-4 col-sm-6 col-12"
                            key={key}
                        >
                            <div
                                className="ps-block--category-2 ps-block--category-auto-part"
                                data-mh="categories"
                            >
                                {category.icon &&
                                    <div className="ps-block__thumbnail">
                                        <img
                                            src={`data:image/jpeg;base64,${category.icon}`}
                                            style={{maxHeight : 70}}
                                            alt="martfury"
                                        />
                                    </div>
                                }
                                <div className="ps-block__content">
                                    <h4>
                                        {category.name}
                                    </h4>
                                    <ul>
                                        {category.subCategories && category.subCategories.map((link, subindex) => (
                                                <li key={subindex}>
                                                    <Link href={`class/${category.url}/${link.url}`}>
                                                        <a>{link.name}</a>
                                                    </Link>
                                                </li>
                                            ))}
                                        <li className="more">
                                            <Link href={`class/${category.url}`}>
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
