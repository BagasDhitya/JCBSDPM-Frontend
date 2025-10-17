'use client'
import { useState } from "react"
export default function page() {
    // contoh 1 : usestate dipakai untuk menyimpan angka dan menambah nilainya saat tombol ditekan
    const [count, setCount] = useState<number>(0)

    // contoh 2 : menampilkan/menyembunyikan teks
    const [isVisible, setIsVisible] = useState<boolean>(true)

    // contoh 3 : menyimpan teks dari input field dan mengupdate setiap kali user mengetik
    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    function decreaseCount() {
        if (count <= 0) {
            alert('Number cannot be negative')
        } else {
            setCount(count - 1)
        }
    }

    return (
        <div className="p-5">
            {/* Counter */}
            <section className="border border-slate-300 p-5">
                <h2 className="text-2xl font-semibold">1. Counter</h2>
                <p>Count : {count}</p>
                <div className="flex space-x-10 ">
                    <button className="p-5 rounded bg-green-600 font-semibold text-white" onClick={() => setCount(count + 1)}>Tambah</button>
                    <button className="p-5 rounded bg-red-600 font-semibold text-white" onClick={decreaseCount}>Kurang</button>
                </div>
            </section>
            {/* Show/Hide Text */}
            <section className="border border-slate-300 p-5">
                <h2 className="text-2xl font-semibold">2. Show / Hide Text</h2>
                <p className="text-slate-800">{isVisible ? "Hello, I'm Visible!" : ""}</p>
                <button
                    className="p-5 rounded bg-purple-500 font-semibold text-white"
                    onClick={() => setIsVisible(!isVisible)}
                >{isVisible ? "Hide" : "Show"}</button>
            </section>
            {/* Form Input Handling */}
            <section className="border border-slate-300 p-5">
                <h2 className="text-2xl font-semibold">3. Form Input Handling </h2>
                <div className="mt-5 flex flex-col space-y-5">
                    <p className="text-slate-800 font-semibold">{name}</p>
                    <input
                        type="text"
                        className="border border-slate-200 rounded-md p-5 text-slate-800"
                        placeholder="Ketik nama kamu ..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <div className="flex space-x-3">
                        <input
                            type={`${isVisible ? 'text' : 'password'}`}
                            className="border border-slate-200 rounded-md p-5 text-slate-800"
                            placeholder="Ketik password kamu ..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? "👀" : "✔︎"}</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
