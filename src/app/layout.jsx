import "./../components/Landing.css";

export const metadata = {
  title: 'CoursClick',
  description: 'La plateforme de soutien scolaire nouvelle génération.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
