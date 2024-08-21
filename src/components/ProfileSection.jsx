import Image from 'react-bootstrap/Image';
import '../css/ProfileSection.css';

export default function ProfileSection({user}){
    return (
      <div style={{ textAlign: 'center', margin : '10px' }}>
        <Image
          src={user.image}
          roundedCircle
          width="150"
          height="150"
          alt='codesensei profile image'
          style={{ width: '7%', minWidth:'150px', margin: '5px 0px' }}
        />
      <h4 className="profile-name">{user.name}</h4>
      <h5 className="profile-userId">{user.userId}</h5>
      <h6 className="profile-description">{user.description}</h6>
      </div>
    );
}