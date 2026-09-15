import Navbar from "../components/Navbar";

const products = [
  {
    id: 1,
    name: "Куртка",
    price: 120,
    image: "https://placehold.co/300x220",
  },
  {
    id: 2,
    name: "Кроссовки",
    price: 90,
    image: "https://placehold.co/300x220",
  },
  {
    id: 3,
    name: "Рюкзак",
    price: 70,
    image: "https://placehold.co/300x220",
  },
  {
    id: 4,
    name: "Футболка",
    price: 35,
    image: "https://placehold.co/300x220",
  },
  {
    id: 5,
    name: "Шапка",
    price: 25,
    image: "https://placehold.co/300x220",
  },
  {
    id: 6,
    name: "Джинсы",
    price: 80,
    image: "https://placehold.co/300x220",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Магазин одежды
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>

              <p className="text-gray-600 mt-1">${product.price}</p>

              <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Купить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}