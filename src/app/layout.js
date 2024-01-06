import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import AuthProvider from './provider/auth_provider';
const poppins = Poppins({subsets:["latin"], weight:"400"})
export const metadata = {
  title: 'Modern Church - Management System',
  description: 'Empowering churches with a comprehensive management system for seamless administration, communication, and growth. Explore our services for efficient church operations.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className+" bg-white"}>
        <AuthProvider>
            {children}
        </AuthProvider>
        </body>
    </html>
  )
}
