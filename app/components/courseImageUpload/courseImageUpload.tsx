'use client';

import { useState, FC } from 'react';

interface CourseImageUploadProps {
  onUploadSuccess: (newImageUri: string) => void;
}

const CourseImageUpload: FC<CourseImageUploadProps> = ({ onUploadSuccess }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');
  const [imageUri, setImageUri] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      setMessage('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('containerName', 'coursemges');

    try {
      const response = await fetch('https://fileprovide-lak.azurewebsites.net/api/UpLoad?code=rT2n2UuEvEgJElVHAS9HeUn8xn4H8d3vc-2-5tXvvxhPAzFu6JZ2UA%3D%3D&containerName=coursemges', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setMessage(`File uploaded successfully: ${result.filePath}`);
        setImageUri(result.ImageUri); // Sätter imageUri som returneras från API:n
        onUploadSuccess(result.filePath); // Anropa callback-funktionen
      } else {
        setMessage('File upload failed.');
      }
    } catch (error) {
      if (error instanceof Error) {
        setMessage(`Error: ${error.message}`);
      } else {
        setMessage('An unknown error occurred.');
      }
    }
  };

  return (
    <div>
      <h1>Upload Course Image</h1>
      <input type="file" onChange={handleFileChange} />
      <button type="button" onClick={handleSubmit}>Upload</button>
      {message && <p>{message}</p>}
      {imageUri && (
        <div>
          <h2>Uploaded Image</h2>
          <img src={imageUri} alt="Uploaded file" />
        </div>
      )}
    </div>
  );
};

export default CourseImageUpload;
