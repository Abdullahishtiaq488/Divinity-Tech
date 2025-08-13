export default function BlogPostLoading() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-background)" }}>
      {/* Breadcrumb Skeleton */}
      <nav className="py-6 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section Skeleton */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {/* Category badges */}
              <div className="flex gap-3">
                <div className="h-8 w-24 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="h-8 w-20 bg-gray-200 rounded-full animate-pulse"></div>
              </div>

              {/* Title */}
              <div className="space-y-3">
                <div className="h-12 w-full bg-gray-200 rounded animate-pulse"></div>
                <div className="h-12 w-3/4 bg-gray-200 rounded animate-pulse"></div>
              </div>

              {/* Excerpt */}
              <div className="space-y-2">
                <div className="h-6 w-full bg-gray-200 rounded animate-pulse"></div>
                <div className="h-6 w-5/6 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-6 w-4/5 bg-gray-200 rounded animate-pulse"></div>
              </div>

              {/* Meta info */}
              <div className="flex gap-6 pt-8">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-3 w-20 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Image skeleton */}
            <div className="lg:col-span-1">
              <div className="aspect-[4/5] bg-gray-200 rounded-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content skeleton */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="h-6 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className="h-6 w-5/6 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-6 w-4/5 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-6 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </section>
    </div>
  )
}
