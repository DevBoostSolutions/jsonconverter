export type User = {
    id: number;
    name: string;
    email: string;
    age: number;
};

export type Category = {
    id: number;
    name: string;
};

export type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    category: Category;
};

export type Order = {
    id: number;
    user: User;
    products: Product[];
};