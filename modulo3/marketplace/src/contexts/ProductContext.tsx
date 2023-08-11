import { GetProductsByFilterDTO } from "@dtos/GetProductsByFilterDTO"
import { api } from "@services/api";
import { ReactNode, createContext, useState } from "react";


export type modalQueryObject ={
  isNew:boolean,
  acceptTrade:boolean,
  boleto:boolean,
  cash:boolean,
  deposit:boolean,
  card:boolean,
  pix:boolean
}

export type ProductContextDataProps = {
  query: string;
  clearQuery: () => void;
  modalQuery: ({isNew,acceptTrade,boleto,pix,card,cash,deposit}:modalQueryObject) => void;
  searchQuery: (queryString:string) => void;
}

type ProductContextProviderProps = {
  children: ReactNode;
}

export const ProductContext = createContext<ProductContextDataProps>({} as ProductContextDataProps);

export function ProductContextProvider({ children }: ProductContextProviderProps){
  const [query,setQuery] = useState('');
  const [products,setProducts] = useState<GetProductsByFilterDTO[]>([]);

  function updateQuery(string:string){
    const newProducts = query + string;
    setQuery(newProducts);
  }

  function modalQuery({isNew,acceptTrade,boleto,pix,card,cash,deposit}:modalQueryObject){
    const modalString = query + `${isNew ? `&is_new=${isNew}` : ``}${acceptTrade ? `&accept_trade=${acceptTrade}` : ``}${boleto?`&payment_methods=boleto`:``}${pix?`&payment_methods=pix`:``}${cash?`&payment_methods=cash`:``}${card?`&payment_methods=card`:``}${deposit?`&payment_methods=deposit`:``}`
    setQuery(modalString);
  }

  function searchQuery(string:string){
    const searchString = `&query=` + `${string !== `` ? `${string}` : ``}`;
    setQuery(searchString); 
  }

  function clearQuery(){
    setQuery('');
  }

  return (
    <ProductContext.Provider value={{
      query,
      clearQuery,
      modalQuery,
      searchQuery,
    }}>
      {children}
    </ProductContext.Provider>
  )
}