import axios from 'axios';
import { useState, useEffect } from 'react';

import Header from './conponent/Header.js'
import Video from './conponent/Video.js'
import Detail from './conponent/Detail.js'
import Auth from './conponent/Auth'
import History from './conponent/History'
import Last from './conponent/Last'
import Footer from './conponent/Footer'

export default function App() {

    const [data, setData] = useState('');
    const [contractData, setContractData] = useState('');
    const [priceData, setPriceData] = useState(['']);
    const [ownerData, setOwnerData] = useState('');
    const [creatorData, setCreatorData] = useState('');

    const options = {
        method: 'GET',
        url: 'https://api.opensea.io/api/v1/asset/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/1/',
        params: {include_orders: 'false'}
    };
    
    useEffect(() => {

        axios
        .request(options)
        .then(function (response) {
            setData(response.data);
            setContractData(response.data.asset_contract);
            setPriceData(response.data.collection.payment_tokens[0]);
            setOwnerData(response.data.top_ownerships[0].owner);
            setCreatorData(response.data.creator);
        })
        .catch(function (error) {
            console.error(error);
            alert("연결이 지연되거나, 문제가 있을 수 있습니다. 다시 한번 확인 부탁드리겠습니다.");
        });

    }, []);

    return (
        <>
            <Header />
            <div className="art-detail">
            <Video contractData={contractData} />
            <section className="main-section">
                <article className="detail-infos  margin-center">
                    <Detail data={data} ownerData={ownerData} creatorData={creatorData} contractData={contractData} />
                    <Auth data={data}  contractData={contractData} priceData={priceData} />
                </article>
            </section>
            <History />
            <Last />
            </div>
            <Footer />
        </>
    );

}