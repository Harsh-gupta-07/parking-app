import "./globals.css";
import ClientLayout from "../components/ClientLayout";

export const metadata = {
  title: "Smart Parking App",
  description: "Seamless parking experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-50 text-slate-900">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
