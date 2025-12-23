"use client"

import { Card } from "@/components/ui/card"
import { Users, ShoppingBag, Package, TrendingUp } from "lucide-react"

const STATS = [
  { label: "Pharmacies partenaires", value: "28", icon: Package, color: "bg-blue-100 text-blue-600" },
  { label: "Commandes grossistes", value: "156", icon: ShoppingBag, color: "bg-teal-100 text-teal-600" },
  { label: "Utilisateurs actifs", value: "342", icon: Users, color: "bg-orange-100 text-orange-600" },
  { label: "Volume mensuel", value: "8.5M FCFA", icon: TrendingUp, color: "bg-green-100 text-green-600" },
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
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Tableau de Bord Admin</h1>
          <p className="text-blue-50 text-lg">Vue d'ensemble de la plateforme MediConnect</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {STATS.map((stat, idx) => (
            <Card key={idx} className="p-6">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Recent Orders */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Commandes d'Approvisionnement Récentes</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">N° Commande</th>
                  <th className="text-left py-3 px-4">Pharmacie</th>
                  <th className="text-left py-3 px-4">Montant</th>
                  <th className="text-left py-3 px-4">Statut</th>
                  <th className="text-left py-3 px-4">Date</th>
                </tr>
              </thead>
              <tbody>
                {RECENT_ORDERS.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-accent transition-colors">
                    <td className="py-3 px-4 font-medium">{order.id}</td>
                    <td className="py-3 px-4">{order.pharmacy}</td>
                    <td className="py-3 px-4">{order.amount} FCFA</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          order.status === "Livrée"
                            ? "bg-teal-100 text-teal-700"
                            : order.status === "En cours"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-orange-100 text-orange-700"
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
