import React, { useRef } from "react";
import { Upload, X, File } from "lucide-react";
import { FormLabel, FormMessage } from "@/components/ui/form";

interface FileUploadProps {
  files: File[];
  onFilesChange: (files: File[]) => void;
  error?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  files,
  onFilesChange,
  error,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      const totalFiles = [...files, ...newFiles];

      // Limit to 5 files
      if (totalFiles.length > 5) {
        alert("Maximum 5 files allowed");
        return;
      }

      // Check each file is under 50MB
      const oversizedFiles = newFiles.filter(
        (file) => file.size > 50 * 1024 * 1024
      );
      if (oversizedFiles.length > 0) {
        alert(
          `The following files exceed 50MB: ${oversizedFiles.map((f) => f.name).join(", ")}`
        );
        return;
      }

      onFilesChange(totalFiles);
    }
  };

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    onFilesChange(newFiles);

    // Reset input value
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
  };

  return (
    <div className="space-y-4">
      <FormLabel
        style={{
          fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
          fontSize: "14px",
          color: "white",
        }}
      >
        Upload Image / Video (Optional)
      </FormLabel>

      <div
        className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-gray-500 transition-colors cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*,video/*"
          onChange={handleFileSelect}
          className="hidden"
        />

        <Upload className="w-12 h-12 mx-auto mb-4 text-gray-500" />
        <p
          style={{
            fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            fontSize: "16px",
            color: "white",
            marginBottom: "8px",
          }}
        >
          Click to upload or drag and drop
        </p>
        <p
          style={{
            fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            fontSize: "14px",
            color: "#666",
          }}
        >
          Max 5 files, 50MB each
        </p>
      </div>

      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-white/5 border border-gray-700 rounded-lg"
            >
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                <File className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p
                    className="truncate"
                    style={{
                      fontFamily:
                        "UntitledSans, system-ui, -apple-system, sans-serif",
                      fontSize: "14px",
                      color: "white",
                    }}
                  >
                    {file.name}
                  </p>
                  <p
                    style={{
                      fontFamily:
                        "UntitledSans, system-ui, -apple-system, sans-serif",
                      fontSize: "12px",
                      color: "#666",
                    }}
                  >
                    {formatFileSize(file.size)}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(index);
                }}
                className="ml-2 p-1 hover:bg-white/10 rounded transition-colors"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          ))}
        </div>
      )}

      {error && <FormMessage>{error}</FormMessage>}
    </div>
  );
};

export default FileUpload;
