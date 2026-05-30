export default function NavTab({ label, ref, onClick }) {
    return (
        <button onClick={onClick} className="transition-all duration-200 text-gray-400 hover:text-white">
            {label}
        </button>
    )
}