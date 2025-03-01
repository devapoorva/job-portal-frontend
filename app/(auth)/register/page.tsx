"use client";

import CustomCard from "@/components/shard/custom-card";
import Image from "next/image";
import logoImg from "../../../public/logo.png";
import Link from "next/link";
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
import { registerSchema } from "@/lib/schema/register";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/lib/context/AuthContext";
import { registerService } from "@/services/register-service";
import { useRouter } from "next/navigation";
import { useApi } from "@/hooks/use-api";

export default function Register() {
  const router = useRouter();
  const { user } = useAuth();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: user?.displayName || "",
      lastName: "",
      email: user?.email || "",
      mobile: "",
      cityId: "1",
      userType: "",
    },
  });
  const { loading, execute } = useApi(registerService.registerUser, {
    onSuccess: (response) => {
      // if (response && response.user) {
      //   router.push("/admin");
      // } else {
      //   router.push("/register");
      // }
      console.log('register res',response);
      router.push("/admin");
    },
    onError: (err) => {
      console.error("Login failed:", err);
      alert("Login failed! Please check your credentials.");
    },
  });
  function onSubmit(values: z.infer<typeof registerSchema>) {
    console.log(values, user?.accessToken);
    execute({
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      mobile: values.mobile,
      userType: values.userType,
      cityId: values.cityId,
      accessToken: user?.accessToken,
    });
  }
  return (
    <div className="flex justify-center">
      <header className="fixed w-full z-10">
        <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <a href="#" className="flex items-center">
              <Image
                src={logoImg}
                className="h-6 mr-3 sm:h-9"
                width={110}
                alt="Landwind Logo"
              />
            </a>
            <div className="flex items-center lg:order-2">
              <div className="text-center text-sm">
                All ready have an account?{" "}
                <Link href="/login" className="underline underline-offset-4">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="w-1/2 mt-[100px]">
        <CustomCard
          title="Create your profile"
          description="Fill all details to proceed"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="First name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile</FormLabel>
                    <FormControl>
                      <Input placeholder="mobile" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="userType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="CANDIDATE">CANDIDATE</SelectItem>
                        <SelectItem value="EMPLOYER">EMPLOYER</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CustomCard>
      </div>
    </div>
  );
}
