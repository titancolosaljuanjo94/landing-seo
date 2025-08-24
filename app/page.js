'use client';
export default function Home() {
  return (
    <main className="wrap">
      {/* HEADER */}
      <header className="header">
        <a href="/" className="logo">Atrevia®</a>
        <nav className="nav">
          <a href="#beneficios">Beneficios</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#faq">FAQ</a>
          <a href="#comprar" className="btn primary">Comprar</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="hero-copy">
          <h1>Pastillas Atrevia® para pulgas y garrapatas en perros</h1>
          <p className="sub">
            Protección rápida y conveniente. Una sola pastilla, perros más felices
            y hogares más tranquilos.
          </p>
          <div className="cta-row">
            <a id="comprar" href="#comprar" className="btn primary">Comprar ahora</a>
            <a id="whatsapp" href="#whatsapp" className="btn ghost">Consultar por WhatsApp</a>
          </div>
          <ul className="bullets">
            <li>✓ Acción rápida contra pulgas y garrapatas</li>
            <li>✓ Comprimido palatable y fácil de administrar</li>
            <li>✓ Conveniente para dueños con rutinas ocupadas</li>
          </ul>
        </div>

        <div className="hero-media">
          {/* AQUÍ VA UNA IMAGEN DEL PRODUCTO (packshot) */}
          {/* <img src="/images/atrevia-pack.webp" alt="Atrevia - pastillas antipulgas y garrapatas" width="640" height="640" /> */}
          <div className="img-placeholder">AQUÍ VA UNA IMAGEN</div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="section" id="beneficios">
        <h2>Beneficios clave</h2>
        <div className="grid">
          <div className="card">
            <h3>Protección eficaz</h3>
            <p>
              Ayuda a eliminar pulgas y garrapatas para que tu perro esté cómodo y protegido.
            </p>
          </div>
          <div className="card">
            <h3>Comodidad en casa</h3>
            <p>
              Menos rascado y menos visitantes indeseados en tu hogar.
            </p>
          </div>
          <div className="card">
            <h3>Fácil de administrar</h3>
            <p>
              Formato en pastilla palatable: sin complicaciones en la rutina diaria.
            </p>
          </div>
          <div className="card">
            <h3>Confianza</h3>
            <p>
              Marca reconocida y recomendada por profesionales del cuidado animal.
            </p>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="section alt" id="como-funciona">
        <div className="cols">
          <div className="col">
            <h2>¿Cómo funciona Atrevia®?</h2>
            <p>
              Atrevia® se presenta en forma de pastilla palatable. Tras su administración,
              comienza a actuar para ayudar a controlar pulgas y garrapatas en tu perro.
            </p>
            <ul className="steps">
              <li><strong>1.</strong> Administra el comprimido siguiendo las indicaciones del empaque.</li>
              <li><strong>2.</strong> Observa a tu perro: comodidad y bienestar en el día a día.</li>
              <li><strong>3.</strong> Mantén una rutina de cuidado regular.</li>
            </ul>
            <p className="note">
              <strong>Importante:</strong> Ante cualquier duda, consulta a tu médico veterinario. No se brindan
              indicaciones de dosis aquí; sigue siempre las instrucciones del producto.
            </p>
          </div>
          <div className="col media">
            {/* AQUÍ VA UNA IMAGEN DE UN PERRO FELIZ (ambiente hogar) */}
            {/* <img src="/images/perro-feliz.webp" alt="Perro feliz y protegido" width="800" height="600" /> */}
            <div className="img-placeholder tall">AQUÍ VA UNA IMAGEN</div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="section" id="testimonios">
        <h2>Lo que dicen los dueños</h2>
        <div className="grid">
          <figure className="card quote">
            <blockquote>
              “Mi perra dejó de rascarse a los pocos días. Me encanta que sea solo una pastilla.”
            </blockquote>
            <figcaption>— Carla & Luna</figcaption>
          </figure>
          <figure className="card quote">
            <blockquote>
              “Práctico y efectivo. Ideal para nuestra rutina con dos perros.”
            </blockquote>
            <figcaption>— Diego & Max</figcaption>
          </figure>
          <figure className="card quote">
            <blockquote>
              “Notamos el cambio rápidamente. ¡Totalmente recomendable!”
            </blockquote>
            <figcaption>— Sofía & Rocky</figcaption>
          </figure>
        </div>
      </section>

      {/* BLOQUE DE COMPRA / CTA */}
      <section className="section cta" id="comprar">
        <div className="cta-box">
          <h2>¿Listo para proteger a tu mejor amigo?</h2>
          <p>Atrevia® en un formato conveniente. Consulta por presentaciones disponibles.</p>
          <div className="cta-row">
            <a href="#comprar" className="btn primary lg">Comprar ahora</a>
            <a href="#whatsapp" className="btn ghost lg">Hablar por WhatsApp</a>
          </div>
          {/* AQUÍ VA UNA IMAGEN DEL BLISTER O CAJA SOBRE FONDO LIMPIO */}
          {/* <img src="/images/atrevia-blister.webp" alt="Blister Atrevia" width="900" height="500" /> */}
          <div className="img-placeholder wide">AQUÍ VA UNA IMAGEN</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <h2>Preguntas frecuentes</h2>
        <div className="faq">
          <details>
            <summary>¿Para qué sirve Atrevia®?</summary>
            <p>Ayuda a controlar pulgas y garrapatas en perros de manera práctica y conveniente.</p>
          </details>
          <details>
            <summary>¿Cómo se administra?</summary>
            <p>Sigue las instrucciones del empaque y las recomendaciones de tu veterinario.</p>
          </details>
          <details>
            <summary>¿Puedo usarlo en cachorros o perros mayores?</summary>
            <p>Consulta con tu veterinario para confirmar la presentación adecuada según la edad y peso.</p>
          </details>
          <details>
            <summary>¿Reemplaza otros cuidados?</summary>
            <p>No. Complementa hábitos de higiene, limpieza del entorno y controles veterinarios regulares.</p>
          </details>
        </div>
        <p className="legal">
          *Atrevia® es una marca registrada de su titular. Esta página es demostrativa. Consulta a tu
          veterinario ante cualquier duda y sigue siempre el etiquetado del producto.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Atrevia® — Página demostrativa para fines educativos.</p>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>

      {/* ESTILOS */}
      <style jsx>{`
        :root {
          --bg: #0b1220;
          --panel: #0f172a;
          --muted: #94a3b8;
          --text: #e5e7eb;
          --brand: #0ea5e9;
          --brand-2: #22d3ee;
          --ring: rgba(14, 165, 233, .35);
        }
        * { box-sizing: border-box }
        html, body { margin: 0; padding: 0; background: var(--bg); color: var(--text); font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif; }
        a { color: var(--text); text-decoration: none }
        .wrap { max-width: 1100px; margin: 0 auto; padding: 20px }
        .header { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 8px 0 12px }
        .logo { font-weight: 800; letter-spacing: .3px }
        .nav { display: flex; gap: 16px; align-items: center; flex-wrap: wrap }
        .nav a { opacity: .9 }
        .btn { display: inline-flex; align-items: center; gap: 8px; padding: 10px 14px; border-radius: 12px; border: 1px solid #1f2937; background: #0b1220; transition: transform .12s ease, box-shadow .12s ease, background .2s ease }
        .btn:hover { transform: translateY(-1px); box-shadow: 0 8px 24px -8px var(--ring) }
        .btn.primary { background: linear-gradient(135deg, var(--brand), var(--brand-2)); color: #0b1220; font-weight: 700; border: none }
        .btn.ghost { background: transparent; border: 1px solid #1f2937 }
        .btn.lg { padding: 14px 18px; border-radius: 14px }

        .hero { display: grid; grid-template-columns: 1.1fr .9fr; gap: 24px; align-items: center; padding: 32px 0 8px }
        .hero-copy h1 { font-size: clamp(28px, 5vw, 44px); margin: 0 0 8px }
        .sub { color: var(--muted); margin: 0 0 16px }
        .cta-row { display: flex; gap: 12px; flex-wrap: wrap; margin: 12px 0 6px }
        .bullets { display: grid; gap: 6px; padding-left: 0; list-style: none; color: var(--muted); margin: 12px 0 0 }

        .hero-media { display: grid; place-items: center }
        .img-placeholder { width: 100%; aspect-ratio: 1/1; display: grid; place-items: center; border-radius: 16px; background: radial-gradient(120% 120% at 80% 0%, #123 0%, #0b1220 40%, #0b1220 100%); border: 1px solid #1f2937; color: #93c5fd; font-weight: 700; letter-spacing: .5px; animation: float 5s ease-in-out infinite }
        .img-placeholder.tall { aspect-ratio: 4/3 }
        .img-placeholder.wide { aspect-ratio: 16/9; margin-top: 16px }

        @keyframes float {
          0%, 100% { transform: translateY(0) }
          50% { transform: translateY(-6px) }
        }

        .section { padding: 40px 0 }
        .section h2 { font-size: clamp(22px, 4vw, 32px); margin: 0 0 16px }
        .section.alt { background: #0a1020; border: 1px solid #101827; border-radius: 16px; padding: 32px; }
        .grid { display: grid; gap: 16px; grid-template-columns: repeat(4, 1fr) }
        .card { background: var(--panel); border: 1px solid #1f2937; border-radius: 16px; padding: 16px }
        .card h3 { margin: 0 0 6px; font-size: 18px }

        .cols { display: grid; grid-template-columns: 1.1fr .9fr; gap: 24px; align-items: center }
        .col.media { display: grid; place-items: center }

        .quote blockquote { margin: 0 0 8px; color: #dbeafe }
        .quote figcaption { color: var(--muted); font-size: 14px }

        .cta { text-align: center }
        .cta-box { background: linear-gradient(135deg, #0b1220, #0c1a2e); border: 1px solid #10203a; border-radius: 20px; padding: 28px }
        .cta-box h2 { margin-top: 0 }
        .cta-box p { color: var(--muted) }

        .faq { display: grid; gap: 10px; margin-top: 8px }
        details { background: var(--panel); border: 1px solid #1f2937; border-radius: 12px; padding: 12px 14px }
        summary { cursor: pointer; font-weight: 600 }
        .note { color: #c7d2fe; background: rgba(99,102,241,.08); border: 1px solid rgba(99,102,241,.2); padding: 12px 14px; border-radius: 12px; }

        .legal { color: var(--muted); font-size: 13px; margin-top: 12px }
        .footer { display: flex; gap: 12px; justify-content: space-between; align-items: center; border-top: 1px solid #1f2937; padding: 18px 0; margin-top: 16px; color: var(--muted) }

        /* Responsive */
        @media (max-width: 980px) {
          .hero { grid-template-columns: 1fr; }
          .cols { grid-template-columns: 1fr; }
          .grid { grid-template-columns: 1fr 1fr; }
          .nav { gap: 12px }
        }
        @media (max-width: 560px) {
          .grid { grid-template-columns: 1fr; }
          .header { flex-direction: column; align-items: flex-start; gap: 8px }
          .cta-row { flex-direction: column; align-items: stretch }
        }
      `}</style>
    </main>
  );
}
