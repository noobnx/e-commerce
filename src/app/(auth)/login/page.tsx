import LoginForm from '@/app/(auth)/login/login-form';

export default function LoginPage() {
   return (
      <>
         <h1 className="text-center font-bold text-3xl">Đăng Nhập</h1>
         <div className="flex justify-center">
            <LoginForm />
         </div>
      </>
   );
}
