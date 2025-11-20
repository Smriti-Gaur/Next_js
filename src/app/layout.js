import './globals.css';
import Header from './components/global/Header/Header';


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
      </body>
    </html>
  );
}
