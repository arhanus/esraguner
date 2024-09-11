import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/footer";
import { Source_Serif_4 } from 'next/font/google'
 
const cormorant = Source_Serif_4({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "Esra Güner",
  description: "Müzik, Şarkı, Şarkıcı, Solist, Esra Güner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cormorant.className}>
        <Navbar />
        <main className="max-w-full">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
