'use client'
import { useState, useEffect } from "react"
export default function page() {
    const [count, setCount] = useState<number>(0)

    // fase mounting : ketika component muncul sekali
    useEffect(() => {
        console.log("✅ Komponen baru saja dimount (sekali saja)")
    }, [])

    // fase updating : ketika state 'count' berubah
    useEffect(() => {
        console.log("🔄 Count berubah menjadi : ", count)
    }, [count]) // -> array dependencies, untuk meletakkan state yang menjadi pemicu rendering fase updating

    // fase unmounting : jalan saat komponen dihapus dari DOM
    useEffect(() => {
        return () => {
            console.log("❌ Komponen dihapus (unmount)")
        }
    }, [])



    return (
        <div className='p-5'>
            <section className="border border-slate-300 p-5 flex flex-col">
                <h2 className="text-2xl font-semibold">1. Fase Mounting (Jalan Sekali)</h2>
                <p>Coba buka console, maka kamu akan lihat log dari efek pertama</p>
            </section>
            <section className="border border-slate-300 p-5 flex flex-col">
                <h2 className="text-2xl font-semibold">2. Fase Updating (Tiap Kali Count Berubah)</h2>
                <p className="text-slate-800 font-semibold">Count : {count}</p>
                <div className="mt-5 space-y-3">
                    <button onClick={() => setCount(count + 1)} className="p-3 bg-green-500 rounded font-semibold text-white">Tambah</button>
                    <button onClick={() => setCount(count - 1)} className="p-3 bg-red-500 rounded font-semibold text-white">Kurang</button>
                </div>
            </section>
        </div>
    )
}
