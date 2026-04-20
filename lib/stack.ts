export type Tech = {
  name: string;
  icon: string;
  category?: "frontend" | "backend" | "database" | "devops";
};

export const stack: Tech[] = [
  { name: "React", icon: "⚛", category: "frontend" },
  { name: "Next.js", icon: "▲", category: "frontend" },
  { name: "Angular", icon: "◭", category: "frontend" },
  { name: "TypeScript", icon: "◬", category: "frontend" },

  { name: ".NET / C#", icon: "◆", category: "backend" },
  { name: "ASP.NET Core", icon: "◈", category: "backend" },
  { name: "Java", icon: "☕", category: "backend" },

  { name: "SQL Server", icon: "⬡", category: "database" },
  { name: "Supabase", icon: "◉", category: "database" },
  { name: "Entity Framework", icon: "⊞", category: "database" },

  { name: "Azure DevOps", icon: "☁", category: "devops" },
  { name: "Docker", icon: "⬢", category: "devops" },
];
