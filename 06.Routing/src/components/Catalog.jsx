import { useEffect, useState } from "react";
import CatalogItem from "./CatalogItem";
import Sort from "./Sort";
import { useSearchParams } from "react-router";

// const products = [
//   {
//     id: 1,
//     name: "Earthen Bottle",
//     price: "$48",
//     imageSrc:
//       "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg",
//     imageAlt:
//       "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
//   },
//   {
//     id: 2,
//     name: "Nomad Tumbler",
//     price: "$35",
//     imageSrc:
//       "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg",
//     imageAlt:
//       "Olive drab green insulated bottle with flared screw lid and flat top.",
//   },
//   {
//     id: 3,
//     name: "Focus Paper Refill",
//     price: "$89",
//     imageSrc:
//       "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg",
//     imageAlt:
//       "Person using a pen to cross a task off a productivity paper card.",
//   },
//   {
//     id: 4,
//     name: "Machined Mechanical Pencil",
//     price: "$35",
//     imageSrc:
//       "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
//     imageAlt:
//       "Hand holding black machined steel mechanical pencil with brass tip and top.",
//   },
//   // More products...
// // ];

export default function Catalog() {
  const [search, setSearch] = useSearchParams();
  // console.log(Object.fromEntries(search));

  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  // console.log(displayProducts);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const filter = Object.fromEntries(search);
    if (filter.sortBy) {
      setDisplayProducts(
        [...products].sort((p1, p2) =>
          filter.dir === "asc" ? p1.price - p2.price : p2.price - p1.price
        )
      );
    } else if (filter.top) {
      setDisplayProducts(products.filter((el) => el.trating?.rate > 4));
    } else {
      setDisplayProducts([...products]);
    }
  }, [products, search]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <Sort />

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {displayProducts.map((product) => (
            <CatalogItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
