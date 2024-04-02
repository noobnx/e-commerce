import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AuthencationLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <main>
         <Button>
            <Link href={'/'}>Home</Link>
         </Button>
         {children}
      </main>
   );
}
