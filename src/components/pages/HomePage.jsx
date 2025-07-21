import NavBar from '../header/NavBar';
import bgVideo from '../../assets/videos/background.mp4';
import dataList from '../../dataList';

const HomePage = () => {

    return (

      <>
  {/* Hero Section with video */}

  <section className="hero-section">
    <NavBar />

    <video
      autoPlay
      loop
      muted
      playsInline
      className="video-background"
    >
      <source src={bgVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div className="centered-content">
      <h1 className="text-white">Discover Today, Think Tomorrow</h1>
    </div>
  </section>

  {/* Attractions Section */}

  <section className='py-5 text-center container'>

    <h1 className='mb-3' style={{fontStyle: "italic", fontWeight: "bold"}}>Attractions</h1>

    <p style={{color: "#818181"}}>
      When it comes to exploring exotic places, the choices are numerous.
      Whether you like peaceful destinations or vibrant landscapes, we have offers for you.
    </p>

    <div className='row py-5'>

       {
         dataList?.attractionsData?.map((item,index) =>

          <div className='col-lg-3 col-md-6 col-sm-12 mb-3 single-attraction-focus' style={{cursor: "pointer"}} key={index}>

            <img src={item?.imageUrl} className='img-fluid rounded-3' alt='attraction_image'/>
            <p className='my-3 fw-bold'>{item?.name}</p>
            
          </div>
        )

       }

    </div>

  </section>
</>
    );
};

export default HomePage;