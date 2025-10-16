interface IButton {
    label: string,
    onClick?: () => void,
    variant?: 'primary' | 'secondary'
}

export default function Button({ label, onClick, variant }: IButton) {

    const baseStyle = "px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
    const styles = variant === "primary" ? "bg-brown-600 text-white hover:bg-brown-700" : "bg-gray-200 text-gray-700 hover:bg-gray-300"

    return (
        <button
            className={`${baseStyle} ${styles}`}
            onClick={onClick}
        >
            {label}
        </button>
    )
}
