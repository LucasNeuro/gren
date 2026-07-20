/**
 * Vercel Blob Storage para o GrenFlow
 * 
 * Funções para gerenciar arquivos no Blob Storage da Vercel.
 * Ideal para:
 * - Armazenar MTRs/CDFs em PDF
 * - Imagens de perfil
 * - Fotos de coletas
 * - Logos de empresas
 */

import { put, del, list, get } from '@vercel/blob';

// Tipos de arquivos permitidos no GrenFlow
export type BlobFileType = 
  | 'mtr-pdf'        // MTR em PDF
  | 'cdf-pdf'        // CDF em PDF
  | 'profile-image'  // Foto de perfil
  | 'collection-photo' // Foto de coleta
  | 'company-logo'   // Logo de empresa
  | 'report-backup'  // Backup de relatório
;

// Configuração de acesso (público ou privado)
export type BlobAccess = 'public' | 'private';

/**
 * Sobe um arquivo para o Vercel Blob Storage
 * @param fileName - Nome do arquivo (ex: 'mtr/MTR-2026-00042.pdf')
 * @param file - Arquivo (File, Blob, ou string)
 * @param options - Opções (tipo, acesso, etc.)
 * @returns URL do arquivo
 */
export async function uploadBlob(
  fileName: string,
  file: File | Blob | string,
  options: {
    type?: BlobFileType;
    access?: BlobAccess;
    addRandomSuffix?: boolean;
  } = {}
): Promise<{ url: string; path: string } | null> {
  const { access = 'private', addRandomSuffix = true } = options;
  
  // Adiciona timestamp para evitar conflitos
  const finalFileName = addRandomSuffix 
    ? `${Date.now()}-${fileName}` 
    : fileName;

  try {
    // Sobe o arquivo para o Blob Storage
    const blob = await put(finalFileName, file, { 
      access,
      addRandomSuffix: false, // Já tratamos isso acima
    });

    return {
      url: blob.url,
      path: finalFileName,
    };
  } catch (error) {
    console.error('Erro ao fazer upload do blob:', error);
    return null;
  }
}

/**
 * Baixa um arquivo do Vercel Blob Storage
 * @param path - Caminho do arquivo (ex: 'mtr/MTR-2026-00042.pdf')
 * @returns URL do arquivo
 */
export async function downloadBlob(path: string): Promise<{ 
  url: string; 
} | null> {
  try {
    // A função get do @vercel/blob exige options com access
    const blob = await get(path, { access: 'private' });
    return {
      url: blob.url,
    };
  } catch (error) {
    console.error('Erro ao baixar blob:', error);
    return null;
  }
}

/**
 * Lista arquivos no Vercel Blob Storage
 * @param prefix - Prefixo para filtrar (ex: 'mtr/')
 * @returns Lista de blobs
 */
export async function listBlobs(prefix: string = ''): Promise<{ 
  blobs: { path: string; url: string; size: number; uploadedAt: Date }[];
} | null> {
  try {
    const { blobs } = await list({ prefix });
    return {
      blobs: blobs.map(blob => ({
        path: blob.pathname,
        url: blob.url,
        size: blob.size,
        uploadedAt: blob.uploadedAt,
      })),
    };
  } catch (error) {
    console.error('Erro ao listar blobs:', error);
    return null;
  }
}

/**
 * Deleta um arquivo do Vercel Blob Storage
 * @param path - Caminho do arquivo
 * @returns Boolean (sucesso ou falha)
 */
export async function deleteBlob(path: string): Promise<boolean> {
  try {
    await del(path);
    return true;
  } catch (error) {
    console.error('Erro ao deletar blob:', error);
    return false;
  }
}

/**
 * Funções específicas para o GrenFlow
 */

// Upload de MTR em PDF
export async function uploadMTRPDF(
  mtrId: string,
  pdfFile: File | Blob,
  companyId: string
): Promise<{ url: string; path: string } | null> {
  try {
    const path = `mtr/${companyId}/${mtrId}.pdf`;
    return await uploadBlob(path, pdfFile, { 
      type: 'mtr-pdf', 
      access: 'private' 
    });
  } catch (error) {
    console.error('Erro ao upload de MTR:', error);
    return null;
  }
}

// Upload de foto de coleta
export async function uploadCollectionPhoto(
  collectionId: string,
  photoFile: File | Blob,
  companyId: string
): Promise<{ url: string; path: string } | null> {
  try {
    const path = `collections/${companyId}/${collectionId}.jpg`;
    return await uploadBlob(path, photoFile, { 
      type: 'collection-photo', 
      access: 'private' 
    });
  } catch (error) {
    console.error('Erro ao upload de foto:', error);
    return null;
  }
}

// Upload de logo de empresa
export async function uploadCompanyLogo(
  companyId: string,
  logoFile: File | Blob
): Promise<{ url: string; path: string } | null> {
  try {
    const extension = logoFile instanceof File 
      ? logoFile.name.split('.').pop() || 'png' 
      : 'png';
    const path = `companies/${companyId}/logo.${extension}`;
    return await uploadBlob(path, logoFile, { 
      type: 'company-logo', 
      access: 'public' // Logos podem ser públicos
    });
  } catch (error) {
    console.error('Erro ao upload de logo:', error);
    return null;
  }
}
