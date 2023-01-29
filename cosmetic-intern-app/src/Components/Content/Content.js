import ContentCSS from "./Content.module.css";

const Content = () => {
  return (
    <>
      <div className={ContentCSS.products}>
        <div className={ContentCSS.products__flexone}>
          <p>our products</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio modi
            illo est neque laudantium quis nesciunt provident eum veritatis
            maiores dolore
          </p>
        </div>

        <div className={ContentCSS.products__flextwo}>
          <div className="cards">
            <div className="cardOne">Lorem ipsum dolor sit amet.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
