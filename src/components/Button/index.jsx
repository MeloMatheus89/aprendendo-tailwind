export const Button = ({ children, ...props }) => {
  return <button className="flex justify-center gap-2 py-6 px-3 items-center bg-transparent border-neutral-text border-1 h-4 p-6 rounded-3xl h-10 w-[228px] text-4 hover:opacity-[0.5]">{children}</button>;
};
