import { BrowserRouter, Route, Switch } from "react-router-dom";
import Posts from "./pages/Posts";
//import AddPost from "./pages/AddPost";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
//import HomeOutlined from

/*import { default as PageHeader } from "./components/Header";*/
import './components/App.css';
/*import ShowMagic from "./components/ShowMagic";*/
import { Layout } from "antd";
import "antd/dist/antd.css";

const { Header, Footer, Content } = Layout;

function App() {
	return (
	<BrowserRouter>
	 <Layout>
			<Header>
			  <Route path="/" component={Navbar}/>
			</Header>
			<Content>
			  <Switch>
			  	<Route exact path="/posts" component={Posts} />
				<Route exact path="/" component={Home}/>

			  </Switch>
			</Content>
			<Footer>
			testfootertext
			</Footer>
	</Layout>
	</BrowserRouter>
 );
}

export default App;
