import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx'
import SettingsMenu from '../SettingsMenu/SettingsMenu.jsx'
import './TopBar.css'

function TopBar({ theme, onToggleTheme, onLogout }) {
  return (
    <div className="top-bar">
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      <SettingsMenu onLogout={onLogout} />
    </div>
  )
}

export default TopBar
