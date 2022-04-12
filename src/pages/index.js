import * as React from 'react'
import Layout from '../components/layout'
import '../styles/global.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Collection of Free Resources to Help prepare for the Anesthesiology Oral Board Exam">
      <div class="w-full p-6 bg-slate-700">
        <div class="w-50 p-10 mx-auto pt-6 border-b-2 border-orange-500 text-center text-2xl text-gray-100">
          Collection of Free Resources to Help Prepare for the Anesthesiology Oral Board Exam
        </div>
        <div class="p-20 text-center text-lg text-gray-100">

          <p>When I initially started studying for the exam
          I went through several threads on SDN to determine what materials were the most helpful. One post
          by AnesThrowaway was very helpful who had taken the exam three times. The post stated that
          he/she used the commonly recommneded materials such as Ultimate Board Prep, Yao & Artusio, 
          OpenAnesthesia, Stanford Emergency manual, and anesthesiaconsideration.com. He/She also stated
          "However, the absolute gold for this exam is the old ABA practice exams floating around on the internet. These don’t come with answers but doing them out loud and then looking up things that I didn’t know was extremely helpful. The same questions come up over and over on these practice exams and I learned how to answer them quickly and concisely. This paid in dividends on exam day. Absolutely by far the best and most helpful thing that I did."
          </p>
          <p class="pt-10">After having recently taken the oral board exam, I also feel that doing the old exams were, by far, the most helpful. I created this website the help organize the information
          with answers from my own studying. Hopefully this is helpful. Please reach out to me if you have
          suggestions for improvement and or corrections!
          </p>
        
        </div>
        
      </div>
      
    </Layout>
  )
}

export default IndexPage