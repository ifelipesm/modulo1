export type ProductDTO = {
  product_images: [
    path: string,
    id: string,
  ]
  name: string;
  description: string;
  is_new: boolean;
  price: number;
  accept_trade: string;
  payment_methods: "pix" | "cash" | "deposit" | "boleto" | "card"
  
  /*
  payment_methods: [
    [key: "deposit",name:"Depósito Bancário"],
    [key: "pix",name:"Pix"],
    [key: "cash",name:"Dinheiro"],
    [key: "boleto",name:"Boleto"],
    [key: "card",name:"Cartão de Crédito"],  
  ];
  */
 
}