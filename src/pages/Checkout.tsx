import { ProductDetails } from "@/components/ProductDetails";
import { PaymentForm } from "@/components/PaymentForm";

const Checkout = () => {
  // Mock product data - you can make this dynamic
  const productData = {
    name: "Produto de Teste",
    price: 5000, // R$50.00 in cents
    currency: "BRL"
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left side - Product Details */}
        <div className="hidden lg:block">
          <ProductDetails
            productName={productData.name}
            price={productData.price}
            currency={productData.currency}
          />
        </div>

        {/* Right side - Payment Form */}
        <div className="flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md">
            {/* Mobile product info */}
            <div className="lg:hidden mb-8 text-center">
              <h1 className="text-xl font-semibold mb-2">{productData.name}</h1>
              <p className="text-2xl font-bold text-larian-purple">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(productData.price / 100)}
              </p>
            </div>

            <PaymentForm
              amount={productData.price}
              currency={productData.currency}
              productName={productData.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;