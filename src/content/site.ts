export const FIRM = {
  name: "J. Mallén & Associates Law Consultant",
  short: "J. Mallén & Associates",
  founder: "Julia Alexandra Mallén Suárez",
  tagline:
    "Asesoría legal estratégica para quienes construyen, invierten y deciden en República Dominicana.",
  offices: ["Santo Domingo", "Punta Cana"],
  // Datos de contacto pendientes de confirmación por la firma.
  emailPlaceholder: "[Pendiente: correo oficial de la firma]",
  phonePlaceholder: "[Pendiente: teléfono oficial de la firma]",
};

export type Gate = {
  slug: string;
  title: string;
  description: string;
  to: string;
  params?: Record<string, string>;
};

export const GATES: Gate[] = [
  {
    slug: "comprar-heredar",
    title: "Voy a comprar o heredar una propiedad aquí",
    description:
      "Verificación de título, revisión de contrato y cierre acompañado, con informes por escrito antes de comprometer capital.",
    to: "/areas-de-practica/$area",
    params: { area: "derecho-inmobiliario" },
  },
  {
    slug: "vivo-fuera",
    title: "Vivo fuera y necesito resolver algo aquí",
    description:
      "Sucesiones, saneamiento de títulos y gestiones patrimoniales para la diáspora dominicana, con rendición de cuentas a distancia.",
    to: "/mercados/diaspora-dominicana",
  },
  {
    slug: "residencia",
    title: "Quiero establecerme o tener residencia",
    description:
      "Residencia por inversión y el régimen de rentista o pensionado de la Ley 171-07, explicados por separado y no como un trámite genérico.",
    to: "/areas-de-practica/$area",
    params: { area: "derecho-migratorio" },
  },
  {
    slug: "invertir",
    title: "Voy a invertir o instalar una operación",
    description:
      "Estructuración de entrada al país con las cinco áreas coordinadas bajo un mismo criterio: la Ruta de Inversión JMallén.",
    to: "/ruta-de-inversion",
  },
];

