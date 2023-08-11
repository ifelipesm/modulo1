export type GetProductsByUserDTO = {
  id: string;
  name: string;
  price: number;
  is_new: boolean;
  accept_trade: boolean;
  product_images: [
    {
      path: string,
      id: string,
    }
  ]
  payment_methods: "pix" | "card" | "deposit" | "cash" | "boleto";
  user: {
    avatar: string,
  }
}