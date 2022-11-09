import { Header } from "./Header";

export function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
    </>
  );
}
