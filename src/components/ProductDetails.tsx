import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LarianLogo } from "./LarianLogo";

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
    <div className="h-full bg-larian-gradient flex flex-col justify-center items-center text-white p-8">
      {/* Header with back button and logo */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onBack}
          className="text-white hover:bg-white/20 border border-white/30"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          <LarianLogo size="sm" className="text-white" />
          <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">TEST MODE</span>
        </Button>
      </div>

      {/* Product info */}
      <div className="text-center space-y-4 max-w-md mx-auto">
        <div className="space-y-2">
          <h1 className="text-lg font-medium text-white/90">{productName}</h1>
          <div className="text-5xl font-bold text-white">
            {formatPrice(price)}
          </div>
        </div>
        
        {/* Product description */}
        <div className="text-white/80 text-sm mt-6 space-y-2">
          <p>Pagamento único e seguro processado pela Larian Pay</p>
          <p>Tecnologia Stripe para máxima segurança</p>
        </div>

        {/* Security badges */}
        <div className="flex items-center justify-center gap-4 mt-8 text-xs text-white/60">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span>SSL Seguro</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span>PCI Compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
};