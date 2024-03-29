import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchDataFromApi } from "./utils/api";

import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

import Home from "./pages/home/home";
import Header from "./components/header/Header";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url);

  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfiguration(url));
    });
  };

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore veniam
          laborum saepe officia molestias, sit ut natus velit mollitia vero sint
          esse culpa perferendis quod suscipit quaerat omnis necessitatibus
          similique perspiciatis. Excepturi, animi doloribus illum voluptatibus
          amet, officiis atque a optio, necessitatibus ut dignissimos dicta
          repudiandae. Asperiores ducimus aperiam numquam deleniti autem ad,
          natus veniam praesentium accusantium blanditiis voluptate, ea
          molestiae nulla provident sapiente necessitatibus fugit aspernatur,
          sunt repudiandae iste dolorem debitis quo earum itaque. Officia
          voluptate unde soluta vero, sapiente ipsa cum iste dolor incidunt
          quisquam, deleniti ea nulla perferendis autem temporibus. Ad debitis
          reiciendis in incidunt modi animi id porro asperiores minima
          assumenda. Ipsam quia pariatur hic iste et, obcaecati odit quisquam
          commodi nobis quas, ad nemo inventore accusamus enim, vel officiis
          porro? Autem laudantium quos quisquam nemo, consectetur eligendi fuga,
          debitis pariatur cupiditate placeat eum facilis porro rerum aliquam
          sunt, culpa necessitatibus ad? Veniam odit consequatur aliquam itaque!
          Neque natus pariatur suscipit minus sint, quaerat porro dignissimos,
          voluptatum ullam ratione minima nostrum omnis. Dicta veritatis
          repudiandae, asperiores magni numquam pariatur aut repellat non,
          tenetur quibusdam necessitatibus fugiat? Dolores sequi enim suscipit,
          illo quaerat labore id illum vel earum accusamus atque voluptatibus
          consequuntur deleniti molestiae fugit hic distinctio inventore
          laboriosam vero necessitatibus mollitia maiores amet veritatis! Ipsa
          ab voluptatibus quo cum animi dolor fugit quibusdam quos nobis dolore
          veritatis eaque, perspiciatis eius illum saepe repellat architecto
          commodi dolores magnam? Reprehenderit, odio. Earum est vel quae
          voluptas vero mollitia temporibus ea laudantium et possimus quo libero
          sint maxime non, blanditiis placeat deleniti, consectetur impedit
          voluptatem, fuga alias. Consequatur veniam officia quos fugit rem,
          sunt illo officiis sed, magnam provident praesentium inventore, error
          optio ratione voluptatem sint quo molestiae! Illum laudantium iusto,
          unde eveniet ipsa totam sunt odio dolorum, libero animi dolore
          voluptates ab quae a neque! Magni laboriosam quo eius ducimus dolore
          alias illo at numquam excepturi hic sapiente, suscipit voluptatem
          animi impedit iusto vel ipsum iure odio. Sint, odit nemo. Quas
          distinctio minima nesciunt rem, aspernatur inventore repellat odio ex
          iusto minus. Esse voluptates voluptas adipisci eveniet quae nobis
          voluptatem, maxime vitae, ipsa necessitatibus recusandae beatae
          suscipit sit perferendis dolor, doloribus asperiores. Deserunt vel
          velit officia voluptatibus id. Accusamus, commodi ipsum deleniti nihil
          optio perspiciatis non nam omnis quisquam quod, iusto repellendus
          corporis. Itaque deserunt perspiciatis sunt, inventore dicta nobis
          quisquam neque commodi? Doloremque minus dolore, aliquam rerum fugit
          quam incidunt repellat, ullam fuga non at esse, asperiores molestiae
          eligendi corrupti maiores! Doloribus rem quae sequi odio deserunt enim
          reprehenderit quod, sunt voluptas, accusamus, molestiae animi officia!
          Itaque deserunt quo optio non debitis nam. Architecto, provident!
          Optio possimus obcaecati minus nesciunt officiis laboriosam est autem,
          accusantium non perspiciatis. Veritatis illo deleniti unde rerum
          consequatur dolores harum perferendis ipsa inventore officiis velit,
          beatae optio eveniet dolor voluptate in aut fuga sequi provident ea
          suscipit, neque nesciunt. Sequi, numquam, impedit voluptates deserunt
          ad laboriosam quaerat est aspernatur sint quas labore reiciendis,
          provident aliquid dignissimos? Impedit doloribus placeat repellendus
          iure possimus eum. Pariatur, voluptate perspiciatis accusamus autem
          tempora distinctio, amet fuga iste omnis dignissimos eum enim vero.
          Vel, sit? Dolores dolorem atque expedita voluptas nobis! Numquam quam,
          cumque, iure minus illo quidem accusantium eligendi nostrum doloremque
          placeat recusandae ipsum quod sed magnam dolorum enim expedita
          incidunt mollitia, tenetur dolorem eveniet! Animi natus id qui fugit
          et eaque omnis autem aliquam incidunt consequuntur. Sunt, excepturi!
          In obcaecati quis repudiandae eveniet architecto ratione voluptates
          corporis non numquam nesciunt. Quibusdam dolorum at recusandae sint
          consequuntur, delectus vitae numquam consectetur quo voluptatem
          tempore veritatis laborum pariatur, nisi exercitationem magnam
          reprehenderit dolorem, libero ex amet quaerat autem. Omnis temporibus
          consequatur quae enim fuga. Inventore nihil similique saepe veniam
          minima quod maiores eum exercitationem? Cupiditate adipisci aliquam
          laborum ea nostrum eius, fugit sapiente odit. Perspiciatis, sed.
          Consequatur illum ab blanditiis quia dolore aspernatur obcaecati odio
          labore officia ipsa, eum ducimus qui animi id, at modi aliquam dolorem
          aliquid incidunt cupiditate numquam porro et, minus consectetur? Ipsum
          sed, repudiandae molestias alias dolorem provident quidem veniam
          nesciunt ut beatae nobis rem. Inventore aliquid consectetur obcaecati
          natus ratione rem explicabo dolorem labore, repellendus modi autem aut
          reprehenderit corporis iure, expedita quis quidem! Doloremque hic
          consectetur cumque fuga accusamus ipsam exercitationem fugiat sint
          dolorem, saepe eligendi eaque id beatae vero ratione tempore. At atque
          nostrum eligendi maxime rerum. Eum cum, consequuntur voluptatem id
          deserunt quidem nemo reprehenderit! Aliquam, possimus maxime incidunt
          dolorem eum architecto nulla maiores, aperiam fuga asperiores quis
          voluptates vitae atque nam, laborum odit cumque libero sequi! Ad fuga
          a quisquam at, dignissimos nulla! Totam fugiat, unde eaque dolore a
          assumenda rem itaque dignissimos. Nobis magnam repellendus odio,
          maiores velit quas dolorem. Commodi cumque quos ex possimus dolorum
          accusantium culpa optio. Ipsum ullam sapiente architecto earum, libero
          sed dolorum adipisci! Rerum repellendus, alias facere saepe tempore
          animi, ullam eum eveniet cumque quos doloribus ut consequuntur ea?
          Laboriosam eaque inventore vel, odit officia harum vitae nam
          reprehenderit quo tempore molestiae. Cupiditate quam facilis nulla
          fuga sapiente nostrum voluptatibus, alias minima quas harum quisquam
          odio commodi assumenda totam nihil explicabo maxime iusto illo saepe
          reiciendis nobis eos expedita aliquam aspernatur. Impedit, recusandae
          et! Ex dicta totam perferendis magni soluta! Ullam nobis dolorum culpa
          hic ex consectetur corrupti quibusdam aliquam iusto doloribus dolorem
          veniam animi dicta adipisci iure odio error recusandae porro aut, eos
          consequuntur! Quaerat enim debitis beatae, facere, repellat,
          aspernatur aliquam harum dolorem eveniet culpa deleniti! Aut esse ex
          alias rem mollitia unde sapiente, provident, asperiores rerum
          aspernatur numquam molestiae modi! Est in provident officiis illo
          asperiores sapiente vero, culpa nulla repellendus corporis minus,
          laudantium, dicta libero ab tempora praesentium quis illum deleniti?
          Laborum voluptas, illo maxime dolor earum, facilis cum vel magni
          delectus sunt recusandae? Quae ratione, praesentium similique amet
          omnis sed ut libero dolorem! Dolor, eius. Omnis deleniti quas
          consequuntur quibusdam adipisci eaque molestias! Nisi delectus placeat
          neque omnis recusandae animi, at asperiores necessitatibus. Fuga
          repellat debitis assumenda aperiam eveniet suscipit voluptatum! Maxime
          sunt laboriosam id! Vel, saepe temporibus, magni hic explicabo sequi
          impedit, minima eum ipsa aspernatur perspiciatis officia iusto sunt
          praesentium minus dolorum nemo id exercitationem!
        </p>
      </BrowserRouter>
    </>
  );
}

export default App;
