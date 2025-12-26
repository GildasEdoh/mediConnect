"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

type Message = {
  id: number
  role: "user" | "assistant"
  content: string
}

const MOCK_RESPONSES = [
  "Le paracétamol est généralement disponible en dosages de 500mg et 1000mg. Pour un adulte, la dose maximale est de 4g par jour.",
  "L'amoxicilline est un antibiotique à large spectre. Elle nécessite une prescription médicale et doit être conservée au frais.",
  "Les anti-inflammatoires non stéroïdiens (AINS) comme l'ibuprofène doivent être pris après les repas pour éviter les irritations gastriques.",
  "Pour les stocks de médicaments thermosensibles, maintenez une température entre 2°C et 8°C. Vérifiez régulièrement vos équipements.",
  "Les commandes en gros auprès de nos fournisseurs sont livrées sous 48-72 heures. Pensez à anticiper vos besoins.",
]

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "Bonjour! Je suis votre assistant pharmaceutique. Je peux vous aider avec des informations sur les médicaments, la gestion des stocks et les commandes. Comment puis-je vous assister?",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    const assistantMessage: Message = {
      id: messages.length + 2,
      role: "assistant",
      content: MOCK_RESPONSES[Math.floor(Math.random() * MOCK_RESPONSES.length)],
    }

    setMessages((prev) => [...prev, assistantMessage])
    setIsTyping(false)
  }

  return (
    <div className="min-h-screen">
      <div className="bg-card border-b border-border py-12 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-2">Assistant Pharmaceutique IA</h1>
          <p className="text-muted-foreground text-lg">Support professionnel disponible 24/7</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 py-8">
        <Card className="h-[600px] flex flex-col border-border">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <svg className="h-5 w-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                    </svg>
                  </div>
                )}
                <div
                  className={`max-w-[70%] p-4 rounded-lg ${
                    message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted border border-border"
                  }`}
                >
                  <p className="leading-relaxed">{message.content}</p>
                </div>
                {message.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <svg className="h-5 w-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <svg className="h-5 w-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                  </svg>
                </div>
                <div className="bg-muted p-4 rounded-lg border border-border">
                  <div className="flex gap-1">
                    <div
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-border">
            <div className="flex gap-2">
              <Input
                placeholder="Posez votre question pharmaceutique..."
                className="bg-background"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
              />
              <Button
                onClick={handleSend}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Assistant d'information uniquement. Pour les urgences médicales, contactez un médecin.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
