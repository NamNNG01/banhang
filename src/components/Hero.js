import Button from "./Button";
import ExcelCard from "./ExcelCard";

export default function Hero() {
    return (
        <div className="grid grid-cols-2 py-20 gap-20">
            <div className="flex flex-col gap-8 pr-14">
                <h1>BangAI – Học, Phân tích và Tự động hóa Excel bằng AI</h1>
                <div className="text-gray-400">BangAI giúp bạn tạo công thức Excel, phân tích dữ liệu, học Excel và tự động hóa công việc bằng AI — hoàn toàn bằng tiếng Việt.</div>
                <Button label="Dùng thử miễn phí" variant="neon" href="/BangAI/manifest.xml" download="manifest.xml" />
            </div>
            <ExcelCard />
        </div>
    )
}