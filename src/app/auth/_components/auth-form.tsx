'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { toast } from "@/hooks/use-toast"
export function AuthForm() {

    const form = useForm()

    const handleSubmit = form.handleSubmit(async (data) => {
        try {
            await signIn('email', { email: data.email, redirect: false })
            toast({
                title: 'Link mágico enviado',
                description: 'Cheque seu e-mail para entrar com o link mágico',
            })
        } catch (error) {
            toast({
                title: 'Erro',
                description: 'Não foi possível enviar o link mágico, tente novamente',
            })
        }
    })

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="font-black text-3xl pb-2">Entrar</CardTitle>
                    <CardDescription>Digite seu e-mail para receber o link mágico</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="nome@exemplo.com"
                                    required
                                    {...form.register('email')}
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full font-bold uppercase">Enviar link mágico</Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}

