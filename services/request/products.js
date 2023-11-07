//all categories
export const getProductCategories = () => `/fornt/ALLCateories`;

export const getMenu = () => `/bar/MENU/`;

//all products
export const getProducts = (page) => `/invetory/pubLIshING/FULL/GET/12/${page - 1}`;

//product by category
export const getProductsByClass = (idCat) => `/invetory/pubLIshING/CLAss/GET/${idCat}`;

//product by category
export const getProductsByCat = (idCat) => `/invetory/puBLIshING/cat/GET/${idCat}`;

//product by sub category
export const getProductsBySubCat = (idCat) => `/invetory/pubLIshING/SUBcat/GET/${idCat}`;