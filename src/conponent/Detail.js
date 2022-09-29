import '../style/Detail.css';

export default function Detail(props) {

    const ContractYear = props.data ? new Date(props.data.asset_contract.created_date).getFullYear() : 'Loading..';
    
    return (

        <>
            <div className="ver-view general-detail">
                <h2 className="title font-weight-600"> { props.data ? props.data.asset_contract.name  : "Loading..." } </h2>
                <div className="description top-48">{ props.data ? props.data.asset_contract.description  : "Loading..." } </div>
                <div className="infos top-24">
                    <div className="info">
                        <span className="label">Created year: </span>
                        <span className="text">{ ContractYear }</span>
                    </div>
                    <div className="info">
                        <span className="label">Edition: </span>
                        <span className="text">1/1</span>
                    </div>
                </div>
                <div className="artist-info top-48 padding-top-48">
                    <div className="profile-wrapper row link">
                        <img className="profile border-50" src={props.data ? props.data.top_ownerships[0].owner.profile_img_url : "Loading..." } alt="profile" width="64px" height="64px" loading="lazy" decoding="async" />
                        <div className="left-24 col justify-center">
                            <span className="bold">{ props.data ? props.data.top_ownerships[0].owner.user : "Loading..." } Park Jong Hee</span>
                            <span className="top-8 text-left lighter-grey line-height-24">{ props.data ? props.data.creator.user : "Loading..." }parkjonghee</span>
                        </div>
                    </div>
                </div>
            </div>    
        </>
    );

}