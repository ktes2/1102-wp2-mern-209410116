import React from 'react'
import img from '../assets/images/not-found.svg'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrapper/Error_16'


const Error_16 = () => {
  return (
    <Wrapper className="full-page">
        <div>
            <img src={img} alt='not found'></img>
            <h3>Ohh! page not found</h3>
                <p>We can't seem to find the page you're looking for</p>
                <Link to="/">back home</Link>
        </div>

    </Wrapper>
  )
}

export default Error_16

