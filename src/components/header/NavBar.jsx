import logo from '../../assets/logo.svg';
import dataList from '../../dataList';


const NavBar = () => {


    return (

        <>
         <div className='container d-flex justify-content-between py-3'>

            <img src={logo} style={{cursor: "pointer"}} className='img-fluid' alt="Website_Logo"/>

            <div>
                <nav>
                    <ul>
                        {
                            dataList?.navbarOptions?.map((data,index) => 
                                <li className='navbar-list-style' key={index}>{data}</li>
                            )
                        }
                    </ul>
                </nav>
            </div>

         </div>
        </>
    );
};

export default NavBar;