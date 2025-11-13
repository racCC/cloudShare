import { useUser } from "@clerk/clerk-react";
import Navbar from "../components/Nabvar";
import SideMenu from "../components/SideMenu";

const DashboardLayout = ({ children, activeMenu }) => {
    const { user } = useUser();
    return <div>
        {/* Navbar component */}
        <Navbar activeMenu={{activeMenu}} />
        {user && (
            <div className="flex">
                <div className="max-[1080px]:hidden">
                    {/* Sidebar component */}
                    <SideMenu activeMenu={activeMenu} />
                </div>
                <div className="grow mx-5">{children}</div>
            </div>
        )}

    </div>;
};

export default DashboardLayout;