import * as React from 'react'
import { Link } from 'gatsby'


const Layout = ({ pageTitle, children }) => {
   
    const linkStyle = `
     Hover:opacity-70
     text-sm
     sm:text-lg
    `
    const logoStyle = `
    text-white 
    font-rammetto
    sm:text-base
    text-sm
    `
  
    return (
    <div>
      <title>{pageTitle}</title>
      
      <nav className="flex sm:justify-between justify-around items-center bg-slate-900 lg:px-20 sm:px-6 py-8 text-gray-100">
        <h3 className={logoStyle}>cisatracurium</h3>
        <ul className="flex">
          <li className={linkStyle}>
            <Link to="/" >
              Home
            </Link>
          </li>
          <li className={linkStyle}>
            <Link to="/preop/postop" >
              Intra and PostOp
            </Link>
          </li>
          <li className={linkStyle}>
            <Link to="/preop/preop" >
              Preop and Intraop
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        {children}
      </main>


      <div class="w-full bg-slate-900">
      <div class="flex flex-wrap text-center text-white">


        <div class="w-full md:w-1/3 p-5 border-r border-blue-800 md:text-left">
          <div class="my-6 ml-3 text-xl font-semibold">About Me</div>
          <p class="p-3 text-gray-400">I currrently work in private practice in the greater Seattle area. I did residency at NYU and an Ob fellowship at UCLA. I worked briefly as an academic attending at OHSU before switching to private practice.</p>
          <p class="p-3 text-gray-400">I have never been an oral board examiner and did not participate in a ton of mock orals. I am not a hundred percent sure how the exam is actually graded, so it is probably best to get feedback from multiple people</p>
        </div>


        <div class="w-full md:w-1/3 p-5 border-r border-blue-800 md:text-left">
          <div class="my-6 ml-3 text-xl font-semibold">Content</div>
          <p class="p-3 text-gray-400">These websites are designed to offer users general health information for educational purposes only. The general health information furnished on these sites is not intended to replace personal consultation with a qualified health care professional, and not intended as medical advice</p>
        </div>


        <div class="w-full md:w-1/3 p-5 border-r border-blue-800 md:text-left">
          <div class="my-6 ml-3 text-xl font-semibold">Contact</div>
          <p class="p-3 text-gray-400">These websites are designed to offer users general health information for educational purposes only. The general health information furnished on these sites is not intended to replace personal consultation with a qualified health care professional, and not intended as medical advice</p>
        </div>

      </div>
      </div>
      
    </div>
  )
}


export default Layout