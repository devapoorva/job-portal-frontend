"use client";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/context/AuthContext";
import { useRouter } from 'next/navigation'
import { useApi } from "@/hooks/use-api";
import {loginService} from "@/services/login-service"
import { toast } from "sonner";

export default function LoginWithgoogl() {
  const { handleGoogleSignIn} = useAuth();
  const router = useRouter();
  const {  execute } = useApi(loginService.loginUser, {
    onSuccess: (response) => {
     if(response && response.user){
      localStorage.setItem('_user',JSON.stringify(response.user));
      if(response.user.userType=='EMPLOYER'){
        router.push('/admin')
      }else if(response.user.userType=='ADMIN'){
        router.push('/admin')
      }else{
        router.push('/')
      }
     }else{
      localStorage.removeItem('_user');
      router.push("/register")
     } 
    },
    onError: (err) => {
      console.error('Login failed:', err);
      toast.error("Error while login");
      localStorage.removeItem('_user');
    },
  });
  const loginHandler = () =>{
    handleGoogleSignIn().then((data)=>{
      if(data && data.user && data.user?.accessToken){
        //call login
      localStorage.setItem('_token',data.user?.accessToken);
      execute({accessToken:data.user?.accessToken,refreshToken:data.user?.accessToken})
      }
      
    }).catch(err=>{
      console.log(err);
    })
  }
  return (
      <Button variant="outline" className="w-full" onClick={loginHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
              d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
              fill="currentColor"
          />
        </svg>
        Login with Google
      </Button>
  );
}
