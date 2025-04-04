import { HelpCircleIcon, LineChartIcon, Link2Icon, LockIcon, NewspaperIcon, QrCodeIcon } from "lucide-react";

export const NAV_LINKS = [
    {
        title: "Services",
        href: "/features",
        menu: [
            {
                title: "Home Alarm System",
                tagline: "Get an instant alarm alert installed in your home",
                href: "/features/link-shortening",
                icon: Link2Icon,
            },
            {
                title: "Serveillance Camera Installation",
                tagline: "See anything that happens on your property",
                href: "/features/password-protection",
                icon: LockIcon,
            },
            {
                title: "Smart Home Security Integration",
                tagline: "Smart home security systems are available for integration",
                href: "/features/analytics",
                icon: LineChartIcon,
            },
            {
                title: "Cybersecurity Solutions For Your Business",
                tagline: "Get notified of any cyber threats instantly from our reliable systems",
                href: "/features/qr-codes",
                icon: QrCodeIcon,
            },
        ],
    },
    {
        title: "Pricing",
        href: "/pricing",
    },
    {
        title: "Enterprise",
        href: "/enterprise",
    },
    {
        title: "Resources",
        href: "/resources",
        menu: [
            {
                title: "Blog",
                tagline: "Read articles on the latest trends in tech.",
                href: "/resources/blog",
                icon: NewspaperIcon,
            },
            {
                title: "Help",
                tagline: "Get answers to your questions.",
                href: "/resources/help",
                icon: HelpCircleIcon,
            },
        ]
    },
    {
        title: "Changelog",
        href: "/changelog",
    },
];
