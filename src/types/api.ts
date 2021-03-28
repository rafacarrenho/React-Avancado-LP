export type LogoProps = {
  alternativeText: string
  url: string
}

export type TechIcons = {
  icon: {
    url: string
  }
  title: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  media: {
    alternativeText: string
    url: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcons[]
}

export type SectionConceptsProps = {
  title: string
  concepts: [
    {
      title: string
    }
  ]
}

export type Modules = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: Modules[]
}

export type SectionScheduleProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type socialLinksProps = {
  title: string
  url: string
}

export type Authors = {
  name: string
  role: string
  description: string
  photo: {
    name: string
    url: string
  }
  socialLinks: socialLinksProps[]
}

export type SectionAboutUsProps = {
  title: string
  authors: Authors[]
}

export type ReviewsProps = {
  name: string
  text: string
  photo: {
    url: string
    alternativeText: string
  }
}

export type SectionReviewsProps = {
  title: string
  reviews: ReviewsProps[]
}

export type SectionFaqProps = {
  title: string
  questions: [
    {
      question: string
      answer: string
    }
  ]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionSchedule: SectionScheduleProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
