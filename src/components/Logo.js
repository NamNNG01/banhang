import LogoIcon from "./LogoIcon";

export default function Logo() {
    return (
        <div className="flex items-center gap-2">
            <LogoIcon />
            <div className="text-3xl font-bold">
                Bang<span className="text-[#00E390]">AI</span>
            </div>
        </div>
    )
}