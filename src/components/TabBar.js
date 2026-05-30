import { NAV_TABS } from "../constants/navTabs";
import NavTab from "./Tab";

export default function TabBar() {
    const navTabs = NAV_TABS;
    return (
        <div className="flex gap-10">
            {navTabs.map((tab) => (
                <NavTab label={tab.label} ref={tab.ref} />
            ))}
        </div>
    )
}