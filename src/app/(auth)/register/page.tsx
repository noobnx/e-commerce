import RegisterForm from '@/app/(auth)/register/register-form';

export default function RegisterPage() {
   return (
      <>
         <h1 className="text-center font-bold">Đăng Ký</h1>
         <div className="flex justify-center">
            <RegisterForm />
         </div>
      </>
   );
}
