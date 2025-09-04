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
    <div className="min-h-screen bg-white">
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
        <div className="flex items-start justify-center bg-white">
          <div className="w-full max-w-md">
            {/* Mobile product info */}
            <div className="lg:hidden mb-8 text-center p-6 bg-blue-600 text-white">
              <h1 className="text-lg font-normal mb-2">{productData.name}</h1>
              <p className="text-4xl font-bold">
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