import { NavLink } from "react-router-dom";

export default function BottomNav() {
  return (
    <nav className="h-16 bg-white border-t shadow-[0_-6px_20px_rgba(34,197,94,0.18)]">
      <div className="flex h-full justify-around items-center text-xs">
        <Tab to="/" icon="🏠" label="Home" />
        <Tab to="/quiz" icon="📘" label="Learn" />
        <Tab to="/" icon="📞" label="Call" />
        <Tab to="/" icon="👤" label="Profile" />
      </div>
    </nav>
  );
}

function Tab({ to, icon, label }: any) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center gap-1 ${
          isActive
            ? "text-green-600 font-bold drop-shadow-[0_2px_6px_rgba(34,197,94,0.6)]"
            : "text-gray-400"
        }`
      }
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </NavLink>
  );
}
