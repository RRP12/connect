'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Search, Upload, IndianRupee, CheckCircle } from "lucide-react"

export function FunkyLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-300">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white bg-opacity-80 backdrop-blur-md">
        <a className="flex items-center justify-center" href="#">
          <Home className="h-8 w-8 text-purple-600" />
          <span className="ml-2 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            PropRental
          </span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:text-purple-600 transition-colors" href="#">
            Features
          </a>
          <a className="text-sm font-medium hover:text-purple-600 transition-colors" href="#">
            Pricing
          </a>
          <a className="text-sm font-medium hover:text-purple-600 transition-colors" href="#">
            About
          </a>
          <a className="text-sm font-medium hover:text-purple-600 transition-colors" href="#">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500">
                  Find Your Vibe in India's Coolest PGs & Flats
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl dark:text-gray-300">
                  Swipe right on your dream pad! List or find your next crib with just a few taps. 🏠✨
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-all transform hover:scale-105">
                  Get Started
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-100 font-bold py-2 px-4 rounded-full transition-all transform hover:scale-105">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white bg-opacity-80 backdrop-blur-md">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Why We're Lit 🔥
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-gradient-to-br from-yellow-200 to-yellow-100 transform transition-all hover:scale-105">
                <CardHeader>
                  <Upload className="h-12 w-12 mb-2 text-purple-600" />
                  <CardTitle className="text-2xl font-bold text-purple-800">Easy Peasy Listing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-900">Post your PG or flat faster than you can say "chai break"! ☕️</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-pink-200 to-pink-100 transform transition-all hover:scale-105">
                <CardHeader>
                  <Search className="h-12 w-12 mb-2 text-purple-600" />
                  <CardTitle className="text-2xl font-bold text-purple-800">Smart AF Search</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-900">Find your dream pad with our AI-powered search. It's like Tinder, but for rooms! 🔍</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-200 to-purple-100 transform transition-all hover:scale-105">
                <CardHeader>
                  <IndianRupee className="h-12 w-12 mb-2 text-purple-600" />
                  <CardTitle className="text-2xl font-bold text-purple-800">Pocket-Friendly</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-900">List your property for just ₹100 per week. That's less than your daily cold coffee! ❄️☕️</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-300 via-pink-300 to-yellow-200">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-800">
              Pricing That Won't Break The Bank 💰
            </h2>
            <div className="flex justify-center">
              <Card className="w-full max-w-sm bg-white bg-opacity-80 backdrop-blur-md transform transition-all hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-purple-800">Weekly Subscription</CardTitle>
                  <p className="text-purple-600">For property owners who are cooler than the other side of the pillow 😎</p>
                </CardHeader>
                <CardContent>
                  <div className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                    ₹100 / week
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      <span className="text-purple-900">Unlimited property listings</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      <span className="text-purple-900">Featured in search results</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      <span className="text-purple-900">24/7 customer support (we never sleep, just like you!)</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 px-4 rounded-full transition-all transform hover:scale-105">
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white bg-opacity-80 backdrop-blur-md">
        <p className="text-xs text-gray-700 dark:text-gray-400">© 2024 PropRental. All rights reserved. Stay funky! 🕺💃</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4 text-purple-600 hover:text-purple-800" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4 text-purple-600 hover:text-purple-800" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}