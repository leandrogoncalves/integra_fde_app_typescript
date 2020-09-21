/* eslint-disable no-use-before-define */
import React, { createContext, useState, useContext, useCallback } from "react";
import { ICartItem } from "../interfaces/ICartItem";
import { ICategory } from "../interfaces/ICategories";
import { IEcommerceContextData } from "../interfaces/IEcommerceContextData";
import { IFamily } from "../interfaces/IFamily";
import { IProduct } from "../interfaces/IProduct";
import { IProfile } from "../interfaces/IProfiles";
import { ISchool } from "../interfaces/ISchools";
import { ISubcategory } from "../interfaces/ISubcategories";

const EcommerceContext = createContext<IEcommerceContextData>(
  {} as IEcommerceContextData
);

const EcommerceProvider: React.FC = ({ children }) => {
  const [profile, setProfile] = useState<IProfile | undefined>({} as IProfile);
  const [school, setSchool] = useState<ISchool | undefined>({} as ISchool);
  const [familySelected, setFamilySelected] = useState<IFamily | undefined>();
  const [categorySelected, setCategorySelected] = useState<
    ICategory | undefined
  >();
  const [subcategorySelected, setSubcategorySelected] = useState<
    ISubcategory | undefined
  >();
  const [productDetail, setProductDetail] = useState<IProduct | undefined>();
  const [productQuantity, setProductQuantity] = useState<number>(1);
  const [initialBalance, setInitialBalance] = useState<number>(2000);
  const [totalBalance, setTotalBalance] = useState<number>(2000);
  const [favoriteProducts, setFavoriteProducts] = useState<IProduct[]>([]);
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [cart, setCart] = useState<ICartItem[]>([]);

  /**
   * Metodo para adicionar produto ao carrinho
   */
  const addToCart = useCallback((cartItem) => {
    // const cartItemFound = cart.find(({ product }) => {
    //   return cartItem.product.id === product.id;
    // });

    // if (cartItemFound) {
    //   removeFromCart(cartItem.id);
    // }

    setCart([...cart, cartItem]);
  }, []);

  /**
   * Metodo para remover produto do carrinho
   */
  const removeFromCart = useCallback((productId) => {
    const cartFiltered = cart.filter(({ product }) => {
      return product.id !== productId;
    });

    setCart([...cartFiltered]);
  }, []);

  return (
    <EcommerceContext.Provider
      value={{
        profile,
        setProfile,
        school,
        setSchool,
        familySelected,
        setFamilySelected,
        categorySelected,
        setCategorySelected,
        subcategorySelected,
        setSubcategorySelected,
        productDetail,
        setProductDetail,
        productQuantity,
        setProductQuantity,
        initialBalance,
        setInitialBalance,
        totalBalance,
        setTotalBalance,
        favoriteProducts,
        setFavoriteProducts,
        searchInputValue,
        setSearchInputValue,
        cart,
        setCart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
};

/**
 * Retorna o hook de autenticacao
 */
function useEcommerce(): IEcommerceContextData {
  const context = useContext(EcommerceContext);

  if (!context) {
    throw new Error("useEcommerce must be used within an EcommerceProvider");
  }

  return context;
}

export { EcommerceProvider, useEcommerce };
