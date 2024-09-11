import { CartContent } from "@/components/CartContent";
import { CartProvider } from "@/contexts/CartContext";

const Cart = () => {
  return (
    <div className="p-8">
      <CartProvider>
        <CartContent />
      </CartProvider>
    </div>
  );
};

export default Cart;
