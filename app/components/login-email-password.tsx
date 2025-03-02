"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { emailPassSchema } from "@/lib/schema/eplogin";
import { Button } from "./ui/button";
import { useAuth } from "@/lib/context/AuthContext";
import { loginService } from "@/services/login-service";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useApi } from "@/hooks/use-api";
function EmailPasswordLogin() {
  const router = useRouter();
  const { execute } = useApi(loginService.loginUser, {
    onSuccess: (res) => {
      if (res && res.user && res.user.userType == "ADMIN") {
        router.push("/admin");
      } else {
        router.push("/register");
      }
    },
    onError: (err) => {
      console.error("Login failed:", err);
      toast.error(err.message);
    },
  });
  const { emailPasswordSignIn, error } = useAuth();
  const form = useForm<z.infer<typeof emailPassSchema>>({
    resolver: zodResolver(emailPassSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof emailPassSchema>) {
    console.log(values);
    emailPasswordSignIn(values)
      .then((data) => {
        if (data && data.user && data.user?.accessToken) {
          //call login
          localStorage.setItem("_token", data.user?.accessToken);
          execute({
            accessToken: data.user?.accessToken,
            refreshToken: data.user?.accessToken,
          });
        }
      })
      .catch((err) => {
        console.log(err, "------");
      });
  }
  if (error) {
    toast.error(error.message);
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full text-white">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}

export default EmailPasswordLogin;
