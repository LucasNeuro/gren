# GrenFlow - Gestão de Resíduos Simplificada

## 🌱 Visão Geral

**GrenFlow** é um sistema inovador para gestão de resíduos que automatiza a emissão de **MTR (Manifesto de Transporte de Resíduos)** e **CDF (Certificado de Destinação Final)**, com rastreamento em tempo real e tokenização em blockchain (Polygon).

## 🚀 Começando

### Pré-requisitos

- Node.js v18+
- npm ou yarn
- Conta no [Supabase](https://supabase.com) (para backend e autenticação)
- Conta no [Vercel](https://vercel.com) (para deploy)

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone <repo-url>
   cd grenflow
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edite o arquivo `.env.local` com suas credenciais:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse a aplicação:**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
grenflow/
├── public/
│   └── images/
├── src/
│   ├── app/
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── signup/
│   │   │       └── page.tsx
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   └── Header.tsx
│   │   └── ui/
│   │       ├── Alert.tsx
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Input.tsx
│   ├── lib/
│   │   ├── queryClient.ts
│   │   └── supabase.ts
│   └── types/
├── .env.local.example
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🛠 Tecnologias Utilizadas

- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend:** Supabase (Autenticação, Banco de Dados, Storage)
- **Estado Global:** TanStack Query (React Query)
- **UI Components:** Componentes personalizados (Button, Card, Input, etc.)
- **Ícones:** Heroicons, Lucide React
- **Blockchain:** Polygon (para tokenização de documentos)

## 🎨 Design System

### Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Verde Primário | `#2E8B57` | Botões principais, headers, logo |
| Azul Primário | `#0066CC` | Links, elementos interativos |
| Verde Secundário | `#4CAF50` | Botões secundários, hover |
| Azul Secundário | `#2196F3` | Destaques, badges |
| Amarelo | `#FFC107` | Alertas, notificações |
| Vermelho | `#F44336` | Erros, ações destrutivas |
| Cinza Escuro | `#424242` | Textos principais |
| Cinza Claro | `#F5F5F5` | Backgrounds |

### Tipografia

- **Fonte Principal:** Inter (para textos corporativos, títulos, botões)
- **Fonte Secundária:** Poppins (para headlines)
- **Fonte para Código:** Roboto Mono

## 📱 Funcionalidades

### Autenticação
- Login e Cadastro de usuários
- Suporte a dois tipos de usuários: Geradores e Operadores
- Recuperação de senha

### Dashboard
- Visão geral de MTRs emitidos
- Coletas agendadas
- CDFs gerados
- Status de compliance

### MTR (Manifesto de Transporte de Resíduos)
- Emissão automática de MTR
- Assinatura digital
- Download em PDF
- Visualização na blockchain

### CDF (Certificado de Destinação Final)
- Geração automática de CDF
- Assinatura digital
- Download em PDF

### Rastreamento
- Rastreamento em tempo real de coletas
- Mapa interativo
- Status de coleta (Pendente, Em Andamento, Concluída)

### Marketplace
- Lista de operadores certificados
- Filtros por tipo de resíduo
- Solicitação de cotações

## 🔧 Configuração do Supabase

1. Crie um projeto no [Supabase](https://supabase.com)
2. Configure as tabelas necessárias:
   - `users` (para informações dos usuários)
   - `waste_transport_manifests` (para MTRs)
   - `waste_destination_certificates` (para CDFs)
   - `collections` (para coletas)
   - `operators` (para operadores de resíduos)

3. Configure as variáveis de ambiente com as credenciais do Supabase

## 🚀 Deploy

### Vercel

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente no painel do Vercel
3. Deploy!

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

MIT

## 📞 Contato

- Email: suporte@grenflow.com
- Site: [https://grenflow.com](https://grenflow.com)
