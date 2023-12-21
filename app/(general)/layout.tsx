import { NavBar } from '../../components/navbar/NavBar';

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <NavBar/>
      <div>
        <h1>Hello General Layout</h1>
        {children}
      </div>
    </>
  );
}