import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LarianLogo } from "@/components/LarianLogo";
import { XCircle, ArrowLeft, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PaymentCanceled = () => {
  const navigate = useNavigate();

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
        
        <CardContent className="space-y-6">
          <div className="bg-red-50 p-4 rounded-lg text-center">
            <p className="text-sm text-red-800">
              Nenhuma cobrança foi efetuada em seu cartão. 
              Você pode tentar novamente quando desejar.
            </p>
          </div>

          <div className="space-y-3">
            <Button 
              onClick={() => navigate("/checkout")}
              className="w-full bg-larian-gradient hover:bg-larian-gradient-dark text-white"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Tentar novamente
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => navigate("/")}
              className="w-full"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao início
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Se você teve algum problema durante o pagamento, entre em contato conosco.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentCanceled;