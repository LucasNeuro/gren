# 📋 Guia de Configuração do Supabase para o GrenFlow

## 🚀 Passo a Passo para Configurar o Banco de Dados

### 1️⃣ Acesse o Supabase
👉 [https://app.supabase.com/project/abinbufatfqqfcfyqzpx](https://app.supabase.com/project/abinbufatfqqfcfyqzpx)

### 2️⃣ Execute o SQL no SQL Editor

1. No menu lateral, clique em **"SQL Editor"**
2. Clique em **"New Query"**
3. **Copie e cole o SQL abaixo** (em partes, se necessário)
4. Clique em **"Run"** (ou pressione `Ctrl+Enter`)

---

## 📜 SQL para Criar o Banco de Dados

### Parte 1: Tabelas Principais

```sql
-- Tabela de Usuários
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT,
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('generator', 'operator', 'admin', 'regulator')),
  company_id UUID,
  phone TEXT,
  cpf_cnpj TEXT,
  address TEXT,
  city TEXT,
  state TEXT,
  zip_code TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabela de Empresas
CREATE TABLE IF NOT EXISTS public.companies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  cnpj TEXT UNIQUE NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('generator', 'operator')),
  address TEXT,
  city TEXT,
  state TEXT,
  zip_code TEXT,
  phone TEXT,
  email TEXT,
  logo_url TEXT,
  license_number TEXT,
  license_expiry_date TIMESTAMPTZ,
  license_issuer TEXT,
  allowed_waste_types TEXT[],
  max_monthly_volume NUMERIC,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'pending', 'suspended')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabela de Tipos de Resíduos
CREATE TABLE IF NOT EXISTS public.waste_types (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  code TEXT UNIQUE NOT NULL,
  description TEXT,
  category TEXT CHECK (category IN ('hazardous', 'non-hazardous', 'special', 'common')),
  requires_mtr BOOLEAN NOT NULL DEFAULT true,
  requires_cdf BOOLEAN NOT NULL DEFAULT true,
  max_storage_days INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

### Parte 2: Tabelas de Documentos (MTR e CDF)

```sql
-- Tabela de MTRs
CREATE TABLE IF NOT EXISTS public.waste_transport_manifests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  mtr_number TEXT UNIQUE NOT NULL,
  generator_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  operator_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  waste_type_id UUID NOT NULL REFERENCES public.waste_types(id) ON DELETE CASCADE,
  volume NUMERIC NOT NULL,
  volume_unit TEXT NOT NULL DEFAULT 'L' CHECK (volume_unit IN ('L', 'kg', 'm3', 'ton')),
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'pending', 'signed', 'completed', 'cancelled')),
  emission_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  collection_date TIMESTAMPTZ,
  start_date TIMESTAMPTZ,
  end_date TIMESTAMPTZ,
  vehicle_plate TEXT NOT NULL,
  vehicle_type TEXT,
  driver_name TEXT NOT NULL,
  driver_cpf TEXT,
  origin_address TEXT NOT NULL,
  destination_address TEXT NOT NULL,
  pdf_url TEXT,
  blockchain_hash TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabela de CDFs
CREATE TABLE IF NOT EXISTS public.waste_destination_certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cdf_number TEXT UNIQUE NOT NULL,
  mtr_id UUID NOT NULL REFERENCES public.waste_transport_manifests(id) ON DELETE CASCADE,
  generator_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  operator_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  destination_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  waste_type_id UUID NOT NULL REFERENCES public.waste_types(id) ON DELETE CASCADE,
  volume NUMERIC NOT NULL,
  volume_unit TEXT NOT NULL DEFAULT 'L',
  treatment_method TEXT NOT NULL CHECK (treatment_method IN ('recycling', 'incineration', 'landfill', 'reuse', 'composting', 'other')),
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'pending', 'signed', 'completed', 'cancelled')),
  emission_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  pdf_url TEXT,
  blockchain_hash TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

### Parte 3: Tabelas Auxiliares

