## Setup react-router

- npm i react-router
- in main.jsx => import {BrowserRouter} from 'react-router'

-        createRoot(document.getElementById("root")).render(
              <BrowserRouter>
                <App />
              </BrowserRouter>
            );

- in App.jsx => import {Routes} from'react-router'

### Use Link

- in Header.jsx => import { Link } from "react-router";
replace <a> with
<Link key={item.name}
  to={item.path}
  className="text-sm/6">{item.name}
</Link>

### Use dynamic params

- in ProductDetails.jsx => import { useParams } from "react-router";
  const params = useParams();
  console.log(params.productId);
