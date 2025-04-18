const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <div key={idx} className="animate-pulse bg-gray-200 h-60 rounded-lg" />
      ))}
    </div>
  )
}

export default LoadingSkeleton
