import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, useStandard = true }) =>
  useStandard ? (
    <>
      <Header />
      {children}
      <Footer />
    </>
  ) : (
    <>
      <Header isLight />
      {children}
    </>
  );

export default Layout;
