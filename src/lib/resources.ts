export type PlaceKind =
  | "synagogue"
  | "jcc"
  | "federation"
  | "museum"
  | "kosher"
  | "mikveh"
  | "chabad"
  | "aid"
  | "safety"
  | "directory"
  | "health";

export type Resource = {
  id: string;
  name: string;
  blurb: string;
  href: string;
  phone?: string;
  kind?: PlaceKind;
};

export const EMERGENCY: Resource = {
  id: "911",
  name: "Emergency",
  blurb: "If this is a genuine emergency and someone is in danger, call 911.",
  href: "tel:911",
  phone: "911",
  kind: "safety",
};

export const REPORT: Resource[] = [
  {
    id: "cja",
    name: "Chicago Jewish Alliance",
    blurb: "Report Jew-hate locally. They document and respond to incidents in schools, on campus, and across Chicagoland.",
    href: "https://chicago.jewishalliance.com/initiatives/incident-response",
    phone: "847-231-2180",
    kind: "safety",
  },
  {
    id: "adl",
    name: "ADL incident report",
    blurb: "Report antisemitism, extremism, or bias. Used in the national audit.",
    href: "https://www.adl.org/report-incident",
    kind: "safety",
  },
  {
    id: "scn",
    name: "Secure Community Network",
    blurb: "The official security desk for North American Jewish institutions.",
    href: "https://securecommunitynetwork.org/incidentreporting/",
    kind: "safety",
  },
  {
    id: "fbi",
    name: "FBI tips",
    blurb: "Report a hate crime. You may remain anonymous.",
    href: "https://tips.fbi.gov/",
    phone: "1-800-225-5324",
    kind: "safety",
  },
  {
    id: "doj",
    name: "U.S. Department of Justice",
    blurb: "How to report a hate crime, and what counts as one.",
    href: "https://www.justice.gov/hatecrimes/report-a-hate-crime",
    kind: "safety",
  },
];

export const NATIONAL: Resource[] = [
  {
    id: "adl-home",
    name: "Anti-Defamation League",
    blurb: "Tracking, education, and legal work against antisemitism.",
    href: "https://www.adl.org/",
    kind: "safety",
  },
  {
    id: "scn-home",
    name: "Secure Community Network",
    blurb: "Training, threat monitoring, and institutional security.",
    href: "https://www.securecommunitynetwork.org/",
    kind: "safety",
  },
  {
    id: "federations",
    name: "Find your federation",
    blurb: "Local Jewish community, emergency aid, and synagogues near you.",
    href: "https://www.jewishfederations.org/find-your-federation",
    kind: "federation",
  },
  {
    id: "hillel",
    name: "Hillel International",
    blurb: "Campus community, and a place to start if school does not feel safe.",
    href: "https://www.hillel.org/",
    kind: "directory",
  },
  {
    id: "chabad",
    name: "Find a Chabad",
    blurb: "Shabbat tables and open doors in hundreds of cities.",
    href: "https://www.chabad.org/centers",
    kind: "chabad",
  },
  {
    id: "jcca",
    name: "Find a JCC",
    blurb: "Jewish community centers across North America.",
    href: "https://www.jcca.org/",
    kind: "jcc",
  },
  {
    id: "mikvah-org",
    name: "Find a mikvah",
    blurb: "Public directory of mikvaot. Confirm hours with the site before you go.",
    href: "https://www.mikvah.org/directory",
    kind: "mikveh",
  },
  {
    id: "blue-dove",
    name: "The Blue Dove Foundation",
    blurb: "Jewish mental health resources. You do not have to hold this alone.",
    href: "https://thebluedovefoundation.org/",
    kind: "health",
  },
  {
    id: "urj",
    name: "Find a Reform congregation",
    blurb: "Union for Reform Judaism. Search by city.",
    href: "https://reformjudaism.org/congregations",
    kind: "synagogue",
  },
  {
    id: "uscj",
    name: "Find a Conservative congregation",
    blurb: "United Synagogue of Conservative Judaism.",
    href: "https://uscj.org/",
    kind: "synagogue",
  },
];

