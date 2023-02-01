import Product from "../Components/Product";

function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold underline text-center mt-5 font-sans">
        Welcome to the redux toolkit store
      </h2>
      <section>
        <Product />
      </section>
    </div>
  );
}
export default Home;
