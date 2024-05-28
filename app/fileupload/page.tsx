'use client';

import { useState } from 'react';

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [containerName, setContainerName] = useState<string>('profileImages');
  const [message, setMessage] = useState<string>('');
  const [imageUri, setImageUri] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleContainerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setContainerName(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedFile) {
      setMessage('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('containerName', containerName);

    try {
      const response = await fetch('https://fileprovide-lak.azurewebsites.net/api/UpLoad?code=rT2n2UuEvEgJElVHAS9HeUn8xn4H8d3vc-2-5tXvvxhPAzFu6JZ2UA%3D%3D&containerName=profiles', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setMessage(`File uploaded successfully: ${result.filePath}`);
        setImageUri(result.ImageUri); // Sätter imageUri som returneras från API:n
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
      <h1>Upload File</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <select value={containerName} onChange={handleContainerChange}>
          <option value="profileImages">Profile Images</option>
          <option value="courseImages">Course Images</option>
        </select>
        <button type="submit">Upload</button>
      </form>
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

export default UploadFile;
