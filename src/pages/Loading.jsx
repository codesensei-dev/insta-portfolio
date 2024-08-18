import Spinner from 'react-bootstrap/Spinner';

export default function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Spinner
        animation="border"
        variant="dark"
        style={{ height: '50px', width: '50px' }}
      />
    </div>
  );
}