export type PracticeArea = {
  slug: string;
  name: string;
  hero: string;
  lede: string;
  services: string[];
  buyerBlock?: { title: string; body: string };
  secondBlock?: { title: string; body: string };
  cta: { label: string; to: string };
  seoTitle: string;
  seoDescription: string;
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: "derecho-inmobiliario",
    name: "Derecho Inmobiliario",
    hero: "Comprar en República Dominicana es una decisión patrimonial, no un trámite.",
    lede: "Acompañamos la compraventa, el conflicto y la estructuración de proyectos con una regla que no cambia: no vendemos inmuebles ni recibimos comisión de terceros. Asesoramos únicamente a quien nos contrata.",
    services: [
      "Compraventa de bienes raíces con acompañamiento en negociación y cierre.",
      "Conflictos inmobiliarios: incumplimiento de contrato, estafas, litigios de titularidad, vicios ocultos y disputas con contratistas.",
      "Estructuración legal de proyectos inmobiliarios y urbanísticos: contratos de construcción, cumplimiento ambiental, consorcios y joint ventures, garantías y uso de suelo.",
    ],
    buyerBlock: {
      title: "Si usted vive fuera del país",
      body: "Trabajamos con la diáspora dominicana, con el comprador colombiano y con inversionistas de Estados Unidos, Canadá y Europa bajo comunicación escrita y documentada en cada etapa. Usted recibe el criterio antes de firmar, no después.",
    },
    secondBlock: {
      title: "Constructores y desarrolladores",
      body: "Cada semana de retraso regulatorio tiene un costo financiero calculable. Trabajamos de forma preventiva sobre permisos, contratos y garantías para proteger el cronograma y el margen del proyecto.",
    },
    cta: { label: "Antes de decidir, converse con nosotros", to: "/contacto" },
    seoTitle: "Derecho Inmobiliario en República Dominicana | J. Mallén & Associates",
    seoDescription:
      "Abogados inmobiliarios en República Dominicana: compraventa, verificación de título, conflictos y estructuración de proyectos. Asesoría independiente del vendedor.",
  },
  {
    slug: "derecho-corporativo",
    name: "Derecho Corporativo",
    hero: "Del acuerdo de inversión a la operación en marcha, con un solo interlocutor.",
    lede: "Estructuramos la entrada y el funcionamiento de empresas en República Dominicana con el estándar documental que la matriz extranjera necesita para decidir.",
    services: [
      "Constitución y estructuración de empresas y sociedades, gobierno corporativo, fusiones y adquisiciones.",
      "Redacción y negociación de contratos comerciales.",
      "Estructuración de inversión extranjera, due diligence legal y cumplimiento normativo para inversores.",
      "Planificación y cumplimiento fiscal.",
    ],
    buyerBlock: {
      title: "Si su empresa ya opera en otro país",
      body: "Continuidad del interlocutor, documentación bilingüe y opiniones legales formales: el mismo estándar de reporte que su despacho de origen le exige a usted.",
    },
    secondBlock: {
      title: "Empresa dominicana que creció más rápido que su estructura legal",
      body: "Formalización, gobierno corporativo y ordenamiento societario para empresas consolidadas que necesitan que su estructura acompañe su tamaño real.",
    },
    cta: { label: "Conversemos sobre su próximo paso", to: "/contacto" },
    seoTitle: "Derecho Corporativo y sociedades en República Dominicana | J. Mallén",
    seoDescription:
      "Abogados corporativos en República Dominicana: constitución de sociedades, inversión extranjera, due diligence, contratos y cumplimiento normativo.",
  },
  {
    slug: "derecho-migratorio",
    name: "Derecho Migratorio",
    hero: "Establecerse en el país exige saber cuál régimen le corresponde, antes de iniciarlo.",
    lede: "Distinguimos con claridad los dos caminos que suelen presentarse como uno solo: la residencia por inversión y el régimen de rentista o pensionado de la Ley 171-07.",
    services: [
      "Residencia por inversión: requisitos, plazos y documentación exigible.",
      "Régimen de rentista y pensionado bajo la Ley 171-07, explicado por separado y con sus condiciones propias.",
      "Permisos de trabajo y trámites migratorios para clientes individuales y corporativos.",
      "Acompañamiento migratorio a inversionistas que llegan desde una operación inmobiliaria o societaria.",
    ],
    buyerBlock: {
      title: "Empresas que trasladan personal",
      body: "Cuando la llegada de un ejecutivo tiene fecha comprometida, el trámite deja de ser administrativo y pasa a ser parte del cronograma de la operación. Lo tratamos como tal.",
    },
    cta: { label: "Agende una conversación inicial", to: "/contacto" },
    seoTitle: "Residencia e inversión: Derecho Migratorio República Dominicana | J. Mallén",
    seoDescription:
      "Residencia por inversión, régimen de rentista y pensionado (Ley 171-07) y permisos de trabajo en República Dominicana. Asesoría migratoria para extranjeros y empresas.",
  },
  {
    slug: "derecho-laboral",
    name: "Derecho Laboral",
    hero: "La relación laboral se gestiona antes del conflicto, no durante.",
    lede: "Acompañamos a empresas con personal en el país en el cumplimiento normativo, la defensa de sus procesos y la contratación de personal extranjero.",
    services: [
      "Cumplimiento de leyes y reglamentos laborales en la contratación.",
      "Defensa en demandas laborales y procesos administrativos.",
      "Asesoría en contratación de personal extranjero.",
    ],
    buyerBlock: {
      title: "Reforma del Código de Trabajo",
      body: "Toda empresa con personal deberá revisar contratos, políticas internas y protocolos. Publicamos una guía de cumplimiento en la sección de Recursos.",
    },
    cta: { label: "Revise si sus contratos ya cumplen", to: "/recursos" },
    seoTitle: "Derecho Laboral para empresas en República Dominicana | J. Mallén",
    seoDescription:
      "Cumplimiento laboral, defensa en demandas y contratación de personal extranjero en República Dominicana. Asesoría preventiva para empresas con personal.",
  },
  {
    slug: "desarrollo-de-negocios",
    name: "Desarrollo de Negocios",
    hero: "El criterio jurídico solo es útil si conversa con la decisión empresarial.",
    lede: "Planeación financiera estratégica, escalamiento y asesoría tributaria, con foco en el crecimiento y la rentabilidad del cliente — no en el trámite aislado.",
    services: [
      "Planeación financiera estratégica.",
      "Escalamiento empresarial.",
      "Asesoría tributaria.",
      "Acompañamiento en emprendimiento.",
    ],
    buyerBlock: {
      title: "Su expresión más completa es la Ruta de Inversión JMallén",
      body: "Cuando la decisión de negocio implica además lo inmobiliario, lo corporativo, lo migratorio y lo laboral, esta área deja de operar sola y se coordina dentro de la Ruta.",
    },
    cta: { label: "Conozca la Ruta de Inversión JMallén", to: "/ruta-de-inversion" },
    seoTitle: "Desarrollo de Negocios y asesoría tributaria en República Dominicana",
    seoDescription:
      "Planeación financiera estratégica, escalamiento empresarial y asesoría tributaria para empresarios e inversionistas en República Dominicana.",
  },
];

