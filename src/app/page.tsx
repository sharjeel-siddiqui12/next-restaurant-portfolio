'use client'

import { HeroSlider } from '@/components/home/HeroSlider'
import { FeatureCards } from '@/components/home/FeatureCards'
import { AboutSnippet } from '@/components/home/AboutSnippet'
import { FeaturedDishes } from '@/components/home/FeaturedDishes'
import { ChefSection } from '@/components/home/ChefSection'
import { StatsSection } from '@/components/home/StatsSection'
import { VideoSection } from '@/components/home/VideoSection'
import { TestimonialSnippet } from '@/components/home/TestimonialSnippet'
import { ReservationCTA } from '@/components/home/ReservationCTA'

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <FeatureCards />
      <AboutSnippet />
      <FeaturedDishes />
      <ChefSection />
      <StatsSection />
      <VideoSection />
      <TestimonialSnippet />
      <ReservationCTA />
    </main>
  )
}
