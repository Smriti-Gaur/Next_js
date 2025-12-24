import './globals.css';
import Header from './Components/global/Header'
import BottomCTA from "./Components/Home/BottomCTA";
import Footer from './components/global/Footer';


export const metadata = {
  title: 'My App',
  description: 'My Next.js app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <div className="relative">
          <BottomCTA/>
          <Footer/>
        </div>
        
      </body>
    </html>
  );
}
