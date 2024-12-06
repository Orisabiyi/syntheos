import { Outlet, NavLink, Link } from "react-router-dom";
import { useState } from 'react'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <main className="max-w-full mx-auto min-h-screen bg-lemon-default">
      <section className="w-full px-auto h-full">
        <section className="max-lg:relative bg-lemon-dark flex flex-row gap-3 h-full max-lg:flex-col">
          <div className="w-1/5 max-lg:w-95 max-lg:mx-auto max-lg:h-20 max-lg:flex max-lg:flex-row max-lg:justify-between max-lg:items-center bg-lemon-dark flex flex-col py-12 px-10">
            <Link to={"/"}>
              <h1 className="text-28 max-lg:text-20">Syntheos</h1>
            </Link>

            <span className="lg:hidden">
              {isOpen ? (<RxCross1 className="size-9" onClick={handleClose} />) : (<RxHamburgerMenu className="size-9" onClick={handleOpen} />)}
            </span>

            {isOpen && <nav className="text-18 h-full max-lg:mt-0 gap-10 max-lg:gap-1 rounded-lg flex flex-col max-lg:h-60 max-lg:top-28 max-lg:w-[400px] max-md:w-96 absolute max-lg:right-0 lg:hidden bg-lemon-dark max-lg:justify-center max-lg:items-center max-lg:rounded-xl lg-hidden">
              <NavLink
                to={"analyze"}
                className="py-2"
              >
                Analyze
              </NavLink>
              <NavLink
                to={"history"}
                className="py-2"
              >
                History
              </NavLink>
            </nav>}

            <nav className="text-18 h-full max-lg:h-10 mt-40 max-lg:mt-5 max-lg:w-full gap-10 max-lg:gap-1 rounded-lg flex flex-col max-lg:hidden">
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

          <div className="bg-lemon-default w-4/5 max-lg:w-full h-full rounded-lg">
            <Outlet />
          </div>
        </section>
      </section>
    </main>
  );
}
