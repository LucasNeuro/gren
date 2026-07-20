'use client';

import { useState, useCallback } from 'react';
import { 
  uploadBlob, 
  downloadBlob, 
  listBlobs, 
  deleteBlob,
  uploadMTRPDF,
  uploadCollectionPhoto,
  uploadCompanyLogo,
  BlobFileType,
  BlobAccess
} from '@/lib/blob';

// Tipos para o hook
export interface UseBlobStorageReturn {
  uploadFile: (
    fileName: string,
    file: File | Blob | string,
    options?: { type?: BlobFileType; access?: BlobAccess; addRandomSuffix?: boolean }
  ) => Promise<{ url: string; path: string } | null>;
  downloadFile: (path: string) => Promise<{ url: string } | null>;
  listFiles: (prefix: string) => Promise<{ 
    blobs: { path: string; url: string; size: number; uploadedAt: Date }[];
  } | null>;
  deleteFile: (path: string) => Promise<boolean>;
  uploadMTR: (mtrId: string, pdfFile: File | Blob, companyId: string) => Promise<{ url: string; path: string } | null>;
  uploadCollectionPhoto: (collectionId: string, photoFile: File | Blob, companyId: string) => Promise<{ url: string; path: string } | null>;
  uploadLogo: (companyId: string, logoFile: File | Blob) => Promise<{ url: string; path: string } | null>;
  isLoading: boolean;
  error: string | null;
}

/**
 * Hook para gerenciar arquivos no Vercel Blob Storage
 * @returns Funções para upload, download, listar e deletar arquivos
 */
export function useBlobStorage(): UseBlobStorageReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Upload genérico
  const uploadFile = useCallback(
    async (
      fileName: string,
      file: File | Blob | string,
      options?: { type?: BlobFileType; access?: BlobAccess; addRandomSuffix?: boolean }
    ) => {
      setIsLoading(true);
      setError(null);
      try {
        return await uploadBlob(fileName, file, options);
      } catch (err) {
        setError('Erro ao fazer upload do arquivo');
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  // Download
  const downloadFile = useCallback(async (path: string) => {
    setIsLoading(true);
    setError(null);
    try {
      return await downloadBlob(path);
    } catch (err) {
      setError('Erro ao baixar o arquivo');
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Listar arquivos
  const listFiles = useCallback(async (prefix: string = '') => {
    setIsLoading(true);
    setError(null);
    try {
      return await listBlobs(prefix);
    } catch (err) {
      setError('Erro ao listar arquivos');
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Deletar arquivo
  const deleteFile = useCallback(async (path: string) => {
    setIsLoading(true);
    setError(null);
    try {
      return await deleteBlob(path);
    } catch (err) {
      setError('Erro ao deletar o arquivo');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Upload de MTR
  const uploadMTR = useCallback(
    async (mtrId: string, pdfFile: File | Blob, companyId: string) => {
      setIsLoading(true);
      setError(null);
      try {
        return await uploadMTRPDF(mtrId, pdfFile, companyId);
      } catch (err) {
        setError('Erro ao fazer upload do MTR');
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  // Upload de foto de coleta
  const uploadCollectionPhoto = useCallback(
    async (collectionId: string, photoFile: File | Blob, companyId: string) => {
      setIsLoading(true);
      setError(null);
      try {
        return await uploadCollectionPhoto(collectionId, photoFile, companyId);
      } catch (err) {
        setError('Erro ao fazer upload da foto');
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  // Upload de logo
  const uploadLogo = useCallback(
    async (companyId: string, logoFile: File | Blob) => {
      setIsLoading(true);
      setError(null);
      try {
        return await uploadCompanyLogo(companyId, logoFile);
      } catch (err) {
        setError('Erro ao fazer upload do logo');
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return {
    uploadFile,
    downloadFile,
    listFiles,
    deleteFile,
    uploadMTR,
    uploadCollectionPhoto,
    uploadLogo,
    isLoading,
    error,
  };
}
