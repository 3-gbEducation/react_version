// src\assets\images\notfound.svg
import { Link } from 'react-router-dom'
import notfound from './assets/images/notfound.svg'

const NotFound=()=>{
    return (
        <div style={{marginTop: '75px',marginBottom : '100px'}}>
            {/* <h1>
                Page not found
            </h1> */}
            <div className='container justify-content-center' >
                <div className='row'>
                <div className='col-lg-6'>
                    <img src={notfound} alt='error 404, page not found' height='250px'/>
                </div>
                <div className='col-lg-6 align-content-center'>
                    <p className='mt-2'>We're sorry, but the page you're trying to go does not exist or may have been moved.</p>
                    <br />
                    <button className='btn btn-style btn-outline-secondary btn-block mt-4'>
                        <Link to='/'>Go back to Home Page</Link>
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;