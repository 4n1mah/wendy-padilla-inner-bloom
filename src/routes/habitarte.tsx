import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/habitarte")({
  head: () => ({
    meta: [
      { title: "Habitarte — Wendy Padilla" },
      {
        name: "description",
        content:
          "Habitarte es un espacio de educación y desarrollo personal para mujeres que atraviesan distintas etapas, cambios y circunstancias de la vida.",
      },
      {
        property: "og:title",
        content: "Habitarte — Wendy Padilla",
      },
      {
        property: "og:description",
        content:
          "Un espacio de educación y desarrollo personal para mujeres que quieren aprender a no abandonarse en el proceso.",
      },
    ],
  }),
  component: HabitartePage,
});

function HabitartePage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-4xl px-6">

        {/* ¿Qué es Habitarte? */}
        <div className="text-center">
          <h1 className="font-serif text-6xl leading-tight tracking-tight md:text-5xl">
            <span className="italic text-primary">
              ¿Qué es Habitarte?
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground text-justify">
            Si estás atravesando un proceso difícil, una circunstancia que hoy
            no puedes cambiar o simplemente no es el momento de hacerlo,
            Habitarte es tu espacio. No se trata de cambiar aquello que hoy no
            puedes cambiar, ni de hacer terapia sobre tu circunstancia.
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground text-justify">
            Se trata de brindarte herramientas para conocerte, cuidarte y
            fortalecerte mientras atraviesas tu proceso.
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground text-justify">
            Porque quizá hoy no puedas cambiar tu realidad, pero sí puedes
            decidir qué haces contigo mientras la atraviesas.
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground text-justify">
            Eso es Habitarte: dejar de abandonarte mientras atraviesas tu
            propia vida.
          </p>
        </div>

   <br />   

        {/* ¿Para quién es Habitarte? */}
        <div className="mb-20">
          <h2 className="text-center font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            <span className="italic text-primary">
              ¿Para quién es Habitarte?
            </span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-foreground text-justify">
            Para mujeres que están atravesando:
          </p>

          <ol className="mt-8 list-decimal list-inside space-y-5 text-base leading-relaxed text-foreground">
            <li>Cambios en sus relaciones.</li>
            <li>Divorcios o separaciones.</li>
            <li>Etapas de soledad.</li>
            <li>Cambios familiares.</li>
            <li>Maternidad y transformación de roles.</li>
            <li>Nuevas etapas de la vida.</li>
            <li>Procesos de cambio personal.</li>
            <li>
              Circunstancias que todavía no pueden o no desean cambiar.
            </li>
            <li>
              Mujeres que quieren atravesar estas etapas sin perderse a sí
              mismas.
            </li>
          </ol>
        </div>

        {/* El método Habitarte */}
        <div className="mb-20">
          <h2 className="text-center font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            <span className="italic text-primary">
              ¿En qué consiste el método Habitarte?
            </span>
          </h2>

          <div className="mt-10 space-y-10">

            {/* Conocerte */}
            <div>
              <h3 className="text-center font-serif text-3xl italic text-primary">
                Conocerte
              </h3>

              <p className="mt-3 text-base leading-relaxed text-foreground text-justify">
                Reconocer quién eres, qué necesitas, qué sientes y qué
                patrones forman parte de tu manera de vivir.
              </p>
            </div>

            {/* Amarte */}
            <div>
              <h3 className="text-center font-serif text-3xl italic text-primary">
                Amarte
              </h3>

              <p className="mt-3 text-base leading-relaxed text-foreground text-justify">
                Aprender a tratarte con respeto, reconocer tu valor y dejar de
                ponerte siempre en último lugar.
              </p>
            </div>

            {/* Mejorarte */}
            <div>
              <h3 className="text-center font-serif text-3xl italic text-primary">
                Mejorarte
              </h3>

              <p className="mt-3 text-base leading-relaxed text-foreground text-justify">
                Trabajar en aquello que quieres transformar en ti, no desde
                el rechazo, sino desde el deseo de convertirte en una mejor
                versión de ti misma.
              </p>
            </div>

            {/* Habitarte */}
            <div>
              <h3 className="text-center font-serif text-3xl italic text-primary">
                Habitarte
              </h3>

              <p className="mt-3 text-base leading-relaxed text-foreground text-justify">
                Integrar todo lo anterior para aprender a estar de tu lado en
                las distintas circunstancias de tu vida.
              </p>
            </div>

          </div>
        </div>

        {/* Talleres */}
        <div className="mb-20">
          <h2 className="text-center font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            <span className="italic text-primary">
              ¿Qué son los Talleres Habitarte?
            </span>
          </h2>

          <h3 className="mt-8 text-center font-serif text-2xl text-foreground">
            Herramientas para atravesar tu proceso sin abandonarte.
          </h3>

          <p className="mt-5 text-base leading-relaxed text-foreground text-justify">
            Espacios de educación y desarrollo personal diseñados para
            ayudarte a fortalecer tu autoestima, conocerte mejor y desarrollar
            recursos personales para afrontar las diferentes etapas de la vida.
          </p>
        </div>

        {/* Vida resuelta */}
        <div className="mb-20">
          <h2 className="text-center font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            <span className="italic text-primary">
              ¿Necesitas tener tu vida resuelta para comenzar?
            </span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-foreground text-justify">
            No necesitas tener tu vida resuelta para comenzar a cuidarte.
          </p>

          <p className="mt-5 text-base leading-relaxed text-foreground text-justify">
            A veces, el primer paso no es cambiar lo que está pasando afuera,
            sino aprender a acompañarte mientras lo atraviesas.
          </p>
        </div>

        {/* Circunstancias */}
        <div className="mb-20">
          <h2 className="text-center font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            <span className="italic text-primary">
              ¿Y si todavía no puedo cambiar mi circunstancia?
            </span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-foreground text-justify">
            Habitarte parte de una idea sencilla: no siempre puedes elegir lo
            que estás viviendo, pero sí puedes aprender a elegir cómo estar
            contigo mientras lo atraviesas.
          </p>

          <p className="mt-5 text-base leading-relaxed text-foreground text-justify">
            No se trata de negar tu realidad ni de forzarte a cambiarla antes
            de tiempo. Se trata de no perderte a ti misma dentro de ella.
          </p>
        </div>

        {/* Dejar de abandonarte */}
        <div className="mb-20">
          <h2 className="text-center font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            <span className="italic text-primary">
              ¿Qué significa dejar de abandonarte?
            </span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-foreground text-justify">
            Significa aprender a escucharte, reconocer tus necesidades,
            respetar tus límites y cuidar de ti incluso cuando la vida está
            atravesando momentos que no puedes controlar.
          </p>
        </div>

        {/* Cierre */}
        <div className="text-center">
          <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            <span className="italic text-primary">
              ¿Qué quieres aprender a hacer contigo?
            </span>
          </h2>

          <div className="mx-auto mt-8 max-w-2xl">
            <p className="text-lg leading-relaxed text-foreground">
              Conocerte.
            </p>

            <p className="mt-2 text-lg leading-relaxed text-foreground">
              Cuidarte.
            </p>

            <p className="mt-2 text-lg leading-relaxed text-foreground">
              Elegirte.
            </p>

            <p className="mt-2 text-lg leading-relaxed text-foreground">
              Fortalecerte.
            </p>

            <p className="mt-2 text-lg leading-relaxed text-foreground">
              Y aprender a estar de tu lado.
            </p>
          </div>

          <p className="mx-auto mt-10 max-w-2xl font-serif text-2xl italic text-primary">
            Eso es Habitarte.
          </p>

          <div className="mt-12">
            <span className="inline-block h-1 w-24 rounded-full bg-primary/60" />
          </div>
        </div>

      </div>
    </section>
  );
}