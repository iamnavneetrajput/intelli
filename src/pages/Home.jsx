import React from 'react'
import PageHeader from '../component/PageHeader'
import Cateogries  from '../component/Categories'
import Articals from '../component/Articals'
function Home() {
    return (
        <div className='main'>
            <PageHeader
                title="Welcome to Home"
                paragraph="This is a paragraph of text specific to the Home Page."
                buttonText="Explore Courses"
                buttonLink="/course"
                className="home-image"
            />
            <Cateogries/>
            <Articals/>

        </div>
    )
}

export default Home