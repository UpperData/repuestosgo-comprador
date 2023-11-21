import React from 'react';
import Link from 'next/link';

const ModuleProductDetailSpecification = ({ product }) => {

    const sku = product.sku;
    const category = product.category;
    const tags = product.tags;

    return <div className="ps-product__specification">
        <Link href="/page/blank">
            <a className="report">
                Reportar problema
            </a>
        </Link>
        <p>
            <strong>SKU:</strong> {sku}
        </p>
        <p className="categories">
            <strong> Categoría:</strong>
            <Link href="/shop">
                <a>{category[0].clase.name}</a>
            </Link>
            <Link href="/shop">
                <a>{category[1].category.name}</a>
            </Link>
            <Link href="/shop">
                <a>{category[2].subCategory.name}</a>
            </Link>
        </p>
        <p className="tags">
            <strong> Etiquetas: </strong>
            <Link href="/shop">
                <a>{tags}</a>
            </Link>
        </p>
    </div>
};

export default ModuleProductDetailSpecification;
