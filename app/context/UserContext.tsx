"use client"

import { createContext, useState, useEffect, useContext, ReactNode, FC } from 'react';

// Definiera typer för UserAccount och UserContext
interface UserAccount {
  firstName?: string;
  lastName?: string;
  email?: string;
  addressId?: string;
  profileImageUri?: string;
  // Lägg till andra fält som finns i UserAccount
}

interface UserContextType {
  user: UserAccount | null;
  loading: boolean;
  error: string | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserAccount | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUserEmailFromCookie = (): string | null => {
      const userEmailCookie = document.cookie
        .split(';')
        .find(cookie => cookie.trim().startsWith('UserEmail='));
      
      if (userEmailCookie) {
        const userEmail = userEmailCookie.split('=')[1];
        const decodedEmail = decodeURIComponent(userEmail);
        console.log('Decoded email', { decodedEmail });
        return decodedEmail;
      }
      
      return null;
    };

    const accountEmail = getUserEmailFromCookie();
  

    if(typeof accountEmail !== 'string' || accountEmail === ''){
        alert('invalid email' )
        return;
    }
    console.log(accountEmail);

    const fetchUserAccount = async () => {
      try {
        console.log(`Fetching user data for email: ${accountEmail}`);
        const response = await fetch('https://accountprovider-lak.azurewebsites.net/api/GetOneUser?code=Pve8wOBRJ87mzY28zqdhODqRDAMddW6ikHwKmbdT690QAzFuSogQFQ%3D%3D', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            { 
            email : accountEmail
            })
        });
        if (!response.ok) {
          console.error(`Failed to fetch user data for ${accountEmail}. Status: ${response.status}`);
          throw new Error('Failed to fetch user data');
        }
        const data: UserAccount = await response.json();
        setUser(data);
        console.log('User data fetched successfully:', data);
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    const email = getUserEmailFromCookie();
    if (email) {
      fetchUserAccount();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
