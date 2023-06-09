import { ReactElement, useEffect } from "react";
import Button from "../Button";
import { scrollToSection } from "../../utils/scrollToSection";
import MobileMenu from "../MobileMenu";
import Navbar from "./Navbar";
import { menuElements } from "../../conf/MenuElements";

import { motion as m } from "framer-motion";
import LogoBlackSVG from "../atoms/LogoBlackSVG";

const Header: React.FC = (): ReactElement => {
    return (
        <m.div className={'header relative default-padding'} initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.1, margin: '50px' }}>
            <div>
                <LogoBlackSVG size={200} fill={'white'} />
            </div>
            <Navbar menuElements={menuElements} className={'hidden lg:block'} ulClassName={'navbar'} />
            <div className={'hidden lg:flex flex-row gap-4'}>
                <Button variant={'secondary'} text={'Kapcsolat'} onClick={() => scrollToSection(undefined, 'contact-section')} />
            </div>
            <MobileMenu />
        </m.div>
    );
};

export default Header;
