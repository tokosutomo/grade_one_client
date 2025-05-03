export default function AlertOrder() {
  const alertTexts = [
    "Pastikan alamat kamu dengan benar",
    "Disarankan ditempat umum terdekat : kafe, minimarket, dll",
  ];
  return (
    <section className="flex flex-col gap-2 px-5 py-2">
      {alertTexts.map((text, i) => (
        <div
          className="bg-[#F3FF73] dark:bg-[#F3FF73] bg-opacity-30 text-[#DE0004] font-extrabold text-xs p-3"
          key={i}
        >
          {text}
        </div>
      ))}
    </section>
  );
}
