import { Skeleton as SkeletonMUI } from "@repo/ui";

interface SkeletonProps {
  height: number | string;
  width?: number | string;
}

export default function Skeleton({ height, width }: SkeletonProps) {
  return (
    <SkeletonMUI
      variant="rectangular"
      width={width ?? "100%"}
      height={height}
      animation="wave" 
    />
  )
}