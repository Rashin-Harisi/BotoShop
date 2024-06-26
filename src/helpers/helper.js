/* eslint-disable no-unused-vars */
const shortenTex = (text) => {
  return text.split(" ").slice(0, 3).join("");
};

const searchProducts = (products, search) => {
  if (!search) return products;
  const searchedProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search)
  );

  return searchedProducts;
};

const filterProducts = (products, category) => {
  if (!category) return products;
  const filteredProducts = products.filter(
    (item) => item.category === category
  );
  return filteredProducts;
};

const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newQuery };
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query.category = category;
  if (search) query.search = search;
  return query;
};

const sumQuantity = products=>{
  return products.reduce((acc, cur) => acc + cur.quantity, 0);
}
const sumPrice = products=>{
  return products.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
  .toFixed(2);
}
const productQuantity= (state, id )=>{
    const index= state.selectedItems.findIndex((item)=>item.id ===id);
    if (index===-1) {return 0}else{
        return state.selectedItems[index].quantity
    }
}
export {
  shortenTex,
  searchProducts,
  filterProducts,
  getInitialQuery,
  createQueryObject,
  sumQuantity,
  sumPrice,
  productQuantity
};
