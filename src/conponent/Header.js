import '../style/Header.css';
import { Mobile, PC } from "./MediaQuery.js";
import { useState } from 'react';

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    function toggleSwitch() {
        
        setIsOpen(!isOpen);
        console.log(isOpen);
    }

    return (
        <>
            <PC>
            <header className="nav fixed max-width header-zindex">
                <div className="nav-wrapper row align-center justify-between height-80x margin-center font-size-18">
                    <svg id="\uB808\uC774\uC5B4_1" xmlns="http://www.w3.org/2000/svg" 
                        x="0px" y="0px" viewBox="0 0 1280 294.73" height="32" className="link">
                        <g>
                            <g>
                                <g>
                                    <path className="st3"
                                        d="M199.89,144.19c37.32,0,67.57-30.25,67.57-67.57c0-37.32-30.25-67.57-67.57-67.57 c-37.32,0-67.57,30.25-67.57,67.57C132.32,113.94,162.57,144.19,199.89,144.19z">
                                    </path>
                                    <path className="st1"
                                        d="M64.72,144.19c18.66,0,35.55-7.56,47.78-19.79L64.72,76.62l47.78-47.78C100.28,16.61,83.38,9.05,64.72,9.05 C27.41,9.05-2.85,39.3-2.85,76.62C-2.85,113.94,27.41,144.19,64.72,144.19z">
                                    </path>
                                    <path className="st2"
                                        d="M199.89,159.65c-37.3,0-67.53,30.23-67.53,67.53s30.24,67.53,67.53,67.53h67.53l-67.53-67.53l67.53-67.53 H199.89z">
                                    </path>
                                    <polygon className="st3" points="-2.85,294.73 132.32,159.63 -2.85,159.63  "></polygon>
                                </g>
                                <g>
                                    <path className="st3"
                                        d="M389.36,92.24c27.86,0,48.89,15.68,55.56,41.05h-31.37c-4.84-10.01-13.68-15.02-24.53-15.02 c-17.52,0-29.53,13.01-29.53,33.7c0,20.69,12.01,33.7,29.53,33.7c10.85,0,19.69-5.01,24.53-15.02h31.37 c-6.67,25.36-27.7,40.88-55.56,40.88c-34.54,0-58.9-24.53-58.9-59.57S354.82,92.24,389.36,92.24z">
                                    </path>
                                    <path className="st3"
                                        d="M513.66,211.87c-33.2,0-60.23-24.86-60.23-60.07c0-35.21,27.03-59.9,60.23-59.9 c33.37,0,59.9,24.69,59.9,59.9C573.56,187.01,546.87,211.87,513.66,211.87z M513.66,185.84c18.69,0,30.87-13.52,30.87-34.04 c0-20.86-12.18-34.04-30.87-34.04c-19.02,0-31.03,13.18-31.03,34.04C482.63,172.33,494.64,185.84,513.66,185.84z">
                                    </path>
                                    <path className="st3"
                                        d="M630.12,93.57h28.53v79.76c0,25.2-15.35,38.54-38.54,38.54c-24.03,0-40.88-14.02-40.88-40.38h28.37 c0,10.01,4.34,14.85,11.68,14.85c6.84,0,10.85-4.34,10.85-13.02V93.57z">
                                    </path>
                                    <path className="st3"
                                        d="M750.42,190.02h-43.72l-7.01,20.69h-29.87l42.38-117.13h33.04l42.38,117.13h-30.2L750.42,190.02z  M728.56,125.11l-14.35,42.88h28.87L728.56,125.11z">
                                    </path>
                                    <path className="st3"
                                        d="M796.31,93.57h33.7l32.87,81.09l32.54-81.09h33.54v117.13h-28.53v-70.25l-26.2,70.25H851.2l-26.36-70.41 v70.41h-28.53V93.57z">
                                    </path>
                                </g>
                                <g>
                                    <polygon className="st3"
                                        points="1059.93,163.88 977.7,88.11 977.7,209.71 1000.87,209.71 1000.87,139.72 1082.92,215.5  1082.92,93.9 1059.93,93.9  ">
                                    </polygon>
                                    <polygon className="st3"
                                        points="1123.19,93.9 1107.97,93.9 1107.97,209.71 1131.14,209.71 1131.14,160.4 1173.49,160.4  1173.49,140.55 1131.14,140.55 1131.14,114.74 1175.15,114.74 1175.15,93.9 1131.14,93.9  ">
                                    </polygon>
                                    <polygon className="st3"
                                        points="1193.81,93.9 1193.81,115.4 1224.92,115.4 1224.92,209.71 1248.73,209.71 1248.73,115.4 1280,115.4  1280,93.9  ">
                                    </polygon>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <div className="menus row align-center">
                        <ul className="menu-list">
                            <li className="menu-item inline-block">
                                <span className="name font-weight-600 neturals-5 to-color-white-hover link">Market</span>
                            </li>
                            <li className="menu-item inline-block">
                                <span className="name font-weight-600 neturals-5 to-color-white-hover link">Artist</span>
                            </li>
                            <li className="menu-item inline-block">
                                <span className="name font-weight-600 neturals-5 to-color-white-hover link">News</span>
                            </li>
                            <li className="menu-item inline-block">
                                <span className="name font-weight-600 neturals-5 to-color-white-hover link">About</span>
                            </li>
                            <li className="menu-item inline-block">
                                <span className="name font-weight-600 neturals-5 to-color-white-hover link">VR Gallery</span>
                            </li>
                        </ul>
                        <div className="search-bar relative padding-row-48">
                            <div className="input-wrapper relative">
                                <div className="icon-wrapper">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon search absolute width-24 link">
                                        <path fillRule="evenodd" clipRule="evenodd"d="M3.75 10.97C3.75 6.98229 6.98229 3.75 10.97 3.75C14.9577 3.75 18.19 6.98229 18.19 10.97C18.19 14.9577 14.9577 18.19 10.97 18.19C6.98229 18.19 3.75 14.9577 3.75 10.97ZM10.97 1.75C5.87772 1.75 1.75 5.87772 1.75 10.97C1.75 16.0623 5.87772 20.19 10.97 20.19C13.1559 20.19 15.1641 19.4294 16.7444 18.1584L20.543 21.957C20.9335 22.3475 21.5667 22.3475 21.9572 21.957C22.3478 21.5665 22.3478 20.9333 21.9572 20.5428L18.1586 16.7441C19.4295 15.1639 20.19 13.1558 20.19 10.97C20.19 5.87772 16.0623 1.75 10.97 1.75Z"></path>
                                    </svg>
                                </div>
                                <input className="user-input width-0 border-none outline-none placeholder-neturals-4 font-16 invisibility" type="text" placeholder="Search..." value="" readOnly />
                                <div className="close absolute opacity-0 link invisibility">
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="#FF312D" xmlns="http://www.w3.org/2000/svg" className="icon">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M0.209209 0.20921C0.488155 -0.0697364 0.940416 -0.0697364 1.21936 0.20921L5 3.98985L8.78064 0.209209C9.05958 -0.0697365 9.51184 -0.0697365 9.79079 0.209209C10.0697 0.488155 10.0697 0.940416 9.79079 1.21936L6.01015 5L9.79079 8.78064C10.0697 9.05958 10.0697 9.51184 9.79079 9.79079C9.51184 10.0697 9.05958 10.0697 8.78064 9.79079L5 6.01015L1.21936 9.79079C0.940416 10.0697 0.488155 10.0697 0.20921 9.79079C-0.0697364 9.51184 -0.0697364 9.05958 0.20921 8.78064L3.98985 5L0.209209 1.21936C-0.0697365 0.940416 -0.0697365 0.488155 0.209209 0.20921Z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="user-status">
                            <div className="join">
                                <button className="login padding-row-12 padding-col-8 border-none border-radius-10 background-primary white background-primary-hover link">CONNECT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>    
            </PC>

            <Mobile>
            <header className="nav-mobile fixed max-width header-zindex">
                <div className="nav-wrapper row align-center justify-between height-80x margin-center font-size-18">
                    <svg id="\uB808\uC774\uC5B4_1" xmlns="http://www.w3.org/2000/svg" 
                        x="0px" y="0px" viewBox="0 0 1280 294.73" height="32" className="link">
                        <g>
                            <g>
                                <g>
                                    <path className="st3"
                                        d="M199.89,144.19c37.32,0,67.57-30.25,67.57-67.57c0-37.32-30.25-67.57-67.57-67.57 c-37.32,0-67.57,30.25-67.57,67.57C132.32,113.94,162.57,144.19,199.89,144.19z">
                                    </path>
                                    <path className="st1"
                                        d="M64.72,144.19c18.66,0,35.55-7.56,47.78-19.79L64.72,76.62l47.78-47.78C100.28,16.61,83.38,9.05,64.72,9.05 C27.41,9.05-2.85,39.3-2.85,76.62C-2.85,113.94,27.41,144.19,64.72,144.19z">
                                    </path>
                                    <path className="st2"
                                        d="M199.89,159.65c-37.3,0-67.53,30.23-67.53,67.53s30.24,67.53,67.53,67.53h67.53l-67.53-67.53l67.53-67.53 H199.89z">
                                    </path>
                                    <polygon className="st3" points="-2.85,294.73 132.32,159.63 -2.85,159.63  "></polygon>
                                </g>
                                <g>
                                    <path className="st3"
                                        d="M389.36,92.24c27.86,0,48.89,15.68,55.56,41.05h-31.37c-4.84-10.01-13.68-15.02-24.53-15.02 c-17.52,0-29.53,13.01-29.53,33.7c0,20.69,12.01,33.7,29.53,33.7c10.85,0,19.69-5.01,24.53-15.02h31.37 c-6.67,25.36-27.7,40.88-55.56,40.88c-34.54,0-58.9-24.53-58.9-59.57S354.82,92.24,389.36,92.24z">
                                    </path>
                                    <path className="st3"
                                        d="M513.66,211.87c-33.2,0-60.23-24.86-60.23-60.07c0-35.21,27.03-59.9,60.23-59.9 c33.37,0,59.9,24.69,59.9,59.9C573.56,187.01,546.87,211.87,513.66,211.87z M513.66,185.84c18.69,0,30.87-13.52,30.87-34.04 c0-20.86-12.18-34.04-30.87-34.04c-19.02,0-31.03,13.18-31.03,34.04C482.63,172.33,494.64,185.84,513.66,185.84z">
                                    </path>
                                    <path className="st3"
                                        d="M630.12,93.57h28.53v79.76c0,25.2-15.35,38.54-38.54,38.54c-24.03,0-40.88-14.02-40.88-40.38h28.37 c0,10.01,4.34,14.85,11.68,14.85c6.84,0,10.85-4.34,10.85-13.02V93.57z">
                                    </path>
                                    <path className="st3"
                                        d="M750.42,190.02h-43.72l-7.01,20.69h-29.87l42.38-117.13h33.04l42.38,117.13h-30.2L750.42,190.02z  M728.56,125.11l-14.35,42.88h28.87L728.56,125.11z">
                                    </path>
                                    <path className="st3"
                                        d="M796.31,93.57h33.7l32.87,81.09l32.54-81.09h33.54v117.13h-28.53v-70.25l-26.2,70.25H851.2l-26.36-70.41 v70.41h-28.53V93.57z">
                                    </path>
                                </g>
                                <g>
                                    <polygon className="st3"
                                        points="1059.93,163.88 977.7,88.11 977.7,209.71 1000.87,209.71 1000.87,139.72 1082.92,215.5  1082.92,93.9 1059.93,93.9  ">
                                    </polygon>
                                    <polygon className="st3"
                                        points="1123.19,93.9 1107.97,93.9 1107.97,209.71 1131.14,209.71 1131.14,160.4 1173.49,160.4  1173.49,140.55 1131.14,140.55 1131.14,114.74 1175.15,114.74 1175.15,93.9 1131.14,93.9  ">
                                    </polygon>
                                    <polygon className="st3"
                                        points="1193.81,93.9 1193.81,115.4 1224.92,115.4 1224.92,209.71 1248.73,209.71 1248.73,115.4 1280,115.4  1280,93.9  ">
                                    </polygon>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <div className="menus row align-center">
                        <div className="search-bar relative padding-row-48">
                            <div className="input-wrapper relative">
                                <div className="icon-wrapper">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon search absolute width-24 link">
                                        <path fillRule="evenodd" clipRule="evenodd"d="M3.75 10.97C3.75 6.98229 6.98229 3.75 10.97 3.75C14.9577 3.75 18.19 6.98229 18.19 10.97C18.19 14.9577 14.9577 18.19 10.97 18.19C6.98229 18.19 3.75 14.9577 3.75 10.97ZM10.97 1.75C5.87772 1.75 1.75 5.87772 1.75 10.97C1.75 16.0623 5.87772 20.19 10.97 20.19C13.1559 20.19 15.1641 19.4294 16.7444 18.1584L20.543 21.957C20.9335 22.3475 21.5667 22.3475 21.9572 21.957C22.3478 21.5665 22.3478 20.9333 21.9572 20.5428L18.1586 16.7441C19.4295 15.1639 20.19 13.1558 20.19 10.97C20.19 5.87772 16.0623 1.75 10.97 1.75Z"></path>
                                    </svg>
                                </div>
                                <input className="user-input width-0 border-none outline-none placeholder-neturals-4 font-16 invisibility" type="text" placeholder="Search..." value="" readOnly />
                                <div className="close absolute opacity-0 link invisibility">
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="#FF312D" xmlns="http://www.w3.org/2000/svg" className="icon">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M0.209209 0.20921C0.488155 -0.0697364 0.940416 -0.0697364 1.21936 0.20921L5 3.98985L8.78064 0.209209C9.05958 -0.0697365 9.51184 -0.0697365 9.79079 0.209209C10.0697 0.488155 10.0697 0.940416 9.79079 1.21936L6.01015 5L9.79079 8.78064C10.0697 9.05958 10.0697 9.51184 9.79079 9.79079C9.51184 10.0697 9.05958 10.0697 8.78064 9.79079L5 6.01015L1.21936 9.79079C0.940416 10.0697 0.488155 10.0697 0.20921 9.79079C-0.0697364 9.51184 -0.0697364 9.05958 0.20921 8.78064L3.98985 5L0.209209 1.21936C-0.0697365 0.940416 -0.0697365 0.488155 0.209209 0.20921Z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="hamburger link" onClick={ toggleSwitch }>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                                <path d="M2 11H22V13H2zM2 5H22V7H2zM2 17H22V19H2z" fill="#ffffff"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
            <aside className={ "mobile-menu-wrap max-width max-height overflow-y-scroll" + (isOpen ? " activate-mobile" : "") } >
                <ul className="mobile-menu-list-wrapper max-height padding-top-12 padding-bottom-32 padding-row-32 col align-center text-center white">
                    <li className="mobile-menu-list padding-col-12 link">Home</li>
                    <li className="mobile-menu-list padding-col-12 link">Market</li>
                    <li className="mobile-menu-list padding-col-12 link">Artist</li>
                    <li className="mobile-menu-list padding-col-12 link">About</li>
                    <li className="mobile-menu-list padding-col-12 link">News</li>
                    <li className="mobile-menu-list padding-col-12 link">VR Gallery</li>
                    <li className="mobile-menu-list padding-col-12 link">Login</li>
                </ul>
            </aside>
            </Mobile>
        </>
    );

}