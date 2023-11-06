import { z } from "zod"

export const registerSchema = z.object({
    name: z.string().min(1, "O nome é obrigatório !"),
    email: z.string().email("Forneça um email valido")
        .min(1, "O email é obrigatório"),
    password: z.string()
        .min(8, "São necessários pelo menos 8 caracteres")
        .max(15, "A senha deve ter no máximo 15 caracteres")
        .regex(/[a-z]+/, "É necessário pelo menos uma letra minúscula")
        .regex(/[A-Z]+/, "É necessário pelo menos uma letra maiúscula")
        .regex(/[0-9]+/, "É necessário pelo menos um número.")
        .regex(/[^a-zA-Z0-9]/, "É necessário pelo menos um caractere especial"),
    confirmPassword: z.string()
        .min(8, "São necessários pelo menos 8 caracteres")
        .max(15, "A senha deve ter no máximo 15 caracteres"),
    bio: z.string().min(1, "A bio é obrigatória!").max(30, "A bio deve conter no máximo 30 caracteres"),
    contact: z.string().min(1, "O contato é obrigatório!"),
    course_module: z.string().min(1, "O módulo do curso é obrigatório!"),

}).refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"]
});