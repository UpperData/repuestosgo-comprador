import React from 'react';
import ThumbnailDefault from '~/components/elements/detail/thumbnail/ThumbnailDefault';
import DefaultDescription from '~/components/elements/detail/description/DefaultDescription';
import ModuleProductDetailDescription from '~/components/elements/detail/modules/ModuleProductDetailDescription';
import ModuleDetailShoppingActions from '~/components/elements/detail/modules/ModuleDetailShoppingActions';
import ModuleProductDetailSpecification from '~/components/elements/detail/modules/ModuleProductDetailSpecification';
import ModuleProductDetailSharing from '~/components/elements/detail/modules/ModuleProductDetailSharing';
import ModuleDetailActionsMobile from '~/components/elements/detail/modules/ModuleDetailActionsMobile';
import ModuleDetailTopInformation from '~/components/elements/detail/modules/ModuleDetailTopInformation';

const ProductDetailFullwidth = ({ product, data }) => {
    return (
        <div className="ps-product--detail ps-product--fullwidth">
            <div className="ps-product__header">
                
                <ThumbnailDefault product={data} />

                <div className="ps-product__info">

                    <ModuleDetailTopInformation product={data} />
                    
                    {/* 
                        <ModuleProductDetailDescription product={product} />
                    */}

                    <ModuleDetailShoppingActions product={data} />
                    <ModuleProductDetailSpecification product={data} />

                    {/*
                        <ModuleProductDetailSharing />
                    */}
                    
                    {/* 
                        <ModuleDetailActionsMobile product={product} />
                    */}

                </div>
            </div>

            {/* 
            <DefaultDescription />
            */}
        </div>
    );
};

export default ProductDetailFullwidth;
