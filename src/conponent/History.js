import '../style/History.css';

export default function History() {
    
    return (
        <>
            <section className="ver-view item-history margin-center top-60">
                <h2>History</h2>
                <div className="item border-radius-24 bordered-line-light-grey top-24 overflow-hidden overflow-x-scrollbar">
                    <div className="history-list padding-col-24">
                        <div className="row justify-between top-12 font-24 font-weight-500 padding-bottom-4">
                            <div className="flexible-box border-bottom padding-bottom-8">Event</div>
                            <div className="flexible-box border-bottom padding-bottom-8">Price</div>
                            <div className="flexible-box border-bottom padding-bottom-8">From</div>
                            <div className="flexible-box border-bottom padding-bottom-8">To</div>
                            <div className="flexible-box border-bottom padding-bottom-8">Date</div>
                        </div>
                        <div className="col">
                            <div className="text-left event row text-center padding-col-12 justify-between py-10">
                                <div className="flexible-box  border-bottom padding-bottom-8 text-left">Minted</div>
                                <div className="flexible-box  border-bottom padding-bottom-8 row align-center text-left">
                                    <img className="width-14 right-8 link" />
                                </div>
                                <div className="flexible-box  border-bottom padding-bottom-8 text-left">000000</div>
                                <div className="flexible-box  border-bottom padding-bottom-8 text-left">1407a7</div>
                                <div className="flexible-box  border-bottom padding-bottom-8 text-left">
                                    <span>2022-08-15</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}