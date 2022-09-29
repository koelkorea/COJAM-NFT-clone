import '../style/Video.css';

export default function Video(props) {

    return (

        <section className="centered background-neturals-6">
            <div className="padding-24">
                <img className="art-media link" src={ props.data? props.data.asset_contract.image_url : 'Loading'} />
            </div>
        </section>

    );

}