import Button from "./Button";

interface ICard {
    id: number,
    title: string,
    image: string,
    price: number,
    description: string,
    onDetail?: (id: number) => void
}

import React from 'react'

export default function Card({ id, title, image, price, description, onDetail }: ICard) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
                src={image}
                alt={title}
                className="h-48 w-full object-cover"
            />
            <div className="p-4 space-y-2">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
                <p className="text-brown-700 font-semibold">
                    Rp{price.toLocaleString()}
                </p>
                <Button
                    label="See Detail"
                    onClick={() => onDetail?.(id)}
                />
            </div>
        </div>
    )
}
