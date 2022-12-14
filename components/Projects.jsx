import React from 'react'
import Image from 'next/image'
import fluidLifeImg from '../public/fluid-life.jpeg'
import ardrossanImg from '../public/ardrossan.jpeg'
import eiaImg from '../public/eia.webp'
import ProjectsItem from './ProjectsItem'
import rosenthalImg from '../public/rosenthal.jpeg'

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#fdad5c]'>Projects</p>
                <h2 className='py-4'>What We've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>

                 <ProjectsItem 
                    title='Fluid Life' 
                    backgroundImg={fluidLifeImg} 
                    address='9318 48 St NW Edmonton'
                    projectUrl='/fluidlife' 
                />
                  <ProjectsItem 
                    title='Ardrossan' 
                    backgroundImg={ardrossanImg} 
                    address = '80 1st Ave, Ardrossan'
                    projectUrl='/ardrossan' 
                />
                  <ProjectsItem 
                    title='EIA' 
                    backgroundImg={eiaImg} 
                    address = '1 Outlet Collection Way, Leduc'
                    projectUrl='/eia' 
                />
                  <ProjectsItem 
                    title='Rosenthal Showhomes' 
                    backgroundImg={rosenthalImg} 
                    address = '8331 224 St NW, Edmonton'
                    projectUrl='/rosenthal' 
                />
                </div>
            </div>
        </div>
    )
}
export default Projects