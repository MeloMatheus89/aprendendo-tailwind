export const Button = ({ children, ...props }) => {
  return <button className="flex justify-center gap-2 py-6 px-3 items-center bg-transparent border-neutral-text border p-6 rounded-3xl h-10 w-57 text-4 hover:opacity-[0.5] ">{children}</button>;
};
