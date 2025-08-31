import '@/app/ui/global.css';
import InvoiceStatus from './ui/invoices/status';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <InvoiceStatus status="paid"/>
     
        {children}
      </body>
    </html>
  );
}
