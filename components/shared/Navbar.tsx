import Link from "next/link";
import { navigationOnLargeScreen, navigationOnMobile, type NavItem } from "@/constants/navigation";

const externalProps = (item: NavItem) =>
    item.external ? { target: "_blank", rel: "noopener noreferrer" } : {};

const Navbar = () => {
    return (
        <div className="fixed inset-x-0 top-5 z-50 mx-auto w-fit px-4">
            {/* LARGE SCREENS */}
            <nav className="navbar hidden rounded-full bg-neutral-950/70 py-2 pl-7 pr-2 text-sm text-neutral-200 backdrop-blur-xl md:block">
                <ul className="flex flex-row items-center gap-x-7 tracking-wide">
                    {navigationOnLargeScreen.map((nav) => (
                        <li key={nav.name}>
                            <Link
                                href={nav.href}
                                {...externalProps(nav)}
                                className="text-neutral-300 transition-colors duration-300 hover:text-emerald-300"
                            >
                                {nav.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            href="mailto:enochhenyo@gmail.com"
                            className="flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-emerald-200 transition-colors duration-300 hover:bg-emerald-400/20"
                        >
                            <span className="relative mr-2 flex h-2 w-2">
                                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                            </span>
                            Let&apos;s work
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* MOBILE */}
            <nav className="navbar rounded-full bg-neutral-950/70 px-7 py-3 text-sm text-neutral-200 backdrop-blur-xl md:hidden">
                <ul className="flex flex-row items-center gap-x-6 tracking-wide">
                    {navigationOnMobile.map((nav) => (
                        <li key={nav.name}>
                            <Link
                                href={nav.href}
                                {...externalProps(nav)}
                                className="transition-colors duration-300 hover:text-emerald-300"
                            >
                                {nav.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
