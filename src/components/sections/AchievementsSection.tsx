const achievements = [
  { big: "50+", desc: "Experienced Staff" },
  { big: "20k+", desc: "Global Customers" },
  { big: "4000+", desc: "Active accounts every month" },
  {
    big: "3M+",
    desc: "Spending of one of the big customers reached 3 million USD/month",
  },
];

export function AchievementsSection() {
  return (
    <section
      className="relative py-20 h-[697px]"
      id="achievements"
      style={{
        background: `
          linear-gradient(135deg, 
            oklch(0.15 0.08 240) 0%, 
            oklch(0.25 0.12 230) 50%, 
            oklch(0.35 0.15 220) 100%
          )
        `,
      }}
    >
      {/* Background image as absolute positioned element */}
      <div
        className="absolute inset-0 bg-[url('/images/achievements/img-1.png')] bg-bottom-right bg-contain bg-no-repeat"
        style={{ zIndex: 1 }}
      />

      {/* Overlay gradient for better text readability */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent"
        style={{ zIndex: 2 }}
      />

      <div
        className="container mx-auto relative h-full z-10"
        style={{ zIndex: 3 }}
      >
        <p className="text-[30px] text-white font-bold tracking-wide">
          WALL OF ACHIEVEMENTS
        </p>
        <div className="h-1 w-[200px] mt-8 bg-gradient-to-r from-accent to-primary rounded-full shadow-lg" />

        <div className="absolute z-20 inset-x-0 flex gap-30 bottom-0 translate-y-full">
          <div className="w-full bg-gradient-to-r from-white via-blue-50 to-white backdrop-blur-sm px-12 py-8 rounded-[47px] shadow-2xl border border-white/20">
            <div className="flex gap-30 justify-between">
              {achievements.map(({ big, desc }, i) => (
                <div key={i} className="flex flex-col gap-3 text-center">
                  <div className="text-[50px] font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-sm">
                    {big}
                  </div>
                  <div className="text-[18px] text-slate-700 font-lao-man font-medium leading-tight max-w-[300px]">
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
