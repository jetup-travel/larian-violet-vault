import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LarianLogo } from "@/components/LarianLogo";
import { XCircle } from "lucide-react";

const PaymentCanceled = () => {

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-purple-lg border-red-200">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto">
            <LarianLogo size="md" />
          </div>
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
            <XCircle className="h-8 w-8 text-red-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Pagamento Cancelado</h1>
            <p className="text-muted-foreground mt-2">
              A transação foi cancelada pelo usuário
            </p>
          </div>
        </CardHeader>
        
        <CardContent className="text-center py-8">
          <p className="text-muted-foreground">
            Nenhuma cobrança foi efetuada em seu cartão. Se você teve algum problema durante o pagamento, entre em contato conosco.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentCanceled;