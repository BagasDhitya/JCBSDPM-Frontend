'use client'
import { useState, useMemo, useEffect } from 'react'

export default function Page() {
    const [number, setNumber] = useState<number>(50000)
    const [useMemoActive, setUseMemoActive] = useState<boolean>(false)
    const [timeTaken, setTimeTaken] = useState<number>(0)

    // fungsi berat
    function countPrime(limit: number) {
        let count: number = 0
        for (let i: number = 2; i <= limit; i++) {
            let isPrime: boolean = true
            for (let j: number = 2; j * j <= i; j++) {
                if (i % j === 0) isPrime = false
            }
            if (isPrime) count++
        }
        return count
    }

    // hitung waktu hanya untuk versi aktif
    const start = performance.now()
    const primesWithoutMemo = countPrime(number)
    const primesWithMemo = useMemo(() => countPrime(number), [number])
    const primesResult = useMemoActive ? primesWithMemo : primesWithoutMemo
    const end = performance.now()

    // ukur waktu setelah render (bukan di dalam perhitungan)
    useEffect(() => {
        setTimeTaken(end - start)
    }, [number, useMemoActive]) // hanya berubah jika salah satu berubah

    return (
        <div className='p-5'>
            <section className="border border-slate-300 p-5 flex flex-col">
                <h2 className="text-2xl font-semibold">Perbandingan useMemo VS tanpa useMemo</h2>
                <div className='flex flex-col space-y-3 my-3'>
                    <p>Hitung jumlah bilangan prima dari 1 sampai <b>{number.toLocaleString()}</b></p>
                    <input
                        type="number"
                        value={number}
                        onChange={(e) => setNumber(Number(e.target.value))}
                        className='p-3 border border-slate-400 text-slate-800'
                    />
                    <button
                        onClick={() => setUseMemoActive(false)}
                        className='p-3 rounded-md bg-red-500 text-white font-semibold'
                    >
                        Tanpa useMemo
                    </button>
                    <button
                        onClick={() => setUseMemoActive(true)}
                        className='p-3 rounded-md bg-blue-500 text-white font-semibold'
                    >
                        Dengan useMemo
                    </button>
                </div>
                <div className='flex flex-col space-y-3 my-3'>
                    <h3 className='text-2xl text-slate-800'>
                        Jumlah bilangan prima : {primesResult}
                    </h3>
                    <p className='text-green-500 font-semibold'>
                        Waktu proses : {timeTaken.toFixed(2)} ms
                    </p>
                </div>
            </section>
        </div>
    )
}


// 1 2 3 4 5 6 7 8 9 10
// 1 2 3 4 5 6 7 8 9 10