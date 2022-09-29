import '../style/Video.css';

export default function Video(props) {

    return (

        <section className="centered background-neturals-6">
            <div className="padding-24">
                <img className="art-media link" src={props.contractData.image_url} />
            </div>
        </section>

    );

}