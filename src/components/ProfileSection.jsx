import Image from 'react-bootstrap/Image';

export default function ProfileSection({user}){
    return (
      <div style={{ textAlign: 'center', margin : '10px' }}>
        <Image
          src={user.image}
          roundedCircle
          style={{ width: '7%', minWidth:'150px', margin: '10px 0px' }}
        />
        <h4 className="poppins-bold" style={{ margin: '10px 0px 10px'}}>{user.name}</h4>
        <h6 className="poppins-medium" style={{ margin: '3px 0px 10px' }}>{user.description}</h6>
      </div>
    );
}