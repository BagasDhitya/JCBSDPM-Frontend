import Button from "@/components/Button"
import coffeData from "@/dummy/coffe.json"
import Link from "next/link"

interface DetailPageProps {
    params: { id: string }
}

export default function MenuDetail({ params }: DetailPageProps) {
    const coffeId = parseInt(params.id)
    const coffe = coffeData.find((c) => c.id === coffeId)

    if (!coffe) {
        return (
            <div className="text-red-500">
                Coffe Not Found
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                    <img
                        src={coffe.image}
                        alt={coffe.title}
                        className="w-full h-auto rounded-xl shadow-md object-cover"
                    />

                    <div className="md:w-1/2 flex flex-col justify-between">
                        <div className="space-y-4">
                            <h1 className="text-3xl md:text-4xl font-bold">{coffe.title}</h1>
                            <p>Rp{coffe.price.toLocaleString()}</p>
                            <p className="text-gray-700">{coffe.description}</p>
                        </div>
                        <div className="mt-6 flex gap-4">
                            <Link href={'/menu'}>
                                <Button
                                    label="Back to Menu"
                                    variant="secondary"
                                />
                            </Link>
                            <Button label="Order Now" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
