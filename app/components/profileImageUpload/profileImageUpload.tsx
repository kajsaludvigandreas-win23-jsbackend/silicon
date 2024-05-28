'use client';

import styles from './profileImageUpload.module.css';
import { useUser } from '@/app/context/UserContext';
import { useState, useEffect, FC, useRef } from 'react';

interface ProfileImageUploadProps {
  onUploadSuccess: (newImageUri: string) => void;
}

const ProfileImageUpload: FC<ProfileImageUploadProps> = ({ onUploadSuccess }) => {
  const { user, loading, error } = useUser();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');
  const [imageUri, setImageUri] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (error) {
      setMessage(`Error: ${error}`);
    }
  }, [error]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedFile) {
      setMessage('Please select a file to upload.');
      return;
    }

    if (!user || !user.email) {
      setMessage('User is not logged in or email is missing.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('containerName', 'profileImages');

    try {
      const response = await fetch('https://fileprovide-lak.azurewebsites.net/api/UpLoad?code=rT2n2UuEvEgJElVHAS9HeUn8xn4H8d3vc-2-5tXvvxhPAzFu6JZ2UA%3D%3D&containerName=profiles', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setMessage(`File uploaded successfully: ${result.filePath}`);
        setImageUri(result.filePath);

        if (result.filePath) {
          const updateResponse = await fetch('https://accountprovider-lak.azurewebsites.net/api/UpdateOneUser?code=8dKxzHaN4MWuXFC5KiO89yMqVICindBVIF1T2MqJMQdaAzFu4yi3gA%3D%3D', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: user.email,
              profileImageUri: result.filePath
            })
          });

          if (updateResponse.ok) {
            setMessage('Profile image updated successfully.');
            onUploadSuccess(result.filePath); // Notify parent component of the new image URI
          } else {
            const updateError = await updateResponse.text();
            console.error('Failed to update profile image:', updateError);
            setMessage('Failed to update profile image.');
          }
        }
      } else {
        const uploadError = await response.text();
        console.error('File upload failed:', uploadError);
        setMessage('File upload failed.');
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error:', error);
        setMessage(`Error: ${error.message}`);
      } else {
        setMessage('An unknown error occurred.');
      }
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <input
            className={styles.input}
            type="file"
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
          <img
            src="/images/profilebutton.svg"
            alt="Upload"
            className={styles.uploadImage}
            onClick={handleImageClick}
          />
        </div>
        <button className={styles.button} type="submit">
          Upload <i className="fa-regular fa-file-arrow-up"></i>
        </button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default ProfileImageUpload;