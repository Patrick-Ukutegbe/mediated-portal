import ThemeProvider from "@/src/providers/ThemeProvider";
import "./globals.css";
import AppProvider from "@/src/providers/AppProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
