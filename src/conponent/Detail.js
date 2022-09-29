import '../style/Detail.css';

export default function Detail(props) {

    const ContractYear = new Date(props.contractData.created_date).getFullYear();
    
    return (

        <>
            <div className="ver-view general-detail">
                <h2 className="title font-weight-600"> {props.contractData.name} </h2>
                <div className="description top-48">{props.contractData.description} </div>
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
                        <img className="profile border-50" src={props.ownerData.profile_img_url} alt="profile" width="64px" height="64px" loading="lazy" decoding="async" />
                        <div className="left-24 col justify-center">
                            <span className="bold">{props.ownerData.user} Park Jong Hee</span>
                            <span className="top-8 text-left lighter-grey line-height-24">{props.creatorData.user}parkjonghee</span>
                        </div>
                    </div>
                </div>
            </div>    
        </>
    );

}