export const CHICAGO: Resource[] = [
  {
    id: "cja-home",
    name: "Chicago Jewish Alliance",
    blurb: "Skokie-based. Report antisemitism and get local response.",
    href: "https://chicago.jewishalliance.com/initiatives/incident-response",
    phone: "847-231-2180",
    kind: "safety",
  },
  {
    id: "juf",
    name: "Jewish United Fund",
    blurb: "Chicago’s federation. Community, crisis help, and Israel support.",
    href: "https://www.juf.org/",
    kind: "federation",
  },
  {
    id: "jcrc",
    name: "JCRC Chicago",
    blurb: "Community relations, advocacy, and response to antisemitism.",
    href: "https://www.juf.org/our-impact/civic-engagement/jewish-community-relations-council/",
    kind: "safety",
  },
  {
    id: "ark",
    name: "The Ark",
    blurb: "Food, medical care, and help for Chicagoland Jews facing hardship. Free and confidential.",
    href: "https://arkchicago.org/",
    phone: "773-973-1000",
    kind: "aid",
  },
  {
    id: "museum",
    name: "Illinois Holocaust Museum",
    blurb: "In Skokie. Memory, education, and a public stand against hate.",
    href: "https://www.ilholocaustmuseum.org/",
    kind: "museum",
  },
  {
    id: "jcfs",
    name: "JCFS Chicago",
    blurb: "Counseling, family services, and disability support.",
    href: "https://www.jcfs.org/",
    kind: "health",
  },
  {
    id: "jcc-chicago",
    name: "JCC Chicago",
    blurb: "Community centers, camp, fitness, and Jewish life across Chicagoland.",
    href: "https://jccchicago.org/",
    kind: "jcc",
  },
  {
    id: "crc",
    name: "cRc kosher establishments",
    blurb: "Chicago Rabbinical Council list of kosher restaurants and stores.",
    href: "https://consumer.crckosher.org/kosher-establishments/",
    phone: "773-465-3900",
    kind: "kosher",
  },
  {
    id: "juf-guide",
    name: "JUF Guide to Jewish Living",
    blurb: "Directory of congregations, mikvaot, and organizations in Chicago.",
    href: "https://www.juf.org/guide/",
    kind: "directory",
  },
  {
    id: "skokie-pd",
    name: "Skokie Police",
    blurb: "Local non-emergency reporting for incidents in Skokie.",
    href: "https://www.skokie.org/212/Police-Department",
    kind: "safety",
  },
];

export const SYNAGOGUES: Resource[] = [
  {
    id: "anshe-emet",
    name: "Anshe Emet Synagogue",
    blurb: "Conservative. Lakeview.",
    href: "https://www.ansheemet.org/",
    kind: "synagogue",
  },
  {
    id: "tbi",
    name: "Temple Beth Israel",
    blurb: "Reform. Skokie.",
    href: "https://tbiskokie.org/",
    phone: "847-675-0951",
    kind: "synagogue",
  },
  {
    id: "beth-emet",
    name: "Beth Emet the Free Synagogue",
    blurb: "Reform. Evanston.",
    href: "https://bethemet.org/",
    phone: "847-869-4230",
    kind: "synagogue",
  },
  {
    id: "sinai",
    name: "Chicago Sinai Congregation",
    blurb: "Reform. Near North Side.",
    href: "https://chicagosinai.org/",
    phone: "312-867-7000",
    kind: "synagogue",
  },
  {
    id: "sholom",
    name: "Temple Sholom of Chicago",
    blurb: "Reform. Lakeview.",
    href: "https://www.sholomchicago.org/",
    kind: "synagogue",
  },
  {
    id: "emanuel",
    name: "Emanuel Congregation",
    blurb: "Reform. Edgewater.",
    href: "https://www.emanuelcong.org/",
    kind: "synagogue",
  },
  {
    id: "ehnt",
    name: "Ezra-Habonim, Niles Township Jewish Congregation",
    blurb: "Conservative. Skokie.",
    href: "https://www.ehnt.org/",
    phone: "847-675-4141",
    kind: "synagogue",
  },
  {
    id: "kol-emeth",
    name: "Congregation Kol Emeth",
    blurb: "Conservative. Skokie.",
    href: "https://www.kolemethskokie.org/",
    phone: "847-673-3370",
    kind: "synagogue",
  },
];

export const MIKVAOT: Resource[] = [
  {
    id: "community-mikvah",
    name: "Community Mikvah of the Conservative Movement",
    blurb: "Wilmette. Public community mikvah. Call before you go.",
    href: "http://www.communitymikvahwilmette.org/",
    phone: "847-256-4699",
    kind: "mikveh",
  },
  {
    id: "chicago-mikvah",
    name: "Chicago Mikvah Association",
    blurb: "Directory and guidance for mikvaot in Chicago.",
    href: "https://www.chicagomikvah.com/",
    kind: "mikveh",
  },
];

export function allResources(): Resource[] {
  const map = new Map<string, Resource>();
  for (const r of [...REPORT, ...NATIONAL, ...CHICAGO, ...SYNAGOGUES, ...MIKVAOT, EMERGENCY]) {
    map.set(r.id, r);
  }
  return [...map.values()];
}

export function resourceById(id: string): Resource | undefined {
  return allResources().find((r) => r.id === id);
}
