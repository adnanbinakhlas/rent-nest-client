"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  registerSchema,
  type RegisterFormValues,
} from "@/features/auth/schemas/registerSchema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { registerService } from "../services/registerService";

export default function RegisterForm() {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      phone: "",
      role: "TENANT",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: RegisterFormValues) => {
    try {
      const formData = new FormData();

      formData.append("fullname", values.fullname);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("phone", values.phone);
      formData.append("role", values.role);

      if (values.avatar) {
        formData.append("avatar", values.avatar);
      }

      await registerService(formData);

      console.log("Form Values:", values);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <FieldGroup className="grid gap-4 md:grid-cols-2">
        {/* Full Name */}
        <Controller
          name="fullname"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className="gap-0">
                Full Name<span className="text-destructive">*</span>
              </FieldLabel>

              <Input
                {...field}
                id={field.name}
                placeholder="Adnan Bin Akhlas"
                disabled={isSubmitting}
                aria-invalid={fieldState.invalid}
              />

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Email */}
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className="gap-0">
                Email<span className="text-destructive">*</span>
              </FieldLabel>

              <Input
                {...field}
                id={field.name}
                type="email"
                placeholder="adnan@example.com"
                disabled={isSubmitting}
                aria-invalid={fieldState.invalid}
              />

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Password */}
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className="gap-0">
                Password<span className="text-destructive">*</span>
              </FieldLabel>

              <Input
                {...field}
                id={field.name}
                type="password"
                placeholder="••••••••"
                disabled={isSubmitting}
                aria-invalid={fieldState.invalid}
              />

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Phone */}
        <Controller
          name="phone"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className="gap-0">
                Phone Number<span className="text-destructive">*</span>
              </FieldLabel>

              <Input
                {...field}
                id={field.name}
                placeholder="+8801712345678"
                disabled={isSubmitting}
                aria-invalid={fieldState.invalid}
              />

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Avatar */}
        <Controller
          name="avatar"
          control={form.control}
          render={({ field: { onChange, name }, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={name}>Avatar</FieldLabel>

              <Input
                id={name}
                type="file"
                accept="image/png,image/jpeg,image/webp"
                disabled={isSubmitting}
                onChange={(e) => onChange(e.target.files?.[0])}
              />

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Role */}
        <Controller
          name="role"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className="gap-0">
                Role<span className="text-destructive">*</span>
              </FieldLabel>

              <Select
                value={field.value}
                onValueChange={field.onChange}
                disabled={isSubmitting}
              >
                <SelectTrigger
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                >
                  <SelectValue placeholder="Select Role" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="LANDLORD">Landlord</SelectItem>

                  <SelectItem value="TENANT">Tenant</SelectItem>
                </SelectContent>
              </Select>

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Button
          type="submit"
          className="w-full col-span-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </Button>
      </FieldGroup>
    </form>
  );
}