```sql
-- Tabela de Coletas
CREATE TABLE IF NOT EXISTS public.collections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  collection_number TEXT UNIQUE NOT NULL,
  generator_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  operator_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  waste_type_id UUID NOT NULL REFERENCES public.waste_types(id) ON DELETE CASCADE,
  volume NUMERIC NOT NULL,
  volume_unit TEXT NOT NULL DEFAULT 'L',
  status TEXT NOT NULL DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'in_progress', 'completed', 'cancelled', 'confirmed')),
  scheduled_date TIMESTAMPTZ NOT NULL,
  start_date TIMESTAMPTZ,
  end_date TIMESTAMPTZ,
  vehicle_id UUID,
  driver_id UUID,
  origin_address TEXT NOT NULL,
  destination_address TEXT NOT NULL,
  photo_url TEXT,
  signature_url TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabela de Veículos
CREATE TABLE IF NOT EXISTS public.vehicles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  plate TEXT UNIQUE NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('truck', 'van', 'container', 'other')),
  model TEXT,
  year INTEGER,
  capacity NUMERIC,
  capacity_unit TEXT DEFAULT 'L',
  license_plate_image TEXT,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'maintenance')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabela de Motoristas
CREATE TABLE IF NOT EXISTS public.drivers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  cpf TEXT UNIQUE NOT NULL,
  cnh TEXT UNIQUE NOT NULL,
  cnh_expiry_date TIMESTAMPTZ,
  phone TEXT,
  email TEXT,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'suspended')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabela de Cotações
CREATE TABLE IF NOT EXISTS public.quotes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quote_number TEXT UNIQUE NOT NULL,
  generator_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  operator_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  waste_type_id UUID NOT NULL REFERENCES public.waste_types(id) ON DELETE CASCADE,
  volume NUMERIC NOT NULL,
  volume_unit TEXT NOT NULL DEFAULT 'L',
  frequency TEXT CHECK (frequency IN ('one-time', 'weekly', 'biweekly', 'monthly', 'quarterly')),
  price NUMERIC NOT NULL,
  currency TEXT NOT NULL DEFAULT 'BRL',
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected', 'expired')),
  expiry_date TIMESTAMPTZ NOT NULL,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

### Parte 4: Tabelas de Sistema

```sql
-- Tabela de Assinaturas
CREATE TABLE IF NOT EXISTS public.signatures (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  document_type TEXT NOT NULL CHECK (document_type IN ('mtr', 'cdf', 'quote', 'contract')),
  document_id UUID NOT NULL,
  signer_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  signer_role TEXT NOT NULL CHECK (signer_role IN ('generator', 'operator', 'destination', 'regulator')),
  signature_data TEXT NOT NULL,
  signed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabela de Notificações
CREATE TABLE IF NOT EXISTS public.notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('info', 'warning', 'error', 'success')),
  is_read BOOLEAN NOT NULL DEFAULT false,
  related_entity_type TEXT,
  related_entity_id UUID,
  action_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabela de Logs
CREATE TABLE IF NOT EXISTS public.activity_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id UUID,
  old_values JSONB,
  new_values JSONB,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

### Parte 5: Índices

```sql
-- Índices para otimizar consultas
CREATE INDEX IF NOT EXISTS idx_waste_transport_manifests_generator_id ON public.waste_transport_manifests(generator_id);
CREATE INDEX IF NOT EXISTS idx_waste_transport_manifests_operator_id ON public.waste_transport_manifests(operator_id);
CREATE INDEX IF NOT EXISTS idx_waste_transport_manifests_status ON public.waste_transport_manifests(status);
CREATE INDEX IF NOT EXISTS idx_waste_transport_manifests_emission_date ON public.waste_transport_manifests(emission_date);

CREATE INDEX IF NOT EXISTS idx_collections_generator_id ON public.collections(generator_id);
CREATE INDEX IF NOT EXISTS idx_collections_operator_id ON public.collections(operator_id);
CREATE INDEX IF NOT EXISTS idx_collections_status ON public.collections(status);
CREATE INDEX IF NOT EXISTS idx_collections_scheduled_date ON public.collections(scheduled_date);

CREATE INDEX IF NOT EXISTS idx_quotes_generator_id ON public.quotes(generator_id);
CREATE INDEX IF NOT EXISTS idx_quotes_operator_id ON public.quotes(operator_id);
CREATE INDEX IF NOT EXISTS idx_quotes_status ON public.quotes(status);
CREATE INDEX IF NOT EXISTS idx_quotes_expiry_date ON public.quotes(expiry_date);
```

### Parte 6: RLS (Row Level Security)

