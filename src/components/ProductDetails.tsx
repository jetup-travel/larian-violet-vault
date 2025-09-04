import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductDetailsProps {
  productName: string;
  price: number;
  currency?: string;
  onBack?: () => void;
}

export const ProductDetails = ({ 
  productName = "Produto Premium", 
  price, 
  currency = "BRL",
  onBack 
}: ProductDetailsProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price / 100);
  };

  return (
    <div className="h-full bg-blue-600 flex flex-col text-white p-8 relative">
      {/* Header with back button and logo */}
      <div className="flex items-center gap-3 mb-8">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onBack}
          className="text-white hover:bg-white/10 p-2 h-8 w-8 rounded-full"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
          </div>
          <span className="font-medium text-white">Larian</span>
          <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full font-medium">TEST MODE</span>
        </div>
      </div>

      {/* Product info - positioned more to the top */}
      <div className="mt-16">
        <div className="space-y-2">
          <h1 className="text-base font-normal text-white/90">{productName}</h1>
          <div className="text-6xl font-bold text-white">
            {formatPrice(price)}
          </div>
        </div>
      </div>
    </div>
  );
};