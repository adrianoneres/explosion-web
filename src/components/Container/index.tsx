export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ className, children }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-[800px] rounded-lg bg-amber-50 p-10 shadow-lg ${className}`}>
      {children}
    </div>
  );
}
