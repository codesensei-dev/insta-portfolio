import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";


export default function FooterSection({user}){

    return (
      <div style={{ textAlign: 'center', margin: '10px' }}>
        <h5 className="poppins-medium" style={{ margin: '30px 0px' }}>
          Many more resources coming soon...
        </h5>
        <h6 className="poppins-regular" style={{ margin: '30px 0px' }}>
          Sare kaani kaani kaaniiii....
        </h6>
            {user.socialLinks.map((socaillink,index)=>{
                return (
                    <a href={socaillink.url} style={{margin:'10px'}} aria-label="Instagram Link">
                      <Image
                        className="social-icon"
                        src={socaillink.icon}
                        style={{ aspectRatio: '1/1', width: '40px' }}
                      />
                    </a>
                );
            })}
      </div>
    );
}