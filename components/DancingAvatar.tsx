type Props = {
  style: string;
  color: string;
  dance: string;
  size?: number;
  mode?: "idle" | "dance";
  delayMs?: number;
};

type Headwear =
  | "none"
  | "punjab-pagri"
  | "rajasthan-pagri"
  | "pheta"
  | "gujarat-pagri"
  | "japi"
  | "peta"
  | "kashmir-cap"
  | "odhni";

type BodyKind = "kurta" | "kurta-gold-trim" | "kurta-red-trim" | "pheran" | "saree" | "lehenga";

type ShoulderCloth = "none" | "angavastram" | "gamuchha" | "uttariyam";

type HairStyle = "short" | "side-part" | "wavy" | "bun";

type Look = {
  headwear: Headwear;
  body: BodyKind;
  shoulderCloth: ShoulderCloth;
  hasMustache: boolean;
  hasBeard: boolean;
  hairStyle: HairStyle;
  hairColor: string;
  skinTone: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
};

const LOOKS: Record<string, Look> = {
  punjab: {
    headwear: "punjab-pagri",
    body: "kurta",
    shoulderCloth: "none",
    hasMustache: false,
    hasBeard: false,
    hairStyle: "short",
    hairColor: "#1f2937",
    skinTone: "#e8b88a",
    primaryColor: "#1e3a8a",
    secondaryColor: "#fef9c3",
    accentColor: "#fbbf24",
  },
  rajasthan: {
    headwear: "rajasthan-pagri",
    body: "kurta",
    shoulderCloth: "none",
    hasMustache: true,
    hasBeard: false,
    hairStyle: "short",
    hairColor: "#0f172a",
    skinTone: "#dba07a",
    primaryColor: "#c2410c",
    secondaryColor: "#fef3c7",
    accentColor: "#fde68a",
  },
  maharashtra: {
    headwear: "pheta",
    body: "kurta",
    shoulderCloth: "none",
    hasMustache: false,
    hasBeard: false,
    hairStyle: "side-part",
    hairColor: "#1f2937",
    skinTone: "#e8b88a",
    primaryColor: "#fef9c3",
    secondaryColor: "#f8fafc",
    accentColor: "#dc2626",
  },
  gujarat: {
    headwear: "gujarat-pagri",
    body: "kurta",
    shoulderCloth: "none",
    hasMustache: false,
    hasBeard: false,
    hairStyle: "short",
    hairColor: "#0f172a",
    skinTone: "#f0c69b",
    primaryColor: "#fde047",
    secondaryColor: "#f8fafc",
    accentColor: "#dc2626",
  },
  bengal: {
    headwear: "none",
    body: "kurta-red-trim",
    shoulderCloth: "none",
    hasMustache: false,
    hasBeard: false,
    hairStyle: "side-part",
    hairColor: "#1c1917",
    skinTone: "#e8b88a",
    primaryColor: "#f8fafc",
    secondaryColor: "#f8fafc",
    accentColor: "#dc2626",
  },
  "tamil-nadu": {
    headwear: "none",
    body: "kurta",
    shoulderCloth: "angavastram",
    hasMustache: true,
    hasBeard: false,
    hairStyle: "wavy",
    hairColor: "#1c1917",
    skinTone: "#dba07a",
    primaryColor: "#fef3c7",
    secondaryColor: "#f8fafc",
    accentColor: "#fbbf24",
  },
  kerala: {
    headwear: "none",
    body: "kurta-gold-trim",
    shoulderCloth: "none",
    hasMustache: false,
    hasBeard: false,
    hairStyle: "short",
    hairColor: "#0f172a",
    skinTone: "#dba07a",
    primaryColor: "#f8fafc",
    secondaryColor: "#f8fafc",
    accentColor: "#d97706",
  },
  assam: {
    headwear: "japi",
    body: "kurta",
    shoulderCloth: "gamuchha",
    hasMustache: false,
    hasBeard: false,
    hairStyle: "short",
    hairColor: "#1c1917",
    skinTone: "#e8b88a",
    primaryColor: "#a16207",
    secondaryColor: "#f8fafc",
    accentColor: "#dc2626",
  },
  karnataka: {
    headwear: "peta",
    body: "kurta",
    shoulderCloth: "none",
    hasMustache: false,
    hasBeard: false,
    hairStyle: "short",
    hairColor: "#0f172a",
    skinTone: "#dba07a",
    primaryColor: "#ca8a04",
    secondaryColor: "#f8fafc",
    accentColor: "#dc2626",
  },
  odisha: {
    headwear: "none",
    body: "kurta",
    shoulderCloth: "gamuchha",
    hasMustache: false,
    hasBeard: false,
    hairStyle: "short",
    hairColor: "#1f2937",
    skinTone: "#e8b88a",
    primaryColor: "#fef9c3",
    secondaryColor: "#f8fafc",
    accentColor: "#0f172a",
  },
  kashmir: {
    headwear: "kashmir-cap",
    body: "pheran",
    shoulderCloth: "none",
    hasMustache: false,
    hasBeard: true,
    hairStyle: "short",
    hairColor: "#1c1917",
    skinTone: "#f0c69b",
    primaryColor: "#7c2d12",
    secondaryColor: "#fef3c7",
    accentColor: "#fde68a",
  },
  andhra: {
    headwear: "none",
    body: "kurta-gold-trim",
    shoulderCloth: "uttariyam",
    hasMustache: true,
    hasBeard: false,
    hairStyle: "side-part",
    hairColor: "#0f172a",
    skinTone: "#dba07a",
    primaryColor: "#fef3c7",
    secondaryColor: "#f8fafc",
    accentColor: "#d97706",
  },
  saree: {
    headwear: "none",
    body: "saree",
    shoulderCloth: "none",
    hasMustache: false,
    hasBeard: false,
    hairStyle: "bun",
    hairColor: "#1c1917",
    skinTone: "#e8b88a",
    primaryColor: "#be185d",
    secondaryColor: "#be185d",
    accentColor: "#fbbf24",
  },
  lehenga: {
    headwear: "odhni",
    body: "lehenga",
    shoulderCloth: "none",
    hasMustache: false,
    hasBeard: false,
    hairStyle: "bun",
    hairColor: "#1c1917",
    skinTone: "#e8b88a",
    primaryColor: "#dc2626",
    secondaryColor: "#dc2626",
    accentColor: "#fbbf24",
  },
};

