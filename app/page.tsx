import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Captivating without image */}
      <section className="relative pt-32 pb-24 px-6 md:px-8 bg-gradient-to-b from-card via-background to-background border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8 text-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-semibold text-primary tracking-wide uppercase">Santé numérique</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight text-balance text-foreground">
                Connectez-vous à votre pharmacie
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                MediConnect révolutionne l'accès aux médicaments au Togo. Une plateforme simple, sécurisée et
                transparente pour pharmaciens et patients.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link href="/medicines">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full"
                >
                  Découvrir les médicaments
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/pharmacies">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary/5 rounded-full bg-transparent"
                >
                  Trouver une pharmacie
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 md:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">500+</p>
              <p className="text-muted-foreground">Pharmacies partenaires</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">10K+</p>
              <p className="text-muted-foreground">Médicaments disponibles</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">24/7</p>
              <p className="text-muted-foreground">Assistant pharmacien IA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 md:px-8 bg-card border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Tout ce dont vous avez besoin</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Une plateforme conçue pour simplifier la gestion des médicaments et améliorer la santé.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <Card className="p-8 border-border hover:border-primary/50 transition-colors">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Recherche Avancée</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Trouvez les médicaments en quelques secondes avec notre système de recherche intelligent.
                </p>
              </div>
            </Card>

            {/* Feature 2 */}
            <Card className="p-8 border-border hover:border-primary/50 transition-colors">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Prix Transparents</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Consultez les prix en temps réel auprès de plusieurs pharmacies partenaires.
                </p>
              </div>
            </Card>

            {/* Feature 3 */}
            <Card className="p-8 border-border hover:border-primary/50 transition-colors">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Gestion des Stocks</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Suivi en temps réel de vos stocks avec alertes de commande automatiques.
                </p>
              </div>
            </Card>

            {/* Feature 4 */}
            <Card className="p-8 border-border hover:border-primary/50 transition-colors">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Assistant IA</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Consultez notre assistant pharmaceutique expert 24h/24, 7j/7.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose MediConnect */}
      <section className="py-24 px-6 md:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Pourquoi choisir MediConnect ?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4 text-center">
              <div className="text-5xl font-bold text-primary">✓</div>
              <h3 className="text-lg font-semibold text-foreground">100% Sécurisé</h3>
              <p className="text-muted-foreground">
                Plateforme conforme aux normes pharmaceutiques nationales et internationales.
              </p>
            </div>
            <div className="space-y-4 text-center">
              <div className="text-5xl font-bold text-primary">✓</div>
              <h3 className="text-lg font-semibold text-foreground">Réseau Fiable</h3>
              <p className="text-muted-foreground">Partenaires vérifiés et fiables à travers tout le Togo.</p>
            </div>
            <div className="space-y-4 text-center">
              <div className="text-5xl font-bold text-primary">✓</div>
              <h3 className="text-lg font-semibold text-foreground">Support Continu</h3>
              <p className="text-muted-foreground">Assistance 24/7 pour répondre à tous vos besoins pharmaceutiques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-balance">Prêt à rejoindre MediConnect ?</h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Rejoignez les centaines de pharmacies qui font confiance à notre plateforme.
            </p>
          </div>
          <Link href="/pharmacy">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-full"
            >
              Accéder à l'espace pharmacien
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-16 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground text-lg">MediConnect</h3>
              <p className="text-sm text-muted-foreground">Plateforme de santé numérique pour le Togo.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground text-sm">Produits</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/medicines" className="hover:text-foreground transition-colors">
                    Catalogue
                  </Link>
                </li>
                <li>
                  <Link href="/pharmacies" className="hover:text-foreground transition-colors">
                    Réseau
                  </Link>
                </li>
                <li>
                  <Link href="/chat" className="hover:text-foreground transition-colors">
                    Assistant IA
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground text-sm">Entreprise</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground text-sm">Légal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Confidentialité
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 MediConnect. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
