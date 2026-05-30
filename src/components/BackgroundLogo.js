export default function BackgroundLogo() {
    return (
        <div className="absolute top-0 left-0 w-full h-screen pointer-events-none">
            <div className="absolute inset-0 flex items-center justify-center opacity-40">
                <div className="relative flex blur-sm justify-center items-center border-green-300/40 border-4 w-[450px] h-[450px] rounded-full animate-pulse [animation-duration:3s]">
                </div>
                <img
                    src="assets/images/logo-1.png"
                    alt="logo"
                    className="w-[350px] absolute animate-pulse [animation-duration:3s]"
                />
            </div>
        </div>
    );
}