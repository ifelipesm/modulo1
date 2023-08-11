export type GetProductsByFilterDTO = {
  is_new: boolean;
  accept_trade: boolean;
  payment_methods: "pix" | "card" | "deposit" | "cash" | "boleto";
  query: string;
}