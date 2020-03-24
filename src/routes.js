//Step 2 -- Define Routes
import PageContent from "./components/PageContent.vue";
import AddItem from "./components/AddItem.vue";
import Home from "./components/Home.vue";
import Axios_BC from "./components/Axios_BC.vue";
import discovery from "./components/Discovery.vue";
export default [
  { path: "/", component: Home },
  { path: "/add", component: AddItem },
  { path: "/list", component: PageContent },
  { path: "/axios", component: Axios_BC },
  { path: "/discovery", component: discovery }
];
