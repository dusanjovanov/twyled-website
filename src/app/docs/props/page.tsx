"use client";
import { twyled } from "@/twyled";
import { Box, PageTitle, SectionTitle, Text } from "@/ui";
import { Fragment } from "react";

export default function Props() {
  return (
    <>
      <PageTitle>Props</PageTitle>
      <Text mb="4">
        Below are listed all of the props available and the css property they
        map to organized by the theme slot they can take values from:
      </Text>
      <Box mb="6">
        <SectionTitle>Colors</SectionTitle>
        <GridContainer>
          <Grid bg="slate800">
            <HeaderCell>Prop</HeaderCell>
            <HeaderCell>CSS Property</HeaderCell>
          </Grid>
          <Grid>
            {Object.entries(propMap.colors).map(([key, value]) => {
              return (
                <Fragment key={key}>
                  <BodyCell>{key}</BodyCell>
                  <BodyCell>{value}</BodyCell>
                </Fragment>
              );
            })}
          </Grid>
        </GridContainer>
      </Box>
      <Box mb="6">
        <SectionTitle>Spacing</SectionTitle>
        <GridContainer>
          <Grid bg="slate800">
            <HeaderCell>Prop</HeaderCell>
            <HeaderCell>CSS Property</HeaderCell>
          </Grid>
          <Grid>
            {Object.entries(propMap.spacing).map(([key, value]) => {
              return (
                <Fragment key={key}>
                  <BodyCell>{key}</BodyCell>
                  <BodyCell>{value}</BodyCell>
                </Fragment>
              );
            })}
          </Grid>
        </GridContainer>
      </Box>
      <Box mb="6">
        <SectionTitle>Border width</SectionTitle>
        <GridContainer>
          <Grid bg="slate800">
            <HeaderCell>Prop</HeaderCell>
            <HeaderCell>CSS Property</HeaderCell>
          </Grid>
          <Grid>
            {Object.entries(propMap.borderWidth).map(([key, value]) => {
              return (
                <Fragment key={key}>
                  <BodyCell>{key}</BodyCell>
                  <BodyCell>{value}</BodyCell>
                </Fragment>
              );
            })}
          </Grid>
        </GridContainer>
      </Box>
      <Box mb="6">
        <SectionTitle>Border radius</SectionTitle>
        <GridContainer>
          <Grid bg="slate800">
            <HeaderCell>Prop</HeaderCell>
            <HeaderCell>CSS Property</HeaderCell>
          </Grid>
          <Grid>
            {Object.entries(propMap.borderRadius).map(([key, value]) => {
              return (
                <Fragment key={key}>
                  <BodyCell>{key}</BodyCell>
                  <BodyCell>{value}</BodyCell>
                </Fragment>
              );
            })}
          </Grid>
        </GridContainer>
      </Box>
      <Box mb="6">
        <SectionTitle>Font family</SectionTitle>
        <GridContainer>
          <Grid bg="slate800">
            <HeaderCell>Prop</HeaderCell>
            <HeaderCell>CSS Property</HeaderCell>
          </Grid>
          <Grid>
            {Object.entries(propMap.fontFamily).map(([key, value]) => {
              return (
                <Fragment key={key}>
                  <BodyCell>{key}</BodyCell>
                  <BodyCell>{value}</BodyCell>
                </Fragment>
              );
            })}
          </Grid>
        </GridContainer>
      </Box>
      <Box mb="6">
        <SectionTitle>Font size</SectionTitle>
        <GridContainer>
          <Grid bg="slate800">
            <HeaderCell>Prop</HeaderCell>
            <HeaderCell>CSS Property</HeaderCell>
          </Grid>
          <Grid>
            {Object.entries(propMap.fontSize).map(([key, value]) => {
              return (
                <Fragment key={key}>
                  <BodyCell>{key}</BodyCell>
                  <BodyCell>{value}</BodyCell>
                </Fragment>
              );
            })}
          </Grid>
        </GridContainer>
      </Box>
      <Box mb="6">
        <SectionTitle>Font weight</SectionTitle>
        <GridContainer>
          <Grid bg="slate800">
            <HeaderCell>Prop</HeaderCell>
            <HeaderCell>CSS Property</HeaderCell>
          </Grid>
          <Grid>
            {Object.entries(propMap.fontSize).map(([key, value]) => {
              return (
                <Fragment key={key}>
                  <BodyCell>{key}</BodyCell>
                  <BodyCell>{value}</BodyCell>
                </Fragment>
              );
            })}
          </Grid>
        </GridContainer>
      </Box>
      <Box mb="6">
        <SectionTitle>Line height</SectionTitle>
        <GridContainer>
          <Grid bg="slate800">
            <HeaderCell>Prop</HeaderCell>
            <HeaderCell>CSS Property</HeaderCell>
          </Grid>
          <Grid>
            {Object.entries(propMap.lineHeight).map(([key, value]) => {
              return (
                <Fragment key={key}>
                  <BodyCell>{key}</BodyCell>
                  <BodyCell>{value}</BodyCell>
                </Fragment>
              );
            })}
          </Grid>
        </GridContainer>
      </Box>
      <Box mb="6">
        <SectionTitle>Z-index</SectionTitle>
        <GridContainer>
          <Grid bg="slate800">
            <HeaderCell>Prop</HeaderCell>
            <HeaderCell>CSS Property</HeaderCell>
          </Grid>
          <Grid>
            {Object.entries(propMap.zIndex).map(([key, value]) => {
              return (
                <Fragment key={key}>
                  <BodyCell>{key}</BodyCell>
                  <BodyCell>{value}</BodyCell>
                </Fragment>
              );
            })}
          </Grid>
        </GridContainer>
      </Box>
      <Box mb="6">
        <SectionTitle>Other (non-themed) props</SectionTitle>
        <GridContainer>
          <Grid bg="slate800">
            <HeaderCell>Prop</HeaderCell>
            <HeaderCell>CSS Property</HeaderCell>
          </Grid>
          <Grid>
            {Object.entries(propMap.other).map(([key, value]) => {
              return (
                <Fragment key={key}>
                  <BodyCell>{key}</BodyCell>
                  <BodyCell>{value === 1 ? camelToKebab(key) : value}</BodyCell>
                </Fragment>
              );
            })}
          </Grid>
        </GridContainer>
      </Box>
      <Box mb="6">
        <SectionTitle>Pseudo selector props</SectionTitle>
        <GridContainer>
          <Grid bg="slate800">
            <HeaderCell>Prop</HeaderCell>
            <HeaderCell>Pseudo selector</HeaderCell>
          </Grid>
          <Grid>
            {Object.entries(propMap.pseudoSelectors).map(([key, value]) => {
              return (
                <Fragment key={key}>
                  <BodyCell>{key}</BodyCell>
                  <BodyCell>{value}</BodyCell>
                </Fragment>
              );
            })}
          </Grid>
        </GridContainer>
      </Box>
    </>
  );
}

