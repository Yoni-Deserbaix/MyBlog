import NavBar from "./components/Navbar";
import SkeletonCard from "./components/SkeletonCard";

export default function loading() {
  return (
    <main>
      <NavBar />
      <div className="flex justify-center text-3xl font-bold mt-28 max-sm:text-2xl">
        Articles récents
      </div>
      <div className="flex items-center gap-10 flex-col pt-16">
        {"abcdef".split("").map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  );
}
