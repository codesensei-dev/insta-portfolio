import Image from "react-bootstrap/Image";


export default function NotFound(){
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <Image
          style={{ width: '50%', minWidth: '100px', maxWidth: '200px' ,margin:'30px'}}
          src={`${process.env.PUBLIC_URL}/assets/error.png`}
        />
        <h4 className=".poppins-bold">The Requested Page Was Not Found!</h4>
      </div>
    );
}