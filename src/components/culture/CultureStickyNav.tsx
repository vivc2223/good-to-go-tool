
import React from "react";

interface SidebarItem {
  id: number;
  title: string;
}

interface CultureStickyNavProps {
  activeSection: number;
  onSectionClick: (sectionId: number) => void;
  items: SidebarItem[];
}

const CultureStickyNav = ({ activeSection, onSectionClick, items }: CultureStickyNavProps) => {
  return (
    <div className="hidden lg:block w-48 flex-shrink-0">
      <div className="sticky top-32">
        <nav className="space-y-4 text-right">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionClick(item.id)}
              className="block text-right text-sm transition-all duration-300 w-full"
              style={{
                fontWeight: activeSection === item.id ? 'bold' : 'normal',
                color: activeSection === item.id ? '#7A8471' : '#8B8680'
              }}
              onMouseEnter={(e) => {
                if (activeSection !== item.id) {
                  e.currentTarget.style.color = '#7A7066';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.id) {
                  e.currentTarget.style.color = '#8B8680';
                }
              }}
            >
              {item.title}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default CultureStickyNav;
