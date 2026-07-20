'use client';

import React, { useState, useRef, ChangeEvent } from 'react';
import { Button } from './Button';
import { Alert } from './Alert';
import { useBlobStorage } from '@/hooks/useBlobStorage';

interface FileUploadProps {
  onUploadSuccess?: (url: string, path: string) => void;
  allowedTypes?: string[];
  maxSize?: number; // em bytes
  label?: string;
  buttonText?: string;
  prefix?: string; // Prefixo para o path no Blob Storage (ex: 'mtr/', 'collections/')
  companyId?: string; // ID da empresa para organizar os arquivos
}

export const FileUpload: React.FC<FileUploadProps> = ({
  onUploadSuccess,
  allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'],
  maxSize = 10 * 1024 * 1024, // 10MB
  label = 'Selecione um arquivo',
  buttonText = 'Upload',
  prefix = '',
  companyId = '',
}) => {
  const { uploadFile, isLoading, error } = useBlobStorage();
  const [file, setFile] = useState<File | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    // Valida tipo do arquivo
    if (allowedTypes.length > 0 && !allowedTypes.includes(selectedFile.type)) {
      setUploadError(`Tipo de arquivo não permitido. Tipos permitidos: ${allowedTypes.join(', ')}`);
      return;
    }

    // Valida tamanho
    if (selectedFile.size > maxSize) {
      setUploadError(`Arquivo muito grande. Tamanho máximo: ${maxSize / (1024 * 1024)}MB`);
      return;
    }

    setFile(selectedFile);
    setUploadError(null);
  };

  const handleUpload = async () => {
    if (!file) {
      setUploadError('Selecione um arquivo primeiro');
      return;
    }

    try {
      // Gera um nome único para o arquivo
      const fileName = `${prefix}${Date.now()}-${file.name}`;
      
      // Faz upload para o Blob Storage
      const result = await uploadFile(fileName, file, {
        access: 'private',
        addRandomSuffix: false,
      });

      if (result && onUploadSuccess) {
        onUploadSuccess(result.url, result.path);
      }
    } catch (err) {
      setUploadError('Erro ao fazer upload do arquivo');
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-neutral-textSecondary mb-2">
          {label}
        </label>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept={allowedTypes.join(',')}
          className="hidden"
        />
        <div className="flex items-center gap-4">
          <Button
            variant="secondary"
            onClick={triggerFileInput}
            disabled={isLoading}
          >
            Escolher Arquivo
          </Button>
          {file && (
            <span className="text-sm text-neutral-textSecondary truncate max-w-[200px]">
              {file.name} ({Math.round(file.size / 1024)} KB)
            </span>
          )}
        </div>
      </div>

      {file && (
        <Button
          variant="primary"
          onClick={handleUpload}
          isLoading={isLoading}
        >
          {buttonText}
        </Button>
      )}

      {error && (
        <Alert variant="error" className="mt-4">
          {error}
        </Alert>
      )}

      {uploadError && (
        <Alert variant="error" className="mt-4">
          {uploadError}
        </Alert>
      )}
    </div>
  );
};
