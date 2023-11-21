import React from 'react';
import Link from 'next/link';

const TechnologyBestSaleBrands = () => (
    <div className="ps-best-sale-brands ps-section--furniture">
        <div className="container">
            <div className="ps-section__header">
                <h3>Trabajamos con las mejores marcas</h3>
            </div>
            <div className="ps-section__content">
                <ul className="ps-image-list">
                    <li>
                        <Link href="/shop">
                            <a>
                                <img src="/static/img/marcas/acd_log_01.jpg" alt="martfury" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop">
                            <a>
                                <img 
                                    src="/static/img/marcas/logo-friparts-2x.png" 
                                    alt="martfury" 
                                    style={{maxWidth: '90%'}}
                                />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop">
                            <a>
                                <img src="/static/img/marcas/DUNCAN.png" alt="martfury" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop">
                            <a>
                                <img src="/static/img/marcas/encava-header.png" alt="martfury" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop">
                            <a>
                                <img src="/static/img/marcas/logo.png" alt="martfury" />
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/shop">
                            <a>
                                <img src="/static/img/marcas/monroe.png" alt="martfury" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop">
                            <a>
                                <img 
                                    src="/static/img/marcas/mopar-1-2500x2459.jpg" 
                                    alt="martfury" 
                                    style={{maxWidth: '60%'}}
                                />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop">
                            <a>
                                <img src="/static/img/marcas/png-transparent-motorcraft-hd-logo.png" alt="martfury" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop">
                            <a>
                                <img 
                                    src="/static/img/marcas/PngItem_4419764.png" 
                                    alt="martfury" 
                                    style={{maxWidth: '90%'}}
                                />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop">
                            <a>
                                <img src="/static/img/marcas/Untitled1-700x232.png" alt="martfury" />
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default TechnologyBestSaleBrands;
