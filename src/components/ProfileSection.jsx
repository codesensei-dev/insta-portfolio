import { useContext } from 'react';
import Image from 'react-bootstrap/Image';
import { userContext } from '../App';

export default function ProfileSection({user}){
    let imageUrl = 'https://fastly.picsum.photos/id/1083/200/200.jpg?hmac=ocBiYtawFGXm884DNfTBRQy65ZWvsTQf_XCnlTUdtB4';
    return (
      <div style={{ textAlign: 'center', margin : '10px' }}>
        <Image
          src={imageUrl}
          roundedCircle
          style={{ width: '7%', minWidth:'150px', margin: '10px 0px' }}
        />
        <h4 className="poppins-bold" style={{ margin: '10px 0px 3px'}}>{user.name}</h4>
        <h6 className="poppins-medium" style={{ margin: '3px 0px 10px' }}>{user.description}</h6>
      </div>
    );
}