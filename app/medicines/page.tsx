"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const MOCK_MEDICINES = [
  {
    id: 1,
    name: "Paracétamol 500mg",
    category: "Analgésique",
    price: 2500,
    stock: 150,
    supplier: "PharmaTogo Grossiste",
    description: "Traitement de la douleur et de la fièvre",
  },
  {
    id: 2,
    name: "Ibuprofène 400mg",
    category: "Anti-inflammatoire",
    price: 3000,
    stock: 80,
    supplier: "MediSupply SA",
    description: "Anti-inflammatoire non stéroïdien",
  },
  {
    id: 3,
    name: "Amoxicilline 1g",
    category: "Antibiotique",
    price: 8500,
    stock: 45,
    supplier: "PharmaTogo Grossiste",
    description: "Antibiotique à large spectre",
  },
  {
    id: 4,
    name: "Doliprane 1000mg",
    category: "Analgésique",
    price: 3200,
    stock: 200,
    supplier: "HealthDistrib",
    description: "Contre la douleur et la fièvre",
  },
  {
    id: 5,
    name: "Aspirine 100mg",
    category: "Anticoagulant",
    price: 1800,
    stock: 120,
    supplier: "MediSupply SA",
    description: "Antiagrégant plaquettaire",
  },
  {
    id: 6,
    name: "Metformine 850mg",
    category: "Antidiabétique",
    price: 5500,
    stock: 60,
    supplier: "PharmaTogo Grossiste",
    description: "Traitement du diabète de type 2",
  },
  {
    id: 7,
    name: "Oméprazole 20mg",
    category: "Anti-acide",
    price: 4200,
    stock: 90,
    supplier: "HealthDistrib",
    description: "Inhibiteur de la pompe à protons",
  },
  {
    id: 8,
    name: "Ventoline 100mcg",
    category: "Bronchodilatateur",
    price: 12000,
    stock: 35,
    supplier: "MediSupply SA",
    description: "Traitement de l'asthme",
  },
]

const CATEGORIES = [
  "Tous",
  "Analgésique",
  "Anti-inflammatoire",
  "Antibiotique",
  "Anticoagulant",
  "Antidiabétique",
  "Anti-acide",
  "Bronchodilatateur",
]

export default function MedicinesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [sortBy, setSortBy] = useState("name")

  const filteredMedicines = MOCK_MEDICINES.filter((med) => {
    const matchesSearch =
      med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Tous" || med.category === selectedCategory
    return matchesSearch && matchesCategory
  }).sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name)
    if (sortBy === "price-low") return a.price - b.price
    if (sortBy === "price-high") return b.price - a.price
    return 0
  })

  return (
    <div className="min-h-screen">
      <div className="bg-card border-b border-border py-12 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-2">Catalogue Médicaments</h1>
          <p className="text-muted-foreground text-lg">
            Consultez les prix et disponibilités pour votre approvisionnement
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-8">
        <div className="bg-card p-6 rounded-xl border border-border shadow-sm mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <svg
                className="absolute left-3 top-3 h-5 w-5 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <Input
                placeholder="Rechercher un médicament..."
                className="pl-10 bg-background"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[200px] bg-background">
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-[200px] bg-background">
                <SelectValue placeholder="Trier par" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Nom (A-Z)</SelectItem>
                <SelectItem value="price-low">Prix croissant</SelectItem>
                <SelectItem value="price-high">Prix décroissant</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4 text-muted-foreground">{filteredMedicines.length} médicament(s) disponible(s)</div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedicines.map((medicine) => (
            <Card
              key={medicine.id}
              className="p-6 hover:shadow-lg transition-all border-border hover:border-primary/50"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{medicine.name}</h3>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {medicine.category}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">{medicine.description}</p>

                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Fournisseur:</span> {medicine.supplier}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Stock:</span> {medicine.stock} unités
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-2xl font-bold text-primary">{medicine.price.toLocaleString()} ₣</span>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 hover:text-primary bg-transparent">
                    Détails
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredMedicines.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Aucun médicament trouvé</p>
          </div>
        )}
      </div>
    </div>
  )
}
