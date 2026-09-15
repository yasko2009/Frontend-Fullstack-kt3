import { Router } from "express";

const router = Router();

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

router.get("/", (_req, res) => {
  res.json(products);
});

export default router;