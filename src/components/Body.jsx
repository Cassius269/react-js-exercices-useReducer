import Footer from "./Footer";
import Header from "./Header";
import CounterFeature from './CounterFeature';
import CounterProvider from './CounterProvider';
import Subscription from './Subscription';

function Body(){
    return (
        <>
            <Header />
                <main>
                    <CounterProvider>
                        <CounterFeature />
                    </CounterProvider>
                    
                    <Subscription />
                </main>
            <Footer />
        </>
    )
}

export default Body;