import Dashboard from "@material-ui/icons/Dashboard";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import VisibilityIcon from '@material-ui/icons/Visibility';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import Introductions from "views/Introduction/introduction";
import Newspapers from "views/Newspapers/newspapers";
import Exhibits from "views/Exhibits/exhibits";
import Data from "views/Data/data";


const homeRoutes = [
  {
    path: "/introduction",
    name: "Introduction",
    icon: Dashboard,
    component: Introductions,
    layout: "/home"
  },
  {
    path: "/newspapers",
    name: "Newspapers",
    icon: LibraryBooks,
    component: Newspapers,
    layout: "/home"
  },
  {
    path: "/exhibits",
    name: "Exhibits",
    icon: VisibilityIcon,
    component: Exhibits,
    layout: "/home"
  },
  {
    path: "/data",
    name: "Data",
    icon: InsertChartIcon,
    component: Data,
    layout: "/home"
  },
];

export { 
  homeRoutes
};