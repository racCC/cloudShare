import{ BrowserRouter,Routes,Route} from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Subscription from "./pages/Subscription";
import Transactions from "./pages/Transactions";
import Upload from "./pages/Upload";
import MyFiles from "./pages/MyFiles";

const App=() => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path ="/dashboard" elememnt={<Dashboard/>}/>
    <Route path ="/upload" elememnt={<Upload/>}/>
    <Route path ="/my-files" elememnt={<MyFiles/>}/>
    <Route path ="/subscriptions" elememnt={<Subscription/>}/>
    <Route path ="/transactions" elememnt={<Transactions/>}/>


    
    </Routes>
  </BrowserRouter>
  )

}
export default App;