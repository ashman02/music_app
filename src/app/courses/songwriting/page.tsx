"use client"
import React from "react"
import Image from "next/image"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"

const basicCourse = [
    {
      "id": 9,
      "title": "Lyric Writing Workshop",
      "slug": "lyric-writing-workshop",
      "description": "Unlock your lyrical creativity and learn how to craft compelling lyrics that resonate with your audience.",
      "price": 89.99,
      "instructor": "Rachel Green",
      "isFeatured": true,
      "image": "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 10,
      "title": "Melody Crafting Masterclass",
      "slug": "melody-crafting-masterclass",
      "description": "Discover the secrets of melody crafting and learn how to compose memorable and catchy melodies for your songs.",
      "price": 109.99,
      "instructor": "Andrew Johnson",
      "isFeatured": false,
      "image": "https://images.unsplash.com/photo-1605389173375-536da8b69691?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 11,
      "title": "Chord Progression Theory",
      "slug": "chord-progression-theory",
      "description": "Explore the theory behind chord progressions and learn how to create harmonic movement in your songwriting.",
      "price": 79.99,
      "instructor": "Sophie Baker",
      "isFeatured": true,
      "image": "https://images.unsplash.com/photo-1488376739361-ed24c9beb6d0?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 12,
      "title": "Song Arrangement Fundamentals",
      "slug": "song-arrangement-fundamentals",
      "description": "Master the art of arranging songs and learn how to structure your compositions for maximum impact.",
      "price": 99.99,
      "instructor": "David Garcia",
      "isFeatured": false,
      "image": "https://images.unsplash.com/photo-1597271116561-ba0ff83c855b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]
  
  

interface Course {
  id: number
  title: string
  slug: string
  description: string
  price: number
  instructor: string
  isFeatured: boolean
  image: string
}

const page = () => {
  interface Word {
    text: string
    className?: string
  }

  const word: Word[] = [
    {
      text: "Courses",
    },
    {
      text: "that work",
    },
    {
      text: "on your",
    },
    {
      text: "Songwriting",
      className: "text-[#c72e2e] dark:text-[#c72e2e]",
    },
  ]

  return (
    <>
    <div className="mt-36 flex items-center justify-center">
        <TypewriterEffectSmooth words={word} />
    </div>
      <div className="flex flex-wrap items-center justify-center mt-20">
        {basicCourse.map((course: Course) => (
          <CardContainer key={course.id} className="inter-var mx-4">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {course.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {course.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={course.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={course.title}
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  )
}

export default page