```sql
-- Habilitar RLS em todas as tabelas
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.waste_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.waste_transport_manifests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.waste_destination_certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vehicles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.drivers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.signatures ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_logs ENABLE ROW LEVEL SECURITY;

-- Políticas de acesso
CREATE POLICY users_can_view_own_profile
ON public.users
FOR SELECT USING (auth.uid() = id);

CREATE POLICY users_can_update_own_profile
ON public.users
FOR UPDATE USING (auth.uid() = id);

CREATE POLICY companies_can_view_own_data
ON public.companies
FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM public.users 
    WHERE id = auth.uid() AND company_id = public.companies.id
  )
);

CREATE POLICY mtr_participants_can_view_their_mtrs
ON public.waste_transport_manifests
FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM public.users 
    WHERE id = auth.uid() AND 
    (company_id = generator_id OR company_id = operator_id)
  )
);

CREATE POLICY collection_participants_can_view_their_collections
ON public.collections
FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM public.users 
    WHERE id = auth.uid() AND 
    (company_id = generator_id OR company_id = operator_id)
  )
);
```

### Parte 7: Funções Auxiliares

```sql
-- Função para gerar número de MTR
CREATE OR REPLACE FUNCTION public.generate_mtr_number(company_id UUID)
RETURNS TEXT AS $$
DECLARE
  company_code TEXT;
  year_month TEXT;
  sequence_num INTEGER;
  mtr_number TEXT;
BEGIN
  SELECT SUBSTRING(UPPER(name), 1, 3) INTO company_code
  FROM public.companies WHERE id = company_id;
  
  year_month := TO_CHAR(NOW(), 'YYMM');
  
  SELECT COUNT(*) + 1 INTO sequence_num
  FROM public.waste_transport_manifests 
  WHERE generator_id = company_id 
  AND TO_CHAR(emission_date, 'YYMM') = year_month;
  
  mtr_number := company_code || '-' || year_month || '-' || LPAD(sequence_num::TEXT, 5, '0');
  
  RETURN mtr_number;
END;
$$ LANGUAGE plpgsql;

-- Função para gerar número de CDF
CREATE OR REPLACE FUNCTION public.generate_cdf_number(company_id UUID)
RETURNS TEXT AS $$
DECLARE
  company_code TEXT;
  year_month TEXT;
  sequence_num INTEGER;
  cdf_number TEXT;
BEGIN
  SELECT SUBSTRING(UPPER(name), 1, 3) INTO company_code
  FROM public.companies WHERE id = company_id;
  
  year_month := TO_CHAR(NOW(), 'YYMM');
  
  SELECT COUNT(*) + 1 INTO sequence_num
  FROM public.waste_destination_certificates 
  WHERE generator_id = company_id 
  AND TO_CHAR(emission_date, 'YYMM') = year_month;
  
  cdf_number := company_code || '-CDF-' || year_month || '-' || LPAD(sequence_num::TEXT, 5, '0');
  
  RETURN cdf_number;
END;
$$ LANGUAGE plpgsql;
```

### Parte 8: Dados Iniciais (Opcional)

```sql
-- Inserir tipos de resíduos padrão
INSERT INTO public.waste_types (name, code, description, category, requires_mtr, requires_cdf, max_storage_days)
VALUES 
  ('Óleo Lubrificante Usado', 'OLU', 'Óleo lubrificante usado de motores e máquinas', 'hazardous', true, true, 180),
  ('Pilhas e Baterias', 'PIL', 'Pilhas e baterias de chumbo-ácido, níquel-cádmio, etc.', 'hazardous', true, true, 365),
  ('Pneus Inservíveis', 'PNE', 'Pneus que não podem mais ser reformados', 'non-hazardous', true, true, 365),
  ('Resíduos de Equipamentos Eletroeletrônicos', 'REE', 'Computadores, celulares, eletrodomésticos', 'hazardous', true, true, 365),
  ('Resíduos de Construção Civil', 'RCC', 'Entulho, concreto, tijolos', 'non-hazardous', false, false, 90),
  ('Resíduos Orgânicos', 'ORG', 'Restos de comida, podas de jardim', 'common', false, false, 30)
ON CONFLICT (code) DO NOTHING;
```

---

## 🎯 Próximos Passos

1. **Execute todas as partes do SQL** no SQL Editor do Supabase.
2. **Verifique se as tabelas foram criadas** em "Table Editor".
3. **Faça o deploy no Vercel** (agora deve funcionar!).

---

## 💡 Dicas

- **Execute uma parte por vez** para facilitar a depuração.
- **Se der erro em alguma parte**, verifique o erro e execute apenas os statements que falharam.
- **As políticas RLS** podem ser ajustadas conforme a necessidade do seu projeto.

---

## 📞 Suporte

Se encontrar algum erro ao executar o SQL, **copie o erro exato** e me avise que eu ajudo a resolver!