export const PILLARS = [
  {
    title: "Atención directa con la fundadora",
    body: "Su caso no se deriva a un equipo sin experiencia.",
  },
  {
    title: "Independencia",
    body: "No vendemos inmuebles ni recibimos comisión de terceros. Asesoramos únicamente a quien nos contrata.",
  },
  {
    title: "Comunicación escrita y documentada",
    body: "En cada etapa, pensada para el cliente que decide a distancia.",
  },
  {
    title: "Comunicación bilingüe",
    body: "Pensada tanto para el cliente dominicano como para el internacional.",
  },
];

export const ROUTE_PROFILES = [
  {
    number: "01",
    title: "Va a estructurar la entrada de una empresa o de capital propio al país",
    body: "Es el uso más completo de la Ruta: activa las cinco áreas desde el primer día y requiere un plan de entrada con plazos y costos definidos antes de comprometer la operación.",
  },
  {
    number: "02",
    title: "Está comprando un inmueble con la intención, hoy o a futuro, de obtener residencia",
    body: "La Ruta conecta lo que empieza como una compra con el paso migratorio siguiente, para que no tenga que iniciar esa conversación desde cero meses después.",
  },
  {
    number: "03",
    title: "Es dominicano, vive fuera del país y quiere invertir en él",
    body: "La Ruta ordena, bajo un mismo criterio, lo que de otro modo tendría que resolver a distancia con distintos proveedores en distintos husos horarios.",
  },
];

export const ROUTE_PHASES = [
  {
    number: "01",
    title: "Diagnóstico inicial",
    body: "Conversación confidencial para identificar el objetivo real y cuál de los tres perfiles de la Ruta aplica.",
  },
  {
    number: "02",
    title: "Mapa de riesgos y due diligence",
    body: "Revisión legal, migratoria, corporativa e inmobiliaria del plan, antes de comprometer capital o decisiones.",
  },
  {
    number: "03",
    title: "Estructuración",
    body: "Constitución, contratos, permisos y trámites necesarios, coordinados bajo un mismo criterio.",
  },
  {
    number: "04",
    title: "Cierre e implementación",
    body: "Ejecución de la operación con el mismo equipo que la diseñó.",
  },
  {
    number: "05",
    title: "Acompañamiento posterior",
    body: "Seguimiento legal continuo: para quien compra con vista a residencia incluye el paso migratorio; para quien invierte desde fuera, el seguimiento a distancia.",
  },
];

export const SITUATIONS = [
  "Voy a comprar o heredar",
  "Vivo fuera del país",
  "Quiero residencia",
  "Voy a invertir o instalar una operación",
  "Otro",
];
