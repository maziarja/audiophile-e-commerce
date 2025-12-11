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
          value.productId === productId
            ? { ...value, quantity: quantity + value.quantity }
            : value,
        )
      : [...localStorageValue, { productId, quantity }];

    window.localStorage.setItem("cart", JSON.stringify(newValue));
  }
}
