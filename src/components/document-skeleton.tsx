function SkeletonLine({ className }: { className: string }) {
  return <div className={`h-4 rounded bg-surface-hover ${className}`} />;
}

export default function DocumentSkeleton() {
  return (
    <section role="status" aria-live="polite" aria-label="문서를 불러오는 중">
      <span className="sr-only">문서를 불러오는 중입니다.</span>

      <div
        aria-hidden="true"
        className="animate-pulse motion-reduce:animate-none"
      >
        <header className="mb-12 border-b border-border pb-8">
          <div className="h-4 w-44 rounded bg-surface-hover" />

          <div
            className={[
              "mt-4 h-11 w-4/5 max-w-2xl",
              "rounded bg-surface-hover",
            ].join(" ")}
          />
        </header>

        <div className="space-y-9">
          <div className="space-y-4">
            <SkeletonLine className="w-full" />
            <SkeletonLine className="w-11/12" />
            <SkeletonLine className="w-4/5" />
          </div>

          <div className="space-y-4">
            <SkeletonLine className="w-full" />
            <SkeletonLine className="w-full" />
            <SkeletonLine className="w-10/12" />
            <SkeletonLine className="w-3/5" />
          </div>

          <div className="space-y-4">
            <SkeletonLine className="w-11/12" />
            <SkeletonLine className="w-full" />
            <SkeletonLine className="w-4/5" />
          </div>

          <div className="space-y-4">
            <SkeletonLine className="w-full" />
            <SkeletonLine className="w-9/12" />
          </div>
        </div>

        <div
          className={[
            "mt-16 grid gap-4",
            "border-t border-border pt-8",
            "sm:grid-cols-2",
          ].join(" ")}
        >
          <div
            className={[
              "h-24 rounded-lg",
              "border border-border bg-surface",
            ].join(" ")}
          />

          <div
            className={[
              "h-24 rounded-lg",
              "border border-border bg-surface",
            ].join(" ")}
          />
        </div>
      </div>
    </section>
  );
}
