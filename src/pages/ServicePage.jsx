import image1 from '../assets/image1.jpg'
import { serviceData } from '../utils/servicesData'
import './servicePage.css'
const ServicePage = () => {
    return (
        <main className="servicesPage-main my-4 ">
            <div className=''>

                <div className="services-bg">
                    <div className="service-header">
                        <h1>2D Designs</h1>
                        <div className="breadcrumb">
                            <h1>Home</h1>
                            <p>-</p>
                            <h2>Service Details</h2>
                        </div>
                    </div>
                </div>

                <div className="content-container w-[90vw] m-auto">
                    <div
                        className="image-container"
                        style={{ backgroundImage: `url(${image1})` }}
                    ></div>

                    <div className="services-list">
                        <h2>Main Services</h2>
                        <ul>
                            {serviceData.map((item) => {
                                return <li>{item.title}</li>
                            })}
                        </ul>
                    </div>
                </div>

                <div className="details-section w-[90vw]">
                    <h1>2D Designs</h1>
                    <p>
                        Our 2D drawing services offer precise and detailed architectural plans and blueprints. These technical drawings serve as the foundation for your project, providing clear guidelines for construction and design. From floor plans to elevations and sections, our expert designers ensure accuracy and clarity in every drawing. Trust Home Voila to create the detailed 2D drawings that are essential for a successful build.
                    </p>
                </div>
            </div>

        </main>

    )
}
export default ServicePage