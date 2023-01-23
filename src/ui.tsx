import Link from "next/link";

import { twyled } from "./twyled";

export const Main = twyled("main");
export const Header = twyled("header", {
  defaults: { display: "flex", alignItems: "center" },
});
export const Heading1 = twyled("h1");
export const Heading2 = twyled("h2");
export const Heading3 = twyled("h3");
export const Flex = twyled("div", {
  defaults: { display: "flex", alignItems: "center" },
});
export const Box = twyled("div");

export const PageTitle = twyled("h1", {
  defaults: {
    mb: "4",
  },
});

export const TwLink = twyled(Link, {
  defaults: { textDecoration: "none", color: "black" },
});

export const Button = twyled("button");

export const Label = twyled("label");

export const Input = twyled("input");

export const HeaderLink = twyled(TwLink, {
  defaults: {
    color: "white",
    fontWeight: "bold",
    $hover: {
      color: "green400",
    },
  },
});

export const HeaderLinkIcon = twyled(HeaderLink, {
  defaults: {
    display: "flex",
    alignItems: "center",
  },
});

export const Aside = twyled("aside");

export const Nav = twyled("nav");

export const Footer = twyled("footer");

export const SectionTitle = twyled("h3", {
  defaults: { fontSize: "2xl", mb: "4" },
});

export const InlineCode = twyled("span", {
  defaults: {
    color: "green700",
    rounded: "sm",
    fontFamily: "mono",
    fontSize: "sm",
    $dark: {
      color: "green200",
    },
  },
});

export const InfoBox = twyled("div", {
  defaults: {
    bg: "slate200",
    rounded: "lg",
    p: "4",
    lineHeight: "normal",
    $dark: {
      color: "slate800",
    },
  },
});

export const Text = twyled("p", {
  defaults: { lineHeight: "normal", my: "2" },
});

export const ExampleBox = twyled("div", {
  defaults: {
    border: "1",
    borderStyle: "dashed",
    borderColor: "slate800",
    p: "4",
    mb: "4",
    rounded: "md",
    $dark: {
      borderColor: "slate200",
    },
  },
});
