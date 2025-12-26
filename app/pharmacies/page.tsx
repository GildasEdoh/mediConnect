"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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
      <div className="bg-card border-b border-border py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-2">Pharmacies à Proximité</h1>
          <p className="text-muted-foreground text-lg">Trouvez la pharmacie la plus proche de vous</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* List Section */}
          <div className="space-y-6">
            <div className="relative">
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
                placeholder="Rechercher une pharmacie..."
                className="pl-10 bg-background"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="space-y-4">
              {filteredPharmacies.map((pharmacy) => (
                <Card
                  key={pharmacy.id}
                  className={`p-6 cursor-pointer hover:shadow-lg transition-all border-border ${selectedPharmacy === pharmacy.id ? "ring-2 ring-primary" : ""
                    }`}
                  onClick={() => setSelectedPharmacy(pharmacy.id)}
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-foreground">{pharmacy.name}</h3>
                      <span className="text-sm text-primary font-medium">{pharmacy.distance} km</span>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2 text-muted-foreground">
                        <svg
                          className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                        </svg>
                        <span>{pharmacy.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <svg
                          className="h-4 w-4 flex-shrink-0 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948-.684l1.498-4.493a1 1 0 011.502-.684l1.498 4.493a1 1 0 00.948.684H17a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                          />
                        </svg>
                        <span>{pharmacy.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <svg
                          className="h-4 w-4 flex-shrink-0 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{pharmacy.hours}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-border flex gap-2">
                      <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg">
                        Itinéraire
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-primary text-primary hover:bg-primary/5 hover:text-primary bg-transparent rounded-lg"
                      >
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
            <Card className="h-full p-4 border-border">
              <div className="h-full bg-muted rounded-xl flex items-center justify-center relative overflow-hidden border border-border">
                {/* Simple map placeholder with markers */}
                <div className="absolute inset-0 bg-background">
                  {filteredPharmacies.map((pharmacy, idx) => (
                    <div
                      key={pharmacy.id}
                      className={`absolute w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all ${selectedPharmacy === pharmacy.id
                          ? "bg-primary ring-4 ring-primary/20 scale-125"
                          : "bg-secondary hover:scale-110"
                        }`}
                      style={{
                        top: `${20 + idx * 15}%`,
                        left: `${25 + idx * 12}%`,
                      }}
                      onClick={() => setSelectedPharmacy(pharmacy.id)}
                    >
                      <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                    </div>
                  ))}
                </div>
                <div className="relative z-10 text-center p-8 bg-card rounded-lg border border-border">
                  <svg
                    className="h-12 w-12 text-primary mx-auto mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                  <p className="text-muted-foreground font-medium">Carte interactive des pharmacies</p>
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
