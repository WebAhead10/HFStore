import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      🎬 Hassan & Fadi's Movies Site 🎥
    </span>
  );
};

export default Header;
