import React from 'react'

export default function TailwindDemo() {
    return (
        <div className='min-h-screen p-8 space-y-12'>

            {/* Width Examples */}
            <section>
                <h2 className='text-2xl font-bold mb-4'>Width Examples</h2>
                <div className='flex gap-4'>
                    <div className='bg-blue-500 text-white w-20 p-2'>w-20</div>
                    <div className='bg-green-500 text-white w-40 p-2'>w-40</div>
                    <div className='bg-red-500 text-white w-1/2 p-2 text-center'>w-1/2</div>
                </div>
            </section>

            {/* Height Examples */}
            <section>
                <h2 className='text-2xl font-bold mb-4'>Height Examples</h2>
                <div className='flex gap-4 items-end'>
                    <div className='bg-blue-500 text-white h-12 w-20 text-center'>h-12</div>
                    <div className='bg-green-500 text-white h-24 w-20 text-center'>h-24</div>
                    <div className='bg-red-500 text-white h-40 w-20 text-center'>h-40</div>
                </div>
            </section>

            {/* Background Examples */}
            <section>
                <h2 className='text-2xl font-bold mb-4'>Background Examples</h2>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='bg-gradient-to-r from-pink-500 to-blue-500 text-white p-4 rounded'>gradient</div>
                    <div className="bg-[url('https://i.pinimg.com/736x/be/e6/45/bee645ec5f8141ec46617f0003de3ecf.jpg')] bg-cover bg-center text-white p-4 rounded">background image</div>
                    <div className='bg-transparent border border-gray-500 p-4 rounded'>bg-transparent</div>
                </div>
            </section>

            {/* Color Text Examples */}
            <section>
                <h2 className='text-2xl font-bold mb-4'>Color Examples</h2>
                <p className='text-red-500'>text-red-500</p>
                <p className='text-green-600'>text-green-600</p>
                <p className='text-purple-800'>text-purple-800</p>
            </section>

            {/* Position Examples */}
            <section className='relative h-40 border border-gray-400'>
                <h2 className='text-2xl font-bold mb-4'>Position Examples</h2>
                <div className='absolute top-2 left-2 bg-blue-500 text-white p-2'>absolute</div>
                <div className='relative top-8 left-8 bg-green-600 text-white p-2'>relative</div>
                <div className='fixed bottom-4 right-4 bg-red-700 text-white p-2'>fixed</div>
                <div className='sticky top-2 right-2 bg-purple-800 text-white p-2'>sticky</div>
            </section>

            {/* Margin Examples */}
            <section>
                <h2 className='text-2xl font-bold mb-4'>Margin Examples</h2>
                <div className='bg-blue-500 text-white m-2 p-2'>m-2</div>
                <div className='bg-green-500 text-white mx-4 p-2'>mx-4</div>
                <div className='bg-red-500 text-white my-6 p-2'>my-6</div>
            </section>

            {/* Padding Examples */}
            <section>
                <h2 className='text-2xl font-bold mb-4'>Padding Examples</h2>
                <div className='flex flex-wrap gap-4'>
                    <div className='bg-blue-500 text-white p-2'>p-2</div>
                    <div className='bg-green-500 text-white px-6'>px-6</div>
                    <div className='bg-red-500 text-white py-8'>py-8</div>
                </div>
            </section>

            {/* Custom Color Examples */}
            <section>
                <h2 className='text-2xl font-bold mb-4'>Custom Color Examples</h2>
                <div className='p-5 border bg-bermuda'>
                    Custom Color Example : Bermuda
                </div>
                <div className='p-5 border bg-tahiti'>
                    Custom Color Example : Tahiti
                </div>
                <div className='p-5 border bg-midnight text-bermuda'>
                    Custom Color Example : Midnight
                </div>
            </section>

            {/* Flex Examples */}
            <section>
                <h2 className='text-2xl font-bold mb-4'>Flex Examples</h2>
                <div className='flex justify-between mt-4 bg-gray-100 p-2'>
                    <div className='bg-blue-400 text-white p-2'>Item 1</div>
                    <div className='bg-green-400 text-white p-2'>Item 2</div>
                    <div className='bg-red-400 text-white p-2'>Item 3</div>
                </div>
                <div className='flex justify-evenly mt-4 bg-gray-100 p-2'>
                    <div className='bg-blue-400 text-white p-2'>Item 1</div>
                    <div className='bg-green-400 text-white p-2'>Item 2</div>
                    <div className='bg-red-400 text-white p-2'>Item 3</div>
                </div>
                <div className='flex justify-center mt-4 bg-gray-100 p-2'>
                    <div className='bg-blue-400 text-white p-2'>Item 1</div>
                    <div className='bg-green-400 text-white p-2'>Item 2</div>
                    <div className='bg-red-400 text-white p-2'>Item 3</div>
                </div>
                <div className='flex justify-start mt-4 bg-gray-100 p-2'>
                    <div className='bg-blue-400 text-white p-2'>Item 1</div>
                    <div className='bg-green-400 text-white p-2'>Item 2</div>
                    <div className='bg-red-400 text-white p-2'>Item 3</div>
                </div>
                <div className='flex justify-end mt-4 bg-gray-100 p-2'>
                    <div className='bg-blue-400 text-white p-2'>Item 1</div>
                    <div className='bg-green-400 text-white p-2'>Item 2</div>
                    <div className='bg-red-400 text-white p-2'>Item 3</div>
                </div>
            </section>

            {/* Grid Examples */}
            <section>
                <h2 className='text-2xl font-bold mb-4'>Grid Examples</h2>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='bg-blue-500 text-white p-4 text-center'>col-span-1</div>
                    <div className='bg-green-500 text-white p-4 text-center'>col-span-1</div>
                    <div className='bg-red-500 text-white p-4 text-center'>col-span-1</div>
                </div>
                <div className='grid grid-cols-4 gap-2 mt-4'>
                    <div className='col-span-2 bg-blue-400 text-white p-4 text-center'>col-span-2</div>
                    <div className='col-span-1 bg-green-400 text-white p-4 text-center'>col-span-1</div>
                    <div className='col-span-1 bg-red-400 text-white p-4 text-center'>col-span-1</div>
                    <div className='col-span-1 bg-purple-400 text-white p-4 text-center'>col-span-1</div>
                    <div className='col-span-1 bg-slate-400 text-white p-4 text-center'>col-span-1</div>
                    <div className='col-span-1 bg-gray-400 text-white p-4 text-center'>col-span-1</div>
                    <div className='col-span-1 bg-amber-400 text-white p-4 text-center'>col-span-1</div>
                </div>
            </section>
        </div>
    )
}
