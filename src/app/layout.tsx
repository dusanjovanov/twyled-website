"use client";
import { Provider, useSliceState } from "@/store";
import { ThemeProvider } from "@/twyled";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider>
          <Provider>
            <Container>{children}</Container>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}

const Container = ({ children }: { children: React.ReactNode }) => {
  const theme = useSliceState("theme");

  return <div className={theme}>{children}</div>;
};
