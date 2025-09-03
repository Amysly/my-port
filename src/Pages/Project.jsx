import React from 'react'



const myProjects = [
    {
        id: 1,
        title: "CryptocurrencyTracker App",
        image: "/images/crypto.jpg", 
        description: "Created with Html,Tailwind and React.js",
        liveLink: " https://cryptocurrencytracke.netlify.app/",
        codeLink: "https://github.com/Amysly/Cryptocurrency-Tracker"
    },

    {
        id: 2,
        image: "/images/cart.jpg", 
        title: "E-commerce website",
        description: "Created with Html,Css and Javascript",
        liveLink: "https://jovial-cactus-77d66f.netlify.app/",
        codeLink: "https://github.com/Amysly/Amy-Kitchen"
    },
    {
        id: 3,
        image: "/images/movie.jpg", 
        title: "Movie Search App",
        description: "Created with Html,Tailwind and React.js",
        liveLink: "https://movieapp-amysly.netlify.app",
        codeLink: "https://github.com/Amysly/movie_app"
    }
]
const Project = () => {
  return (
    <div className="background-two">
    <div className="pt-4 px-4 background">
    <h2 className='col-span-full text-yellow-400 text-lg lg:text-4xl sm:text-xl sm:mt-10
          lg:mt-20 text-center font-serif'> Projects</h2>
          <div className="border border-yellow-400 w-32 mx-auto mt-2"></div>
        <div className='grid lg:grid-cols-2 gap-7 p-10'>
        {myProjects.map((myProject) => (
            <div key={myProject.id} data-aos="fade-up">
            <img src={myProject.image} alt={myProject.title} 
            style={{ height: "350px", objectFit:'cover' }}  className=''/>
            <h2 className='text-white lg:text-2xl font-serif mt-2 lg:mt-3 sm:mt-0'>{myProject.title}</h2>
            <h2 className='text-white lg:text-2xl font-serif mb-3'>{myProject.description}</h2>
            
            <a href={myProject.liveLink} target="_blank" rel="noopener noreferrer">
                <button className='bg-yellow-400 p-1 mr-3 text-white rounded-md font-serif lg:text-2xl'>
                Live View
                </button>
            </a>
            
            <a href={myProject.codeLink} target="_blank" rel="noopener noreferrer">
                <button className='bg-yellow-400 p-1 text-white rounded-md font-serif lg:text-2xl'>
                View Code
                </button>
            </a>
            </div>
        ))}
        </div>
        </div>
    </div>
  )
}

export default Project
