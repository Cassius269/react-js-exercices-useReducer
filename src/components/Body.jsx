import Footer from "./Footer";
import Header from "./Header";
import CounterFeature from './CounterFeature';
import CounterProvider from './CounterProvider';
import SubscriptionProvider from "./SubscriptionProvider";
import SubscriptionFeature from "./SubscriptionFeature";

function Body(){


    return (
        <>
            <Header />
                <main>
                    {/* Fonctionnalité du compteur intéractif */}
                    <CounterProvider>
                        <CounterFeature />
                    </CounterProvider>

                    {/* Fonctionnalité d'inscription utilisateur */}
                    <SubscriptionProvider>
                        <SubscriptionFeature />
                    </SubscriptionProvider>
                </main>
            <Footer />
        </>
    )
}

export default Body;