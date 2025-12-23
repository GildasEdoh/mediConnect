import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Search, MapPin, Package, MessageSquare, Shield, TrendingUp } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight text-balance">
                Plateforme d'approvisionnement pour pharmacies au Togo
              </h1>
              <p className="text-xl text-blue-50 leading-relaxed">
                Gérez vos stocks, recherchez des médicaments et passez vos commandes d'approvisionnement en ligne.
                Service rapide et fiable pour les professionnels.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/medicines">
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold">
                    <Search className="mr-2 h-5 w-5" />
                    Catalogue médicaments
                  </Button>
                </Link>
                <Link href="/pharmacies">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    <MapPin className="mr-2 h-5 w-5" />
                    Réseau pharmacies
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/pharmacy-supply-management-system.jpg"
                alt="MediConnect Pharmacy Platform"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Services pour Pharmaciens</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Search className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Catalogue Médicaments</h3>
              <p className="text-muted-foreground leading-relaxed">
                Consultez notre catalogue complet de médicaments avec prix et disponibilités en temps réel.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Package className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gestion des Stocks</h3>
              <p className="text-muted-foreground leading-relaxed">
                Suivez vos niveaux de stock et recevez des alertes pour vos commandes d'approvisionnement.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Commandes Grossiste</h3>
              <p className="text-muted-foreground leading-relaxed">
                Passez vos commandes d'approvisionnement en gros directement auprès de nos fournisseurs.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <MapPin className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Réseau National</h3>
              <p className="text-muted-foreground leading-relaxed">
                Accédez à notre réseau de pharmacies partenaires à travers tout le Togo.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <MessageSquare className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Assistant Médical IA</h3>
              <p className="text-muted-foreground leading-relaxed">
                Obtenez des informations sur les médicaments grâce à notre assistant intelligent disponible 24/7.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sécurisé et Conforme</h3>
              <p className="text-muted-foreground leading-relaxed">
                Plateforme sécurisée conforme aux normes pharmaceutiques et de protection des données.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-balance">Rejoignez MediConnect</h2>
          <p className="text-xl text-blue-50 leading-relaxed">
            Des centaines de pharmacies togolaises font confiance à MediConnect pour leur approvisionnement.
          </p>
          <Link href="/pharmacy">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold">
              Accéder à l'espace pharmacien
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
