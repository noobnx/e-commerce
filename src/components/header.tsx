import Link from 'next/link';
import clsx from 'clsx';

import { ModeToggle } from '@/components/toggle-theme';

export default function Header() {
   return (
      <div className={clsx('flex items-center gap-5 p-10')}>
         <ul className={clsx('flex items-center gap-3')}>
            <li>
               <Link href="/register">Đăng Ký</Link>
            </li>
            <li>
               <Link href="/login">Đăng Nhập</Link>
            </li>
         </ul>
         <ModeToggle />
      </div>
   );
}
