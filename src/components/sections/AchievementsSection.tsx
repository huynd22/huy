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
      className="bg-[#272626]  py-20 h-[697px] bg-[url('/images/achievements/img-1.png')] bg-bottom-right bg-contain bg-no-repeat"
      id="achievements"
    >
      <div className="container mx-auto relative h-full">
        <p className="text-[30px] text-white">WALL OF ACHIEVEMENTS</p>
        <div className="h-0.5 w-[200px] mt-8 bg-white" />
        <div className="absolute inset-x-0 flex gap-30 bg-[#D9D9D9] px-12 py-6 rounded-[47px] bottom-0 translate-y-full">
          {achievements.map(({ big, desc }, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="text-[50px] text-primary">{big}</div>
              <div className="text-[18px] text-black font-lao-man">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
