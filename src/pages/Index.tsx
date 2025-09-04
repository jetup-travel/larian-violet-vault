import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LarianLogo } from "@/components/LarianLogo";
import { ArrowRight, Shield, Zap, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleStartPayment = () => {
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-purple/10 bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <LarianLogo size="lg" />
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-larian-purple hover:bg-larian-purple/10">
              Documentação
            </Button>
            <Button variant="ghost" className="text-larian-purple hover:bg-larian-purple/10">
              Suporte
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold bg-larian-gradient bg-clip-text text-transparent">
              Pagamentos Seguros
              <br />
              e Instantâneos
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Plataforma de pagamentos moderna com tecnologia Stripe. 
              Processe transações com segurança máxima e experiência excepcional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                onClick={handleStartPayment}
                className="bg-larian-gradient hover:bg-larian-gradient-dark text-white px-8 py-3 h-auto text-lg shadow-purple hover:shadow-purple-lg transition-all duration-200"
              >
                Fazer Pagamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-larian-purple text-larian-purple hover:bg-larian-purple/10 px-8 py-3 h-auto text-lg"
              >
                Ver Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-larian-purple/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Por que escolher a Larian Pay?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologia de ponta para sua empresa processar pagamentos com segurança e eficiência
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-purple/20 shadow-purple hover:shadow-purple-lg transition-all duration-200">
              <CardHeader>
                <div className="w-12 h-12 bg-larian-gradient rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Segurança Máxima</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Certificação PCI DSS e criptografia de ponta garantem a proteção total dos dados dos seus clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple/20 shadow-purple hover:shadow-purple-lg transition-all duration-200">
              <CardHeader>
                <div className="w-12 h-12 bg-larian-gradient rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Processamento Instantâneo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transações processadas em tempo real com APIs otimizadas para máxima performance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple/20 shadow-purple hover:shadow-purple-lg transition-all duration-200">
              <CardHeader>
                <div className="w-12 h-12 bg-larian-gradient rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Múltiplos Métodos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Suporte para cartões, PIX, Apple Pay e outros métodos de pagamento populares.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Pronto para começar?
            </h2>
            <p className="text-lg text-muted-foreground">
              Teste nossa plataforma agora mesmo com um pagamento de demonstração
            </p>
            <Button 
              onClick={handleStartPayment}
              className="bg-larian-gradient hover:bg-larian-gradient-dark text-white px-12 py-4 h-auto text-lg shadow-purple-lg hover:shadow-glow-purple transition-all duration-300"
            >
              Testar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <LarianLogo />
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <span className="text-sm text-muted-foreground">
                © 2024 Larian Pay. Todos os direitos reservados.
              </span>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <a href="#" className="hover:text-larian-purple transition-colors">Privacidade</a>
                <a href="#" className="hover:text-larian-purple transition-colors">Termos</a>
                <a href="#" className="hover:text-larian-purple transition-colors">Suporte</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;