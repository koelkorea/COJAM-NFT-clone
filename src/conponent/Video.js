import '../style/Video.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Video() {

    const [contractData, setContractData] = useState('');

    const options = {
        method: 'GET',
        url: 'https://api.opensea.io/api/v1/asset/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/1/',
        params: {include_orders: 'false'}
    };
    
    useEffect(() => {
        axios
        .request(options)
        .then(function (response) {
            setContractData(response.data.asset_contract);
        })
        .catch(function (error) {
            console.error(error);
            alert("연결이 지연되거나, 문제가 있을 수 있습니다. 다시 한번 확인 부탁드리겠습니다.");
        });
    }, []);

    return (

        <section className="centered background-neturals-6">
            <div className="padding-24">
                <img className="art-media link" src={contractData.image_url} />
            </div>
        </section>

    );

}