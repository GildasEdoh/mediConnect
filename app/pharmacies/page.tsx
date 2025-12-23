"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Clock, Navigation, Search } from "lucide-react"

const MOCK_PHARMACIES = [
  {
    id: 1,
    name: "Pharmacie Centrale",
    address: "Avenue de la Libération, Lomé",
    phone: "+228 22 21 23 45",
    hours: "24/7",
    lat: 6.1319,
    lng: 1.2228,
    distance: 0.5,
  },
  {
    id: 2,
    name: "Pharmacie du Nord",
    address: "Boulevard du 13 Janvier, Lomé",
    phone: "+228 22 21 34 56",
    hours: "8h - 20h",
    lat: 6.1419,
    lng: 1.2328,
    distance: 1.2,
  },
  {
    id: 3,
    name: "Pharmacie de la Paix",
    address: "Rue de la Paix, Lomé",
    phone: "+228 22 21 45 67",
    hours: "7h - 22h",
    lat: 6.1219,
    lng: 1.2128,
    distance: 0.8,
  },
  {
    id: 4,
    name: "Pharmacie du Sud",
    address: "Avenue des Cocotiers, Lomé",
    phone: "+228 22 21 56 78",
    hours: "8h - 19h",
    lat: 6.1119,
    lng: 1.2028,
    distance: 1.5,
  },
  {
    id: 5,
    name: "Pharmacie de Garde",
    address: "Quartier Administratif, Lomé",
    phone: "+228 22 21 67 89",
    hours: "24/7",
    lat: 6.1379,
    lng: 1.2178,
    distance: 0.9,
  },
]

export default function PharmaciesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPharmacy, setSelectedPharmacy] = useState<number | null>(null)

  const filteredPharmacies = MOCK_PHARMACIES.filter(
    (pharmacy) =>
      pharmacy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pharmacy.address.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Pharmacies à Proximité</h1>
          <p className="text-teal-50 text-lg">Trouvez la pharmacie la plus proche de vous</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* List Section */}
          <div className="space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Rechercher une pharmacie..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="space-y-4">
              {filteredPharmacies.map((pharmacy) => (
                <Card
                  key={pharmacy.id}
                  className={`p-6 cursor-pointer hover:shadow-lg transition-all ${
                    selectedPharmacy === pharmacy.id ? "ring-2 ring-teal-600" : ""
                  }`}
                  onClick={() => setSelectedPharmacy(pharmacy.id)}
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold">{pharmacy.name}</h3>
                      <span className="text-sm text-teal-600 font-medium">{pharmacy.distance} km</span>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>{pharmacy.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4 flex-shrink-0" />
                        <span>{pharmacy.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4 flex-shrink-0" />
                        <span>{pharmacy.hours}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t flex gap-2">
                      <Button className="flex-1 bg-teal-600 hover:bg-teal-700">
                        <Navigation className="mr-2 h-4 w-4" />
                        Itinéraire
                      </Button>
                      <Button variant="outline" className="flex-1 bg-transparent">
                        <Phone className="mr-2 h-4 w-4" />
                        Appeler
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:sticky lg:top-4 h-[600px]">
            <Card className="h-full p-4">
              <div className="h-full bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Simple map placeholder with markers */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-teal-100">
                  {filteredPharmacies.map((pharmacy, idx) => (
                    <div
                      key={pharmacy.id}
                      className={`absolute w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all ${
                        selectedPharmacy === pharmacy.id
                          ? "bg-teal-600 ring-4 ring-teal-200 scale-125"
                          : "bg-blue-600 hover:scale-110"
                      }`}
                      style={{
                        top: `${20 + idx * 15}%`,
                        left: `${25 + idx * 12}%`,
                      }}
                      onClick={() => setSelectedPharmacy(pharmacy.id)}
                    >
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                  ))}
                </div>
                <div className="relative z-10 text-center p-8 bg-white/90 rounded-lg">
                  <MapPin className="h-12 w-12 text-teal-600 mx-auto mb-3" />
                  <p className="text-muted-foreground">Carte interactive des pharmacies</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {filteredPharmacies.length} pharmacie(s) trouvée(s)
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
