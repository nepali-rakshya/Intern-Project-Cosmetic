import Header from "./Components/Header/Header";
import ImgMain from "./Components/MainImage/ImgMain";
import Footer from "./Components/Footer/Footer";
import Content from "./Components/Content/Content";

function App() {
  return (
    <>
      <div className="content">
        <Header />
        <ImgMain />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
