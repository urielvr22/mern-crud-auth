import {z} from 'zod';//z allows to create types of data

export const registerSchema = z.object({
    username: z.string({
        required_error: 'Username is required',
    }),
    email: z.string({
        required_error: 'Email is required',
    })
    .email({
        required_error: 'Email is not valid',
    }),
    password: z.string({
        required_error: 'Password is required',
    })
    .min(6, {
        message: 'Password must be at least 6 characters',
    })
})

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email is required',
    })
    .email({
        message: 'Email is not valid',
    }),
    password: z.string({
        required_error: 'Password is required',
    })
    .min(6, {
        message: 'Password must be at least 6 characters',
    })
})

//zod package works like a validator of data(what the user sends by post,put...)

