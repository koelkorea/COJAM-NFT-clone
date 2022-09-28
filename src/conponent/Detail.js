import '../style/Detail.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Mobile, PC } from "./MediaQuery.js";

export default function Detail() {

    const [ownerData, setOwnerData] = useState('');
    const [creatorData, setCreatorData] = useState('');
    const [contractData, setContractData] = useState('');

    const ContractYear = new Date(contractData.created_date).getFullYear();

    const options = {
        method: 'GET',
        url: 'https://api.opensea.io/api/v1/asset/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/1/',
        params: {include_orders: 'false'}
    };
    
    useEffect(() => {
        axios
        .request(options)
        .then(function (response) {
            setOwnerData(response.data.top_ownerships[0].owner);
            setCreatorData(response.data.creator);
            setContractData(response.data.asset_contract);
        })
        .catch(function (error) {
            console.error(error);
            alert("연결이 지연되거나, 문제가 있을 수 있습니다. 다시 한번 확인 부탁드리겠습니다.");
        });
    }, []);

    
    
    return (

        <>
            <PC>
            <div className="pc-ver general-detail">
                <h2 className="title font-weight-600"> {contractData.name} </h2>
                <div className="description top-48">{contractData.description} </div>
                <div className="infos top-24">
                    <div className="info">
                        <span className="label">Created year: </span>
                        <span className="text">{ !ContractYear ? 'Loading..' : ContractYear }</span>
                    </div>
                    <div className="info">
                        <span className="label">Edition: </span>
                        <span className="text">1/1</span>
                    </div>
                </div>
                <div className="artist-info top-48 padding-top-48">
                    <div className="profile-wrapper row link">
                        <img className="profile border-50" src={ownerData.profile_img_url} alt="profile" width="64px" height="64px" loading="lazy" decoding="async" />
                        <div className="left-24 col justify-center">
                            <span className="bold">{ownerData.user} Park Jong Hee</span>
                            <span className="top-8 text-left lighter-grey line-height-24">{creatorData.user}parkjonghee</span>
                        </div>
                    </div>
                </div>
            </div>    
            </PC>

            <Mobile>
            <div className="mobile-ver general-detail">
                <h2 className="title font-weight-600"> {contractData.name} </h2>
                <div className="description top-48">{contractData.description} </div>
                <div className="infos top-24">
                    <div className="info">
                        <span className="label">Created year: </span>
                        <span className="text">{ !ContractYear ? 'Loading..' : ContractYear }</span>
                    </div>
                    <div className="info">
                        <span className="label">Edition: </span>
                        <span className="text">1/1</span>
                    </div>
                </div>
                <div className="artist-info top-48 padding-top-48">
                    <div className="profile-wrapper row link">
                        <img className="profile border-50" src={ownerData.profile_img_url} alt="profile" width="64px" height="64px" loading="lazy" decoding="async" />
                        <div className="left-24 col justify-center">
                            <span className="bold">{ownerData.user} Park Jong Hee</span>
                            <span className="top-8 text-left lighter-grey line-height-24">{creatorData.user}parkjonghee</span>
                        </div>
                    </div>
                </div>
            </div>    
            </Mobile>    
        </>
    );

}