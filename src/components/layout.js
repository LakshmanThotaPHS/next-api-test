import Navigation from "./nav";
import Footer from "./footer";

const Layout = ({children}) => {
    return ( 
        <>
        <Navigation />
            {children}
        <Footer />
        </>
     );
}

export default Layout;