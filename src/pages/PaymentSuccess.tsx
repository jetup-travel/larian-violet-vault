import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LarianLogo } from "@/components/LarianLogo";
import { CheckCircle } from "lucide-react";

const PaymentSuccess = () => {

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-purple-lg border-green-200">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto">
            <LarianLogo size="md" />
          </div>
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Pagamento Aprovado!</h1>
            <p className="text-muted-foreground mt-2">
              Sua transação foi processada com sucesso
            </p>
          </div>
        </CardHeader>
        
        <CardContent className="py-8">
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentSuccess;