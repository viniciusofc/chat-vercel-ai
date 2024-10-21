'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";


export function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();

    return (
        <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
            <CardHeader>
                <CardTitle>Chat AI</CardTitle>
                <CardDescription>Usando Vecrel SDK to create a chat bot.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                {
                    messages.map(message => {
                        return (
                            <div key={message.id} className="flex gap-3 text-slate-600 text-sm">
                                {message.role === 'user' &&
                                    <div className="flex gap-3 text-slate-600 text-sm">
                                        <Avatar>
                                            <AvatarFallback>VR</AvatarFallback>
                                            <AvatarImage src="https://github.com/viniciusofc.png"></AvatarImage>
                                        </Avatar>
                                    </div>}
                                {message.role === 'assistant' &&
                                    <div className="flex gap-3 text-slate-600 text-sm">
                                        <Avatar>
                                            <AvatarFallback>RS</AvatarFallback>
                                            <AvatarImage src="https://github.com/rocketseat.png"></AvatarImage>
                                        </Avatar>
                                    </div>
                                }
                                <p className="leading-relaxed">
                                    <span className="block font-bold text-slate-700">{message.role === 'user' ? 'Eu:' : 'AI Nicoly:'}</span>
                                    {message.content}
                                </p>
                            </div>
                        )
                    })
                }
            </CardContent>
            <CardFooter>
                <form className="w-full flex gap-x-2" onSubmit={handleSubmit}>
                    <Input placeholder="O que posso te ajudar?" value={input} onChange={handleInputChange} />
                    <Button type="submit">Enviar</Button>
                </form>
            </CardFooter>
        </Card>
    )
}