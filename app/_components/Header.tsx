import {FC} from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header: FC = () => {
    return <header className='border-b px-8 py-5 border-primary bg-primary'>
        <div className='flex justify-between items-center max-w-7xl mx-auto'>
            <Logo/>
            <Navigation/>
        </div>
    </header>
}

export default Header;