type CircuitShortName =
    | "Sakhir"
    | "Jeddah"
    | "Melbourne"
    | "Suzuka"
    | "Shanghai"
    | "Imola"
    | "Monaco"
    | "Barcelona"
    | "Spielberg"
    | "Silverstone"
    | "Budapest"
    | "Spa"
    | "Zandvoort"
    | "Monza"
    | "Baku"
    | "Montreal"
    | "Miami"
    | "Austin"
    | "Mexico City"
    | "São Paulo"
    | "Las Vegas"
    | "Singapore"
    | "Lusail"
    | "Abu Dhabi"
    | "Bahrain";

export const circuitMap: Record<string, string> = {
    // Middle East
    "Sakhir": "bh-2002",
    "Bahrain": "bh-2002",
    "Jeddah": "sa-2021",
    "Lusail": "qa-2004",
    "Abu Dhabi": "ae-2009",
    "Yas Marina": "ae-2009",

    // Europe
    "Melbourne": "au-1953",
    "Suzuka": "jp-1962",
    "Shanghai": "cn-2004",
    "Imola": "it-1953",
    "Monaco": "mc-1929",
    "Barcelona": "es-1991",
    "Spielberg": "at-1969",
    "Silverstone": "gb-1948",
    "Budapest": "hu-1986",
    "Spa": "be-1925",
    "Spa-Francorchamps": "be-1925",
    "Zandvoort": "nl-1948",
    "Monza": "it-1922",
    "Baku": "az-2016",

    // Americas
    "Montreal": "ca-1978",
    "Miami": "us-2022",
    "Austin": "us-2012",
    "Mexico City": "mx-1962",
    "Sao Paulo": "br-1940",
    "Las Vegas": "us-2023",

    // Asia
    "Singapore": "sg-2008",
};

