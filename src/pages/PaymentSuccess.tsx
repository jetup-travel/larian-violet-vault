import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LarianLogo } from "@/components/LarianLogo";
import { CheckCircle, ArrowLeft, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

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
        
        <CardContent className="space-y-6">
          <div className="bg-green-50 p-4 rounded-lg space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Valor pago</span>
              <span className="font-semibold">R$ 50,00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Método</span>
              <span className="text-sm">Cartão de crédito</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">ID da transação</span>
              <span className="text-sm font-mono">#LRP_123456789</span>
            </div>
          </div>

          <div className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.print()}
            >
              <Download className="h-4 w-4 mr-2" />
              Baixar comprovante
            </Button>
            
            <Button 
              onClick={() => navigate("/")}
              className="w-full bg-larian-gradient hover:bg-larian-gradient-dark text-white"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao início
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Um email de confirmação foi enviado para você com os detalhes da transação.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentSuccess;