import React from 'react'
import {Button} from "@/components/ui/button";
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className='home-section'>
          <CompanionCard
              id="123"
              name="Neura the Brainy Explorer"
              topic="Neural Network of the Brain"
              subject="science"
              duration= {45}
              color="#E5D0FF"
          />
          <CompanionCard
              id="456"
              name="Countsy the Number Wizard"
              topic="Derivatives & Integrals"
              subject="math"
              duration= {35}
              color="#FFDA6E"
          />
          <CompanionCard
              id="789"
              name="Verba the Vocabulary Builder"
              topic="English Literature"
              subject="language"
              duration= {15}
              color="#BDE7FF"
          />
      </section>

       <section className='home-section'>
           <CompanionsList
            title='Rencently Completed Sessions'
            companions={recentSessions}
            classNames="w-2/3 max-lg:w-full"
           />
           <CTA />
       </section>
    </main>
  )
}

export default Page