import Logo from "./subComponents/ReusableComponents/Logo";
import NavLinks from "./subComponents/HeaderComponents/NavLinks";
import SocialIcons from './subComponents/FixedComponents/SocialIcons';

const Header = ({socials}) => {
    return (
        <header className="sticky top-0 z-20 flex items-start justify-between p-5 mx-auto max-w-7xl xl:items-center">
            {/* <div className="container flex items-center justify-between w-full px-8 mx-auto md:px-14 lg:px-24"> */}
                <Logo firstName={"VISHNU"} lastName={"RAPURU"} />
                <SocialIcons socials={socials} />
            {/* </div> */}
        </header>
    );
}

export default Header;
