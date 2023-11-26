import logo from './logo.svg';
import './App.css';
import MainPage from "./components/MainPage/MainPage";
import ChatBot from "./components/ChatBot/ChatBot";
import ChatLayout from "./components/ChatLayout/ChatLayout";
import {useEffect, useState} from "react";

function App() {

    const [showMainPage, setShowMainPage] = useState(true);

    const handleSearch = (value) => {
        console.log(`Search query: ${value}`);
        setShowMainPage(false); // Hide MainPage
    }

    function changeMaxWidth() {
        const elements = document.querySelectorAll('.vfrc-message');
        console.log("running on: ", elements.length)
        elements.forEach((element) => {
            element.style.maxWidth = '600px';
            element.style.width = '600px';
        });
        
    }

    useEffect(() => {
        const interval = setInterval(() => {
            changeMaxWidth(); // Check and apply style changes
        }, 1000); // Poll every second (adjust the interval as needed)

        return () => {
            clearInterval(interval);
        };
    }, []);


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
