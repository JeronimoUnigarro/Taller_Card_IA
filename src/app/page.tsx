import ProductCard from "../components/ProductCard"

export default function Home() {
  const hydroSyncBottle = {
    title: "HydroSync Pro Water Bottle",
    description:
      "Stay on top of your daily water intake with this innovative bottle featuring built-in hydration reminders and Bluetooth connectivity.",
    price: 137,
    image: "/images/HPAS2.jpg", // Cambié la ruta aquí para que sea coherente con la estructura 'public/imges'
    sizeOptions: [
      { value: "700ml", label: "700ml" },
      { value: "500ml", label: "500ml" },
      { value: "900ml", label: "900ml" },
      { value: "1.0ltr", label: "1.0ltr" },
    ],
    defaultSize: "900ml",
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-orange-50 p-4">
      <ProductCard {...hydroSyncBottle} />
    </main>
  )
}
