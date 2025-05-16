"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Search, ShoppingBag } from "lucide-react"
import { useSearchDocumentsMutation } from "../(actions)/elastic"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function SearchPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""

  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSearchPerformed, setIsSearchPerformed] = useState(!!initialQuery)

  const { mutate: searchDocs, isPending, isError, error } = useSearchDocumentsMutation()

  // Handle search submission
  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault()

    if (!searchQuery.trim()) return

    setIsLoading(true)
    setIsSearchPerformed(true)

    // Update URL with search query
    const params = new URLSearchParams(searchParams.toString())
    params.set("q", searchQuery)
    router.push(`/search?${params.toString()}`)

    // Perform search
    searchDocs(
      { product_title: searchQuery },
      {
        onSuccess: (data) => {
          setSearchResults(data || [])
          setIsLoading(false)
        },
        onError: () => {
          setSearchResults([])
          setIsLoading(false)
        },
      },
    )
  }

  // Perform search on initial load if query exists
  useEffect(() => {
    if (initialQuery) {
      setSearchQuery(initialQuery)
      handleSearch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="container mx-auto px-4">
      {!isSearchPerformed ? (
        // Google-like centered search when no search has been performed
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <div className="w-full max-w-2xl mx-auto text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">Fashion Search</h1>
            <p className="text-muted-foreground">Find clothing, accessories, and more</p>
          </div>

          <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for clothing, brands, styles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-12 py-6 text-lg rounded-full shadow-lg"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full"
                disabled={isPending || isLoading}
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
          </form>
        </div>
      ) : (
        // Compact layout after search is performed
        <div className="py-4">
          {/* Compact search bar at the top */}
          <div className="mb-8 border-b pb-4">
            <div className="flex items-center gap-4">
              <Link href="/search" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-5 h-5" />
              </Link>

              <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search for clothing, brands, styles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pr-12"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full"
                    disabled={isPending || isLoading}
                  >
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Loading state */}
          {(isPending || isLoading) && (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p>Searching for products...</p>
              </div>
            </div>
          )}

          {/* Error state */}
          {isError && (
            <div className="bg-destructive/10 p-4 rounded-lg mb-8">
              <p className="text-destructive font-medium">Error searching for products</p>
              <p className="text-sm text-muted-foreground">{error?.message || "Please try again later"}</p>
            </div>
          )}

          {/* Search results */}
          {!isPending && !isLoading && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">
                {searchResults.length > 0
                  ? `Found ${searchResults.length} results for "${searchQuery}"`
                  : `No results found for "${searchQuery}"`}
              </h2>

              {searchResults.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {searchResults.map((result, index) => (
                    <ProductCard
                      key={result._id || index}
                      product={{
                        imageUrl: result._source?.image_url || "/placeholder.svg?height=200&width=200",
                        name: result._source?.product_title || "Product Item",
                        brand: result._source?.brand || "Brand",
                        price: "59.99",
                      }}
                    />
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center">
                  <p className="text-muted-foreground mb-4">We could not find any products matching your search.</p>
                  <p className="text-sm text-muted-foreground">
                    Try using different keywords or check for spelling errors.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function ProductCard({ product }: { product: any }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative">
        <Image
          src={product.imageUrl || "/placeholder.svg?height=200&width=200"}
          alt={product.name}
          className="w-full object-cover aspect-square"
          height={200}
          width={200}
        />
      </div>
      <CardContent className="p-3 flex-1 flex flex-col">
        <div className="space-y-1 flex-1">
          {product.brand && <p className="text-xs text-muted-foreground">{product.brand}</p>}
          <h3 className="font-medium text-sm line-clamp-2">{product.name}</h3>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm font-semibold">${product.price}</span>
          <Button size="icon" variant="ghost" className="h-8 w-8">
            <ShoppingBag className="h-4 w-4" />
            <span className="sr-only">Add to bag</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

