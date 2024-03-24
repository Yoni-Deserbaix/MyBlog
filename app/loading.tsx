import HomePage from "./page";

export default function loading() {
  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {"abcdefghi".split("").map((i) => (
          <HomePage key={i} />
        ))}
      </div>
    </main>
  );
}
