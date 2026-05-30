import GuestNav from "./GuestNav"
import Logo from "./Logo"
import TabBar from "./TabBar"

export default function NavBar() {
    return (
        <div className="sticky flex items-center justify-between border-gray-200/10 border-b-2 backdrop-blur-md px-60 p-2 top-0 z-50">
            <Logo />

            <div className="absolute left-1/2 -translate-x-1/2">
                <TabBar />
            </div>

            <GuestNav />
        </div>
    );
}