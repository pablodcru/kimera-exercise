import Search from "./assets/magnifying-glass-solid.svg?react"

export default function SearchBar({value, setValue}) {
    return (
        <div className="relative">
            <input type="text" placeholder="Search by name or surname" className="outline-none focus:border-slate-600 border hover:border-slate-600  text-xs px-2 h-8 bg-[#f5f3f3] w-72 rounded-lg " value={value} onChange={(e) => setValue(e.target.value)} />
            <Search fill='#7a7a7a' className="w-[14px] h-[14px] absolute right-4 top-[9px] hover:cursor-pointer" />
        </div>
    )
}