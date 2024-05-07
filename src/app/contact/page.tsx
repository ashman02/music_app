'use client'
import React from "react"
import { Meteors } from "@/components/ui/meteors"

const page = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-32 lg:w-2/4 md:w-3/4 w-[95vw] overflow-hidden">
    <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
    <form>
      <div className="mb-4">
        <label htmlFor="fullname" className="block text-white">Full Name</label>
        <input type="text" id="fullname" name="fullname" className="w-full border border-blue-500 rounded-md px-4 py-2 mt-1 focus:outline-none" style={{ background: 'black', color: 'white' }} />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-white">Email</label>
        <input type="email" id="email" name="email" className="w-full border border-blue-500 rounded-md px-4 py-2 mt-1 focus:outline-none" style={{ background: 'black', color: 'white' }} />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-white">Message</label>
        <textarea id="message" name="message" rows={4} className="w-full border border-blue-500 rounded-md px-4 py-2 mt-1 focus:outline-none" style={{ background: 'black', color: 'white' }}></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
    </form>

    <div className="meteor">  
    <Meteors className="" number={50}/>
    </div>
  </div>
  )
}

export default page
