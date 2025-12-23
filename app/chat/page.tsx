"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Send, Bot, User } from "lucide-react"

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

    // Simulate AI response
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
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Assistant Pharmaceutique IA</h1>
          <p className="text-teal-50 text-lg">Support professionnel disponible 24/7</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card className="h-[600px] flex flex-col">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[70%] p-4 rounded-lg ${
                    message.role === "user" ? "bg-blue-600 text-white" : "bg-muted"
                  }`}
                >
                  <p className="leading-relaxed">{message.content}</p>
                </div>
                {message.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <User className="h-5 w-5 text-white" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="bg-muted p-4 rounded-lg">
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

          <div className="p-6 border-t">
            <div className="flex gap-2">
              <Input
                placeholder="Posez votre question pharmaceutique..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
              />
              <Button onClick={handleSend} className="bg-teal-600 hover:bg-teal-700">
                <Send className="h-4 w-4" />
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
