export default function Title({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className=" font-bold max-sm:text-2xl hover:text-green-400 transition-all">
        {text}
      </div>
      <div className="w-40 h-2 bg-green-500 rounded-full"></div>
      <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
    </div>
  );
}
