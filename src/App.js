import logo from './logo.svg';
import './App.css';
import MainPage from "./components/MainPage/MainPage";
import ChatBot from "./components/ChatBot/ChatBot";
import ChatLayout from "./components/ChatLayout/ChatLayout";
import {useState} from "react";

function App() {

    const [showMainPage, setShowMainPage] = useState(true);

    const handleSearch = (value) => {
        console.log(`Search query: ${value}`);
        setShowMainPage(false); // Hide MainPage
    }


    return (
        <div className="App">
            <header className="App-header">
                <ChatBot />
                {showMainPage ? (
                    <MainPage onSearch={handleSearch} />
                ) : (
                    <ChatLayout />
                )}
            </header>
        </div>
    );
}

export default App;
