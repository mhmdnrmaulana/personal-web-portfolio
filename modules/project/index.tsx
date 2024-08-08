import Motion from "@/common/elements/Motion"
import TextScrollLeft from "@/common/elements/TextScroll"
import Compo from "@/common/elements/compo"
import Container from "@/common/layouts/Container"
import { getData } from "@/common/service/getData"
import React from "react"
import { BiLayer } from "react-icons/bi"

export default async function ProjectsComponent() {
  const projects = await getData(`${process.env.DOMAIN}/api/projects`)

  return (
    <Container>
      <Compo>
        <TextScrollLeft>
          <div className="flex items-center gap-2 font-mono font-semibold mb-2">
            <div className="text-blue-700">
              <BiLayer size={40} />
            </div>

            <div>
              <h1 className="text-2xl">Projects</h1>
              <p className="text-sm font-semibold mb-2">My list of projects</p>
            </div>
          </div>
          <div className="w-full h-[1px] bg-black dark:bg-white my-8" />
        </TextScrollLeft>

        <Motion projects={projects} classname="hidden" />
      </Compo>
    </Container>
  )
}
