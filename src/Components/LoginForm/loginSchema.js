import { z } from "zod"

export const loginSchema = z.object({
    email: z.string().min(1, "O email é obrigatório").email("Insira um email valido"),
    password: z.string().min(8, "São necessários pelo menos 8 caracteres")
        .max(15, "A senha deve ter no máximo 15 caracteres")
})