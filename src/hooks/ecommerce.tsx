/* eslint-disable radix */
/* eslint-disable no-use-before-define */
import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useMemo,
} from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { DateTime } from "luxon";

import { useAuth } from "./auth";

import { ICartItem } from "../interfaces/ICartItem";
import { ICategory } from "../interfaces/ICategories";
import { IEcommerceContextData } from "../interfaces/IEcommerceContextData";
import { IFamily } from "../interfaces/IFamily";
import { IOrder } from "../interfaces/IOrder";
import { IProduct } from "../interfaces/IProduct";
import { IProfile } from "../interfaces/IProfiles";
import { ISchool } from "../interfaces/ISchools";
import { ISubcategory } from "../interfaces/ISubcategories";

const EcommerceContext = createContext<IEcommerceContextData>(
  {} as IEcommerceContextData
);

const EcommerceProvider: React.FC = ({ children }) => {
  const { user } = useAuth();
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
  const [cartTotal, setCartTotal] = useState(0);
  const [order, setOrder] = useState<IOrder>();
  const [orders, setOrders] = useState<IOrder[]>([]);

  /**
   * Metodo para adicionar produto ao carrinho
   */
  const addToCart = useCallback(
    (cartItem: ICartItem) => {
      const cartItemFound = cart.find(({ product }) => {
        return cartItem.product.id === product.id;
      });

      if (cartItemFound) {
        cartItemFound.amount += cartItem.amount;
        setCart([...cart]);
        return;
      }

      setCart([...cart, cartItem]);
    },
    [cart]
  );

  /**
   * Metodo para remover produto do carrinho
   */
  const removeFromCart = useCallback(
    (productId: string) => {
      const cartFiltered = cart.filter(({ product }) => {
        return parseInt(product.id) !== parseInt(productId);
      });

      setCart([...cartFiltered]);
    },
    [cart]
  );

  const cartTotalItens = useMemo(() => {
    if (cart && cart.length > 0) {
      return cart.reduce((total, cartItem) => {
        return (total += cartItem.amount);
      }, 0);
    }
    return 0;
  }, [cart]);

  const updateCartItemAmount = useCallback(
    (productId, newAmount) => {
      cart.map((cartItem) => {
        if (productId === cartItem.product.id) {
          cartItem.amount = newAmount;
          return cartItem;
        }
        return cartItem;
      });
      setCart([...cart]);
    },
    [cart]
  );

  const saveOrdersLocal = useCallback(
    async (orderToSave) => {
      let localOrdersfound = [];
      const localOrders = await AsyncStorage.getItem(
        `@Integra:${user?.username}:orders`
      );
      localOrdersfound = JSON.parse(localOrders);
      if (localOrders && localOrders.length > 0) {
        setOrders(localOrders);
      }
      AsyncStorage.setItem(
        `@Integra:${user.username}:orders`,
        JSON.stringify([...localOrdersfound, orderToSave])
      );
    },
    [orders]
  );

  const createOrder = useCallback(() => {
    if (cartTotal > totalBalance) {
      Alert.alert(
        "Atenção",
        "Seu saldo não é suficiente para concluir a compra"
      );
      return;
    }

    const orderPrepared = {
      number: Math.floor(Math.random() * (100000 - 10000) + 10000),
      cartOrder: [...cart],
      date: DateTime.local().toLocaleString(),
      productAmount: cart.length,
      itensAmount: cartTotalItens,
      totalValue: cartTotal,
      user,
      school,
    };

    setOrder(orderPrepared);
    saveOrdersLocal(orderPrepared);
    setCart([]);
    setCartTotal(0);
    setInitialBalance(totalBalance);
  }, [cart, orders, cartTotalItens, cartTotal, totalBalance, initialBalance]);

  const value = {
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
    cartTotal,
    setCartTotal,
    addToCart,
    removeFromCart,
    updateCartItemAmount,
    cartTotalItens,
    order,
    orders,
    createOrder,
  };

  return (
    <EcommerceContext.Provider value={value}>
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
