import { Metadata } from "next";

export const generateMetadata = ({
    title = `${process.env.NEXT_PUBLIC_APP_NAME} - Security Company for Businesses`,
    description = `${process.env.NEXT_PUBLIC_APP_NAME} is the Security firm for businesses. We help you build, brand, and Secure your business.`,
    image = "/ottoman security-3.svg",
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "32x32",
            url: "/ottoman security-3.svg"
        },
        {
            rel: "icon",
            sizes: "32x32",
            url: "/ottoman security-3.svg"
        },
        {
            rel: "icon",
            sizes: "16x16",
            url: "/ottoman security-3.svg"
        },
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => ({
    title,
    description,
    icons,
    openGraph: {
        title,
        description,
        ...(image && { images: [{ url: image }] }),
    },
    twitter: {
        title,
        description,
        ...(image && { card: "summary_large_image", images: [image] }),
        creator: "@i_Ndayishaba",
    },
    // metadataBase: new URL(process.env.APP_DOMAIN!),
    ...(noIndex && { robots: { index: false, follow: false } }),
});
