
import Footer from "../components/Footer";
import Header from "../components/Header";
import Left from "../components/Left";

const Layout = () => {
    return ( 
      <div className="Layout">
        <Header />
        <main className="main">
          main
          <Left></Left>
        </main>
        <Footer />
      </div>
    )
  }
  export default Layout