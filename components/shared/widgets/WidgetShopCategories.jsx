import React, { useEffect, useState } from 'react';
import ProductRepository from '~/repositories/ProductRepository';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const WidgetShopCategories = () => {

    const categories = useSelector((state) => state.app.categories);
    //const [categories, setcategories] = useState([]);

    const Router = useRouter();
    //const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(false);
    const { slug } = Router.query;
    // console.log(Router);

    async function getCategories() {
        setLoading(true);
        const responseData = await ProductRepository.getProductCategories();
        if (responseData) {
            setCategories(responseData);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }

    useEffect(() => {
        // getCategories();
        /*
        let categoriesList = [];
        clases.forEach(clase => {
            if(clase.subCategories && clase.subCategories.length > 0){
                clase.subCategories.forEach(category => {
                    categoriesList.push(category);
                });
            }
        });

        setcategories(categoriesList);
        */
    }, []);

    // Views
    let categoriesView;
    if (!loading) {
        if (categories && categories.length > 0) {
            const items = categories.map((item) => (
                <li
                    key={item.id}
                    className={item.url === slug ? 'active' : ''}
                >
                    <Link href={`/class/${item.url}`}>
                        {item.name}
                    </Link>
                </li>
            ));
            categoriesView = <ul className="ps-list--categories">{items}</ul>;
        } else {
        }
    } else {
        categoriesView = <p>Cargando...</p>;
    }

    return (
        <aside className="widget widget_shop">
            <h4 className="widget-title">Categorías</h4>
            {categoriesView}
        </aside>
    );
};

export default WidgetShopCategories;
