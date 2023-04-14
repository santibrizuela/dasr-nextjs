import React from 'react'
import familyOnSofa from '../public/assets/familyOnSofa.jpg'
import nyc from '../public/assets/nyc.jpg'
import citizenship from '../public/assets/accounting.jpg'
import otherServices from '../public/assets/otherServices.jpg'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full text-center'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='py-8 text-xl tracking-widest uppercase text-[#365084]'>Proyectos</p>
            <h2 className='py-4'>¿Por qué elegirnos?</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <ProjectItem
                    title='Documentos de Inmigración'
                    backgroundImg={familyOnSofa}
                    projectUrl='/immigration'
                    detail='Solicitudes Familiares, Visas.'
                />

                <ProjectItem
                    title='Turismo'
                    backgroundImg={nyc}
                    projectUrl='/turismo'
                    detail='Visas para visitantes, turistas, estudiar y trabajar.'
                />

                <ProjectItem
                    title='Servicios Contables'
                    backgroundImg={citizenship}
                    projectUrl='/accounting'
                    detail='Contabilidad, Taxes, Payroll.'
                />

                <ProjectItem
                    title='Seguros'
                    backgroundImg={otherServices}
                    projectUrl='/seguros'
                    detail='De Vida, Médicos, Comerciales, Automóviles.'
                />

            </div>
        </div>
    </div>
  )
}

export default Projects