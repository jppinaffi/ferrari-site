// --- Interfaces ---
export interface Meeting {
    meeting_key: number;
    meeting_name: string;
    meeting_official_name: string;
    location: string;
    country_key: number;
    country_code: string;
    country_name: string;
    circuit_key: number;
    circuit_short_name: string;
    date_start: string;
    gmt_offset: string;
    year: number;
}

export interface Session {
    session_key: number;
    session_name: string;
    date_start: string;
    date_end: string;
    gmt_offset: string;
    session_type: string;
    meeting_key: number;
    location: string;
    country_key: number;
    country_code: string;
    country_name: string;
    circuit_key: number;
    circuit_short_name: string;
    year: number;
}

export interface RaceResult {
    session_key: number;
    meeting_key: number;
    driver_number: number;
    position: number;
    duration: number;
    gap_to_leader: number;
    status: string;
    dnf: boolean;
    dns: boolean;
    dsq: boolean;
}

export interface Driver {
    driver_number: number;
    broadcast_name: string;
    full_name: string;
    name_acronym: string;
    team_name: string;
    team_colour: string;
    first_name: string;
    last_name: string;
    headshot_url: string;
    country_code: string;
    session_key: number;
    meeting_key: number;
}

export interface Lap {
    meeting_key: number;
    session_key: number;
    driver_number: number;
    lap_number: number;
    date_start: string;
    date_end: string;
    duration: number;
    sector_1_duration: number;
    sector_2_duration: number;
    sector_3_duration: number;
}

export interface Circuit {
    circuit_key: number;
    circuit_short_name: string;
    circuit_name: string;
    location: string;
    country_key: number;
    country_code: string;
    country_name: string;
    circuit_length: number;
}