function pickLook(style: string): Look {
  return LOOKS[style] ?? LOOKS.punjab;
}

export default function DancingAvatar({ style, color, dance, size = 140, mode = "idle", delayMs = 0 }: Props) {
  const look = pickLook(style);
  const wrapperAnim =
    mode === "dance"
      ? dance === "idle-sway"
        ? "animate-dance-step"
        : "animate-dance-bounce"
      : dance === "idle-sway"
        ? "animate-idle-sway"
        : "animate-idle-bob";
  const scarfAnim = mode === "dance" ? "animate-scarf-dance" : "animate-scarf-drift";
  const kurta = color || look.primaryColor;
  const trim =
    look.body === "kurta-gold-trim"
      ? "#d97706"
      : look.body === "kurta-red-trim"
        ? "#dc2626"
        : look.accentColor;
  const isPheran = look.body === "pheran";
  const isSaree = look.body === "saree";
  const isLehenga = look.body === "lehenga";

  return (
    <div
      className="relative inline-block select-none"
      style={{ width: size, height: size * 1.5 }}
      aria-label="stylized illustration of a professor in traditional Indian attire"
    >
      <div
        className={`w-full h-full ${wrapperAnim} origin-bottom`}
        style={delayMs ? { animationDelay: `${delayMs}ms` } : undefined}
      >
        <svg viewBox="0 0 100 150" width="100%" height="100%">
          {/* legs / dhoti / pajama / saree skirt / lehenga */}
          {isSaree ? (
            <g>
              {/* pleated saree drape — starts at waist */}
              <path d="M 30 98 L 22 138 L 78 138 L 70 98 Z" fill={kurta} />
              {[34, 42, 50, 58, 66].map((x, i) => (
                <line key={i} x1={x} y1="104" x2={x - 2 + i * 0.6} y2="138" stroke={trim} strokeWidth="0.5" opacity="0.6" />
              ))}
              {/* hem border */}
              <rect x="22" y="133" width="56" height="5" fill={trim} />
              <rect x="22" y="133" width="56" height="1" fill="#fff" opacity="0.6" />
              {/* center pleat fan */}
              <path d="M 50 98 L 46 138 L 54 138 Z" fill={trim} opacity="0.5" />
              {/* waist band */}
              <rect x="30" y="98" width="40" height="2" fill={trim} opacity="0.7" />
            </g>
          ) : isLehenga ? (
            <g>
              {/* flared lehenga ghagra — starts at waist */}
              <path d="M 32 98 L 18 138 L 82 138 L 68 98 Z" fill={kurta} />
              {/* waist band */}
              <rect x="32" y="98" width="36" height="2" fill={trim} opacity="0.8" />
              {/* embroidery dots */}
              <g fill={trim}>
                <circle cx="28" cy="118" r="0.9" />
                <circle cx="38" cy="124" r="0.9" />
                <circle cx="48" cy="120" r="0.9" />
                <circle cx="58" cy="124" r="0.9" />
                <circle cx="70" cy="118" r="0.9" />
                <circle cx="33" cy="128" r="0.9" />
                <circle cx="50" cy="130" r="0.9" />
                <circle cx="67" cy="128" r="0.9" />
              </g>
              {/* mirror work highlights */}
              <g fill="#fff" opacity="0.85">
                <circle cx="36" cy="115" r="0.5" />
                <circle cx="50" cy="118" r="0.5" />
                <circle cx="64" cy="115" r="0.5" />
              </g>
              {/* gold border at hem */}
              <rect x="18" y="133" width="64" height="5" fill={trim} />
              <line x1="18" y1="135" x2="82" y2="135" stroke="#fff" strokeWidth="0.4" opacity="0.7" />
            </g>
          ) : (
            <g>
              <path
                d="M 38 108 Q 36 130 34 138 L 44 138 Q 45 125 46 110 Z"
                fill={look.secondaryColor}
                stroke="#cbd5e1"
                strokeWidth="0.5"
              />
              <path
                d="M 62 108 Q 64 130 66 138 L 56 138 Q 55 125 54 110 Z"
                fill={look.secondaryColor}
                stroke="#cbd5e1"
                strokeWidth="0.5"
              />
              {(look.body === "kurta-gold-trim" || look.body === "kurta-red-trim") && (
                <>
                  <rect x="34" y="135" width="11" height="3" fill={trim} />
                  <rect x="55" y="135" width="11" height="3" fill={trim} />
                </>
              )}
              <ellipse cx="38" cy="140" rx="7" ry="2.5" fill="#451a03" />
              <ellipse cx="62" cy="140" rx="7" ry="2.5" fill="#451a03" />
            </g>
          )}

          {/* midriff skin patch — between blouse/choli and saree/lehenga skirt */}
          {(isSaree || isLehenga) && (
            <rect x="34" y="86" width="32" height="14" fill={look.skinTone} />
          )}

          {/* body */}
          <g className="origin-bottom animate-idle-breathe">
            <path
              d={
                isPheran
                  ? "M 28 70 Q 26 80 28 92 L 24 120 Q 50 124 76 120 L 72 92 Q 74 80 72 70 Z"
                  : isSaree
                    ? "M 30 70 Q 28 76 30 84 L 32 88 Q 50 90 68 88 L 70 84 Q 72 76 70 70 Z"
                    : isLehenga
                      ? "M 32 70 Q 30 76 32 84 L 32 88 Q 50 90 68 88 L 68 84 Q 70 76 68 70 Z"
                      : "M 30 70 Q 28 78 30 90 L 28 112 Q 50 116 72 112 L 70 90 Q 72 78 70 70 Z"
              }
              fill={kurta}
            />
            {/* placket — hidden for saree/lehenga */}
            {!isSaree && !isLehenga && (
              <>
                <path d="M 47 68 L 50 78 L 53 68 Z" fill="rgba(0,0,0,0.18)" />
                <line x1="50" y1="78" x2="50" y2={isPheran ? "118" : "100"} stroke="rgba(0,0,0,0.25)" strokeWidth="0.6" />
                <circle cx="50" cy="84" r="0.9" fill={trim} />
                <circle cx="50" cy="90" r="0.9" fill={trim} />
                <circle cx="50" cy="96" r="0.9" fill={trim} />
              </>
            )}
            {/* lehenga choli — embroidery on short top */}
            {isLehenga && (
              <g fill={trim}>
                <circle cx="42" cy="76" r="0.7" />
                <circle cx="50" cy="74" r="0.7" />
                <circle cx="58" cy="76" r="0.7" />
                <circle cx="46" cy="84" r="0.7" />
                <circle cx="54" cy="84" r="0.7" />
                <line x1="32" y1="86" x2="68" y2="86" stroke={trim} strokeWidth="0.8" />
              </g>
            )}
            {/* saree blouse trim */}
            {isSaree && (
              <line x1="30" y1="86" x2="70" y2="86" stroke={trim} strokeWidth="0.8" />
            )}
            {/* hem trim */}
            {look.body === "kurta-gold-trim" && (
              <>
                <path d="M 28 110 Q 50 114 72 110" stroke="#d97706" strokeWidth="2" fill="none" />
                <path d="M 28 113 Q 50 117 72 113" stroke="#fbbf24" strokeWidth="0.8" fill="none" />
              </>
            )}
            {look.body === "kurta-red-trim" && (
              <path d="M 28 110 Q 50 114 72 110" stroke="#dc2626" strokeWidth="2.5" fill="none" />
            )}
            {look.body === "kurta" && (
              <path d="M 28 110 Q 50 114 72 110" stroke={trim} strokeWidth="1" fill="none" opacity="0.7" />
            )}
            {/* pheran paisley accents (Kashmir) */}
            {isPheran && (
              <g opacity="0.6">
                <circle cx="38" cy="100" r="1.5" fill={look.accentColor} />
                <circle cx="62" cy="100" r="1.5" fill={look.accentColor} />
                <circle cx="34" cy="115" r="1.2" fill={look.accentColor} />
                <circle cx="66" cy="115" r="1.2" fill={look.accentColor} />
              </g>
            )}
            {/* sleeve cuffs */}
            <rect x="22" y="92" width="10" height="4" fill={trim} opacity="0.8" rx="1" />
            <rect x="68" y="92" width="10" height="4" fill={trim} opacity="0.8" rx="1" />
          </g>

          {/* arms */}
          <g>
            <path d="M 30 72 Q 22 80 24 96 L 32 96 Q 32 84 36 76 Z" fill={kurta} />
            <path d="M 70 72 Q 78 80 76 96 L 68 96 Q 68 84 64 76 Z" fill={kurta} />
            <ellipse cx="27" cy="100" rx="4" ry="3.5" fill={look.skinTone} />
            <ellipse cx="73" cy="100" rx="4" ry="3.5" fill={look.skinTone} />
          </g>

          {/* angavastram — diagonal sash */}
          {look.shoulderCloth === "angavastram" && (
            <g className={`${scarfAnim} origin-top`}>
              <path d="M 28 70 L 32 68 L 76 110 L 72 112 Z" fill={look.accentColor} opacity="0.85" />
              <path d="M 28 70 L 32 68 L 76 110 L 72 112 Z" fill="none" stroke="#fbbf24" strokeWidth="0.6" />
            </g>
          )}

          {/* gamuchha — striped scarf draped over shoulder */}
          {look.shoulderCloth === "gamuchha" && (
            <g className={`${scarfAnim} origin-top`}>
              <path d="M 36 68 L 64 68 L 62 92 L 38 92 Z" fill="#f8fafc" />
              <line x1="36" y1="74" x2="64" y2="74" stroke="#dc2626" strokeWidth="2" />
              <line x1="36" y1="84" x2="64" y2="84" stroke="#dc2626" strokeWidth="1" />
              <line x1="36" y1="88" x2="64" y2="88" stroke="#0f172a" strokeWidth="0.8" />
            </g>
          )}

          {/* uttariyam — wide stole over both shoulders (Andhra) */}
          {look.shoulderCloth === "uttariyam" && (
            <g className={`${scarfAnim} origin-top`}>
              {/* drape behind neck across shoulders */}
              <path d="M 26 70 Q 50 66 74 70 L 74 80 Q 50 76 26 80 Z" fill="#fef3c7" opacity="0.95" />
              {/* gold borders */}
              <path d="M 26 70 Q 50 66 74 70" stroke={look.accentColor} strokeWidth="1.2" fill="none" />
              <path d="M 26 80 Q 50 76 74 80" stroke={look.accentColor} strokeWidth="0.8" fill="none" />
              {/* hanging panels — both sides */}
              <rect x="26" y="78" width="6" height="28" fill="#fef3c7" />
              <rect x="68" y="78" width="6" height="28" fill="#fef3c7" />
              {/* fringe at bottom */}
              <rect x="26" y="104" width="6" height="2" fill={look.accentColor} />
              <rect x="68" y="104" width="6" height="2" fill={look.accentColor} />
            </g>
          )}

          {/* saree pallu — diagonal drape from left shoulder across to right hip */}
          {isSaree && (
            <g className={`${scarfAnim} origin-top`}>
              {/* main diagonal drape */}
              <path d="M 28 72 L 38 68 L 78 100 L 72 110 Z" fill={kurta} opacity="0.95" />
              {/* gold borders along edges */}
              <line x1="28" y1="72" x2="72" y2="110" stroke={trim} strokeWidth="0.8" />
              <line x1="38" y1="68" x2="78" y2="100" stroke={trim} strokeWidth="0.8" />
              {/* pallu hanging tail down right side */}
              <path d="M 74 100 Q 80 116 78 130 L 70 128 Q 72 114 70 104 Z" fill={kurta} opacity="0.95" />
              <rect x="70" y="126" width="9" height="3" fill={trim} />
              {/* pattern dots on the drape */}
              <g fill={trim} opacity="0.85">
                <circle cx="42" cy="78" r="0.6" />
                <circle cx="52" cy="86" r="0.6" />
                <circle cx="62" cy="94" r="0.6" />
                <circle cx="72" cy="102" r="0.6" />
                <circle cx="74" cy="118" r="0.5" />
                <circle cx="74" cy="124" r="0.5" />
              </g>
            </g>
          )}

          {/* head */}
          <g style={{ transformOrigin: "50px 55px" }} className="animate-idle-bob">
            {/* neck */}
            <rect x="46" y="62" width="8" height="9" fill={look.skinTone} />
            <rect x="46" y="68" width="8" height="3" fill="rgba(0,0,0,0.15)" />

            {/* face */}
            <ellipse cx="50" cy="44" rx="20" ry="22" fill={look.skinTone} />

            {/* hair (visible when headwear doesn't cover the head) */}
            {look.headwear === "none" && (
              <>
                {look.hairStyle === "short" && (
                  <path
                    d="M 30 38 Q 30 22 50 22 Q 70 22 70 38 Q 68 30 50 30 Q 32 30 30 38 Z"
                    fill={look.hairColor}
                  />
                )}
                {look.hairStyle === "side-part" && (
                  <path
                    d="M 30 36 Q 30 22 50 22 Q 72 22 72 38 Q 60 28 50 32 L 44 26 Q 36 28 30 36 Z"
                    fill={look.hairColor}
                  />
                )}
                {look.hairStyle === "wavy" && (
                  <path
                    d="M 28 38 Q 30 20 50 22 Q 70 20 72 38 Q 68 32 64 38 Q 60 30 56 38 Q 52 30 48 38 Q 44 30 40 38 Q 36 30 32 38 Z"
                    fill={look.hairColor}
                  />
                )}
                {look.hairStyle === "bun" && (
                  <g>
                    <path
                      d="M 30 38 Q 30 22 50 22 Q 70 22 70 38 Q 64 30 50 30 Q 36 30 30 38 Z"
                      fill={look.hairColor}
                    />
                    <circle cx="50" cy="20" r="6" fill={look.hairColor} />
                  </g>
                )}
              </>
            )}

            {/* HEADWEAR */}
            {look.headwear === "punjab-pagri" && (
              <g>
                <path
                  d="M 26 32 Q 26 12 50 10 Q 74 12 74 32 Q 74 38 70 40 L 30 40 Q 26 38 26 32 Z"
                  fill="#f8fafc"
                />
                <path d="M 28 22 Q 50 14 72 22" stroke="#e2e8f0" strokeWidth="0.8" fill="none" />
                <path d="M 30 30 Q 50 26 70 30" stroke="rgba(0,0,0,0.15)" strokeWidth="0.6" fill="none" />
                <circle cx="50" cy="22" r="2.4" fill={look.accentColor} />
                <path d="M 70 32 Q 78 36 74 44" stroke="#f8fafc" strokeWidth="2" fill="none" />
              </g>
            )}

            {look.headwear === "rajasthan-pagri" && (
              <g>
                <path
                  d="M 22 36 Q 22 14 50 12 Q 78 14 78 36 Q 78 40 76 42 L 24 42 Q 22 40 22 36 Z"
                  fill="#ea580c"
                />
                <path d="M 22 24 Q 50 16 78 24" stroke="#fde68a" strokeWidth="1.6" fill="none" />
                <path d="M 22 32 Q 50 26 78 32" stroke="#7c2d12" strokeWidth="0.8" fill="none" />
                {/* rosette */}
                <circle cx="32" cy="22" r="3" fill="#fde68a" />
                <circle cx="32" cy="22" r="1.5" fill="#dc2626" />
                {/* tail */}
                <path d="M 78 28 Q 88 36 84 50 L 78 48 Q 80 38 76 32 Z" fill="#ea580c" />
                <path d="M 80 44 L 84 50" stroke="#fde68a" strokeWidth="0.6" />
              </g>
            )}

            {look.headwear === "pheta" && (
              <g>
                <path
                  d="M 26 36 Q 30 18 52 18 Q 70 22 74 32 Q 76 38 72 40 L 28 40 Q 24 38 26 36 Z"
                  fill="#dc2626"
                />
                <path d="M 30 26 Q 50 20 70 28" stroke="#fef2f2" strokeWidth="0.8" fill="none" />
                {/* peak fold */}
                <path d="M 60 22 Q 68 16 74 22 L 70 28 Z" fill="#b91c1c" />
                {/* gold band */}
                <path d="M 28 38 Q 50 36 72 38" stroke={look.accentColor} strokeWidth="1.4" fill="none" />
              </g>
            )}

            {look.headwear === "gujarat-pagri" && (
              <g>
                <path
                  d="M 26 36 Q 26 14 50 12 Q 74 14 74 36 Q 74 40 72 42 L 28 42 Q 26 40 26 36 Z"
                  fill="#dc2626"
                />
                {/* bandhani dots */}
                <g fill="#fde68a">
                  {[
                    [30, 22],
                    [38, 18],
                    [46, 16],
                    [54, 16],
                    [62, 18],
                    [70, 22],
                    [34, 30],
                    [42, 26],
                    [50, 24],
                    [58, 26],
                    [66, 30],
                  ].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="0.9" />
                  ))}
                </g>
                {/* central pom-pom */}
                <circle cx="50" cy="14" r="3.2" fill="#fde68a" />
                <circle cx="50" cy="14" r="1.4" fill="#dc2626" />
              </g>
            )}

            {look.headwear === "japi" && (
              <g>
                {/* conical bamboo hat */}
                <path d="M 18 32 L 50 6 L 82 32 L 78 36 L 22 36 Z" fill="#d4a574" />
                <path d="M 18 32 L 50 6 L 82 32" stroke="#92400e" strokeWidth="0.7" fill="none" />
                {/* weave lines */}
                <path d="M 26 28 Q 50 16 74 28" stroke="#92400e" strokeWidth="0.5" fill="none" />
                <path d="M 30 24 Q 50 12 70 24" stroke="#92400e" strokeWidth="0.5" fill="none" />
                {/* red decorative tassel */}
                <circle cx="50" cy="6" r="2" fill="#dc2626" />
                <line x1="50" y1="8" x2="50" y2="14" stroke="#dc2626" strokeWidth="1" />
              </g>
            )}

            {look.headwear === "peta" && (
              <g>
                {/* tall turban */}
                <path
                  d="M 28 36 Q 28 8 50 6 Q 72 8 72 36 Q 72 40 70 42 L 30 42 Q 28 40 28 36 Z"
                  fill="#dc2626"
                />
                {/* white wrap stripes */}
                <path d="M 30 12 Q 50 6 70 12" stroke="#f8fafc" strokeWidth="2" fill="none" />
                <path d="M 30 22 Q 50 16 70 22" stroke="#f8fafc" strokeWidth="1.5" fill="none" />
                <path d="M 30 32 Q 50 26 70 32" stroke="#f8fafc" strokeWidth="1.2" fill="none" />
                {/* central crest */}
                <path d="M 46 6 L 50 0 L 54 6" stroke={look.accentColor} strokeWidth="1.6" fill="none" />
                <circle cx="50" cy="2" r="1.6" fill={look.accentColor} />
              </g>
            )}

            {look.headwear === "kashmir-cap" && (
              <g>
                {/* embroidered skullcap */}
                <path
                  d="M 32 30 Q 32 18 50 18 Q 68 18 68 30 Q 68 32 66 32 L 34 32 Q 32 32 32 30 Z"
                  fill="#1c1917"
                />
                {/* gold paisley embroidery */}
                <g fill={look.accentColor} opacity="0.9">
                  <circle cx="40" cy="26" r="0.8" />
                  <circle cx="50" cy="22" r="0.8" />
                  <circle cx="60" cy="26" r="0.8" />
                  <path d="M 38 28 Q 40 25 42 28" stroke={look.accentColor} strokeWidth="0.5" fill="none" />
                  <path d="M 58 28 Q 60 25 62 28" stroke={look.accentColor} strokeWidth="0.5" fill="none" />
                </g>
              </g>
            )}

            {/* odhni — dupatta veil over head (lehenga) */}
            {look.headwear === "odhni" && (
              <>
                {/* visible long braid hanging from under odhni down the side */}
                <path d="M 70 40 Q 76 50 78 64 Q 80 76 76 84 L 72 84 Q 74 76 72 64 Q 70 52 66 42 Z" fill={look.hairColor} />
                <circle cx="74" cy="84" r="1.6" fill={look.accentColor} />
                <g className={`${scarfAnim} origin-top`}>
                  <path
                    d="M 24 36 Q 24 14 50 12 Q 76 14 76 36 Q 76 38 74 40 L 26 40 Q 24 38 24 36 Z"
                    fill={look.accentColor}
                    opacity="0.95"
                  />
                  <path d="M 26 22 Q 50 14 74 22" stroke="#fff" strokeWidth="0.6" fill="none" opacity="0.6" />
                  {/* gold border at hairline */}
                  <path d="M 26 38 Q 50 36 74 38" stroke="#d97706" strokeWidth="1.2" fill="none" />
                  {/* embroidered dots */}
                  <g fill="#d97706">
                    <circle cx="34" cy="26" r="0.8" />
                    <circle cx="42" cy="22" r="0.8" />
                    <circle cx="50" cy="20" r="0.8" />
                    <circle cx="58" cy="22" r="0.8" />
                    <circle cx="66" cy="26" r="0.8" />
                  </g>
                </g>
              </>
            )}

            {/* bindi — for saree and lehenga */}
            {(isSaree || isLehenga) && (
              <circle cx="50" cy="36" r="1.5" fill="#dc2626" />
            )}

            {/* earrings — small accent for saree/lehenga */}
            {(isSaree || isLehenga) && (
              <>
                <circle cx="30" cy="48" r="1.4" fill={look.accentColor} />
                <circle cx="70" cy="48" r="1.4" fill={look.accentColor} />
              </>
            )}

            {/* anime eyes */}
            <g className="animate-blink" style={{ transformOrigin: "50px 47px" }}>
              <ellipse cx="42" cy="47" rx="3.2" ry="5" fill="white" />
              <ellipse cx="58" cy="47" rx="3.2" ry="5" fill="white" />
              <ellipse cx="42" cy="48" rx="2.4" ry="4" fill="#0f172a" />
              <ellipse cx="58" cy="48" rx="2.4" ry="4" fill="#0f172a" />
              <circle cx="43" cy="46" r="1" fill="white" />
              <circle cx="59" cy="46" r="1" fill="white" />
              <circle cx="41" cy="50" r="0.6" fill="white" opacity="0.7" />
              <circle cx="57" cy="50" r="0.6" fill="white" opacity="0.7" />
            </g>

            {/* eyebrows */}
            <path d="M 38 41 Q 42 39 46 41" stroke={look.hairColor} strokeWidth="1.2" fill="none" strokeLinecap="round" />
            <path d="M 54 41 Q 58 39 62 41" stroke={look.hairColor} strokeWidth="1.2" fill="none" strokeLinecap="round" />

            {/* nose */}
            <path d="M 50 50 Q 49 53 51 54" stroke="rgba(0,0,0,0.25)" strokeWidth="0.8" fill="none" strokeLinecap="round" />

            {/* mustache */}
            {look.hasMustache && (
              <path
                d="M 42 56 Q 46 58 50 57 Q 54 58 58 56 Q 54 54 50 55 Q 46 54 42 56 Z"
                fill={look.hairColor}
              />
            )}

            {/* mouth */}
            <path
              d={look.hasMustache ? "M 47 60 Q 50 61 53 60" : "M 47 58 Q 50 60 53 58"}
              stroke="#7f1d1d"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
            />

            {/* beard */}
            {look.hasBeard && (
              <path
                d="M 36 56 Q 50 70 64 56 Q 60 66 50 68 Q 40 66 36 56 Z"
                fill={look.hairColor}
                opacity="0.85"
              />
            )}
          </g>
        </svg>
      </div>
    </div>
  );
}
