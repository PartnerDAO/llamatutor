import { Logo } from "./logo";

const Header = () => {
  return (
    <div className="container flex h-[60px] shrink-0 items-center justify-center px-4 lg:h-[80px] lg:px-0">
      <a href="/">
        <h1 className="text-2xl font-bold">AI云导师</h1> {/* 替换为文字标题 */}
      </a>
    </div>
  );
};

export default Header;
