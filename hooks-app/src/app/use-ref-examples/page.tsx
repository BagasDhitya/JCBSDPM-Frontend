'use client'
import { useState, useRef } from 'react'

export default function page() {

    // useState -> menyimpan nilai dengan mentrigger rendering pada halaman website
    // useRef -> menyimpan nilai tanpa mentrigger rendering

    const [countState, setCountState] = useState<number>(0)
    const [triggerRef, setTriggerRef] = useState<boolean>(true)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const countRef = useRef<number>(0)

    function incrementState() {
        setCountState(countState + 1)
    }

    function incrementRef() {
        countRef.current = countRef.current + 1
        console.log("Ref count sekarang : ", countRef.current)
    }

    // fokus ke form input pakai ref
    function focusInput() {
        inputRef.current?.focus()
    }

    return (
        <div className='p-5'>
            <section className="border border-slate-300 p-5 flex flex-col">
                <h2 className="text-2xl font-semibold">1. Perbedaan useState VS useRef</h2>
                <div className='flex flex-col space-y-5'>
                    <h3 className='text-lg'>a. useState count</h3>
                    <p className='text-slate-800'>Count : {countState}</p>
                    <button onClick={incrementState} className='bg-blue-500 p-5 rounded-md text-white font-semibold'>Tambah State</button>
                </div>
                <div className='flex flex-col space-y-5'>
                    <h3 className='text-lg'>b. useRef count</h3>
                    <p className='text-slate-800'>Count : {countRef.current}</p>
                    <button onClick={incrementRef} className='bg-purple-500 p-5 rounded-md text-white font-semibold'>Tambah Ref</button>
                    <button onClick={() => setTriggerRef(!triggerRef)} className='bg-green-500 p-5 rounded-md text-white font-semibold'>Trigger useRef</button>
                </div>
            </section>
            <section className="border border-slate-300 p-5 flex flex-col">
                <h2 className="text-2xl font-semibold">2. mengakses DOM langsung pakai useRef</h2>
                <div className='flex flex-col my-5'>
                    <input
                        type="text"
                        ref={inputRef}
                        placeholder='Klik tombol untuk fokus'
                        className='p-3 border border-slate-800 text-slate-800 font-semibold'
                    />
                    <button onClick={focusInput} className='p-3 mt-5 bg-green-500 rounded-md font-semibold text-white'>Fokus ke Input</button>
                </div>
            </section>
        </div>
    )
}
