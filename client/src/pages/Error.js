import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='Error - Page Not found' />
        <h2>Oops!</h2>
        <p>Your requestd page could not be found</p>
        <br />
        <Link to='/'>
          <button className='btn' type='button'>
            Go Back Home
          </button>
        </Link>
      </div>
    </Wrapper>
  );
};
export default Error;
