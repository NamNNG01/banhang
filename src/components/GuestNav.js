import Button from "./Button";
import NavTab from "./Tab";

export default function GuestNav() {
    return (
        <div className="flex items-center gap-5">
            <NavTab label="Đăng nhập" />
            <Button label="Dùng thử miễn phí" variant="neon" />
        </div>
    )
}