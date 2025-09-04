# Larian Pay - Integração com Stripe

## Setup da Integração Stripe

### 1. Configuração do Stripe Secret Key

Para usar a integração com Stripe, você precisa configurar sua chave secreta:

1. Acesse o [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
2. Copie sua **Secret Key** (começando com `sk_test_` para teste ou `sk_live_` para produção)
3. No Supabase, vá para Edge Functions > Secrets
4. Adicione uma nova secret com o nome `STRIPE_SECRET_KEY` e sua chave como valor

### 2. Testando a Integração

#### Cartões de Teste (Modo Test)
Use estes números para testar:
- **Visa**: 4242 4242 4242 4242
- **Mastercard**: 5555 5555 5555 4444  
- **Declined Card**: 4000 0000 0000 0002

#### Dados de Teste
- **Data**: Qualquer data futura (ex: 12/25)
- **CVC**: Qualquer 3 dígitos (ex: 123)
- **Nome**: Qualquer nome

### 3. Estrutura do Projeto

```
src/
├── components/
│   ├── LarianLogo.tsx          # Logo da empresa
│   ├── PaymentForm.tsx         # Formulário de pagamento
│   └── ProductDetails.tsx      # Detalhes do produto
├── pages/
│   ├── Index.tsx              # Página inicial
│   ├── Checkout.tsx           # Página de checkout
│   ├── PaymentSuccess.tsx     # Página de sucesso
│   └── PaymentCanceled.tsx    # Página de cancelamento
└── supabase/functions/
    └── create-payment/        # Edge function para Stripe
        └── index.ts
```

### 4. Fluxo de Pagamento

1. **Usuário** acessa `/checkout`
2. **Preenche** dados do cartão
3. **Clica** em "Pay"
4. **Sistema** chama edge function `create-payment`
5. **Stripe** cria sessão de checkout
6. **Usuário** é redirecionado para Stripe Checkout
7. **Após pagamento**, redireciona para `/payment-success` ou `/payment-canceled`

### 5. Personalização

#### Alterando Valores
No arquivo `src/pages/Checkout.tsx`, modifique:
```typescript
const productData = {
  name: "Seu Produto",
  price: 10000, // R$100.00 em centavos
  currency: "BRL"
};
```

#### Alterando Design
As cores estão definidas no design system em `src/index.css`:
- `--larian-purple`: Cor principal roxa
- `--larian-gradient`: Gradiente principal
- Personalize conforme necessário

### 6. Modo Produção

Para usar em produção:
1. Ative sua conta Stripe
2. Substitua `STRIPE_SECRET_KEY` pela chave de produção
3. Configure webhook endpoints se necessário
4. Teste todas as funcionalidades

### 7. Recursos Implementados

✅ **Interface de pagamento moderna**  
✅ **Formulário completo com validações**  
✅ **Integração com Stripe Checkout**  
✅ **Páginas de sucesso e cancelamento**  
✅ **Design responsivo**  
✅ **Suporte a múltiplos métodos de pagamento**  
✅ **Modo teste configurado**

### 8. Próximos Passos

- [ ] Implementar webhooks para confirmação de pagamento
- [ ] Adicionar suporte a PIX
- [ ] Implementar dashboard administrativo
- [ ] Adicionar relatórios de transações
- [ ] Configurar autenticação de usuários
- [ ] Implementar sistema de assinaturas