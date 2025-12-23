"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Info } from "lucide-react"

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
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Catalogue Médicaments</h1>
          <p className="text-blue-50 text-lg">Consultez les prix et disponibilités pour votre approvisionnement</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="bg-card p-6 rounded-lg shadow-md mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Rechercher un médicament..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[200px]">
                <Filter className="mr-2 h-4 w-4" />
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
              <SelectTrigger className="w-full md:w-[200px]">
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
            <Card key={medicine.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{medicine.name}</h3>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                    {medicine.category}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">{medicine.description}</p>

                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <span className="font-medium">Fournisseur:</span> {medicine.supplier}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium">Stock disponible:</span> {medicine.stock} unités
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-2xl font-bold text-blue-600">{medicine.price} FCFA</span>
                  <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent">
                    <Info className="mr-2 h-4 w-4" />
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
