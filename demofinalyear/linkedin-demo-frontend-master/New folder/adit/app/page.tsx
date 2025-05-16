import Link from "next/link"
import { Search, Upload, ArrowRight, Camera, Sparkles, Zap, ShoppingBag, Heart, ChevronDown } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ReactNode } from "react"
import { url } from "inspector"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
}

interface CategoryCardProps {
  image?: string
  title: string
  delay?: number
  isViewAll?: boolean
}

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatar?: string
  delay?: number
}
interface FaqItemProps {
  question: string
  answer: string
  delay?: number
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMGYwZjAiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00TTIwIDM0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0wLTE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtMC0xNmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRNNCAxOGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtMCAxNmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtMCAxNmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTQiLz48L2c+PC9nPjwvc3ZnPg==')]">
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/80 dark:bg-gray-950/80 border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              StyleMatch
            </span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link href="#hero" className="text-sm font-medium transition-colors hover:text-primary relative group">
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary relative group">
              Features
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
            <Link href="#categories" className="text-sm font-medium transition-colors hover:text-primary relative group">
              Categories
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
            <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary relative group">
              Testimonials
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
            <Link href="#faq" className="text-sm font-medium transition-colors hover:text-primary relative group">
              FAQ
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Top right decorative element */}
            <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-purple-200/40 to-pink-200/40 dark:from-purple-900/20 dark:to-pink-900/20 blur-3xl"></div>

            {/* Bottom left decorative element */}
            <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-200/30 to-purple-200/30 dark:from-blue-900/20 dark:to-purple-900/20 blur-3xl"></div>

            {/* Floating circles */}
            <div className="absolute top-1/4 left-1/4 h-16 w-16 rounded-full bg-purple-300/20 dark:bg-purple-700/20 animate-float-slow"></div>
            <div className="absolute top-3/4 right-1/3 h-8 w-8 rounded-full bg-pink-300/20 dark:bg-pink-700/20 animate-float-medium"></div>
            <div className="absolute top-1/2 right-1/4 h-12 w-12 rounded-full bg-blue-300/20 dark:bg-blue-700/20 animate-float-fast"></div>
          </div>

          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4 max-w-3xl">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 animate-fade-in">
                  Find Your Perfect Style Match
                </h1>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-300 animate-fade-in animation-delay-200">
                  Upload a photo of clothing and we will recommend similar items and outfit pairings tailored just for you
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl items-center gap-6 py-12 lg:grid-cols-1">
              <div className="flex flex-col justify-center space-y-8">
                <div className="flex flex-col items-center space-y-6">
                  <div className="w-full max-w-md animate-fade-in animation-delay-400">
                    <UploadForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#features" className="text-gray-500 dark:text-gray-400">
              <ChevronDown className="h-6 w-6" />
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/20 px-3 py-1 text-sm text-purple-600 dark:text-purple-400 animate-fade-in">
                How It Works
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight animate-fade-in animation-delay-100">
                Discover the Perfect Style in Three Simple Steps
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-lg/relaxed dark:text-gray-400 animate-fade-in animation-delay-200">
                Our AI-powered platform makes finding your style match easier than ever
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <FeatureCard 
                icon={<Camera className="h-10 w-10 text-purple-600" />}
                title="Upload Your Photo"
                description="Take a photo of any clothing item you like or upload one from your gallery"
                delay={0}
              />
              <FeatureCard 
                icon={<Sparkles className="h-10 w-10 text-pink-600" />}
                title="AI Analysis"
                description="Our advanced AI analyzes the style, color, pattern, and fabric to find perfect matches"
                delay={200}
              />
              <FeatureCard 
                icon={<ShoppingBag className="h-10 w-10 text-purple-600" />}
                title="Discover Matches"
                description="Browse through personalized recommendations and complete outfit suggestions"
                delay={400}
              />
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="categories" className="w-full py-12 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/3 right-1/3 h-64 w-64 rounded-full bg-gradient-to-br from-purple-200/30 to-pink-200/30 dark:from-purple-900/10 dark:to-pink-900/10 blur-3xl"></div>
          </div>
          
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-pink-100 dark:bg-pink-900/20 px-3 py-1 text-sm text-pink-600 dark:text-pink-400 animate-fade-in">
                Trending Categories
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight animate-fade-in animation-delay-100">
                Explore Popular Style Categories
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-lg/relaxed dark:text-gray-400 animate-fade-in animation-delay-200">
                Discover trending styles across different categories
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              <CategoryCard 
                image="https://m.media-amazon.com/images/I/71YSrPd04nL._AC_UL320_.jpg"
                title="Ethnic Wear"
                delay={0}
              />
              <CategoryCard 
                image="https://m.media-amazon.com/images/I/91Imqu2c2yL._AC_UL320_.jpg"
                title="Casual Shirts"
                delay={100}
              />
              <CategoryCard 
                image="http://assets.myntassets.com/v1/images/style/properties/b38801381cc54ad5d098a1f2885b905a_images.jpg"
                title="Formal Wear"
                delay={200}
              />
              <CategoryCard 
                image="http://assets.myntassets.com/v1/images/style/properties/beb28bff25af12c806f7d7044412f64e_images.jpg"
                title="Footwear"
                delay={300}
              />
              <CategoryCard 
                image="http://assets.myntassets.com/v1/images/style/properties/6e0e3cadb479ef0bcc1e7b328e14fdd7_images.jpg"
                title="Accessories"
                delay={400}
              />
              <CategoryCard 
                image="/placeholder.svg?height=200&width=200"
                title="View All"
                delay={500}
                isViewAll={true}
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/20 px-3 py-1 text-sm text-blue-600 dark:text-blue-400 animate-fade-in">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight animate-fade-in animation-delay-100">
                What Our Users Say
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-lg/relaxed dark:text-gray-400 animate-fade-in animation-delay-200">
                Join thousands of satisfied users who have found their perfect style match
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard 
                quote="StyleMatch helped me find the perfect outfit for my interview. The AI recommendations were spot on!"
                author="Priya S."
                role="Marketing Professional"
                avatar="https://coincodecap.com/wp-content/uploads/2024/04/image-111-1.jpg.webp"
                delay={0}
              />
              <TestimonialCard 
                quote="I was skeptical at first, but the app actually found me clothes that match my style perfectly. Highly recommend!"
                author="Rahul M."
                role="Software Engineer"
                avatar="https://runawayjuno.com/wp-content/uploads/2013/07/india-kolkata-chai-maker.jpg"
                delay={200}
              />
              <TestimonialCard 
                quote="As someone who struggles with fashion choices, this app has been a game-changer for my wardrobe."
                author="Ananya K."
                role="College Student"
                avatar="https://coincodecap.com/wp-content/uploads/2024/04/image-111-2.jpg.webp"
                delay={400}
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute bottom-1/3 left-1/3 h-64 w-64 rounded-full bg-gradient-to-tr from-blue-200/30 to-purple-200/30 dark:from-blue-900/10 dark:to-purple-900/10 blur-3xl"></div>
          </div>
          
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/20 px-3 py-1 text-sm text-purple-600 dark:text-purple-400 animate-fade-in">
                FAQ
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight animate-fade-in animation-delay-100">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-lg/relaxed dark:text-gray-400 animate-fade-in animation-delay-200">
                Find answers to common questions about StyleMatch
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <FaqItem 
                question="How accurate are the style recommendations?"
                answer="Our AI has been trained on millions of fashion images and can identify patterns, colors, and styles with over 95% accuracy. The more you use StyleMatch, the better it gets at understanding your personal style preferences."
                delay={0}
              />
              <FaqItem 
                question="Is the app free to use?"
                answer="Yes, StyleMatch is completely free to use for basic features. We offer a premium subscription for advanced features like unlimited style history, priority processing, and exclusive deals from partner brands."
                delay={100}
              />
              <FaqItem 
                question="Can I upload any type of clothing item?"
                answer="Yes, you can upload photos of any clothing item or accessory. Our AI can recognize and match a wide range of fashion items including tops, bottoms, dresses, shoes, bags, and accessories."
                delay={200}
              />
              <FaqItem 
                question="Where can I purchase the recommended items?"
                answer="StyleMatch partners with hundreds of retailers and brands. When you find an item you like, we'll provide direct links to purchase from official retailers or similar alternatives at different price points."
                delay={300}
              />
              <FaqItem 
                question="How do I create an account?"
                answer="Simply click on the 'Sign Up' button in the top right corner of the app. You can create an account using your email, Google, or Facebook account. Creating an account allows you to save your style history and preferences."
                delay={400}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight animate-fade-in">
                  Ready to Transform Your Style?
                </h2>
                <p className="max-w-[700px] md:text-xl/relaxed animate-fade-in animation-delay-100">
                  Join thousands of users who have discovered their perfect style match
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-200">
                <Link href="/upload">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Now
                </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Zap className="mr-2 h-4 w-4" />
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white dark:bg-gray-950 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-sm">
        <div className="container flex flex-col gap-4 py-6 text-center text-sm md:flex-row md:justify-between md:py-8 md:text-left">
          <p className="text-gray-500 dark:text-gray-400">© 2024 StyleMatch. All rights reserved.</p>
          <nav className="flex flex-col gap-4 md:flex-row md:gap-6">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function UploadForm() {
  const sampleImages = [
    {
      url: "https://m.media-amazon.com/images/I/71YSrPd04nL._AC_UL320_.jpg",
      alt: "Sample saree",
    },
    {
      url: "https://m.media-amazon.com/images/I/91Imqu2c2yL._AC_UL320_.jpg",
      alt: "Sample shirt",
    },
    {
      url: "http://assets.myntassets.com/v1/images/style/properties/b38801381cc54ad5d098a1f2885b905a_images.jpg",
      alt: "Sample pants",
    },
    {
      url: "http://assets.myntassets.com/v1/images/style/properties/beb28bff25af12c806f7d7044412f64e_images.jpg",
      alt: "Sample shoe",
    },
    {
      url: "http://assets.myntassets.com/v1/images/style/properties/6e0e3cadb479ef0bcc1e7b328e14fdd7_images.jpg",
      alt: "Sample belt",
    },
  ]

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="grid w-full gap-4">
        <Link href="/upload" className="w-full">
          <Button
            className="w-full h-36 flex flex-col gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
            size="lg"
          >
            <div className="bg-white/20 p-3 rounded-full">
              <Upload className="h-6 w-6" />
            </div>
            <span className="text-lg font-medium">Upload a clothing photo</span>
            <span className="text-xs text-white/80">Supported formats: JPG, PNG (max 5MB)</span>
          </Button>
        </Link>
        <Link href="/search" className="w-full">
          <Button
            variant="outline"
            className="w-full py-6 border-2 hover:border-primary hover:bg-primary/5 transition-all duration-300 rounded-xl"
          >
            <Search className="h-4 w-4 mr-2" />
            <span>Something else on your mind? Search directly</span>
            <ArrowRight className="ml-2 h-4 w-4 opacity-70" />
          </Button>
        </Link>
      </div>

      <div className="space-y-6 w-full">
        <div className="text-center">
          <h3 className="text-lg font-medium mb-1">Or try one of our sample images</h3>
          <p className="text-sm text-muted-foreground">Click any image to see matching styles</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {sampleImages.map((image, index) => (
            <Link
              key={index}
              href={`/results/${encodeURIComponent(image.url)}`}
              className="group relative overflow-hidden rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-primary hover:shadow-md transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                <span className="text-white text-xs font-medium">View matches</span>
              </div>
              <Image
                src={image.url || "/placeholder.svg"}
                alt={image.alt}
                className="h-[120px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                height={120}
                width={120}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description, delay = 0 } : FeatureCardProps) {
  return (
    <div className={`flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-gray-800/50 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in animation-delay-${delay}`}>
      <div className="mb-4 p-3 rounded-full bg-purple-100 dark:bg-purple-900/20">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  )
}

function CategoryCard({ image, title, delay = 0, isViewAll = false } : CategoryCardProps) {
  return (
    <Link
      href="#"
      className={`group flex flex-col items-center text-center animate-fade-in animation-delay-${delay}`}
    >
      <div className="relative w-full aspect-square overflow-hidden rounded-xl mb-2 bg-gray-100 dark:bg-gray-800">
        {isViewAll ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600 text-white">
            <ArrowRight className="h-8 w-8" />
          </div>
        ) : (
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            height={200}
            width={200}
          />
        )}
      </div>
      <h3 className="font-medium text-sm">{title}</h3>
    </Link>
  )
}

function TestimonialCard({ quote, author, role, avatar, delay = 0 } : TestimonialCardProps) {
  return (
    <div className={`flex flex-col p-6 rounded-xl bg-white dark:bg-gray-800/50 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in animation-delay-${delay}`}>
      <div className="mb-4">
        <Heart className="h-6 w-6 text-pink-500" />
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-6 italic">{quote}</p>
      <div className="mt-auto flex items-center gap-3">
        <div className="h-10 w-10 rounded-full overflow-hidden">
          <Image
            src={avatar || "/placeholder.svg"}
            alt={author}
            className="h-full w-full object-cover"
            height={40}
            width={40}
          />
        </div>
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  )
}

function FaqItem({ question, answer, delay = 0 }: FaqItemProps) {
  return (
    <div
      className={`border rounded-lg p-6 bg-white dark:bg-gray-800/50 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in animation-delay-${delay}`}
    >
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      <p className="text-gray-600 dark:text-gray-400">{answer}</p>
    </div>
  )
}

// Add this at the end of the file
export const dynamic = "force-dynamic"

// Add these keyframes to your globals.css file
// @keyframes float-slow {
//   0%, 100% { transform: translateY(0) translateX(0); }
//   50% { transform: translateY(-20px) translateX(10px); }
// }
// @keyframes float-medium {
//   0%, 100% { transform: translateY(0) translateX(0); }
//   50% { transform: translateY(-15px) translateX(-10px); }
// }
// @keyframes float-fast {
//   0%, 100% { transform: translateY(0) translateX(0); }
//   50% { transform: translateY(-10px) translateX(5px); }
// }
// @keyframes fade-in {
//   from { opacity: 0; transform: translateY(10px); }
//   to { opacity: 1; transform: translateY(0); }
// }
