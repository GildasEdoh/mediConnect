"use client"

import { Card } from "@/components/ui/card"

import { Store, Package, Users, TrendingUp } from "lucide-react"

const STATS = [
  {
    label: "Pharmacies partenaires",
    value: "28",
    icon: <Store className="w-6 h-6" />,
  },
  {
    label: "Commandes grossistes",
    value: "156",
    icon: <Package className="w-6 h-6" />,
  },
  {
    label: "Utilisateurs actifs",
    value: "342",
    icon: <Users className="w-6 h-6" />,
  },
  {
    label: "Volume mensuel",
    value: "8.5M FCFA",
    icon: <TrendingUp className="w-6 h-6" />,
  },
]

const RECENT_ORDERS = [
  { id: "CMD001", pharmacy: "Pharmacie Centrale", amount: 150000, status: "Livrée", date: "2024-01-20" },
  { id: "CMD002", pharmacy: "Pharmacie du Nord", amount: 85000, status: "En cours", date: "2024-01-20" },
  { id: "CMD003", pharmacy: "Pharmacie de la Paix", amount: 220000, status: "En préparation", date: "2024-01-19" },
  { id: "CMD004", pharmacy: "Pharmacie du Sud", amount: 55000, status: "Livrée", date: "2024-01-19" },
]

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Tableau de Bord Admin</h1>
          <p className="text-primary-foreground/80 text-lg">Vue d'ensemble de la plateforme MediConnect</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {STATS.map((stat, idx) => (
            <Card key={idx} className="p-6 border border-border hover:border-primary/20 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Commandes d'Approvisionnement Récentes</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">N° Commande</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Pharmacie</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Montant</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Statut</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                </tr>
              </thead>
              <tbody>
                {RECENT_ORDERS.map((order) => (
                  <tr key={order.id} className="border-b border-border hover:bg-primary/5 transition-colors">
                    <td className="py-3 px-4 font-medium text-foreground">{order.id}</td>
                    <td className="py-3 px-4 text-foreground">{order.pharmacy}</td>
                    <td className="py-3 px-4 text-foreground">{order.amount} FCFA</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${order.status === "Livrée"
                            ? "bg-primary/20 text-primary"
                            : order.status === "En cours"
                              ? "bg-primary/10 text-primary"
                              : "bg-muted text-muted-foreground"
                          }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  )
}
