/**
 * Vercel Blob Storage para o GrenFlow
 * Funções para gerenciar arquivos no Blob Storage da Vercel.
 */

import { put, del, list, get } from '@vercel/blob';

// Tipos de arquivos permitidos no GrenFlow
export type BlobFileType = 
  | 'mtr-pdf'
  | 'cdf-pdf'
  | 'profile-image'
  | 'collection-photo'
  | 'company-logo'
  | 'report-backup';

// Configuração de acesso
export type BlobAccess = 'public' | 'private';

/**
 * Sobe um arquivo para o Vercel Blob Storage
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
  
  const finalFileName = addRandomSuffix 
    ? `${Date.now()}-${fileName}` 
    : fileName;

  try {
    const blob = await put(finalFileName, file, { 
      access,
      addRandomSuffix: false,
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
 */
export async function downloadBlob(path: string): Promise<{ url: string } | null> {
  try {
    const blob = await get(path, { access: 'private' });
    
    // Verifica se blob é nulo
    if (!blob) {
      console.error('Blob não encontrado:', path);
      return null;
    }

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
      access: 'public' 
    });
  } catch (error) {
    console.error('Erro ao upload de logo:', error);
    return null;
  }
}
