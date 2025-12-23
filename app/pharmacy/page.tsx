"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Package, TrendingUp, AlertCircle, Plus } from "lucide-react"

const MOCK_INVENTORY = [
  { id: 1, name: "Paracétamol 500mg", stock: 150, minStock: 50, status: "good" },
  { id: 2, name: "Ibuprofène 400mg", stock: 80, minStock: 100, status: "warning" },
  { id: 3, name: "Amoxicilline 1g", stock: 45, minStock: 60, status: "warning" },
  { id: 4, name: "Doliprane 1000mg", stock: 200, minStock: 50, status: "good" },
  { id: 5, name: "Aspirine 100mg", stock: 15, minStock: 50, status: "critical" },
]

export default function PharmacyPage() {
  const [inventory, setInventory] = useState(MOCK_INVENTORY)
  const [showAddForm, setShowAddForm] = useState(false)

  const getStatusColor = (status: string) => {
    if (status === "good") return "text-teal-600 bg-teal-50"
    if (status === "warning") return "text-orange-600 bg-orange-50"
    return "text-red-600 bg-red-50"
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Gestion Pharmacie</h1>
          <p className="text-blue-50 text-lg">Tableau de bord et gestion des stocks</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Package className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Produits en stock</p>
                <p className="text-2xl font-bold">{inventory.length}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Stock faible</p>
                <p className="text-2xl font-bold">{inventory.filter((item) => item.status !== "good").length}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Commandes grossistes</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Inventory */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Inventaire</h2>
            <Button onClick={() => setShowAddForm(!showAddForm)} className="bg-teal-600 hover:bg-teal-700">
              <Plus className="mr-2 h-4 w-4" />
              Ajouter un produit
            </Button>
          </div>

          {showAddForm && (
            <Card className="p-6 mb-6 bg-muted">
              <h3 className="text-lg font-semibold mb-4">Nouveau produit</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom du médicament</Label>
                  <Input id="name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stock">Stock initial</Label>
                  <Input id="stock" type="number" />
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button className="bg-teal-600 hover:bg-teal-700">Enregistrer</Button>
                <Button variant="outline" onClick={() => setShowAddForm(false)}>
                  Annuler
                </Button>
              </div>
            </Card>
          )}

          <div className="space-y-3">
            {inventory.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{item.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Stock: {item.stock}</span>
                    <span>Stock minimum: {item.minStock}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-3 md:mt-0">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(item.status)}`}>
                    {item.status === "good" ? "Bon" : item.status === "warning" ? "Attention" : "Critique"}
                  </span>
                  <Button variant="outline" size="sm">
                    Commander
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
