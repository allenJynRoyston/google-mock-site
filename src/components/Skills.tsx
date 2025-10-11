export default function Skills({isDarkMode}: {isDarkMode: boolean}) {

  const skills = [
    { name: "Svelte", href: "https://svelte.dev", colorLight: "#4285f4", colorDark: "sky-300" },
    { name: "React", href: "https://react.dev", colorLight: "#ea4335", colorDark: "sky-300" },
    { name: "Vue", href: "https://vuejs.org", colorLight: "#fbbc05", colorDark: "sky-300" },
    { name: "Node", href: "https://nodejs.org", colorLight: "#34a853", colorDark: "sky-300" },
    { name: "Godot", href: "https://godotengine.org", colorLight: "#4285f4", colorDark: "sky-300" },
  ];

  return (
    <div className={`text-center text-sm max-w-lg transition-colors duration-200 ${
        isDarkMode ? 'text-[#9aa0a6]' : 'text-[#70757a]'
      }`}>
        An expert in:
        {skills.map(skill => (
          <a key={skill.name} href={skill.href} target="_blank" rel="noopener noreferrer" className={`skill-tag hover:underline cursor-pointer mx-1 ${isDarkMode ? 'text-sky-300' : `text-[${skill.colorLight}]`}`}>
            {skill.name}
          </a>
        ))}
    </div>
  )
}