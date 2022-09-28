import '../style/Auth.css';
import '../style/Aside.css';
import { Mobile, PC } from "./MediaQuery.js";

import axios from 'axios';
import { useState, useEffect } from 'react';


export default function Auth() {

    const [data, setData] = useState('');
    const [contractData, setContractData] = useState('');
    const [priceData, setPriceData] = useState(['']);

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
        })
        .catch(function (error) {
            console.error(error);
            alert("연결이 지연되거나, 문제가 있을 수 있습니다. 다시 한번 확인 부탁드리겠습니다.");
        });
    }, [priceData]);


    return (

        <>
            <PC>
            <div className="pc-ver art-auth">
                <div className="auth-wrapper border-radius-24">
                    <h2 className="title font-weight-600 font-24 row">Authentification</h2>
                    <div className="auth-infos relative top-36">
                        <div className="info overflow-ellipsis">
                            <span className="label font-weight-600">ID#</span>
                            <div className="row">
                                <button type="button" aria-describedby="copy">{data.id}</button>
                                <div className="arrow-box-wrapper">
                                    <span className="arrow-box white title font-weight-700 left-12 border-radius-4 padding-row-12 padding-col-4 z-1 display-none">Copy</span>
                                </div>
                            </div>
                        </div>
                        <div className="info overflow-ellipsis">
                            <span className="label font-weight-600">Contract</span>
                            <div className="row">
                                <span className="text overflow-ellipsis">{contractData.address}</span>
                            </div>
                        </div>
                    </div>
                    <div className="auth-links justify-between">
                        <a href="https://scope.klaytn.com/nft/0xF9480a8356f45fA7c0965300Fd133a88c7bD0095/202" target="_blank" rel="noreferrer noopener" className="scan-link row align-center link">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style= {{width: '48px', height: '48px'}}>
                                <circle cx="24" cy="24" r="24" fill="#F4F4F4"></circle>
                                <path d="M31.4028 29.9256L25.0802 24.0473C24.9733 23.9479 24.9733 23.7866 25.0802 23.6872L31.0771 18.111C31.2469 17.9532 31.5235 17.9658 31.6798 18.1352C34.8834 21.607 34.6196 26.6663 31.809 29.9052C31.7069 30.0229 31.5177 30.0325 31.4028 29.9256Z" fill="#4E5280"></path><path d="M29.9249 30.8634C30.0507 30.9901 30.0132 31.2045 29.8521 31.2801L24.1078 33.9759C24.0395 34.008 23.9606 34.008 23.8923 33.9759L18.1479 31.28C17.9868 31.2044 17.9494 30.9901 18.0751 30.8634L23.8188 25.0754C23.9186 24.9749 24.0802 24.9748 24.1799 25.0754L29.9249 30.8634Z" fill="#4E5280"></path>
                                <path d="M29.8375 16.224C30.0107 16.3 30.0555 16.5372 29.9228 16.6771L19.2253 27.9584C19.123 28.0663 18.9549 27.946 19.0113 27.8053L24.4763 14.1691C24.5327 14.0285 24.6857 13.9628 24.8193 14.0214L29.8375 16.224Z" fill="#4E5280"></path>
                                <path d="M21.5518 16.0801C21.7556 15.8722 22.0896 16.104 21.9776 16.3754L16.4229 29.836C16.3446 30.0258 16.0961 30.0581 15.9735 29.8949C14.6999 28.1997 14.0081 26.0634 14 23.8996C13.9997 23.8277 14.0282 23.7587 14.0778 23.708L21.5518 16.0801Z" fill="#4E5280"></path>
                            </svg>
                            <span className="text left-16 font-weight-600">View on klaytnscope</span>
                        </a>
                        <a href="https://opensea.io/assets/klaytn/0xF9480a8356f45fA7c0965300Fd133a88c7bD0095/202" target="_blank" rel="noreferrer noopener" className="row align-center link">
                            <svg className="download" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 16C32 24.8361 24.8361 32 16 32C7.16394 32 0 24.8361 0 16C0 7.16394 7.16394 0 16 0C24.8379 0 32 7.16394 32 16Z" fill="#2081E2"></path>
                                <path d="M9.02045 16.81L9.0822 16.7157L12.8057 11.0573C12.8602 10.9744 12.9881 10.983 13.0293 11.073C13.6513 12.4272 14.1881 14.1115 13.9366 15.16C13.8293 15.5915 13.5352 16.1757 13.2043 16.7157C13.1616 16.7943 13.1146 16.8714 13.0646 16.9457C13.041 16.98 13.0013 17 12.9587 17H9.12926C9.02632 17 8.96603 16.8914 9.02045 16.81Z" fill="white"></path>
                                <path d="M25 17.5875V18.4583C25 18.5083 24.9688 18.5528 24.9235 18.5722C24.6458 18.6889 23.6953 19.1167 23.3 19.6556C22.2913 21.0319 21.5207 23 19.798 23H12.6112C10.0641 23 8 20.9695 8 18.4639V18.3833C8 18.3167 8.05524 18.2625 8.12324 18.2625H12.1296C12.2089 18.2625 12.267 18.3347 12.2599 18.4111C12.2316 18.6667 12.2798 18.9278 12.403 19.1653C12.641 19.6389 13.134 19.9347 13.6667 19.9347H15.65V18.4167H13.6893C13.5888 18.4167 13.5293 18.3028 13.5873 18.2222C13.6086 18.1903 13.6327 18.157 13.6582 18.1195C13.8438 17.8611 14.1087 17.4597 14.3722 17.0028C14.5521 16.6945 14.7263 16.3653 14.8666 16.0347C14.8949 15.975 14.9176 15.9139 14.9402 15.8542C14.9785 15.7486 15.0182 15.65 15.0465 15.5514C15.0748 15.468 15.0975 15.3806 15.1202 15.2986C15.1868 15.018 15.2151 14.7208 15.2151 14.4125C15.2151 14.2917 15.2094 14.1653 15.1981 14.0444C15.1924 13.9125 15.1754 13.7805 15.1584 13.6486C15.1471 13.5319 15.1258 13.4167 15.1032 13.2958C15.0748 13.1194 15.0352 12.9445 14.9898 12.768L14.9742 12.7014C14.9402 12.5805 14.9119 12.4653 14.8723 12.3445C14.7603 11.9653 14.6314 11.5958 14.4954 11.25C14.4458 11.1125 14.3892 10.9806 14.3325 10.8486C14.2489 10.65 14.1639 10.4695 14.086 10.2986C14.0463 10.2208 14.0123 10.15 13.9783 10.0778C13.9401 9.99583 13.9004 9.91388 13.8607 9.83612C13.8324 9.7764 13.7998 9.72084 13.7772 9.66528L13.5349 9.22639C13.5009 9.16666 13.5576 9.09583 13.6242 9.11389L15.14 9.51665H15.1443C15.1471 9.51665 15.1485 9.51806 15.1499 9.51806L15.3497 9.57222L15.5693 9.63335L15.65 9.65554V8.77222C15.65 8.34583 15.9985 8 16.4292 8C16.6445 8 16.84 8.08611 16.9803 8.22638C17.1205 8.36667 17.2083 8.55834 17.2083 8.77222V10.0833L17.3699 10.1278C17.3826 10.132 17.3953 10.1375 17.4067 10.1458C17.4464 10.175 17.503 10.218 17.5752 10.2708C17.6319 10.3153 17.6928 10.3694 17.7665 10.425C17.9124 10.5403 18.0867 10.6889 18.2779 10.8597C18.3289 10.9028 18.3785 10.9472 18.4238 10.9917C18.6704 11.2167 18.9466 11.4806 19.2101 11.7722C19.2838 11.8542 19.356 11.9375 19.4297 12.025C19.5033 12.1139 19.5813 12.2014 19.6492 12.2889C19.7385 12.4056 19.8348 12.5264 19.9184 12.6528C19.9581 12.7125 20.0034 12.7736 20.0417 12.8333C20.1493 12.993 20.2443 13.1583 20.3349 13.3236C20.3732 13.4 20.4128 13.4833 20.4468 13.5653C20.5474 13.7861 20.6268 14.0111 20.6777 14.2361C20.6933 14.2847 20.7047 14.3375 20.7103 14.3847V14.3958C20.7273 14.4625 20.733 14.5333 20.7387 14.6055C20.7613 14.8361 20.75 15.0667 20.699 15.2986C20.6777 15.3972 20.6494 15.4903 20.6154 15.5889C20.5814 15.6833 20.5474 15.7819 20.5035 15.875C20.4185 16.068 20.3179 16.2611 20.1989 16.4417C20.1607 16.5083 20.1153 16.5792 20.07 16.6458C20.0204 16.7167 19.9694 16.7833 19.9241 16.8486C19.8618 16.9319 19.7952 17.0194 19.7272 17.0972C19.6663 17.1792 19.6039 17.2611 19.5359 17.3333C19.441 17.4431 19.3503 17.5472 19.2554 17.6472C19.1988 17.7125 19.1378 17.7792 19.0755 17.8389C19.0146 17.9055 18.9522 17.9653 18.8956 18.0208C18.8007 18.1139 18.7213 18.1861 18.6547 18.2458L18.4989 18.3861C18.4763 18.4056 18.4465 18.4167 18.4153 18.4167H17.2083V19.9347H18.727C19.067 19.9347 19.39 19.8167 19.6507 19.6C19.7399 19.5236 20.1295 19.1931 20.5899 18.6944C20.6055 18.6778 20.6253 18.6653 20.648 18.6597L24.8428 17.4708C24.9207 17.4486 25 17.5069 25 17.5875Z" fill="white" ></path>
                            </svg>
                            <span className="text left-16 font-weight-600">View on Opensea</span>
                        </a>
                    </div>
                    <div className="price-container justify-between">
                        <div className="price-content row align-center ">
                            <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 1500 1500" style= {{width: '48px', height: '48px'}}>
                                <g>
                                    <path className="CTblue"
                                        d="M1363.9,762.8c0-32.8-2.6-63-10.7-87.2H1487C1449.9,307,1141.8,18.4,764.9,12.1C353.6,5.3,17.4,332.8,14,744.1 c-3.4,410.7,328.5,744.6,738.3,744.6c367.7,0,672.6-268.8,729-620.6h-135.4C1357.1,843.2,1363.9,804.4,1363.9,762.8z">
                                    </path>
                                    <path className="CTwhite"
                                        d="M923.4,829.6c-28.7,64.5-93.2,107.9-166.8,107.9c-100.7,0-182.7-82-182.7-182.7s82-182.7,182.7-182.7 c76.2,0,143.8,47.8,170.5,117h238c-1-6.4-2.2-12.7-3.5-19c-19.1-91.7-69.7-175.2-142.3-234.9c-73.8-60.7-167-94.1-262.7-94.1 c-228.1,0-413.7,185.6-413.7,413.7c0,228.1,185.6,413.7,413.7,413.7c98.1,0,193.2-34.9,267.8-98.4c72.7-61.8,122-147.1,139.1-240.6 H923.4z">
                                    </path>
                                </g>
                            </svg>
                            <div className="price-main left-16">
                                <div className="font-12  lighter-grey line-height-20 row align-center">$ {priceData.usd_price } </div>
                                <div className="black font-weight-600 line-height-24 row align-center">{priceData.eth_price } ETH</div>
                            </div>
                        </div>
                    </div>
                    <div className="buy-btn-warpper justify-between top-36">
                        <a className="button centered border-radius-8" href="/connect">Buy now</a>
                        <button className="wish-list button border-none border-radius-8 primary row align-center justify-center link save">Wish List
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-4">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12.0005 6.75736C12.5527 6.75736 13.0005 7.20507 13.0005 7.75736V11H16.2426C16.7949 11 17.2426 11.4477 17.2426 12C17.2426 12.5523 16.7949 13 16.2426 13H13.0005V16.2426C13.0005 16.7949 12.5527 17.2426 12.0005 17.2426C11.4482 17.2426 11.0005 16.7949 11.0005 16.2426V13H7.75736C7.20507 13 6.75736 12.5523 6.75736 12C6.75736 11.4477 7.20507 11 7.75736 11H11.0005V7.75736C11.0005 7.20507 11.4482 6.75736 12.0005 6.75736Z"
                                    fill="#16AA56">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            </PC>


            <Mobile>
            <div className="mobile-ver art-auth">
                <div className="auth-wrapper border-radius-24">
                    <h2 className="title font-weight-600 font-24 row">Authentification</h2>
                    <div className="auth-infos relative top-36">
                        <div className="info overflow-ellipsis">
                            <span className="label font-weight-600">ID#</span>
                            <div className="row">
                                <button type="button" aria-describedby="copy">{data.id}</button>
                                <div className="arrow-box-wrapper">
                                    <span className="arrow-box white title font-weight-700 left-12 border-radius-4 padding-row-12 padding-col-4 z-1 display-none">Copy</span>
                                </div>
                            </div>
                        </div>
                        <div className="info overflow-ellipsis">
                            <span className="label font-weight-600">Contract</span>
                            <div className="row">
                                <span className="text overflow-ellipsis">{contractData.address}</span>
                            </div>
                        </div>
                    </div>
                    <div className="auth-links-mobile justify-between">
                        <a href="https://scope.klaytn.com/nft/0xF9480a8356f45fA7c0965300Fd133a88c7bD0095/202" target="_blank" rel="noreferrer noopener" className="scan-link-mobile row align-center link">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style= {{width: '48px', height: '48px'}}>
                                <circle cx="24" cy="24" r="24" fill="#F4F4F4"></circle>
                                <path d="M31.4028 29.9256L25.0802 24.0473C24.9733 23.9479 24.9733 23.7866 25.0802 23.6872L31.0771 18.111C31.2469 17.9532 31.5235 17.9658 31.6798 18.1352C34.8834 21.607 34.6196 26.6663 31.809 29.9052C31.7069 30.0229 31.5177 30.0325 31.4028 29.9256Z" fill="#4E5280"></path><path d="M29.9249 30.8634C30.0507 30.9901 30.0132 31.2045 29.8521 31.2801L24.1078 33.9759C24.0395 34.008 23.9606 34.008 23.8923 33.9759L18.1479 31.28C17.9868 31.2044 17.9494 30.9901 18.0751 30.8634L23.8188 25.0754C23.9186 24.9749 24.0802 24.9748 24.1799 25.0754L29.9249 30.8634Z" fill="#4E5280"></path>
                                <path d="M29.8375 16.224C30.0107 16.3 30.0555 16.5372 29.9228 16.6771L19.2253 27.9584C19.123 28.0663 18.9549 27.946 19.0113 27.8053L24.4763 14.1691C24.5327 14.0285 24.6857 13.9628 24.8193 14.0214L29.8375 16.224Z" fill="#4E5280"></path>
                                <path d="M21.5518 16.0801C21.7556 15.8722 22.0896 16.104 21.9776 16.3754L16.4229 29.836C16.3446 30.0258 16.0961 30.0581 15.9735 29.8949C14.6999 28.1997 14.0081 26.0634 14 23.8996C13.9997 23.8277 14.0282 23.7587 14.0778 23.708L21.5518 16.0801Z" fill="#4E5280"></path>
                            </svg>
                            <span className="text left-16 font-weight-600">View on klaytnscope</span>
                        </a>
                        <a href="https://opensea.io/assets/klaytn/0xF9480a8356f45fA7c0965300Fd133a88c7bD0095/202" target="_blank" rel="noreferrer noopener" className="row align-center link">
                            <svg className="download" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 16C32 24.8361 24.8361 32 16 32C7.16394 32 0 24.8361 0 16C0 7.16394 7.16394 0 16 0C24.8379 0 32 7.16394 32 16Z" fill="#2081E2"></path>
                                <path d="M9.02045 16.81L9.0822 16.7157L12.8057 11.0573C12.8602 10.9744 12.9881 10.983 13.0293 11.073C13.6513 12.4272 14.1881 14.1115 13.9366 15.16C13.8293 15.5915 13.5352 16.1757 13.2043 16.7157C13.1616 16.7943 13.1146 16.8714 13.0646 16.9457C13.041 16.98 13.0013 17 12.9587 17H9.12926C9.02632 17 8.96603 16.8914 9.02045 16.81Z" fill="white"></path>
                                <path d="M25 17.5875V18.4583C25 18.5083 24.9688 18.5528 24.9235 18.5722C24.6458 18.6889 23.6953 19.1167 23.3 19.6556C22.2913 21.0319 21.5207 23 19.798 23H12.6112C10.0641 23 8 20.9695 8 18.4639V18.3833C8 18.3167 8.05524 18.2625 8.12324 18.2625H12.1296C12.2089 18.2625 12.267 18.3347 12.2599 18.4111C12.2316 18.6667 12.2798 18.9278 12.403 19.1653C12.641 19.6389 13.134 19.9347 13.6667 19.9347H15.65V18.4167H13.6893C13.5888 18.4167 13.5293 18.3028 13.5873 18.2222C13.6086 18.1903 13.6327 18.157 13.6582 18.1195C13.8438 17.8611 14.1087 17.4597 14.3722 17.0028C14.5521 16.6945 14.7263 16.3653 14.8666 16.0347C14.8949 15.975 14.9176 15.9139 14.9402 15.8542C14.9785 15.7486 15.0182 15.65 15.0465 15.5514C15.0748 15.468 15.0975 15.3806 15.1202 15.2986C15.1868 15.018 15.2151 14.7208 15.2151 14.4125C15.2151 14.2917 15.2094 14.1653 15.1981 14.0444C15.1924 13.9125 15.1754 13.7805 15.1584 13.6486C15.1471 13.5319 15.1258 13.4167 15.1032 13.2958C15.0748 13.1194 15.0352 12.9445 14.9898 12.768L14.9742 12.7014C14.9402 12.5805 14.9119 12.4653 14.8723 12.3445C14.7603 11.9653 14.6314 11.5958 14.4954 11.25C14.4458 11.1125 14.3892 10.9806 14.3325 10.8486C14.2489 10.65 14.1639 10.4695 14.086 10.2986C14.0463 10.2208 14.0123 10.15 13.9783 10.0778C13.9401 9.99583 13.9004 9.91388 13.8607 9.83612C13.8324 9.7764 13.7998 9.72084 13.7772 9.66528L13.5349 9.22639C13.5009 9.16666 13.5576 9.09583 13.6242 9.11389L15.14 9.51665H15.1443C15.1471 9.51665 15.1485 9.51806 15.1499 9.51806L15.3497 9.57222L15.5693 9.63335L15.65 9.65554V8.77222C15.65 8.34583 15.9985 8 16.4292 8C16.6445 8 16.84 8.08611 16.9803 8.22638C17.1205 8.36667 17.2083 8.55834 17.2083 8.77222V10.0833L17.3699 10.1278C17.3826 10.132 17.3953 10.1375 17.4067 10.1458C17.4464 10.175 17.503 10.218 17.5752 10.2708C17.6319 10.3153 17.6928 10.3694 17.7665 10.425C17.9124 10.5403 18.0867 10.6889 18.2779 10.8597C18.3289 10.9028 18.3785 10.9472 18.4238 10.9917C18.6704 11.2167 18.9466 11.4806 19.2101 11.7722C19.2838 11.8542 19.356 11.9375 19.4297 12.025C19.5033 12.1139 19.5813 12.2014 19.6492 12.2889C19.7385 12.4056 19.8348 12.5264 19.9184 12.6528C19.9581 12.7125 20.0034 12.7736 20.0417 12.8333C20.1493 12.993 20.2443 13.1583 20.3349 13.3236C20.3732 13.4 20.4128 13.4833 20.4468 13.5653C20.5474 13.7861 20.6268 14.0111 20.6777 14.2361C20.6933 14.2847 20.7047 14.3375 20.7103 14.3847V14.3958C20.7273 14.4625 20.733 14.5333 20.7387 14.6055C20.7613 14.8361 20.75 15.0667 20.699 15.2986C20.6777 15.3972 20.6494 15.4903 20.6154 15.5889C20.5814 15.6833 20.5474 15.7819 20.5035 15.875C20.4185 16.068 20.3179 16.2611 20.1989 16.4417C20.1607 16.5083 20.1153 16.5792 20.07 16.6458C20.0204 16.7167 19.9694 16.7833 19.9241 16.8486C19.8618 16.9319 19.7952 17.0194 19.7272 17.0972C19.6663 17.1792 19.6039 17.2611 19.5359 17.3333C19.441 17.4431 19.3503 17.5472 19.2554 17.6472C19.1988 17.7125 19.1378 17.7792 19.0755 17.8389C19.0146 17.9055 18.9522 17.9653 18.8956 18.0208C18.8007 18.1139 18.7213 18.1861 18.6547 18.2458L18.4989 18.3861C18.4763 18.4056 18.4465 18.4167 18.4153 18.4167H17.2083V19.9347H18.727C19.067 19.9347 19.39 19.8167 19.6507 19.6C19.7399 19.5236 20.1295 19.1931 20.5899 18.6944C20.6055 18.6778 20.6253 18.6653 20.648 18.6597L24.8428 17.4708C24.9207 17.4486 25 17.5069 25 17.5875Z" fill="white" ></path>
                            </svg>
                            <span className="text left-16 font-weight-600">View on Opensea</span>
                        </a>
                    </div>
                    <div className="price-container justify-between">
                        <div className="price-content row align-center ">
                            <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 1500 1500" style= {{width: '48px', height: '48px'}}>
                                <g>
                                    <path className="CTblue"
                                        d="M1363.9,762.8c0-32.8-2.6-63-10.7-87.2H1487C1449.9,307,1141.8,18.4,764.9,12.1C353.6,5.3,17.4,332.8,14,744.1 c-3.4,410.7,328.5,744.6,738.3,744.6c367.7,0,672.6-268.8,729-620.6h-135.4C1357.1,843.2,1363.9,804.4,1363.9,762.8z">
                                    </path>
                                    <path className="CTwhite"
                                        d="M923.4,829.6c-28.7,64.5-93.2,107.9-166.8,107.9c-100.7,0-182.7-82-182.7-182.7s82-182.7,182.7-182.7 c76.2,0,143.8,47.8,170.5,117h238c-1-6.4-2.2-12.7-3.5-19c-19.1-91.7-69.7-175.2-142.3-234.9c-73.8-60.7-167-94.1-262.7-94.1 c-228.1,0-413.7,185.6-413.7,413.7c0,228.1,185.6,413.7,413.7,413.7c98.1,0,193.2-34.9,267.8-98.4c72.7-61.8,122-147.1,139.1-240.6 H923.4z">
                                    </path>
                                </g>
                            </svg>
                            <div className="price-main left-16">
                                <div className="font-12  lighter-grey line-height-20 row align-center">$ {priceData.usd_price } </div>
                                <div className="black font-weight-600 line-height-24 row align-center">{priceData.eth_price } ETH</div>
                            </div>
                        </div>
                    </div>
                    <div className="buy-btn-warpper justify-between top-36">
                        <a className="button centered border-radius-8" href="/connect">Buy now</a>
                        <button className="wish-list button border-none border-radius-8 primary row align-center justify-center link save">Wish List
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-4">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12.0005 6.75736C12.5527 6.75736 13.0005 7.20507 13.0005 7.75736V11H16.2426C16.7949 11 17.2426 11.4477 17.2426 12C17.2426 12.5523 16.7949 13 16.2426 13H13.0005V16.2426C13.0005 16.7949 12.5527 17.2426 12.0005 17.2426C11.4482 17.2426 11.0005 16.7949 11.0005 16.2426V13H7.75736C7.20507 13 6.75736 12.5523 6.75736 12C6.75736 11.4477 7.20507 11 7.75736 11H11.0005V7.75736C11.0005 7.20507 11.4482 6.75736 12.0005 6.75736Z"
                                    fill="#16AA56">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            </Mobile>

        </>

    );

}