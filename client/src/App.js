import ColumnLeft from "./components/columnLeft";
import ColumnRight from "./components/columnRight";
import Header from "./components/header";
import Layout from "./components/layout";
import Card from "./components/card";
import datas from "./mockData.json";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Layout>
        <ColumnLeft />
        <div className="block">
          {datas.map((data) => {
            return <Card data={data} id={data._id}></Card>;
          })}
          <ColumnRight />
        </div>
      </Layout>
    </div>
  );
}

export default App;
