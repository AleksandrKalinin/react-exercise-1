import { useState, useEffect, Fragment } from 'react';
import { Button } from 'react-bootstrap';

function UserInfo(props) {

  const [data, setData] = useState(props.data.data);

  useEffect(() => {
    setData(props.data.data)
  }, [props])

  const [isOpen, setVisibility] = useState(false);

  return (
    <div>    
      <p><span className="bold">Name: </span>{data.name}</p>
      <p><span className="bold">Username: </span>{data.username}</p>
      <p><span className="bold">Email: </span>{data.email}</p>
      {isOpen ?
        <>
          <p><span className="bold">Phone </span>{data.phone}</p>
          <p><span className="bold">Website: </span>{data.website}</p>
          <p><span className="bold">City: </span>{data.address.city}</p>
          <p><span className="bold">Address: </span>{data.address.street}</p>
        </>
      : null}
      <Button onClick = {() => setVisibility(!isOpen)}>{!isOpen ? 'More information' : 'Less information' }</Button>
    </div>
  );
}

export default UserInfo;
