"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Package, AlertTriangle, Truck } from "lucide-react"

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
    if (status === "good") return "text-primary bg-primary/10"
    if (status === "warning") return "text-orange-600 bg-orange-50"
    return "text-red-600 bg-red-50"
  }

  return (
    <div className="min-h-screen">
      <div className="bg-card border-b border-border py-12 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-2">Gestion de Pharmacie</h1>
          <p className="text-muted-foreground text-lg">Tableau de bord et gestion des stocks</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Produits en stock</p>
                <p className="text-2xl font-bold text-foreground">{inventory.length}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Stock faible</p>
                <p className="text-2xl font-bold text-foreground">
                  {inventory.filter((item) => item.status !== "good").length}
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Truck className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Commandes grossistes</p>
                <p className="text-2xl font-bold text-foreground">8</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Inventory */}
        <Card className="p-6 border-border">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-foreground">Inventaire</h2>
            <Button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
            >
              Ajouter un produit
            </Button>
          </div>

          {showAddForm && (
            <Card className="p-6 mb-6 bg-muted border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Nouveau produit</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Nom du médicament
                  </Label>
                  <Input id="name" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stock" className="text-foreground">
                    Stock initial
                  </Label>
                  <Input id="stock" type="number" className="bg-background" />
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg">
                  Enregistrer
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowAddForm(false)}
                  className="border-primary text-primary hover:bg-primary/5 hover:text-primary rounded-lg"
                >
                  Annuler
                </Button>
              </div>
            </Card>
          )}

          <div className="space-y-3">
            {inventory.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Stock: {item.stock}</span>
                    <span>Stock minimum: {item.minStock}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-3 md:mt-0">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(item.status)}`}>
                    {item.status === "good" ? "Bon" : item.status === "warning" ? "Attention" : "Critique"}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary/5 hover:text-primary bg-transparent rounded-lg"
                  >
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
