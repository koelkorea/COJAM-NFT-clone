import { Mobile, PC } from "./conponent/MediaQuery.js";

import Header from './conponent/Header.js'
import Video from './conponent/Video.js'
import Detail from './conponent/Detail.js'
import Auth from './conponent/Auth'
import History from './conponent/History'
import Last from './conponent/Last'
import Footer from './conponent/Footer'

export default function App() {
    
    return (
        <>
            <PC>
                <Header />
                <div className="art-detail">
                <Video />
                <section className="main-section">
                    <article className="detail-infos  margin-center-body">
                    <Detail />
                    <Auth />
                    </article>
                </section>
                <History />
                <Last />
                </div>
                <Footer />
            </PC>
        
            <Mobile>
                <Header />
                <div className="art-detail">
                <Video />
                <section className="main-section">
                    <article className="moblie-detail-infos  margin-center">
                    <Detail />
                    <Auth />
                    </article>
                </section>
                <History />
                <Last />
                </div>
                <Footer />
            </Mobile>
        </>
    );

}