export default function Main(props) {
    const { data } = props;
    return (
        <div className='imgContainer'>

            {/* <img src={data.hdurl} alt={data.title || 'bg-image'} className='bgImage' /> */}
            <iframe
                src={data?.url}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />

        </div>


    )
}