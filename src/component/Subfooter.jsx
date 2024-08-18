import React from 'react'

function Subfooter() {
    return (
        <div className='Subfooter'>
            <form>
                <input type="email" placeholder="Enter your email" name='email' />
                <button type='submit' name='subscribe'>Subscribe</button>
            </form>
        </div>
    )
}

export default Subfooter
