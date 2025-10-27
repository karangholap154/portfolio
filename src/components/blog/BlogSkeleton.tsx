import { Skeleton } from "@/components/ui/skeleton";

export const BlogSkeleton = () => {
  return (
    <div className="glass-card overflow-hidden">
      {/* Thumbnail skeleton */}
      <Skeleton className="h-48 w-full rounded-none" />
      
      {/* Content skeleton */}
      <div className="p-6 space-y-4">
        {/* Date */}
        <Skeleton className="h-4 w-24" />
        
        {/* Title */}
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-3/4" />
        
        {/* Excerpt */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        
        {/* Tags */}
        <div className="flex gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
      </div>
    </div>
  );
};
