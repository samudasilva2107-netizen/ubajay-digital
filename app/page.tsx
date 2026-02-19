import type { Metadata } from 'next';

const CIUDAD = {
  nombre: 'Tu Ciudad',
  provincia: 'Entre Rios',
  pais: 'Argentina',
  descripcion: 'Guia comercial y turistica digital de Tu Ciudad.',
  slug: 'tu-ciudad',
};

export const metadata: Metadata = {
  title: `${CIUDAD.nombre} Digital | Guia Comercial y Turistica`,
  description: `${CIUDAD.descripcion} Encontra comercios, servicios y lugares de interes en ${CIUDAD.nombre}, ${CIUDAD.provincia}.`,
  keywords: [`${CIUDAD.nombre}`, `comercios ${CIUDAD.nombre}`, `turismo ${CIUDAD.nombre}`, `${CIUDAD.provincia}`, 'guia comercial', 'directorio local'],
  openGraph: {
    title: `${CIUDAD.nombre} Digital`,
    description: CIUDAD.descripcion,
    type: 'website',
  },
};

export default function CiudadPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': `${CIUDAD.nombre} Digital`,
    'description': CIUDAD.descripcion,
    'areaServed': {
      '@type': 'City',
      'name': CIUDAD.nombre,
      'addressRegion': CIUDAD.provincia,
      'addressCountry': CIUDAD.pais,
    },
  };

  return (
    <main style={{ minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #065f46 0%, #047857 50%, #10b981 100%)',
        color: 'white',
        padding: '80px 24px',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', opacity: 0.8, marginBottom: '16px' }}>
          Plataforma Digital Local
        </p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '20px' }}>
          {CIUDAD.nombre}<br />
          <span style={{ color: '#6ee7b7' }}>Digital</span>
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.6 }}>
          {CIUDAD.descripcion}
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://www.ubajaydigital.com"
            style={{
              background: 'white',
              color: '#065f46',
              padding: '14px 32px',
              borderRadius: '12px',
              fontWeight: 800,
              textDecoration: 'none',
              fontSize: '14px',
              letterSpacing: '1px',
            }}
          >
            Ver modelo: Ubajay Digital
          </a>
          <a
            href="https://www.ubajaydigital.com/postular-ciudad"
            style={{
              background: 'rgba(255,255,255,0.15)',
              color: 'white',
              padding: '14px 32px',
              borderRadius: '12px',
              fontWeight: 800,
              textDecoration: 'none',
              fontSize: '14px',
              letterSpacing: '1px',
              border: '2px solid rgba(255,255,255,0.3)',
            }}
          >
            Postular mi ciudad
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '80px 24px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 900, marginBottom: '12px', color: '#1e293b' }}>
          Una plataforma digital para cada ciudad
        </h2>
        <p style={{ textAlign: 'center', color: '#64748b', fontSize: '1.1rem', marginBottom: '60px' }}>
          El mismo sistema que impulsa Ubajay Digital, adaptado a tu localidad.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {[
            { icon: '🏪', title: 'Directorio Comercial', desc: 'Todos los comercios y servicios de la ciudad, con busqueda inteligente y horarios en tiempo real.' },
            { icon: '🗺️', title: 'Mapa Interactivo', desc: 'Encontra comercios cerca tuyo con geolocalización y mapa integrado.' },
            { icon: '📅', title: 'Eventos Locales', desc: 'Agenda cultural y turistica de la ciudad, actualizada por curadores locales.' },
            { icon: '🤖', title: 'Busqueda con IA', desc: 'Buscá en lenguaje natural y obtené respuestas inteligentes sobre los comercios.' },
            { icon: '📱', title: 'Stories de Negocios', desc: 'Los comerciantes publican novedades, ofertas y promociones al estilo stories.' },
            { icon: '🌿', title: 'Impacto Local', desc: 'Fortalece la economia local y conecta a los vecinos con su ciudad.' },
          ].map((f, i) => (
            <div key={i} style={{
              background: 'white',
              borderRadius: '20px',
              padding: '32px 28px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              border: '1px solid #f1f5f9',
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{f.icon}</div>
              <h3 style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '8px', color: '#1e293b' }}>{f.title}</h3>
              <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: '0.95rem' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: '#f8fafc',
        borderTop: '2px solid #e2e8f0',
        padding: '80px 24px',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '16px', color: '#1e293b' }}>
          Queres este sistema para {CIUDAD.nombre}?
        </h2>
        <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>
          Contactanos y te explicamos como funciona el programa de expansion de ciudades digitales.
        </p>
        <a
          href="https://www.ubajaydigital.com/postular-ciudad"
          style={{
            background: '#059669',
            color: 'white',
            padding: '18px 48px',
            borderRadius: '14px',
            fontWeight: 900,
            textDecoration: 'none',
            fontSize: '15px',
            letterSpacing: '1px',
            display: 'inline-block',
          }}
        >
          Postular {CIUDAD.nombre}
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: '#0f172a',
        color: '#94a3b8',
        padding: '32px 24px',
        textAlign: 'center',
        fontSize: '14px',
      }}>
        <p style={{ marginBottom: '8px', color: 'white', fontWeight: 700 }}>
          {CIUDAD.nombre} Digital
        </p>
        <p>Impulsado por <a href="https://www.ubajaydigital.com" style={{ color: '#34d399', textDecoration: 'none' }}>Ubajay Digital</a></p>
      </footer>
    </main>
  );
}
