import React from 'react'

const CvButton = () => {
  return (
   <div className="flex justify-center">
    <a
        href="/cv/Amarachi-ObiegueCV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-400 px-4 py-2 flex items-center justify-center 
                rounded-lg text-white font-serif w-32 hover:bg-yellow-500"
    >
        View Resume
    </a>
</div>
  )
}

export default CvButton
