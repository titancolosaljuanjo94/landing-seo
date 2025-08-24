// app/layout.js
import Script from "next/script";

export const metadata = {
  // Dejamos title y description vacíos como pediste.
  title: "Pastilla antipulga para mascotas (perros y gatos) |Compra aquí",
  description: "",

  // Canonical "auto" relativo a la raíz; cuando agregues metadataBase con tu dominio,
  // Next.js generará el canonical absoluto automáticamente.
  alternates: { canonical: "/" },

  // (Opcional) cuando quieras, activa y completa para OG:
  openGraph: {
    title: "",
    description: "",
    url: "", // cuando tengas dominio
    type: "website",
  },

  // Si más adelante quieres canonical absoluto:
  // metadataBase: new URL("https://TU-DOMINIO"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {/* JSON-LD básico (puedes editarlo cuando tengas dominio/nombre del sitio) */}
        <Script id="jsonld-basic" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "",          // ← déjalo vacío ahora; completa luego
            "url": "",           // ← déjalo vacío ahora; completa luego (https://tu-dominio)
            "potentialAction": {
              "@type": "SearchAction",
              "target": "",      // ← si implementas búsqueda interna, coloca la URL con {search_term_string}
              "query-input": "required name=search_term_string"
            }
          })}
        </Script>

        {children}
      </body>
    </html>
  );
}
