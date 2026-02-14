"use client";

import Link from "next/link";
import { components } from "../data/login-ui";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-52 pt-10 h-screen fixed left-0 top-0 border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 lowercase px-2 py-3 max-md:hidden">
            <div className="mt-14 flex flex-col gap-1">
                {components.map((component) => {
                    const isActive = pathname === `/login/${component.slug}`;

                    return (
                        <Link
                            key={component.slug}
                            href={`/login/${component.slug}`}
                            className={`group rounded-md transition ${isActive
                                ? "bg-orange-100 dark:bg-orange-900/30"
                                : "hover:bg-neutral-100 dark:hover:bg-neutral-900"
                                }`}
                        >
                            <div className="px-3 py-2">
                                <h2
                                    className={`text-xs font-medium transition ${isActive
                                        ? "text-orange-600 dark:text-orange-400"
                                        : "text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white"
                                        }`}
                                >
                                    {component.title}
                                </h2>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </aside>
    );
}
