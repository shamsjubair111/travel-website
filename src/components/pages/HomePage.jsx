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

    <div className='row pt-5 pb-3'>

       {
         dataList?.attractionsData?.map((item,index) =>

          <div className='col-lg-3 col-md-6 col-sm-12 mb-3 single-attraction-focus' style={{cursor: "pointer"}} key={index}>

            <img src={item?.imageUrl} className='img-fluid rounded-3' alt='attraction_image'/>
            <p className='my-3 fw-bold'>{item?.name}</p>
            
          </div>
        )

       }

    </div>

    <div>
      <button className='fw-bold btn btn-success px-5 py-2'>See More</button>
    </div>

  </section >

  
  {/* Our Strength Section */}

  <section className='py-5 text-center container'>

  <h1 className='mb-3' style={{fontStyle: "italic", fontWeight: "bold"}}>Our Strength</h1>

   <div className='row pt-5 pb-3'>

       {
         dataList?.ourStrength?.map((item,index) =>

          <div className='mb-3 our-strength-grid' style={{cursor: "pointer"}} key={index}>

            <p className='my-3 fw-bold'>{item}</p>
            
          </div>
        )

       }

    </div>


  </section>


  {/* Package Section */}

  <section className='py-5 text-center container'>

     <h1 className='mb-3' style={{fontStyle: "italic", fontWeight: "bold"}}>Our Package Type</h1>


  </section>

  </>
    );
};

export default HomePage;