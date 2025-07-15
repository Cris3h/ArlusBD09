"use client"

import { Heart, Star, Sparkles, Gift, Cake, Crown, Flower, Leaf } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
const [mounted, setMounted] = useState(false)
  const [petalPositions, setPetalPositions] = useState<Array<{ x: number; y: number; delay: number; size: number }>>([])

  useEffect(() => {
    setMounted(true)
    // Generate random petal positions
    const positions = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      size: Math.random() * 0.5 + 0.5,
    }))
    setPetalPositions(positions)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-green-50 p-4 flex items-center justify-center relative overflow-hidden">
      {/* Floating petals background */}
      <div className="absolute inset-0 overflow-hidden">
        {petalPositions.map((petal, i) => (
          <div
            key={i}
            className="absolute animate-petal-fall opacity-60"
            style={{
              left: `${petal.x}%`,
              top: `${petal.y}%`,
              animationDelay: `${petal.delay}s`,
              transform: `scale(${petal.size})`,
            }}
          >
            <div className="w-3 h-3 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full shadow-sm"></div>
          </div>
        ))}
      </div>

      {/* Large decorative flowers */}
      <div className="absolute top-16 left-8 animate-flower-bloom" style={{ animationDelay: "1s" }}>
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full shadow-lg opacity-70"></div>
          <div className="absolute top-2 left-2 w-12 h-12 bg-gradient-to-br from-white to-pink-100 rounded-full"></div>
          <div className="absolute top-6 left-6 w-4 h-4 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full"></div>
        </div>
      </div>

      <div className="absolute top-32 right-12 animate-flower-bloom" style={{ animationDelay: "2s" }}>
        <div className="text-6xl animate-flower-sway opacity-80">🌸</div>
      </div>

      <div className="absolute bottom-24 left-16 animate-flower-bloom" style={{ animationDelay: "1.5s" }}>
        <div className="text-5xl animate-flower-rotate">🌺</div>
      </div>

      <div className="absolute bottom-16 right-20 animate-flower-bloom" style={{ animationDelay: "3s" }}>
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-200 to-lavender-300 rounded-full shadow-lg opacity-75"></div>
          <div className="absolute top-2 left-2 w-8 h-8 bg-gradient-to-br from-white to-purple-100 rounded-full"></div>
          <div className="absolute top-4 left-4 w-4 h-4 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full"></div>
        </div>
      </div>

      {/* Floating leaves */}
      <div className="absolute top-1/3 left-1/4 animate-leaf-dance" style={{ animationDelay: "2.5s" }}>
        <Leaf className="w-8 h-8 text-green-300 opacity-60" />
      </div>
      <div className="absolute top-2/3 right-1/3 animate-leaf-dance" style={{ animationDelay: "4s" }}>
        <Leaf className="w-6 h-6 text-emerald-300 opacity-50" />
      </div>

      <div className="max-w-lg w-full relative">
        {/* Main card with floral glass morphism */}
        <div className="bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden relative border-2 border-white/50 animate-card-entrance">
          {/* Soft shimmer overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-soft-shimmer" />

          {/* Floral border decoration */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-pink-200 via-purple-200 via-blue-200 to-green-200 animate-rainbow-flow"></div>
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-green-200 via-blue-200 via-purple-200 to-pink-200 animate-rainbow-flow"></div>

          {/* Corner flowers */}
          <div className="absolute top-4 left-4 text-pink-300 animate-corner-bloom">
            <Flower className="w-8 h-8 drop-shadow-lg" />
          </div>
          <div
            className="absolute top-4 right-4 text-purple-300 animate-corner-bloom"
            style={{ animationDelay: "0.5s" }}
          >
            <Crown className="w-8 h-8 drop-shadow-lg" />
          </div>
          <div
            className="absolute bottom-4 left-4 text-green-300 animate-corner-bloom"
            style={{ animationDelay: "1s" }}
          >
            <Leaf className="w-7 h-7 drop-shadow-lg" />
          </div>
          <div
            className="absolute bottom-4 right-4 text-rose-300 animate-corner-bloom"
            style={{ animationDelay: "1.5s" }}
          >
            <Heart className="w-7 h-7 drop-shadow-lg" fill="currentColor" />
          </div>

          {/* Header with soft gradient */}
          <div className="bg-gradient-to-r from-pink-200 via-purple-200 via-blue-200 to-green-200 bg-[length:300%_300%] animate-pastel-gradient p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-6 animate-cake-bounce">
                <div className="relative">
                  <Cake className="w-16 h-16 text-white drop-shadow-2xl" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full animate-sparkle-pulse" />
                  <div
                    className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full animate-sparkle-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />
                </div>
              </div>
              <h1 className="text-5xl font-bold text-white mb-4 font-serif drop-shadow-2xl animate-title-glow">
                ¡Estás Invitadx!
              </h1>
              <div className="flex justify-center space-x-4 animate-sparkle-dance">
                <div className="text-4xl animate-flower-spin">🌸</div>
                <Star className="w-8 h-8 text-yellow-200" fill="currentColor" />
                <div className="text-4xl animate-flower-spin" style={{ animationDelay: "1s" }}>
                  🌼
                </div>
              </div>
            </div>
          </div>

          {/* Main content with floral background */}
          <div className="p-10 space-y-8 bg-gradient-to-b from-white/30 to-white/20 relative">
            {/* Decorative floral pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 left-8 text-6xl text-pink-400">🌸</div>
              <div className="absolute top-16 right-12 text-5xl text-purple-400">🌺</div>
              <div className="absolute bottom-20 left-16 text-4xl text-blue-400">🌼</div>
              <div className="absolute bottom-8 right-8 text-5xl text-green-400">🌻</div>
            </div>

            {/* Birthday girl section */}
            <div className="text-center animate-content-bloom relative z-10">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-full mb-6 shadow-2xl animate-gift-glow">
                <Gift className="w-12 h-12 text-white drop-shadow-lg" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-3 animate-name-shimmer">
                ¡Cumpleaños de Arlu!
              </h2>
              <div className="text-3xl font-bold text-gray-600 drop-shadow-lg animate-age-bounce mb-2">
                🎂 9 Años 🎂
              </div>
              <p className="text-gray-600 font-medium text-lg drop-shadow-sm">
                ¡Veni a festejarlo con nosotros!
              </p>
            </div>

            {/* Party details with floral cards */}
            <div className="space-y-6 relative z-10">
              <div className="bg-gradient-to-br from-pink-100/80 via-purple-100/80 to-blue-100/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/40 shadow-xl animate-card-bloom hover:scale-105 transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex items-center space-x-5">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full flex items-center justify-center shadow-lg animate-icon-pulse">
                      <span className="text-white font-bold text-2xl">📅</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-700 text-xl drop-shadow-sm">Cuándo</p>
                      <p className="text-gray-600 font-medium text-lg">Domingo 20/07 de 14 a 17</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-5">
                    <div
                      className="w-16 h-16 bg-gradient-to-br from-purple-300 to-indigo-400 rounded-full flex items-center justify-center shadow-lg animate-icon-pulse"
                      style={{ animationDelay: "0.5s" }}
                    >
                      <span className="text-white font-bold text-2xl">📍</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-700 text-xl drop-shadow-sm">Dónde (hace click en la dirección)</p>
                      <Link href='https://maps.app.goo.gl/GrYM2dRMFStKSmEN7' target="_blank" className="text-blue-500 hover:text-blue-700 transition-colors">
                      <p className="text-gray-600 font-medium text-lg">Juarez Celman 1064 - Ricardone</p>
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center space-x-5">
                    <div
                      className="w-16 h-16 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full flex items-center justify-center shadow-lg animate-icon-pulse"
                      style={{ animationDelay: "1s" }}
                    >
                      <span className="text-white font-bold text-2xl">🌸</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-700 text-xl drop-shadow-sm">Tema</p>
                      <p className="text-gray-600 font-medium text-lg">Margarita!</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Activities with garden theme */}
              <div
                className="bg-gradient-to-br from-yellow-100/80 via-pink-100/80 to-purple-100/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/40 shadow-xl animate-card-bloom hover:scale-105 transition-all duration-500"
                style={{ animationDelay: "0.3s" }}
              >
                <h3 className="font-bold text-gray-700 text-2xl mb-6 flex items-center drop-shadow-sm">
                  <Sparkles className="w-8 h-8 text-yellow-400 mr-4 animate-sparkle-spin" />
                  Veni a disfrutar de las mejores actividades!
                </h3>
                <ul className="text-gray-600 space-y-3 font-medium text-lg">
                  <li className="flex items-center animate-activity-bloom" style={{ animationDelay: "0.6s" }}>
                    <span className="text-3xl mr-4">🎨</span> Glitter bar
                  </li>
                  <li className="flex items-center animate-activity-bloom" style={{ animationDelay: "0.8s" }}>
                    <span className="text-3xl mr-4">🦋</span> Búsqueda del tesoro 
                  </li>
                  <li className="flex items-center animate-activity-bloom" style={{ animationDelay: "1s" }}>
                    <span className="text-3xl mr-4">🌸</span> Tattoo Glitters
                  </li>
                </ul>
              </div>
            </div>

            {/* RSVP with soft glow */}
            <div
              className="text-center bg-gradient-to-br from-purple-100/80 via-pink-100/80 to-blue-100/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/40 shadow-xl animate-card-bloom hover:shadow-2xl transition-all duration-500 relative z-10"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="animate-rsvp-glow rounded-2xl p-4">
                <p className="font-bold text-gray-700 text-2xl mb-4 drop-shadow-sm">¡Confirma tu asistencia!</p>

              </div>
            </div>

            {/* Bottom floral decoration */}
            <div className="flex justify-center space-x-6 pt-6 relative z-10">
              <div className="text-4xl animate-final-bloom" style={{ animationDelay: "0s" }}>
                🌸
              </div>
              <Heart
                className="w-10 h-10 text-pink-300 animate-final-bloom drop-shadow-lg"
                fill="currentColor"
                style={{ animationDelay: "0.2s" }}
              />
              <div className="text-4xl animate-final-bloom" style={{ animationDelay: "0.4s" }}>
                🌼
              </div>
              <Sparkles
                className="w-10 h-10 text-yellow-300 animate-final-bloom drop-shadow-lg"
                fill="currentColor"
                style={{ animationDelay: "0.6s" }}
              />
              <div className="text-4xl animate-final-bloom" style={{ animationDelay: "0.8s" }}>
                🌺
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
