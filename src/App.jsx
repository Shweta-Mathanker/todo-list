import Header from "./components/Header1";
import Create from "./components/Create1";
import Show from "./components/Show1";

const App = () => {
    return (
        <div className="overflow-x-hidden border-t-2 w-screen min-h-[100vh] bg-zinc-800 flex  items-center flex-col">
            <Header />
            <Create />
            <Show />
        </div>
    );
};

export default App;