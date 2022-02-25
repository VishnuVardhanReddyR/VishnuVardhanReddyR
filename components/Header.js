import Logo from "./subComponents/ReusableComponents/Logo";
import NavLinks from "./subComponents/HeaderComponents/NavLinks";
import SidebarLink from "./subComponents/HeaderComponents/SidebarLink";

function Header() {
    return (
        <header className="py-6 bg-black z-50 top-0 sticky">
            <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                <Logo firstName={"Vishnu"} lastName={"Rapuru"} />
                <NavLinks />
            </div>
      </header>
    );
}

export default Header;
