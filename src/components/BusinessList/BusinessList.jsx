import './BusinessList.css'
import Business from '../Business/Business'

function BusinessList({businesses}) {
    return(
        <div className='BusinessList'>
           {businesses.map((business, index) => (
            <Business business={business} key={index} />
           ))}
        </div>
    );

}

export default BusinessList ;