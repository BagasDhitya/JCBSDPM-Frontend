'use client'
import { useRouter } from "next/navigation"
import Card from "@/components/Card"
import coffeData from "@/dummy/coffe.json"

export default function Menu() {
    const router = useRouter()

    function handleDetail(id: number) {
        router.push(`menu/${id}`)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Coffee Menu</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {
                        coffeData?.map((data, key) => (
                            <Card
                                key={key}
                                id={data.id}
                                title={data.title}
                                image={data.image}
                                description={data.description}
                                price={data.price}
                                onDetail={handleDetail}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
