import '../style/Last.css';
import { Mobile, PC } from "./MediaQuery.js";

export default function Last() {
    
    return (
        <>
            <PC>
                <section className="market-card-list-section top-80 margin-center-body">
                    <div>
                        <div className="max-width text-left title font-36 font-weight-700">Other Items from the Artist</div>
                        <div className="market-card-list top-64">
                            <div></div>
                        </div>
                    </div>
                </section>
            </PC>

            <Mobile>
                <section className="mobile-ver market-card-list-section top-80 margin-center">
                    <div>
                        <div className="max-width text-left title font-36 font-weight-700">Other Items from the Artist</div>
                        <div className="market-card-list top-64">
                            <div></div>
                        </div>
                    </div>
                </section>
            </Mobile>

        </>

    );
}