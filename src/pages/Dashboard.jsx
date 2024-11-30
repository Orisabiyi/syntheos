import { Outlet, NavLink } from "react-router-dom";

export default function Dashboard() {
  return (
    <main className="max-w-full mx-auto min-h-screen bg-lemon-default">
      <section className="w-full px-auto h-full">
        <section className="bg-lemon-dark flex flex-row gap-3 h-full">
          <div className="w-1/5 bg-lemon-dark flex flex-col py-12 px-10">
            <h1 className="text-28">Syntheos</h1>
            <nav className="text-18 h-full mt-40 gap-10 rounded-lg flex flex-col">
              <NavLink
                to={"analyze"}
                className="py-2 border-b-[1.5px] border-b-black"
              >
                Analyze
              </NavLink>
              <NavLink
                to={"history"}
                className="py-2 border-b-[1.5px] border-b-black"
              >
                History
              </NavLink>
            </nav>
          </div>

          <div className="bg-lemon-default w-4/5 h-full rounded-lg">
            <Outlet />
          </div>
        </section>
      </section>
    </main>
  );
}
