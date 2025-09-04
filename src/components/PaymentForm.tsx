import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useStripePayment } from "@/hooks/useStripePayment";

interface PaymentFormProps {
  amount: number;
  currency?: string;
  productName?: string;
}

export const PaymentForm = ({ 
  amount, 
  currency = "BRL", 
  productName = "Produto Premium"
}: PaymentFormProps) => {
  const { createPaymentSession, loading } = useStripePayment();
  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    cardholderName: "",
    country: "Brazil"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await createPaymentSession({
        amount,
        currency: currency.toLowerCase(),
        productName
      });
    } catch (error) {
      // Error handling is done in the hook
      console.error("Payment failed:", error);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price / 100);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white">
      <div className="space-y-6 p-8">
        {/* Apple Pay Button */}
        <Button 
          className="w-full h-12 bg-black text-white hover:bg-gray-900 rounded-md border-0 font-medium"
          disabled={loading}
        >
          🍎 Pay
        </Button>
        
        <div className="relative">
          <Separator className="bg-gray-200" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-white px-3 text-sm text-gray-500">Or</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
              disabled={loading}
              className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md"
            />
          </div>

          {/* Payment method header */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Payment method</h3>
          </div>

          {/* Card information */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cardNumber" className="text-sm font-medium text-gray-700">Card information</Label>
              <div className="relative">
                <Input
                  id="cardNumber"
                  placeholder="1234 1234 1234 1234"
                  value={formData.cardNumber}
                  onChange={(e) => setFormData(prev => ({ ...prev, cardNumber: e.target.value }))}
                  required
                  disabled={loading}
                  className="h-11 pr-20 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-t-md rounded-b-none border-b-0"
                  maxLength={19}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
                  <div className="w-8 h-5 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">visa</span>
                  </div>
                  <div className="w-8 h-5 bg-red-500 rounded flex items-center justify-center">
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    <div className="w-3 h-3 bg-orange-400 rounded-full -ml-1"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <Input
                placeholder="MM / YY"
                value={formData.expiryDate}
                onChange={(e) => setFormData(prev => ({ ...prev, expiryDate: e.target.value }))}
                required
                disabled={loading}
                className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-bl-md rounded-br-none rounded-t-none border-r-0"
                maxLength={7}
              />
              <div className="relative">
                <Input
                  placeholder="CVC"
                  value={formData.cvc}
                  onChange={(e) => setFormData(prev => ({ ...prev, cvc: e.target.value }))}
                  required
                  disabled={loading}
                  className="h-11 pr-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-br-md rounded-bl-none rounded-t-none"
                  maxLength={4}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <div className="w-5 h-3 border border-gray-400 rounded-sm flex items-center justify-center">
                    <span className="text-[8px] font-mono text-gray-500">123</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cardholder name */}
          <div className="space-y-2">
            <Label htmlFor="cardholderName" className="text-sm font-medium text-gray-700">Cardholder name</Label>
            <Input
              id="cardholderName"
              placeholder="Full name on card"
              value={formData.cardholderName}
              onChange={(e) => setFormData(prev => ({ ...prev, cardholderName: e.target.value }))}
              required
              disabled={loading}
              className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md"
            />
          </div>

          {/* Country */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">Country or region</Label>
            <Select 
              value={formData.country} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, country: value }))}
              disabled={loading}
            >
              <SelectTrigger className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Brazil">Brazil</SelectItem>
                <SelectItem value="Argentina">Argentina</SelectItem>
                <SelectItem value="Chile">Chile</SelectItem>
                <SelectItem value="Colombia">Colombia</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Pay button */}
          <Button 
            type="submit" 
            className={cn(
              "w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md mt-6",
              "transition-all duration-200",
              loading && "opacity-50 cursor-not-allowed"
            )}
            disabled={loading}
          >
            {loading ? "Processing..." : "Pay"}
          </Button>

          {/* Footer */}
          <div className="pt-4 text-center">
            <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Lock className="h-3 w-3" />
                <span>Powered by</span>
                <span className="font-semibold text-gray-700">stripe</span>
              </div>
              <span>Terms</span>
              <span>Privacy</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};