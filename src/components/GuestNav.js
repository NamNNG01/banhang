import Button from "./Button";
import NavTab from "./Tab";
import { downloadFolderAsZip } from "../utils/downloadFolder";

export default function GuestNav() {
    const handleDownload = (e) => {
        e.preventDefault();
        downloadFolderAsZip('BangAI');
    };

    return (
        <div className="flex items-center gap-5">
            <NavTab label="Đăng nhập" />
            <Button label="Dùng thử miễn phí" variant="neon" onClick={handleDownload} />
        </div>
    )
}