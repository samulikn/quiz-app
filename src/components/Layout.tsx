export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen w-full font-rubik bg-grey-50 dark:bg-blue-900
      text-blue-900 dark:text-white sm:pt-8 flex flex-col items-center sm:px-8 xl:px-30
      bg-[url('/images/pattern-background-mobile-light.svg')]
      md:bg-[url('/images/pattern-background-tablet-light.svg')]
      lg:bg-[url('/images/pattern-background-desktop-light.svg')]
      dark:bg-[url('/images/pattern-background-mobile-dark.svg')]
      dark:md:bg-[url('/images/pattern-background-tablet-dark.svg')]
      dark:lg:bg-[url('/images/pattern-background-desktop-dark.svg')]
      bg-no-repeat transition-colors duration-300 ease-in-out"
    >
      {children}
    </div>
  );
}
