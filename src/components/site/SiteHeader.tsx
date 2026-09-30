import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logoBlack from "@/assets/logo-jmallen-black.png.asset.json";
import { PRACTICE_AREAS } from "@/content/site";

type NavItem = {
  label: string;
  to?: string;
  children?: { label: string; to: string; params?: Record<string, string> }[];
};

const NAV: NavItem[] = [
  {
    label: "Mercados",
    children: [
      { label: "Diáspora Dominicana", to: "/mercados/diaspora-dominicana" },
      { label: "Inversionistas de Colombia", to: "/mercados/inversionistas-colombia" },
    ],
  },
  { label: "Ruta de Inversión JMallén", to: "/ruta-de-inversion" },
  {
    label: "Áreas de Práctica",
    children: PRACTICE_AREAS.map((a) => ({
      label: a.name,
      to: "/areas-de-practica/$area",
      params: { area: a.slug },
    })),
  },
  { label: "Recursos", to: "/recursos" },
  { label: "La Firma", to: "/la-firma" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-editorial grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 lg:gap-6 lg:py-5">
        <Link to="/" className="flex min-w-0 items-center" aria-label="Inicio">
          <img
            src={logoBlack.url}
            alt="J. Mallén & Associates Law Consultant"
            className="h-11 w-auto max-w-[min(62vw,15rem)] shrink-0 object-contain object-left md:h-12 md:max-w-none lg:h-13"
            width={1920}
            height={549}
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {NAV.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  className="cursor-default text-[0.72rem] uppercase tracking-[0.16em] text-foreground/80 transition-colors hover:text-foreground"
                >
                  {item.label}
                </button>
                <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4 opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="border border-border bg-background p-2 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.5)]">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          to={child.to}
                          params={child.params as never}
                          className="block px-4 py-3 text-[0.78rem] tracking-wide text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to!}
                className="text-[0.72rem] uppercase tracking-[0.16em] text-foreground/80 transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            to="/contacto"
            className="border border-foreground px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground"
          >
            Contacto
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="justify-self-end text-[0.7rem] uppercase tracking-[0.18em] lg:hidden"
          aria-expanded={open}
          aria-label="Abrir menú"
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-editorial flex flex-col py-4" aria-label="Móvil">
            {NAV.flatMap((item) =>
              item.children
                ? [
                    <p
                      key={item.label}
                      className="eyebrow mt-5 border-b border-border pb-2 first:mt-0"
                    >
                      {item.label}
                    </p>,
                    ...item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        params={child.params as never}
                        onClick={() => setOpen(false)}
                        className="border-b border-border py-3 text-sm"
                      >
                        {child.label}
                      </Link>
                    )),
                  ]
                : [
                    <Link
                      key={item.label}
                      to={item.to!}
                      onClick={() => setOpen(false)}
                      className="border-b border-border py-3 text-sm uppercase tracking-[0.14em]"
                    >
                      {item.label}
                    </Link>,
                  ],
            )}
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="mt-6 bg-foreground px-5 py-3.5 text-center text-[0.72rem] uppercase tracking-[0.16em] text-primary-foreground"
            >
              Agende una conversación inicial
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