const camelToKebab = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

const Grid = twyled("div", {
  defaults: { display: "grid", css: { gridTemplateColumns: "1fr 1fr" } },
});

const GridContainer = twyled("div", {
  defaults: {
    border: "2",
    rounded: "md",
    overflow: "hidden",
    $dark: {
      borderColor: "slate700",
    },
  },
});

const HeaderCell = twyled("div", {
  defaults: {
    fontWeight: "bold",
    color: "white",
    px: "2",
    py: "2",
    $dark: {
      bg: "slate200",
      color: "black",
    },
  },
});

const BodyCell = twyled("div", {
  defaults: {
    fontFamily: "mono",
    fontSize: "sm",
    p: "2",
    bg: "slate200",
    $dark: {
      bg: "slate800",
      // color: "black",
    },
  },
});

const List = twyled("ul", {
  defaults: { bg: "slate200", p: "2" },
});
const ListItem = twyled("li", {
  defaults: {
    color: "white",
    mb: "1",
    borderBottom: "1",
    borderColor: "slate800",
    fontFamily: "mono",
  },
});

const propMap = {
  colors: {
    bg: "background-color",
    color: "color",
    textDecorationColor: "text-decoration-color",
    accentColor: "accent-color",
    caretColor: "caret-color",
    fill: "fill",
    stroke: "stroke",
    borderColor: "border-color",
    borderLeftColor: "border-left-color",
    borderRightColor: "border-right-color",
    borderTopColor: "border-top-color",
    borderBottomColor: "border-bottom-color",
    borderXColor: "border-left-color, border-right-color",
    borderYColor: "border-top-color, border-bottom-color",
  },
  spacing: {
    p: "padding",
    pl: "padding-left",
    pr: "padding-right",
    pt: "padding-top",
    pb: "padding-bottom",
    px: "padding-left, padding-right",
    py: "padding-top, padding-bottom",
    m: "margin",
    ml: "margin-left",
    mr: "margin-right",
    mt: "margin-top",
    mb: "margin-bottom",
    mx: "margin-left, margin-right",
    my: "margin-top, margin-bottom",
    gap: "gap",
    basis: "flex-basis",
  },
  borderWidth: {
    border: "border",
    borderLeft: "border-left",
    borderRight: "border-right",
    borderTop: "border-top",
    borderBottom: "border-bottom",
    borderX: "border-left, border-right",
    borderY: "border-top, border-bottom",
    borderWidth: "border-width",
    borderLeftWidth: "border-left-width",
    borderRightWidth: "border-right-width",
    borderTopWidth: "border-top-width",
    borderBottomWidth: "boder-bottom-width",
    borderXWidth: "border-left-width, border-right-width",
    borderYWidth: "border-top-width, border-bottom-width",
  },
  borderRadius: {
    rounded: "border-radius",
    roundedLeft: "border-top-left-radius, border-bottom-left-radius",
    roundedRight: "border-top-right-radius, border-bottom-right-radius",
    roundedTop: "border-top-left-radius, border-top-right-radius",
    roundedBottom: "border-bottom-left-radius, border-bottom-right-radius",
    roundedTopLeft: "border-top-left-radius",
    roundedBottomLeft: "border-bottom-left-radius",
    roundedTopRight: "border-top-right-radius",
    roundedBottomRight: "border-bottom-right-radius",
  },
  fontSize: {
    fontSize: "font-size",
  },
  fontFamily: {
    fontFamily: "font-family",
  },
  fontWeight: {
    fontWeight: "font-weight",
  },
  lineHeight: {
    lineHeight: "line-height",
  },
  zIndex: {
    zIndex: "z-index",
  },
  pseudoSelectors: {
    $hover: ":hover",
    $focus: ":focus",
    $focusVisible: ":focus-visible",
    $focusWithin: ":focus-within",
    $active: ":active",
    $disabled: ":disabled",
  },
  other: {
    w: "width",
    minW: "min-width",
    maxW: "max-width",
    h: "height",
    minH: "min-height",
    maxH: "max-height",
    boxSizing: 1,
    display: 1,
    position: 1,
    top: 1,
    bottom: 1,
    left: 1,
    right: 1,
    visibility: 1,
    overflow: 1,
    overflowX: 1,
    overflowY: 1,
    objectFit: 1,
    textDecorationStyle: 1,
    textDecorationThickness: 1,
    textUnderlineOffset: 1,
    textTransform: 1,
    textOverflow: 1,
    verticalAlign: 1,
    whiteSpace: 1,
    wordBreak: 1,
    textAlign: 1,
    letterSpacing: 1,
    fontStyle: 1,
    textDecoration: "text-decoration-line",
    alignItems: 1,
    justifyContent: 1,
    flexDirection: 1,
    flexWrap: 1,
    grow: 1,
    shrink: 1,
    flex: 1,
    justifySelf: 1,
    alignSelf: 1,
    order: 1,
    borderStyle: 1,
    borderLeftStyle: 1,
    borderRightStyle: 1,
    borderTopStyle: 1,
    borderBottomStyle: 1,
    borderXStyle: 1,
    borderYStyle: 1,
    transitionProperty: 1,
    transitionDuration: 1,
    transitionDelay: 1,
    transitionTimingFunction: 1,
    listStyleType: 1,
    listStylePosition: 1,
    borderCollapse: 1,
    borderSpacing: 1,
    tableLayout: 1,
    transition: 1,
    opacity: 1,
    transform: 1,
    transformOrigin: 1,
    appearance: 1,
    cursor: 1,
    pointerEvents: 1,
    resize: 1,
    scrollBehavior: 1,
    userSelect: 1,
    strokeWidth: 1,
  },
};
