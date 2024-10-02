export const Header = () => {
  return <div className="flex justify-center items-center fixed top-3 w-full z-50">
    <nav className="flex gap-1 p-0.5 bg-white/10 backdrop-blur border border-white/15 rounded-full">
      <a href="" className="nav-item ">Home</a>
      <a href="" className="nav-item">About</a>
      <a href="" className="nav-item">FAQ</a>
      <a href="" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Careers</a>
    </nav>
  </div>;
};
