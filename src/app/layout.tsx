import "./globals.css";

export const metadata = {
  title: "Jhansi — AI · Software · Design",
  description: "Portfolio of Mukkapati Jhansi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}