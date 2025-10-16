import React from 'react'

export default function ResponsivityDemo() {
    return (
        <div className='min-h-screen p-8 space-y-12'>
            <section>
                <h2 className='text-2x font-bold mb-4'>
                    Responsivity Examples
                </h2>
                <p className='mb-4 text-gray-600'>
                    Resize browser untuk lihat perubahan styling di smartphone (sm), tablet (md), dan desktop (lg).
                </p>

                {/* Flex Direction Responsive */}
                <div className='flex flex-col sm:flex-row gap-4 mb-4'>
                    <div className='bg-red-500 text-white p-4 rounded flex-1'>Item 1</div>
                    <div className='bg-purple-500 text-white p-4 rounded flex-1'>Item 2</div>
                    <div className='bg-blue-500 text-white p-4 rounded flex-1'>Item 3</div>
                </div>

                {/* Grid Layout Responsive */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    <div className='bg-blue-400 text-white p-4 text-center rounded'>1</div>
                    <div className='bg-green-400 text-white p-4 text-center rounded'>2</div>
                    <div className='bg-red-400 text-white p-4 text-center rounded'>3</div>
                    <div className='bg-purple-400 text-white p-4 text-center rounded'>4</div>
                </div>
            </section>
        </div>
    )
}
