"use client"
import Link from "next/link"
import { ArrowLeft, Search, ShoppingBag } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useSearchDocumentsMutation } from "../../(actions)/elastic"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useSuggestFashionMutation } from "../../(actions)/groq"

export default function ResultsPage() {
  const [suggestions, setSuggestions] = useState<Record<string, string> | null>(null)
  const [searchResults, setSearchResults] = useState<any[]>([]) // Store search results
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const pathParams = useParams()
  const imageUrl = pathParams.url ? decodeURIComponent(pathParams.url as string) : ""

  // Mutation for suggesting fashion
  const {
    mutate: suggestFashion,
    isPending: isSuggestPending,
    isError: isSuggestError,
    isSuccess: isSuggestSuccess,
    data: suggestData,
  } = useSuggestFashionMutation()

  // Mutation for searching documents
  const {
    mutate: searchDocs,
    isPending: isSearchPending,
    isError: isSearchError,
    error: searchError,
  } = useSearchDocumentsMutation()

  // Fetch fashion suggestions when the imageUrl changes
  useEffect(() => {
    if (imageUrl) {
      suggestFashion(imageUrl)
    } else {
      // If no imageUrl is provided, use a default query for demo purposes
      suggestFashion("default_image_url")
    }
  }, [imageUrl, suggestFashion])

  // Parse suggestions and trigger search when suggestions are available
  useEffect(() => {
    if (isSuggestSuccess && suggestData?.suggestions) {
      setSuggestions(suggestData.suggestions)
      console.log("Fetched data:", suggestData)

      // Select the first suggestion as default for search
      const firstKey = Object.keys(suggestData.suggestions)[0]
      if (firstKey) {
        setSelectedCategory(firstKey)
      }
    }
  }, [isSuggestSuccess, suggestData])

  // Trigger search when suggestions are available and a category is selected
  useEffect(() => {
    if (suggestions && selectedCategory && suggestions[selectedCategory]) {
      searchDocs(
        { product_title: suggestions[selectedCategory] || "clothing" },
        {
          onSuccess: (data) => {
            setSearchResults(data) // Store search results
          },
          onError: (error) => {
            console.error("Search error:", error)
          },
        },
      )
    }
  }, [suggestions, selectedCategory, searchDocs])

  // Handle category selection for search
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
  }

  // Loading state
  if (isSuggestPending || isSearchPending) {
    return (
      <div className="container flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg font-medium">Finding your perfect matches...</p>
        </div>
      </div>
    )
  }

  // Error state
  if (isSuggestError || isSearchError) {
    return (
      <div className="container flex items-center justify-center h-screen">
        <div className="text-center max-w-md p-6 bg-destructive/10 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
          <p className="text-muted-foreground mb-4">
            Error fetching data: {searchError?.message || "Failed to get recommendations"}
          </p>
          <Link href="/">
            <Button>Go back home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container max-w-6xl px-4 py-8 mx-auto">
      <div className="mb-6 flex items-center gap-6">
        <Link href="/" className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </Link>
        <Link href="/search">
          <Button variant="outline" className="flex items-center">
            <Search className="h-4 w-4 mr-2" />
            <span>Something else on your mind? Search directly</span>
          </Button>
        </Link>
      </div>
      <div className="grid gap-8 md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr]">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border">
            <Image
              src={imageUrl || "/placeholder.svg?height=400&width=400"}
              alt="Uploaded clothing item"
              className="w-full object-cover aspect-square"
              height={400}
              width={400}
            />
          </div>
          <div className="p-4 rounded-lg bg-muted">
            <h3 className="font-medium mb-2">Item Details</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Based on your uploaded image, we have identified these recommendations:
            </p>
            <div className="space-y-1.5">
              {suggestions &&
                Object.entries(suggestions).map(([category, item]) => (
                  <div key={category} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{category}</span>
                    <span>{item}</span>
                  </div>
                ))}
              {!suggestions && <div className="text-sm text-muted-foreground">No recommendations available</div>}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold">Your Style Recommendations</h1>
            <p className="text-muted-foreground">
              Based on your uploaded item, we have found similar products and outfit pairings
            </p>
          </div>

          <Tabs defaultValue="similar">
            <TabsList className="grid w-full grid-cols-1">
              <TabsTrigger value="similar">Similar Items</TabsTrigger>
            </TabsList>

            <TabsContent value="similar" className="pt-4">
              {suggestions && Object.keys(suggestions).length > 0 && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {Object.keys(suggestions).map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleCategorySelect(category)}
                      className="capitalize"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              )}

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {searchResults.length > 0
                  ? searchResults.map((result, index) => (
                      <ProductCard
                        key={result._id || index}
                        product={{
                          imageUrl: result._source?.image_url || "/placeholder.svg?height=200&width=200",
                          name: result._source?.product_title || "Product Item",
                        }}
                      />
                    ))
                  : // Fallback if no search results
                    Array.from({ length: 6 }).map((_, index) => <ProductCard key={index} />)}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

function ProductCard({ isPairing = false, product }: { isPairing?: boolean; product?: any }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Image
          src={product?.imageUrl || "/placeholder.svg?height=200&width=200"}
          alt="Product"
          className="w-full object-cover aspect-square"
          height={200}
          width={200}
        />
        {isPairing && (
          <Badge className="absolute top-2 right-2" variant="secondary">
            Perfect Match
          </Badge>
        )}
      </div>
      <CardContent className="p-3">
        <div className="space-y-1.5">
          <h3 className="font-medium text-sm line-clamp-1">{product?.name || "Classic Denim Jacket"}</h3>
          <div className="flex justify-between items-center">
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <ShoppingBag className="h-4 w-4" />
              <span className="sr-only">Add to bag</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}