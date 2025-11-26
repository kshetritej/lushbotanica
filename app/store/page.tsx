"use client";
import { myWixClient } from "@/wix/wixClient";
import { currentCart } from "@wix/ecom";
import { useEffect, useState } from "react";

export default function Store() {
  const [productList, setProductList] = useState([]);
  const [cart, setCart] = useState({});

  async function fetchProducts() {
    const productList = await myWixClient.products.queryProducts().find();
    // @ts-ignore items will be available
    setProductList(productList.items);
  }

  async function fetchCart() {
    try {
      setCart(await myWixClient.currentCart.getCurrentCart());
    } catch {}
  }

  // @ts-ignore just ignoring so build passes
  async function addToCart(product) {
    const options = product.productOptions.reduce(
      // @ts-ignore just ignoring so build passes
      (selected, option) => ({
        ...selected,
        [option.name]: option.choices[0].description,
      }),
      {}
    );
    const { cart } = await myWixClient.currentCart.addToCurrentCart({
      lineItems: [
        {
          catalogReference: {
            appId: "215238eb-22a5-4c36-9e7b-e7c08025e04e",
            catalogItemId: product._id,
            options: { options },
          },
          quantity: 1,
        },
      ],
    });
    // @ts-ignore just ignoring so build passes
    setCart(cart);
  }

  async function clearCart() {
    // @ts-ignore just ignoring so build passes
    const { cart } = await myWixClient.currentCart.deleteCurrentCart();
    setCart(cart);
  }

  async function createRedirect() {
    const { checkoutId } =
      await myWixClient.currentCart.createCheckoutFromCurrentCart({
        channelType: currentCart.ChannelType.WEB,
      });
    const redirect = await myWixClient.redirects.createRedirectSession({
      ecomCheckout: { checkoutId },
      callbacks: { postFlowUrl: window.location.href },
    });
    // @ts-ignore just ignoring so build passes
    window.location = redirect.redirectSession.fullUrl;
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div>
      <div>
        <h2>Choose Products:</h2>
        {productList.map((product) => {
          return (
            // @ts-ignore just ignoring so build passes
            <div key={product._id} onClick={() => addToCart(product)}>
              {/*  @ts-expect-error just ignoring so build passes */}
              <img src={product?.image} />
              {/* @ts-ignore just ignoring so build passes */}
              {product.name}
            </div>
          );
        })}
      </div>
      <div>
        <h2>Cart:</h2>
        {/* @ts-ignore just ignoring so build passes */}
        {cart.lineItems?.length > 0 && (
          <>
            <div onClick={() => createRedirect()}>
              <h3>
                {/* @ts-ignore just ignoring so build passes */}
                {cart.lineItems.length} items ({cart.subtotal.formattedAmount})
              </h3>
              <span>Checkout</span>
            </div>
            <div onClick={() => clearCart()}>
              <span>Clear cart</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
