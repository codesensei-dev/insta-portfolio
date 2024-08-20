import Image from 'react-bootstrap/Image';

export default function ProfileSection({user}){
    return (
      <div style={{ textAlign: 'center', margin : '10px' }}>
        <Image
          src={user.image}
          roundedCircle
          style={{ width: '7%', minWidth:'150px', margin: '5px 0px' }}
        />
        <h4 className="poppins-bold" style={{ margin: '5px 0px 5px'}}>{user.name}</h4>
        <h5 className="poppins-medium" style={{ margin: '0px 0px 35px' }}>{user.userId}</h5>
        <h6 className="poppins-bold" style={{ margin: '3px 0px 10px' }}>{user.description}</h6>
      </div>
    );
}