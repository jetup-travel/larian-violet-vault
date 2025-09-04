import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
    <div className="w-full max-w-md mx-auto">
      <Card className="shadow-purple-lg border-purple/20">
        <CardHeader className="space-y-4">
          {/* Apple Pay Button */}
          <Button 
            variant="outline" 
            className="w-full h-12 bg-black text-white hover:bg-gray-900 border-0"
            disabled={loading}
          >
            <span className="text-white font-medium">🍎 Pay</span>
          </Button>
          
          <div className="relative">
            <Separator />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white px-2 text-sm text-muted-foreground">Or</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
                disabled={loading}
                className="h-12"
              />
            </div>

            {/* Payment method header */}
            <div className="pt-2">
              <h3 className="font-medium text-foreground">Payment method</h3>
            </div>

            {/* Card information */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card information</Label>
                <div className="relative">
                  <Input
                    id="cardNumber"
                    placeholder="1234 1234 1234 1234"
                    value={formData.cardNumber}
                    onChange={(e) => setFormData(prev => ({ ...prev, cardNumber: e.target.value }))}
                    required
                    disabled={loading}
                    className="h-12 pr-20"
                    maxLength={19}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                    <div className="w-6 h-4 bg-blue-600 rounded-sm flex items-center justify-center text-white text-xs font-bold">V</div>
                    <div className="w-6 h-4 bg-red-600 rounded-sm"></div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Input
                  placeholder="MM / YY"
                  value={formData.expiryDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, expiryDate: e.target.value }))}
                  required
                  disabled={loading}
                  className="h-12"
                  maxLength={7}
                />
                <div className="relative">
                  <Input
                    placeholder="CVC"
                    value={formData.cvc}
                    onChange={(e) => setFormData(prev => ({ ...prev, cvc: e.target.value }))}
                    required
                    disabled={loading}
                    className="h-12 pr-10"
                    maxLength={4}
                  />
                  <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>

            {/* Cardholder name */}
            <div className="space-y-2">
              <Label htmlFor="cardholderName">Cardholder name</Label>
              <Input
                id="cardholderName"
                placeholder="Full name on card"
                value={formData.cardholderName}
                onChange={(e) => setFormData(prev => ({ ...prev, cardholderName: e.target.value }))}
                required
                disabled={loading}
                className="h-12"
              />
            </div>

            {/* Country */}
            <div className="space-y-2">
              <Label>Country or region</Label>
              <Select 
                value={formData.country} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, country: value }))}
                disabled={loading}
              >
                <SelectTrigger className="h-12">
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
                "w-full h-12 bg-larian-gradient hover:bg-larian-gradient-dark text-white font-medium",
                "shadow-purple hover:shadow-purple-lg transition-all duration-200",
                loading && "opacity-50 cursor-not-allowed"
              )}
              disabled={loading}
            >
              {loading ? "Processing..." : `Pay ${formatPrice(amount)}`}
            </Button>

            {/* Footer */}
            <div className="pt-4 text-center">
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Lock className="h-3 w-3" />
                  <span>Powered by</span>
                  <span className="font-semibold text-foreground">stripe</span>
                </div>
                <span>•</span>
                <span>Terms</span>
                <span>Privacy</span>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};