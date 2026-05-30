export default function BackgroundGlow() {
    return (
        <div className="absolute -top-96 -left-96 blur pointer-events-none " >
            <div className="
                      w-[1250px]
                      h-[1250px]
                      rounded-full
                      blur-3xl
                      opacity-10
                      bg-green-500
                      pointer-events-none
                      flex
                      content-center
                      items-center
                  "
            />
            <img src="assets/images/polka-dot.png" alt="polka-dots"
                className="absolute top-28 -left-52 blur-sm opacity-5" />
        </div >
    )
}