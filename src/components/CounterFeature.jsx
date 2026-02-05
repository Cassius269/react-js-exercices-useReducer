import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";
import Title from "./Title";

function CounterFeature(){

    return (
        <>
                    <Header />
                    <main>
                        <Title />
                        <Counter/>
                    </main>
                    <Footer />

        </>
    )
}

export default CounterFeature;