GrenFlow - Design System & UI Guidelines

Sistema de Design para a Plataforma GrenFlow



🎨 1. Identidade Visual (Logo & Branding)

1.1 Conceito da Logo GrenFlow

Inspiração:





"Gren": De "Green" (verde, sustentabilidade) + "Gen" (geração, futuro)



"Flow": Fluxo, movimento, fluidez (como o fluxo de resíduos sendo gerenciado)



Símbolo: Combinação de folha (sustentabilidade) + seta (movimento/fluxo) + hexágono (estrutura/blockchain)

1.2 Propostas de Logo (Descrição para Designer)

Opção 1: Logo Abstrata (Recomendada)

[Descrição Visual]
- Formato: Ícone + Texto "GrenFlow"
- Ícone: Folha estilizada dentro de um hexágono, com uma seta circular (símbolo de reciclagem) integrada
- Cores: Verde (#2E8B57) + Azul (#0066CC) + Branco
- Tipografia: Fonte moderna e clean (ex: Inter, Poppins)
- Estilo: Minimalista, profissional, tecnológico

Vantagens:
✅ Fácil de reconher
✅ Funciona em pequenos tamanhos (favicon, app icon)
✅ Transmite sustentabilidade + tecnologia
✅ Compatível com blockchain (hexágono lembra estrutura de blockchain)

Opção 2: Logo com Símbolo de Reciclagem

[Descrição Visual]
- Formato: Ícone + Texto "GrenFlow"
- Ícone: Símbolo de reciclagem (3 setas) integrado a uma folha
- Cores: Verde (#4CAF50) + Cinza (#757575)
- Tipografia: Fonte bold (ex: Montserrat Bold)

Vantagens:
✅ Imediatamente associado a resíduos/reciclagem
✅ Familiar para o público-alvo

Opção 3: Logo com Caminhão (Para Operadores)

[Descrição Visual]
- Formato: Ícone + Texto "GrenFlow"
- Ícone: Caminhão de coleta estilizado com folhas saindo da caçamba
- Cores: Verde (#34A853) + Amarelo (#FBBC05)

Vantagens:
✅ Apela diretamente para operadores de resíduos
✅ Transmite ação e movimento





1.3 Paleta de Cores







Cor



Hex



RGB



Uso Principal



Significado





Verde Primário



#2E8B57



46, 139, 87



Botões principais, headers, logo



Sustentabilidade, confiança





Verde Secundário



#4CAF50



76, 175, 80



Botões secundários, hover



Crescimento, ação





Azul Primário



#0066CC



0, 102, 204



Links, elementos interativos



Tecnologia, confiança





Azul Secundário



#2196F3



33, 150, 243



Destaques, badges



Inovação





Amarelo



#FFC107



255, 193, 7



Alertas, notificações



Atenção





Vermelho



#F44336



244, 67, 54



Erros, ações destrutivas



Perigo





Cinza Escuro



#424242



66, 66, 66



Textos principais



Legibilidade





Cinza Claro



#F5F5F5



245, 245, 245



Backgrounds



Neutralidade





Branco



#FFFFFF



255, 255, 255



Backgrounds, textos em dark mode



Pureza





Preto



#212121



33, 33, 33



Textos em light mode



Sofisticação

Paleta em CSS:

:root {
  /* Primárias */
  --primary-green: #2E8B57;
  --primary-blue: #0066CC;
  
  /* Secundárias */
  --secondary-green: #4CAF50;
  --secondary-blue: #2196F3;
  
  /* Status */
  --success: #4CAF50;
  --warning: #FFC107;
  --error: #F44336;
  --info: #2196F3;
  
  /* Neutras */
  --text-primary: #424242;
  --text-secondary: #757575;
  --bg-primary: #FFFFFF;
  --bg-secondary: #F5F5F5;
  --bg-dark: #212121;
  --border: #E0E0E0;
  
  /* Gradientes */
  --gradient-primary: linear-gradient(135deg, #2E8B57 0%, #0066CC 100%);
  --gradient-secondary: linear-gradient(135deg, #4CAF50 0%, #2196F3 100%);
}





1.4 Tipografia







Fonte



Peso



Uso



Tamanhos



Fallback





Inter



Regular



Textos corporativos



14px, 16px



-apple-system, BlinkMacSystemFont, sans-serif





Inter



Medium



Títulos de seção



18px, 20px



-





Inter



Bold



Títulos principais, botões



24px, 32px



-





Poppins



SemiBold



Headlines, destaque



36px, 48px



Inter





Roboto Mono



Regular



Código, dados técnicos



12px, 14px



monospace

Implementação (Next.js):

// _document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}





🎯 2. Design System (Componentes Reutilizáveis)



2.1 Botões







Tipo



Estilo



Uso



Exemplo





Primário



Verde (#2E8B57), texto branco



Ações principais (ex: "Emitir MTR")



[Botão]





Secundário



Branco, borda verde (#2E8B57)



Ações secundárias



[Botão]





Terciário



Texto verde (#2E8B57)



Ações menos importantes



Emitir MTR





Perigo



Vermelho (#F44336)



Ações destrutivas (ex: "Excluir")



[Excluir]





Desabilitado



Cinza (#E0E0E0)



Ações não disponíveis



[Botão]

Código (Tailwind CSS):

// Botão Primário
<button className="bg-[#2E8B57] hover:bg-[#257247] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
  Emitir MTR
</button>

// Botão Secundário
<button className="bg-white hover:bg-gray-50 text-[#2E8B57] border border-[#2E8B57] font-medium py-2 px-4 rounded-lg transition-colors duration-200">
  Cancelar
</button>

// Botão Terciário (link)
<button className="text-[#2E8B57] hover:text-[#257247] font-medium transition-colors duration-200">
  Ver todos
</button>

// Botão Perigo
<button className="bg-[#F44336] hover:bg-[#D32F2F] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
  Excluir
</button>



2.2 Cards







Tipo



Estilo



Uso



Exemplo





Card de Operador



Branco, sombra sutil, borda arredondada



Lista de operadores no marketplace



[Card]





Card de MTR



Branco, sombra, header verde



Detalhes de um MTR emitido



[Card]





Card de Coleta



Branco, sombra, status colorido



Status de coleta em andamento



[Card]





Card de Estatísticas



Gradiente verde, texto branco



Métricas no dashboard



[Card]

Código:

// Card de Operador
<div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 bg-[#2E8B57] rounded-full flex items-center justify-center text-white font-bold">
      EC
    </div>
    <div>
      <h3 className="font-semibold text-lg text-[#424242]">EcoColeta Transportes</h3>
      <p className="text-sm text-[#757575]">CNPJ: 12.345.678/0001-23</p>
    </div>
  </div>
  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
    <div>
      <span className="text-[#757575]">Licença:</span>
      <span className="font-medium text-[#424242]"> CETESB-2026</span>
    </div>
    <div>
      <span className="text-[#757575]">Resíduos:</span>
      <span className="font-medium text-[#424242]"> Óleo, Pilhas, Baterias</span>
    </div>
  </div>
  <button className="mt-4 w-full bg-[#2E8B57] text-white py-2 rounded-lg hover:bg-[#257247] transition-colors">
    Solicitar Cotação
  </button>
</div>

// Card de MTR
<div className="bg-white rounded-xl shadow-md p-6">
  <div className="flex justify-between items-start">
    <div>
      <span className="text-xs bg-[#2E8B57] text-white px-2 py-1 rounded-full">MTR</span>
      <h3 className="mt-2 font-semibold text-lg text-[#424242]">MTR-2026-00042</h3>
      <p className="text-sm text-[#757575]">Emitido em 19/07/2026</p>
    </div>
    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Assinado</span>
  </div>
  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
    <div>
      <p className="text-[#757575]">Gerador:</p>
      <p className="font-medium text-[#424242]">Oficina Auto Peças LTDA</p>
    </div>
    <div>
      <p className="text-[#757575]">Operador:</p>
      <p className="font-medium text-[#424242]">EcoColeta Transportes</p>
    </div>
    <div>
      <p className="text-[#757575]">Resíduo:</p>
      <p className="font-medium text-[#424242]">Óleo Lubrificante (500L)</p>
    </div>
    <div>
      <p className="text-[#757575]">Veículo:</p>
      <p className="font-medium text-[#424242]">ABC-1234</p>
    </div>
  </div>
  <div className="mt-4 flex gap-2">
    <button className="flex-1 border border-[#2E8B57] text-[#2E8B57] py-2 rounded-lg hover:bg-[#2E8B57] hover:text-white transition-colors">
      Ver Detalhes
    </button>
    <button className="flex-1 bg-[#2E8B57] text-white py-2 rounded-lg hover:bg-[#257247] transition-colors">
      Download PDF
    </button>
  </div>
</div>



2.3 Formulários

Estilo Padrão:





Labels: Textos em cinza (#757575), tamanho 14px



Inputs: Borda cinza (#E0E0E0), fundo branco, foco em verde (#2E8B57)



Helpers: Textos de ajuda em cinza claro (#9E9E9E), tamanho 12px



Erros: Borda vermelha (#F44336), mensagem de erro em vermelho

Código:

// Input Padrão
<div className="mb-4">
  <label className="block text-sm font-medium text-[#757575] mb-1" htmlFor="cnpj">
    CNPJ
  </label>
  <input
    type="text"
    id="cnpj"
    className="w-full px-4 py-2 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#2E8B57] focus:border-[#2E8B57] outline-none transition-all"
    placeholder="00.000.000/0001-00"
  />
  <p className="mt-1 text-xs text-[#9E9E9E]">
    Digite apenas os números (14 dígitos)
  </p>
</div>

// Input com Erro
<div className="mb-4">
  <label className="block text-sm font-medium text-[#757575] mb-1" htmlFor="volume">
    Volume de Resíduo
  </label>
  <input
    type="number"
    id="volume"
    className="w-full px-4 py-2 border border-[#F44336] rounded-lg focus:ring-2 focus:ring-[#F44336] outline-none"
    placeholder="500"
  />
  <p className="mt-1 text-xs text-[#F44336]">
    Volume deve ser maior que 0
  </p>
</div>

// Select Padrão
<div className="mb-4">
  <label className="block text-sm font-medium text-[#757575] mb-1" htmlFor="wasteType">
    Tipo de Resíduo
  </label>
  <select
    id="wasteType"
    className="w-full px-4 py-2 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#2E8B57] focus:border-[#2E8B57] outline-none bg-white"
  >
    <option value="">Selecione um tipo</option>
    <option value="oleo">Óleo Lubrificante</option>
    <option value="pilhas">Pilhas e Baterias</option>
    <option value="pneus">Pneus</option>
  </select>
</div>

// Checkbox
<div className="mb-4">
  <label className="flex items-center gap-2 cursor-pointer">
    <input
      type="checkbox"
      className="w-4 h-4 rounded border-[#E0E0E0] text-[#2E8B57] focus:ring-[#2E8B57]"
    />
    <span className="text-sm text-[#424242]">
      Concordo com os termos de uso
    </span>
  </label>
</div>



2.4 Tabelas

Estilo Padrão:





Header: Fundo verde claro (#E8F5E8), texto verde escuro (#2E8B57)



Linhas: Alternância de branco e cinza claro (#F5F5F5)



Hover: Fundo cinza claro (#F5F5F5)



Bordas: Cinza claro (#E0E0E0)

Código:

<div className="overflow-x-auto rounded-lg border border-[#E0E0E0]">
  <table className="w-full">
    <thead>
      <tr className="bg-[#E8F5E8]">
        <th className="px-6 py-3 text-left text-xs font-medium text-[#2E8B57] uppercase tracking-wider">
          MTR
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-[#2E8B57] uppercase tracking-wider">
          Data
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-[#2E8B57] uppercase tracking-wider">
          Gerador
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-[#2E8B57] uppercase tracking-wider">
          Resíduo
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-[#2E8B57] uppercase tracking-wider">
          Status
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-[#2E8B57] uppercase tracking-wider">
          Ações
        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-[#E0E0E0]">
      <tr className="hover:bg-[#F5F5F5] transition-colors">
        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#424242]">
          MTR-2026-00042
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#757575]">
          19/07/2026
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#424242]">
          Oficina Auto Peças
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#424242]">
          Óleo Lubrificante
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Assinado
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm">
          <button className="text-[#2E8B57] hover:text-[#257247] mr-2">
            Ver
          </button>
          <button className="text-[#2E8B57] hover:text-[#257247]">
            Download
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>



2.5 Alertas e Notificações







Tipo



Cor



Ícone



Uso





Sucesso



Verde (#4CAF50)



✓



Ações concluídas com sucesso





Aviso



Amarelo (#FFC107)



⚠️



Alertas importantes





Erro



Vermelho (#F44336)



✗



Erros que precisam de atenção





Informação



Azul (#2196F3)



ℹ️



Informações gerais

Código:

// Alerta de Sucesso
<div className="rounded-md bg-green-50 p-4 mb-4">
  <div className="flex">
    <div className="flex-shrink-0">
      <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="ml-3">
      <p className="text-sm font-medium text-green-800">
        MTR emitido com sucesso!
      </p>
    </div>
  </div>
</div>

// Alerta de Erro
<div className="rounded-md bg-red-50 p-4 mb-4">
  <div className="flex">
    <div className="flex-shrink-0">
      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="ml-3">
      <p className="text-sm font-medium text-red-800">
        Erro ao emitir MTR. Verifique os dados e tente novamente.
      </p>
    </div>
  </div>
</div>

// Alerta de Aviso
<div className="rounded-md bg-yellow-50 p-4 mb-4">
  <div className="flex">
    <div className="flex-shrink-0">
      <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="ml-3">
      <p className="text-sm font-medium text-yellow-800">
        Sua licença vence em 30 dias. Renove para evitar interrupções.
      </p>
    </div>
  </div>
</div>



2.6 Badges (Status)







Status



Cor



Uso





Ativo



Verde (#4CAF50)



Operadores ativos, coletas concluídas





Pendente



Amarelo (#FFC107)



Aguardando assinatura, coletas agendadas





Em Andamento



Azul (#2196F3)



Coletas em progresso





Cancelado



Cinza (#9E9E9E)



Coletas canceladas





Vencido



Vermelho (#F44336)



Licenças vencidas

Código:

// Badge Ativo
<span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
  Ativo
</span>

// Badge Pendente
<span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
  Pendente
</span>

// Badge Em Andamento
<span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
  Em Andamento
</span>

// Badge Vencido
<span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
  Vencido
</span>





📱 3. Layouts Principais



3.1 Layout Geral (Dashboard)

+---------------------------------------------------+
| [Header: Logo + Navegação + User Menu]          |
+---------------------------------------------------+
|                                                   |
|  +-------------+  +-----------------------------+  |
|  |             |  |                             |  |
|  |  [Sidebar]  |  |        [Conteúdo]         |  |
|  |             |  |                             |  |
|  +-------------+  +-----------------------------+  |
|                                                   |
+---------------------------------------------------+
| [Footer: Copyright + Links]                       |
+---------------------------------------------------+

Sidebar (Operador):





Dashboard



Minhas Coletas (📍)



Frota de Veículos (🚛)



MTRs Emitidos (📄)



CDFs Emitidos (🏷️)



Cotações (💰)



Perfil (👤)



Configurações (⚙️)

Sidebar (Gerador):





Dashboard



Diagnóstico de Compliance (✅)



Meus Resíduos (🗑️)



MTRs Recebidos (📄)



CDFs Recebidos (🏷️)



Operadores Contratados (👥)



Plano de Gerenciamento (📋)



Declarações Anuais (📊)



Perfil (👤)



Configurações (⚙️)



3.2 Página Inicial (Landing Page)

Seções:





Hero: "GrenFlow - Gestão de Resíduos Simplificada"





Botão CTA: "Comece Grátis"



Botão Secundário: "Ver Demo"



Ilustração: Fluxo de resíduos sendo gerenciado



Problema: "80% das empresas não emitem MTR corretamente"





Ícones de dor (⚠️ Multas, ⏳ Burocracia, 🚫 Fraudes)



Solução: "Automatize tudo com GrenFlow"





Ícones de benefícios (✅ Compliance, 📍 Rastreamento, 🔒 Blockchain)



Como Funciona: 3 passos





1️⃣ Diagnóstico Automático



2️⃣ Emissão de MTR em 1 clique



3️⃣ Rastreamento em Tempo Real



Recursos: Cards com funcionalidades





MTR Digital



Roteamento Inteligente



Tokenização Blockchain



Marketplace de Operadores



Depoimentos: Client testimonials



CTA Final: "Comece a usar GrenFlow hoje"



Footer: Links, contatos, redes sociais





🎨 4. Wireframes (Fluxos Principais)



4.1 Fluxo: Onboarding de Gerador

1. Tela de Boas-Vindas
   +-----------------------------------+
   |                                   |
   |     🌱 GrenFlow                  |
   |                                   |
   |   Bem-vindo à plataforma de      |
   |   gestão de resíduos mais         |
   |   completa do Brasil!             |
   |                                   |
   |   [Começar Agora]  [Fazer Login]  |
   |                                   |
   +-----------------------------------+

2. Cadastro (CNPJ)
   +-----------------------------------+
   |                                   |
   |   📋 Dados da Empresa             |
   |                                   |
   |   CNPJ: [___________________]   |
   |   (Busca automática via API)      |
   |                                   |
   |   [Continuar]                    |
   |                                   |
   +-----------------------------------+

3. Quiz de Compliance
   +-----------------------------------+
   |                                   |
   |   ✅ Diagnóstico Rápido           |
   |                                   |
   |   Qual o seu CNAE?                |
   |   [45.20-0-00 - Manutenção de...]|
   |                                   |
   |   Onde está localizada?           |
   |   [São Paulo, SP        ▼]        |
   |                                   |
   |   Quais resíduos você gera?       |
   |   [Óleo Usado] [Filtros] [Pneus]  |
   |                                   |
   |   Qual o volume mensal?           |
   |   [500] [L        ▼]              |
   |                                   |
   |   [Analisar]                      |
   |                                   |
   +-----------------------------------+

4. Resultado do Diagnóstico
   +-----------------------------------+
   |                                   |
   |   📊 Seu Diagnóstico              |
   |                                   |
   |   ✅ Você PRECISA de Plano de     |
   |      Gerenciamento (PGRSS)         |
   |                                   |
   |   ✅ Você DEVE emitir MTR para    |
   |      transporte de resíduos        |
   |                                   |
   |   ❌ Você NÃO pode usar serviço    |
   |      público (resíduos perigosos)  |
   |                                   |
   |   📋 Próximos Passos:             |
   |   1. Cadastrar seus resíduos       |
   |   2. Encontrar operadores         |
   |   3. Emitir seu primeiro MTR      |
   |                                   |
   |   [Começar Agora]  [Salvar PDF]    |
   |                                   |
   +-----------------------------------+



4.2 Fluxo: Emissão de MTR

1. Agendar Coleta
   +-----------------------------------+
   |                                   |
   |   📅 Agendar Nova Coleta          |
   |                                   |
   |   Operador: [EcoColeta      ▼]   |
   |   Tipo de Resíduo: [Óleo Usado ▼]  |
   |   Volume: [500] [L        ▼]       |
   |   Data: [19/07/2026 ▼]             |
   |   Hora: [14:00    ▼]               |
   |   Endereço: [Rua X, 123...  ]     |
   |                                   |
   |   [Agendar Coleta]                |
   |                                   |
   +-----------------------------------+

2. Confirmação de Agendamento
   +-----------------------------------+
   |                                   |
   |   ✅ Coleta Agendada!             |
   |                                   |
   |   Operador: EcoColeta Transportes  |
   |   Data: 19/07/2026 às 14:00        |
   |   Resíduo: Óleo Lubrificante      |
   |   Volume: 500L                    |
   |                                   |
   |   📄 MTR será emitido automaticamente |
   |      quando a coleta for iniciada |
   |                                   |
   |   [Ver no Calendário] [Voltar]    |
   |                                   |
   +-----------------------------------+

3. MTR Emitido (Automaticamente)
   +-----------------------------------+
   |                                   |
   |   📄 MTR-2026-00042               |
   |                                   |
   |   Status: Pendente de Assinatura  |
   |                                   |
   |   Gerador: Oficina Auto Peças     |
   |   Operador: EcoColeta Transportes  |
   |   Resíduo: Óleo Lubrificante      |
   |   Volume: 500L                    |
   |   Veículo: ABC-1234               |
   |   Motorista: João Silva           |
   |                                   |
   |   [Assinar Digitalmente]          |
   |   [Visualizar Rota]               |
   |                                   |
   +-----------------------------------+

4. MTR Assinado
   +-----------------------------------+
   |                                   |
   |   ✅ MTR-2026-00042 Assinado!      |
   |                                   |
   |   O MTR está válido e foi enviado |
   |   para todas as partes.            |
   |                                   |
   |   [Download PDF] [Ver na Blockchain]|
   |                                   |
   +-----------------------------------+



4.3 Fluxo: Roteamento em Tempo Real (Operador)

1. Dashboard de Coletas
   +-----------------------------------+
   |                                   |
   |   🗺️ Minhas Coletas Hoje         |
   |                                   |
   |   +-----------------------------+ |
   |   |  📍 Mapa com rotas          | |
   |   |  • Veículo ABC-1234          | |
   |   |  • Coletas: 5/10            | |
   |   +-----------------------------+ |
   |                                   |
   |   📋 Lista de Coletas:            |
   |   +-----------------------------+ |
   |   | 09:00 - Oficina Auto Peças   | |
   |   |    Status: ✅ Concluída       | |
   |   +-----------------------------+ |
   |   | 10:30 - Indústria XYZ        | |
   |   |    Status: 🚛 A Caminho       | |
   |   +-----------------------------+ |
   |   | 14:00 - Supermercado ABC     | |
   |   |    Status: ⏳ Agendada        | |
   |   +-----------------------------+ |
   |                                   |
   +-----------------------------------+

2. Detalhes da Coleta
   +-----------------------------------+
   |                                   |
   |   🚛 Coleta #10042                |
   |                                   |
   |   +-----------------------------+ |
   |   |  📍 Localização:              | |
   |   |     Rua das Flores, 123       | |
   |   +-----------------------------+ |
   |   |  📦 Resíduo: Óleo Usado       | |
   |   |     Volume: 500L              | |
   |   +-----------------------------+ |
   |   |  👤 Contato: João (11) 9...   | |
   |   +-----------------------------+ |
   |                                   |
   |   Status: 🚛 A CAMINHO            |
   |   ETA: 15 minutos                |
   |                                   |
   |   [Iniciar Coleta] [Ligar]        |
   |                                   |
   +-----------------------------------+

3. Durante a Coleta
   +-----------------------------------+
   |                                   |
   |   🎯 COLETA EM ANDAMENTO         |
   |                                   |
   |   +-----------------------------+ |
   |   |  ⏱️ Tempo: 00:12:34           | |
   |   |  📊 Volume: 350/500L          | |
   |   +-----------------------------+ |
   |                                   |
   |   [Registrar Volume]              |
   |   [Tirar Foto]                    |
   |   [Concluir Coleta]              |
   |                                   |
   +-----------------------------------+

4. Coleta Concluída
   +-----------------------------------+
   |                                   |
   |   ✅ COLETA CONCLUÍDA!            |
   |                                   |
   |   Volume Coletado: 500L           |
   |   Foto: [📷]                       |
   |   Assinatura: [✍️]                |
   |                                   |
   |   [Emitir CDF] [Voltar]           |
   |                                   |
   +-----------------------------------+





🎨 5. Ícones (Sistema de Ícones)

Biblioteca Recomendada: Heroicons (grátis, open-source, otimizado para React)

Ícones Principais:







Ação/Seção



Ícone



Cor



Tamanho





Resíduos



🗑️ (TrashIcon)



#2E8B57



24px





MTR



📄 (DocumentTextIcon)



#0066CC



24px





CDF



🏷️ (TagIcon)



#0066CC



24px





Coleta



🚛 (TruckIcon)



#2E8B57



24px





Roteamento



🧭 (LocationMarkerIcon)



#2196F3



24px





Blockchain



⛓️ (LinkIcon)



#FFC107



24px





Compliance



✅ (CheckCircleIcon)



#4CAF50



24px





Operadores



👥 (UsersIcon)



#424242



24px





Dashboard



📊 (ChartBarIcon)



#424242



24px





Configurações



⚙️ (CogIcon)



#757575



24px





Notificações



🔔 (BellIcon)



#F44336



24px





Perfil



👤 (UserIcon)



#424242



24px





Sair



⬅️ (LogoutIcon)



#757575



24px

Implementação:

npm install @heroicons/react

import { 
  TrashIcon, 
  DocumentTextIcon, 
  TruckIcon, 
  LocationMarkerIcon,
  CheckCircleIcon 
} from '@heroicons/react/outline';

function FeatureIcon({ icon, color = '#2E8B57', size = 24 }) {
  const Icon = icon;
  return <Icon className="w-[size] h-[size]" style={{ color }} />;
}

// Uso:
<FeatureIcon icon={TrashIcon} color="#2E8B57" />





📱 6. Design Mobile (Responsivo)



6.1 Breakpoints







Breakpoint



Tamanho



Layout





Mobile



< 640px



1 coluna





Tablet



640px - 1024px



2 colunas





Desktop



1024px - 1280px



3 colunas





Wide



> 1280px



4+ colunas



6.2 Adaptações Mobile

Sidebar:





Desktop: Lateral (240px)



Mobile: Menu hambúrguer (slide-in)

Tabelas:





Desktop: Tabela completa



Mobile: Cartões empilhados (cada linha vira um card)

Formulários:





Desktop: Multi-colunas



Mobile: 1 coluna, inputs full-width

Mapas:





Desktop: Mapa grande + lista ao lado



Mobile: Mapa full-width + lista em aba





🎯 7. Guia de Implementação (React + TanStack Query)



7.1 Estrutura de Pastas

grenflow/
├── public/
│   ├── favicon.ico
│   └── images/
│       ├── logo-grenflow.svg
│       └── illustrations/
├── src/
│   ├── components/
│   │   ├── ui/          # Botões, inputs, cards (ShadCN)
│   │   ├── layout/      # Header, Sidebar, Footer
│   │   ├── forms/       # Formulários reutilizáveis
│   │   ├── tables/      # Tabelas
│   │   ├── charts/      # Gráficos
│   │   ├── maps/        # Componentes de mapa
│   │   └── icons/       # Ícones personalizados
│   ├── pages/
│   │   ├── auth/       # Login, Cadastro
│   │   ├── dashboard/  # Dashboards
│   │   ├── generator/  # Fluxos de geradores
│   │   ├── operator/   # Fluxos de operadores
│   │   ├── admin/      # Painel administrativo
│   │   └── public/     # Landing page, docs
│   ├── hooks/          # Custom hooks (useMTR, useCollection, etc.)
│   ├── lib/            # Funções utilitárias
│   ├── services/       # Chamadas API (Supabase, Mistral, Polygon)
│   ├── store/          # Estado global (TanStack Query)
│   ├── styles/         # CSS global, Tailwind config
│   ├── types/          # Tipos TypeScript (opcional)
│   └── utils/          # Funções auxiliares
├── .env.local
├── next.config.js
├── tailwind.config.js
└── package.json



7.2 Configuração Tailwind CSS

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#2E8B57',
          blue: '#0066CC',
        },
        secondary: {
          green: '#4CAF50',
          blue: '#2196F3',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}



7.3 Configuração TanStack Query

// src/lib/queryClient.js
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutos
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// src/pages/_app.js
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../lib/queryClient';

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}



7.4 Exemplo de Hook Personalizado (useMTR)

// src/hooks/useMTR.js
import { useQuery, useMutation } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';

export function useMTRs(companyId) {
  return useQuery({
    queryKey: ['mtrs', companyId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('waste_transport_manifests')
        .select('*')
        .eq('generator_id', companyId)
        .order('emission_date', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });
}

export function useCreateMTR() {
  return useMutation({
    mutationFn: async (mtrData) => {
      const { data, error } = await supabase
        .from('waste_transport_manifests')
        .insert(mtrData)
        .select();
      
      if (error) throw error;
      return data[0];
    },
    onSuccess: (data) => {
      // Invalida cache para forçar refresh
      queryClient.invalidateQueries(['mtrs']);
      // Mostra notificação de sucesso
      toast.success('MTR emitido com sucesso!');
    },
    onError: (error) => {
      toast.error('Erro ao emitir MTR');
    },
  });
}



7.5 Exemplo de Página (MTRs do Gerador)

// src/pages/generator/mtrs/index.js
import { useState } from 'react';
import { useMTRs } from '../../../hooks/useMTR';
import { MTRTable } from '../../../components/tables/MTRTable';
import { LoadingSpinner } from '../../../components/ui/LoadingSpinner';

export default function GeneratorMTRsPage() {
  const [filters, setFilters] = useState({
    status: 'all',
    dateFrom: '',
    dateTo: '',
  });
  
  const { data: mtrs, isLoading, error } = useMTRs(session.user.id);
  
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#424242]">Meus MTRs</h1>
        <button 
          className="bg-[#2E8B57] hover:bg-[#257247] text-white px-4 py-2 rounded-lg transition-colors"
          onClick={() => router.push('/generator/mtrs/new')}
        >
          + Emitir MTR
        </button>
      </div>
      
      {/* Filtros */}
      <div className="bg-white p-4 rounded-xl shadow-md mb-6">
        <MTRFilters filters={filters} onChange={setFilters} />
      </div>
      
      {/* Tabela */}
      <div className="bg-white rounded-xl shadow-md">
        <MTRTable mtrs={mtrs} />
      </div>
    </div>
  );
}





🎨 8. Paleta de Cores para Figma/Adobe XD

Código para exportar:

{
  "colors": {
    "primary": {
      "green": "#2E8B57",
      "blue": "#0066CC"
    },
    "secondary": {
      "green": "#4CAF50",
      "blue": "#2196F3"
    },
    "status": {
      "success": "#4CAF50",
      "warning": "#FFC107",
      "error": "#F44336",
      "info": "#2196F3"
    },
    "neutral": {
      "textPrimary": "#424242",
      "textSecondary": "#757575",
      "bgPrimary": "#FFFFFF",
      "bgSecondary": "#F5F5F5",
      "bgDark": "#212121",
      "border": "#E0E0E0"
    }
  },
  "gradients": {
    "primary": "linear-gradient(135deg, #2E8B57 0%, #0066CC 100%)",
    "secondary": "linear-gradient(135deg, #4CAF50 0%, #2196F3 100%)"
  },
  "typography": {
    "fontFamily": "Inter",
    "fallback": "-apple-system, BlinkMacSystemFont, sans-serif",
    "weights": [400, 500, 600, 700]
  }
}





📌 9. Checklist de Implementação UI



9.1 Para o Designer





Criar logo GrenFlow (3 versões: horizontal, vertical, ícone)



Definir paleta de cores final



Criar sistema de ícones



Designar componentes (botões, cards, formulários)



Criar wireframes de todas as telas



Criar protótipo interativo (Figma)



Exportar assets (SVG, PNG)



9.2 Para o Frontend





Configurar Tailwind CSS com paleta GrenFlow



Criar componentes UI base (ShadCN)



Implementar sistema de design (cores, tipografia)



Criar layout responsivo



Integrar com TanStack Query



Implementar formulários com validação



Criar tabelas interativas



Integrar mapas (Google Maps/Mapbox)



9.3 Para o Full Stack





Configurar Supabase



Criar funções Edge para MTR/CDF



Integrar com Mistral API



Configurar Polygon + Alchemy



Deployar smart contracts



Criar API de roteamento





🚀 10. Próximos Passos



10.1 Imediato (1 semana)





Definir logo final (escolher uma das 3 opções ou criar nova)



Criar conta no Figma e começar o design system



Configurar ambiente de desenvolvimento (Next.js + Tailwind + TanStack)



Criar componentes base (botões, inputs, cards)



10.2 Curto Prazo (2 semanas)





Designar telas principais (onboarding, dashboard, MTR, roteamento)



Implementar layout responsivo



Integrar com Supabase (autenticação, dados)



Criar protótipo interativo para validação



10.3 Médio Prazo (1 mês)





Finalizar design de todas as telas



Implementar frontend completo



Integrar com backend (MTR, CDF, roteamento)



Testar em dispositivos mobile





📞 11. Recursos Adicionais



11.1 Ferramentas Recomendadas







Ferramenta



Uso



Link





Figma



Design UI/UX



figma.com





Supabase



Backend



supabase.com





Vercel



Deploy



vercel.com





Alchemy



Blockchain



alchemy.com





Heroicons



Ícones



heroicons.com





ShadCN



Componentes UI



ui.shadcn.com





Tailwind CSS



Estilos



tailwindcss.com





TanStack Query



Estado



tanstack.com/query



11.2 Inspirations





Dashboard: Tailwind UI, Admin Dashboards



Maps: Google Maps UI, Mapbox Demos



Blockchain: Dapp University, EthHub



Forms: Formik, React Hook Form



📌 Status: Pronto para Implementação
📅 Data de Criação: 19/07/2026
🏢 Empresa: Onnze Tecnologia e Inteligência
📱 Produto: GrenFlow