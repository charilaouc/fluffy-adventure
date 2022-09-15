import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";

import {PostIcon} from "icons";

const App: React.FC = () => {
    return (
        <Refine
            routerProvider={routerProvider}
            dataProvider={dataProvider("https://by7w1cv1.directus.app/items")}
            resources={[{ name:"contacts",icon: PostIcon}]}
        />
    );
};

export default App;