'use client'
import React from 'react'
import { useCounter } from '@/hooks/useCounter'

export default function pages() {

  const { increment, decrement, value } = useCounter()

  return (
    <div className='p-5'>
      <section className="border border-slate-300 p-5 flex flex-col">
        <h2 className="text-2xl font-semibold">1. Counter Example (Get Value from Custom Hooks)</h2>
        <p>Count : {value}</p>
        <div className="flex space-x-10 ">
          <button className="p-5 rounded bg-green-600 font-semibold text-white" onClick={increment}>Tambah</button>
          <button className="p-5 rounded bg-red-600 font-semibold text-white" onClick={decrement}>Kurang</button>
        </div>
      </section>
    </div>
  )
}
