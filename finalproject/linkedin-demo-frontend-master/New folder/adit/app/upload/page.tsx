"use client"
import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Link2, Loader2, Upload, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {uploadToCloudinary} from "../(actions)/cloudinary"
export default function UploadPage() {
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState<string>("")
  const [preview, setPreview] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [activeTab, setActiveTab] = useState<"upload" | "link">("upload")
  const [urlError, setUrlError] = useState<string | null>(null)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      setFile(selectedFile)

      // Create preview
      const reader = new FileReader()
      reader.onload = (event) => {
        setPreview(event.target?.result as string)
      }
      reader.readAsDataURL(selectedFile)
    }
  }

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value)
    setUrlError(null)
  }

  const handleUrlSubmit = async () => {
    if (!imageUrl.trim()) {
      setUrlError("Please enter an image URL")
      return
    }

    // Basic URL validation
    try {
      new URL(imageUrl)
      router.push(`/results/${encodeURIComponent(imageUrl)}`)
    } catch (e) {
      setUrlError("Please enter a valid URL")
      console.error(e)
      return
    }

    // Set the URL as preview
    setPreview(imageUrl)
    setFile(null)
  }

  const handleUpload = async () => {
    if (!file) return;
  
    try {
      setUploading(true);
      const arrayBuffer = await file.arrayBuffer();
      const base64File = Buffer.from(arrayBuffer).toString("base64");
  
      // Pass the base64 string to the Server Action
      const url = await uploadToCloudinary(base64File);
  
      if (url) {
        router.push(`/results/${encodeURIComponent(url)}`);
      } else {
        throw new Error("Failed to get the uploaded file URL");
      }
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  const clearFile = () => {
    setFile(null)
    setPreview(null)
    setImageUrl("")
  }

  return (
    <div className="container max-w-4xl px-4 py-8 mx-auto">
      <div className="mb-6">
        <Link href="/" className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </Link>
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Upload Your Clothing Item</h1>
          <p className="text-muted-foreground">We will analyze your photo and find similar items and outfit pairings</p>
        </div>

        {!preview ? (
          <Tabs
            defaultValue="upload"
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as "upload" | "link")}
          >
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="upload">Upload File</TabsTrigger>
              <TabsTrigger value="link">Image URL</TabsTrigger>
            </TabsList>

            <TabsContent value="upload">
              <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-lg border-muted-foreground/25">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept="image/jpeg,image/png"
                  onChange={handleFileChange}
                />
                <label htmlFor="file-upload" className="flex flex-col items-center justify-center gap-4 cursor-pointer">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Upload className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium">Drag and drop your image here or click to browse</p>
                    <p className="text-xs text-muted-foreground mt-1">Supported formats: JPG, PNG (max 5MB)</p>
                  </div>
                  <Button variant="secondary" type="button">
                    Select File
                  </Button>
                </label>
              </div>
            </TabsContent>

            <TabsContent value="link">
              <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg border-muted-foreground/25">
                <div className="p-4 rounded-full bg-primary/10 mb-4">
                  <Link2 className="w-8 h-8 text-primary" />
                </div>
                <div className="text-center mb-4">
                  <p className="text-sm font-medium">Enter the URL of your clothing item image</p>
                  <p className="text-xs text-muted-foreground mt-1">The image should be publicly accessible</p>
                </div>
                <div className="w-full max-w-md space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="url"
                      placeholder="https://example.com/image.jpg"
                      value={imageUrl}
                      onChange={handleUrlChange}
                      className={urlError ? "border-destructive" : ""}
                    />
                    {urlError && <p className="text-xs text-destructive">{urlError}</p>}
                  </div>
                  <Button onClick={handleUrlSubmit} className="w-full">
                    Use This Image
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        ) : (
          <div className="space-y-4">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-lg border">
              <Image
                src={preview || "/placeholder.svg"}
                alt="Preview"
                width={400}
                height={400}
                className="w-full object-contain max-h-[400px]"
                onError={() => {
                  setPreview(null)
                  setUrlError("Failed to load image. Please check the URL and try again.")
                }}
              />
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-2 right-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                onClick={clearFile}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Remove</span>
              </Button>
            </div>

            {uploading ? (
              <div className="flex items-center space-x-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span className="text-sm">Uploading...</span>
            </div>
            ) : (
              <Button onClick={handleUpload} className="w-full">
                Find Matches
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

