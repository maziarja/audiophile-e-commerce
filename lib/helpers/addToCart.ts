export function addToCart(productId: string, quantity: number) {
  const value = [{ productId, quantity }];
  if (window.localStorage.getItem("cart") === null) {
    window.localStorage.setItem("cart", JSON.stringify(value));
  } else {
    const localStorageValue: typeof value = JSON.parse(
      window.localStorage.getItem("cart")!,
    );

    const newValue = localStorageValue.some(
      (item) => item.productId === productId,
    )
      ? localStorageValue.map((value) =>
          value.productId === productId && value.quantity > 0
            ? {
                ...value,
                quantity: quantity + value.quantity,
              }
            : value,
        )
      : [...localStorageValue, { productId, quantity }];

    // Remove product if quantity === 0
    const finalValue = newValue.filter((value) => value.quantity !== 0);

    window.localStorage.setItem("cart", JSON.stringify(finalValue));
  }
}
